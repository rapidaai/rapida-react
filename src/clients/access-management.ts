import type {
  ArchiveCustomRoleRequest,
  ArchiveCustomRoleResponse,
  CreateCustomRoleRequest,
  CreateCustomRoleResponse,
  GetRoleRequest,
  GetRoleResponse,
  ListPermissionsRequest,
  ListPermissionsResponse,
  ListRolesRequest,
  ListRolesResponse,
  ReduceCustomRolePermissionsRequest,
  ReduceCustomRolePermissionsResponse,
  UpdateCustomRoleRequest,
  UpdateCustomRoleResponse,
} from "@/rapida/clients/protos/access-management-api_pb";
import { UserAuthInfo, WithAuthContext } from "@/rapida/clients";
import { ServiceError } from "@/rapida/clients/types";
import { ConnectionConfig } from "@/rapida/types/connection-config";

export function ListPermissions(
  connectionConfig: ConnectionConfig,
  request: ListPermissionsRequest,
  authHeader?: UserAuthInfo
): Promise<ListPermissionsResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.accessManagementClient.listPermissions(
      request,
      WithAuthContext(connectionConfig.auth || authHeader),
      (error: ServiceError | null, response: ListPermissionsResponse | null) => {
        if (error) reject(error);
        else resolve(response!);
      }
    );
  });
}

export function ListRoles(
  connectionConfig: ConnectionConfig,
  request: ListRolesRequest,
  authHeader?: UserAuthInfo
): Promise<ListRolesResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.accessManagementClient.listRoles(
      request,
      WithAuthContext(connectionConfig.auth || authHeader),
      (error: ServiceError | null, response: ListRolesResponse | null) => {
        if (error) reject(error);
        else resolve(response!);
      }
    );
  });
}

export function GetRole(
  connectionConfig: ConnectionConfig,
  request: GetRoleRequest,
  authHeader?: UserAuthInfo
): Promise<GetRoleResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.accessManagementClient.getRole(
      request,
      WithAuthContext(connectionConfig.auth || authHeader),
      (error: ServiceError | null, response: GetRoleResponse | null) => {
        if (error) reject(error);
        else resolve(response!);
      }
    );
  });
}

export function CreateCustomRole(
  connectionConfig: ConnectionConfig,
  request: CreateCustomRoleRequest,
  authHeader?: UserAuthInfo
): Promise<CreateCustomRoleResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.accessManagementClient.createCustomRole(
      request,
      WithAuthContext(connectionConfig.auth || authHeader),
      (error: ServiceError | null, response: CreateCustomRoleResponse | null) => {
        if (error) reject(error);
        else resolve(response!);
      }
    );
  });
}

export function UpdateCustomRole(
  connectionConfig: ConnectionConfig,
  request: UpdateCustomRoleRequest,
  authHeader?: UserAuthInfo
): Promise<UpdateCustomRoleResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.accessManagementClient.updateCustomRole(
      request,
      WithAuthContext(connectionConfig.auth || authHeader),
      (error: ServiceError | null, response: UpdateCustomRoleResponse | null) => {
        if (error) reject(error);
        else resolve(response!);
      }
    );
  });
}

export function ReduceCustomRolePermissions(
  connectionConfig: ConnectionConfig,
  request: ReduceCustomRolePermissionsRequest,
  authHeader?: UserAuthInfo
): Promise<ReduceCustomRolePermissionsResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.accessManagementClient.reduceCustomRolePermissions(
      request,
      WithAuthContext(connectionConfig.auth || authHeader),
      (
        error: ServiceError | null,
        response: ReduceCustomRolePermissionsResponse | null
      ) => {
        if (error) reject(error);
        else resolve(response!);
      }
    );
  });
}

export function ArchiveCustomRole(
  connectionConfig: ConnectionConfig,
  request: ArchiveCustomRoleRequest,
  authHeader?: UserAuthInfo
): Promise<ArchiveCustomRoleResponse> {
  return new Promise((resolve, reject) => {
    connectionConfig.accessManagementClient.archiveCustomRole(
      request,
      WithAuthContext(connectionConfig.auth || authHeader),
      (error: ServiceError | null, response: ArchiveCustomRoleResponse | null) => {
        if (error) reject(error);
        else resolve(response!);
      }
    );
  });
}
