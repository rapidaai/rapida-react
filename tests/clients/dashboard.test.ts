const mockWithAuthContext = jest.fn().mockReturnValue({ auth: "metadata" });

jest.mock("@/rapida/clients", () => ({
  WithAuthContext: (...args: unknown[]) => mockWithAuthContext(...args),
}));

import { GetProjectDashboard } from "@/rapida/clients/dashboard";

describe("GetProjectDashboard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("calls the public dashboard service with connection auth", async () => {
    const request = { request: true } as any;
    const response = { response: true } as any;
    const getProjectDashboard = jest.fn((_request, _metadata, callback) => {
      callback(null, response);
    });
    const connection = {
      auth: { authorization: "connection-token" },
      dashboardClient: { getProjectDashboard },
    } as any;

    await expect(
      GetProjectDashboard(connection, request, {
        authorization: "fallback-token",
      } as any)
    ).resolves.toBe(response);
    expect(mockWithAuthContext).toHaveBeenCalledWith(connection.auth);
    expect(getProjectDashboard).toHaveBeenCalledWith(
      request,
      { auth: "metadata" },
      expect.any(Function)
    );
  });

  it("rejects transport failures", async () => {
    const failure = { code: 14, message: "unavailable" };
    const connection = {
      dashboardClient: {
        getProjectDashboard: jest.fn((_request, _metadata, callback) => {
          callback(failure, null);
        }),
      },
    } as any;

    await expect(
      GetProjectDashboard(connection, {} as any, {
        authorization: "token",
      } as any)
    ).rejects.toBe(failure);
  });
});
