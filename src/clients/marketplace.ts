/*
 *  Copyright (c) 2024. Rapida
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 *  Author: Prashant <prashant@rapida.ai>
 *
 *  This module provides functions for interacting with the Endpoint API. It includes
 *  methods for endpoint management, including creation, retrieval, and configuration.
 */

import { Criteria, Paginate } from "./protos/common_pb";
import {
  GetAllDeploymentRequest,
  GetAllDeploymentResponse,
} from "./protos/marketplace-api_pb";
import { UserAuthInfo, ClientAuthInfo, WithAuthContext } from ".";
import { ServiceError } from "@/rapida/clients/types";
import { ConnectionConfig } from "@/rapida/connections/connection-config";

/**
 * Retrieve all deployments based on pagination and filtering criteria.
 *
 * @param page - The page number for pagination.
 * @param pageSize - The number of results per page.
 * @param criteria - List of filtering criteria.
 * @param authHeader - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetAllDeployment(
  client: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[],
  cb: (
    err: ServiceError | null,
    response: GetAllDeploymentResponse | null
  ) => void,
  authHeader: ClientAuthInfo | UserAuthInfo
) {
  const req = new GetAllDeploymentRequest();
  const paginate = new Paginate();
  criteria.forEach(({ key, value, logic }) => {
    const ctr = new Criteria();
    ctr.setKey(key);
    ctr.setValue(value);
    ctr.setLogic(logic);
    req.addCriterias(ctr);
  });
  paginate.setPage(page);
  paginate.setPagesize(pageSize);
  req.setPaginate(paginate);
  return client.marketplaceClient.getAllDeployment(
    req,
    WithAuthContext(authHeader),
    cb
  );
}
