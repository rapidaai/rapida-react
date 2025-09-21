import {
  GetAllModelProviderRequest,
  GetAllModelProviderResponse,
  GetAllToolProviderResponse,
  GetAllToolProviderRequest,
} from "@/rapida/clients/protos/provider-api_pb";
import { Criteria, Paginate } from "@/rapida/clients/protos/common_pb";
import { ProviderServiceClient } from "@/rapida/clients/protos/provider-api_pb_service";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { ServiceError } from "@/rapida/clients/types";
import { ConnectionConfig } from "@/rapida/types/connection-config";

/**
 * Retrieve all providers.
 *
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetAllProvider(
  connectionConfig: ConnectionConfig,
  cb: (
    err: ServiceError | null,
    response: GetAllModelProviderResponse | null
  ) => void,
  authHeader?: ClientAuthInfo | UserAuthInfo
): void {
  const request = new GetAllModelProviderRequest();
  connectionConfig.providerClient.getAllModelProvider(
    request,
    WithAuthContext(authHeader),
    cb
  );
}

/**
 *
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAllToolProvider(
  connectionConfig: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    uvcr: GetAllToolProviderResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllToolProviderRequest();
  const paginate = new Paginate();
  criteria.forEach((x) => {
    let ctr = new Criteria();
    ctr.setKey(x.key);
    ctr.setValue(x.value);
    req.addCriterias(ctr);
  });
  paginate.setPage(page);
  paginate.setPagesize(pageSize);
  req.setPaginate(paginate);
  return connectionConfig.providerClient.getAllToolProvider(
    req,
    WithAuthContext(authHeader),
    cb
  );
}
