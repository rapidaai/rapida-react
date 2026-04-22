import {
  GetAllPlansRequest,
  GetAllPlansResponse,
  GetSubscriptionRequest,
  GetSubscriptionResponse,
  UpdateSubscriptionRequest,
  UpdateSubscriptionResponse,
} from "./protos/billing-api_pb";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { ServiceError } from "@/rapida/clients/types";
import { ConnectionConfig } from "@/rapida/types/connection-config";

export function GetAllPlans(
  connectionConfig: ConnectionConfig,
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (
    err: ServiceError | null,
    response: GetAllPlansResponse | null
  ) => void
) {
  const requestObject = new GetAllPlansRequest();
  return connectionConfig.billingClient.getAllPlans(
    requestObject,
    WithAuthContext(authHeader),
    cb
  );
}

export function GetSubscription(
  connectionConfig: ConnectionConfig,
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (
    err: ServiceError | null,
    response: GetSubscriptionResponse | null
  ) => void
) {
  const requestObject = new GetSubscriptionRequest();
  return connectionConfig.billingClient.getSubscription(
    requestObject,
    WithAuthContext(authHeader),
    cb
  );
}

export function UpdateSubscription(
  connectionConfig: ConnectionConfig,
  planSlug: string,
  authHeader: ClientAuthInfo | UserAuthInfo,
  cb: (
    err: ServiceError | null,
    response: UpdateSubscriptionResponse | null
  ) => void
) {
  const requestObject = new UpdateSubscriptionRequest();
  requestObject.setPlanslug(planSlug);
  return connectionConfig.billingClient.updateSubscription(
    requestObject,
    WithAuthContext(authHeader),
    cb
  );
}
