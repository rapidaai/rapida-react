const mockWithAuthContext = jest.fn().mockReturnValue({ auth: "metadata" });

jest.mock("@/rapida/clients", () => ({
  WithAuthContext: (...args: unknown[]) => mockWithAuthContext(...args),
}));

import {
  GetAllProjectCredential,
  ListProjectCredentials,
  RevokeProjectCredential,
} from "@/rapida/clients/project";
import { GetAllProjectCredentialRequest } from "@/rapida/clients/protos/web-api_pb";
import { Criteria, Paginate } from "@/rapida/clients/protos/common_pb";

describe("project credential clients", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("preserves the unpaginated GetAllProjectCredential request", () => {
    const callback = jest.fn();
    const getAllProjectCredential = jest.fn();
    const connection = {
      projectClient: { getAllProjectCredential },
    } as any;

    GetAllProjectCredential(connection, "100", callback, {
      authorization: "token",
    } as any);

    const request = getAllProjectCredential.mock.calls[0][0];
    expect(request.getProjectid()).toBe("100");
    expect(request.hasPaginate()).toBe(false);
    expect(request.getCriteriasList()).toEqual([]);
    expect(getAllProjectCredential).toHaveBeenCalledWith(
      request,
      { auth: "metadata" },
      callback,
    );
  });

  it("passes an explicit paginated list request", () => {
    const callback = jest.fn();
    const getAllProjectCredential = jest.fn();
    const connection = {
      projectClient: { getAllProjectCredential },
    } as any;

    const request = new GetAllProjectCredentialRequest();
    const paginate = new Paginate();
    paginate.setPage(2);
    paginate.setPagesize(25);
    request.setProjectid("100");
    request.setPaginate(paginate);
    for (const [key, value] of [
      ["name", "widget"],
      ["role", "runtime"],
    ]) {
      const criteria = new Criteria();
      criteria.setKey(key);
      criteria.setValue(value);
      criteria.setLogic("contains");
      request.addCriterias(criteria);
    }

    ListProjectCredentials(connection, request, callback, {
      authorization: "token",
    } as any);

    expect(getAllProjectCredential).toHaveBeenCalledWith(
      request,
      { auth: "metadata" },
      callback,
    );
  });

  it("builds a secret-free revoke request", () => {
    const callback = jest.fn();
    const revokeProjectCredential = jest.fn();
    const connection = {
      projectClient: { revokeProjectCredential },
    } as any;

    RevokeProjectCredential(connection, "100", "31", callback, {
      authorization: "token",
    } as any);

    const request = revokeProjectCredential.mock.calls[0][0];
    expect(request.getProjectid()).toBe("100");
    expect(request.getCredentialid()).toBe("31");
    expect(revokeProjectCredential).toHaveBeenCalledWith(
      request,
      { auth: "metadata" },
      callback,
    );
  });
});
