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

const calls = [
  ["listPermissions", ListPermissions],
  ["listRoles", ListRoles],
  ["getRole", GetRole],
  ["createCustomRole", CreateCustomRole],
  ["updateCustomRole", UpdateCustomRole],
  ["reduceCustomRolePermissions", ReduceCustomRolePermissions],
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
});
