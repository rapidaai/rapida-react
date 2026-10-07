import {
  GetProjectDashboardRequest,
  GetProjectDashboardResponse,
} from "@/rapida/clients/protos/dashboard-api_pb";
import {
  ClientAuthInfo,
  UserAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { ServiceError } from "@/rapida/clients/types";
import { ConnectionConfig } from "@/rapida/types/connection-config";

export function GetProjectDashboard(
  connectionConfig: ConnectionConfig,
  request: GetProjectDashboardRequest,
  authHeader?: ClientAuthInfo | UserAuthInfo
): Promise<GetProjectDashboardResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.dashboardClient.getProjectDashboard(
      request,
      WithAuthContext(connectionConfig.auth || authHeader),
      (
        error: ServiceError | null,
        response: GetProjectDashboardResponse | null
      ) => {
        if (error) reject(error);
        else resolve(response!);
      }
    );
  });
}
