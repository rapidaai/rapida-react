const mockWithAuthContext = jest.fn().mockReturnValue({ auth: "metadata" });

jest.mock("@/rapida/clients", () => ({
  WithAuthContext: (...args: unknown[]) => mockWithAuthContext(...args),
}));

import {
  ArchiveCustomRole,
  CreateCustomRole,
  GetRole,
  ListPermissions,
  ListRoles,
  ReduceCustomRolePermissions,
  UpdateCustomRole,
} from "@/rapida/clients/access-management";
import {
  ReduceCustomRolePermissionsRequest,
  ReduceCustomRolePermissionsResponse,
  RoleDefinition,
  RoleReductionImpact,
  RoleReductionPreview,
  RoleSubject,
} from "@/rapida/clients/protos/access-management-api_pb";
import { Error as ResponseError } from "@/rapida/clients/protos/common_pb";

const calls = [
  ["listPermissions", ListPermissions],
  ["listRoles", ListRoles],
  ["getRole", GetRole],
  ["createCustomRole", CreateCustomRole],
  ["updateCustomRole", UpdateCustomRole],
  ["archiveCustomRole", ArchiveCustomRole],
] as const;

describe("access management clients", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it.each(calls)("%s uses connection-level user auth", async (method, call) => {
    const request = { request: method };
    const response = { response: method };
    const invoke = jest.fn((_request, _metadata, callback) => {
      callback(null, response);
    });
    const connection = {
      auth: { authorization: "connection-token", "x-auth-id": "user-1" },
      accessManagementClient: { [method]: invoke },
    } as any;

    await expect(
      call(connection, request as any, {
        authorization: "fallback-token",
        "x-auth-id": "user-2",
      } as any)
    ).resolves.toBe(response);
    expect(mockWithAuthContext).toHaveBeenCalledWith(connection.auth);
    expect(invoke).toHaveBeenCalledWith(
      request,
      { auth: "metadata" },
      expect.any(Function)
    );
  });

  it("uses call-level user auth when the connection has none", async () => {
    const auth = { authorization: "fallback-token", "x-auth-id": "user-2" };
    const listRoles = jest.fn((_request, _metadata, callback) => {
      callback(null, { roles: [] });
    });
    const connection = {
      accessManagementClient: { listRoles },
    } as any;

    await ListRoles(connection, {} as any, auth as any);

    expect(mockWithAuthContext).toHaveBeenCalledWith(auth);
  });

  it.each(calls)("%s rejects transport failures", async (method, call) => {
    const failure = { code: 14, message: "unavailable" };
    const connection = {
      accessManagementClient: {
        [method]: jest.fn((_request, _metadata, callback) => {
          callback(failure, null);
        }),
      },
    } as any;

    await expect(
      call(connection, {} as any, {
        authorization: "token",
        "x-auth-id": "user-1",
      } as any)
    ).rejects.toBe(failure);
  });

  it.each([
    ["preview", true, ""],
    ["confirmation", false, "confirmation-digest"],
  ])("forwards explicit role reduction %s requests", async (_, preview, digest) => {
    const request = new ReduceCustomRolePermissionsRequest();
    request.setPreview(preview as boolean);
    request.setConfirmationdigest(digest as string);
    const response = new ReduceCustomRolePermissionsResponse();
    const reduceCustomRolePermissions = jest.fn(
      (_request, _metadata, callback) => callback(null, response)
    );
    const connection = {
      accessManagementClient: { reduceCustomRolePermissions },
    } as any;

    await expect(
      ReduceCustomRolePermissions(connection, request, {
        authorization: "token",
        "x-auth-id": "user-1",
      } as any)
    ).resolves.toBe(response);
    expect(reduceCustomRolePermissions).toHaveBeenCalledWith(
      request,
      { auth: "metadata" },
      expect.any(Function)
    );
  });

  it.each([
    [false, ""],
    [true, "unexpected-digest"],
  ])(
    "rejects ambiguous role reduction requests before transport",
    async (preview, digest) => {
      const request = new ReduceCustomRolePermissionsRequest();
      request.setPreview(preview);
      request.setConfirmationdigest(digest);
      const reduceCustomRolePermissions = jest.fn();
      const connection = {
        accessManagementClient: { reduceCustomRolePermissions },
      } as any;

      await expect(
        ReduceCustomRolePermissions(connection, request)
      ).rejects.toThrow(
        "Role reduction requires either preview without a confirmation digest or confirmation with a digest."
      );
      expect(reduceCustomRolePermissions).not.toHaveBeenCalled();
    }
  );

  it("exposes every role reduction preview and impact accessor", () => {
    const role = new RoleDefinition();
    role.setId("101");
    const impact = new RoleReductionImpact();
    impact.setOrganizationid("201");
    impact.setProjectid("301");
    impact.setSubject(RoleSubject.ROLE_SUBJECT_PROJECT_TOKEN);
    impact.setSubjectid("401");
    impact.setAssignmentstatus("ACTIVE");

    expect(impact.getOrganizationid()).toBe("201");
    expect(impact.getProjectid()).toBe("301");
    expect(impact.getSubject()).toBe(
      RoleSubject.ROLE_SUBJECT_PROJECT_TOKEN
    );
    expect(impact.getSubjectid()).toBe("401");
    expect(impact.getAssignmentstatus()).toBe("ACTIVE");

    const preview = new RoleReductionPreview();
    expect(preview.hasResultingrole()).toBe(false);
    preview.setResultingrole(role);
    preview.addImpacts(impact);
    preview.setConfirmationdigest("confirmation-digest");
    expect(preview.hasResultingrole()).toBe(true);
    expect(preview.getResultingrole()).toBe(role);
    expect(preview.getImpactsList()).toEqual([impact]);
    expect(preview.getConfirmationdigest()).toBe("confirmation-digest");
    preview.clearResultingrole();
    preview.clearImpactsList();
    expect(preview.hasResultingrole()).toBe(false);
    expect(preview.getImpactsList()).toEqual([]);
    preview.setImpactsList([impact]);
    expect(preview.getImpactsList()).toEqual([impact]);

    const request = new ReduceCustomRolePermissionsRequest();
    request.setConfirmationdigest("confirmation-digest");
    request.setPreview(false);
    expect(request.getConfirmationdigest()).toBe("confirmation-digest");
    expect(request.getPreview()).toBe(false);

    const error = new ResponseError();
    const response = new ReduceCustomRolePermissionsResponse();
    response.setCode(200);
    response.setSuccess(true);
    response.setRole(role);
    response.setError(error);
    response.setCorrelationid("correlation-id");
    expect(response.hasPreview()).toBe(false);
    response.setPreview(preview);
    expect(response.getCode()).toBe(200);
    expect(response.getSuccess()).toBe(true);
    expect(response.getRole()).toBe(role);
    expect(response.getError()).toBe(error);
    expect(response.getCorrelationid()).toBe("correlation-id");
    expect(response.hasPreview()).toBe(true);
    expect(response.getPreview()).toBe(preview);
    response.clearPreview();
    expect(response.hasPreview()).toBe(false);
  });
});
