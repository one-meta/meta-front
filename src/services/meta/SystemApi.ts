// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Query 根据指定字段、时间范围查询或搜索 SystemApi Query 根据指定字段、时间范围查询或搜索 SystemApi GET /api/v1/systemapi */
export async function getSystemapi(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSystemapiParams,
  options?: { [key: string]: any },
) {
  return request<API.Result & { data?: API.SystemApi[] }>('/api/v1/systemapi', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Create 创建 SystemApi Create 创建 SystemApi POST /api/v1/systemapi */
export async function postSystemapi(body: API.SystemApi, options?: { [key: string]: any }) {
  return request<API.Result & { data?: API.SystemApi }>('/api/v1/systemapi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** QueryByID 根据 ID 查询 SystemApi QueryByID 根据 ID 查询 SystemApi GET /api/v1/systemapi/${param0} */
export async function getSystemapiId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSystemapiIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result & { data?: API.SystemApi }>(`/api/v1/systemapi/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** UpdateByID 根据 ID 修改 SystemApi UpdateByID 根据 ID 修改 SystemApi PUT /api/v1/systemapi/${param0} */
export async function putSystemapiId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putSystemapiIdParams,
  body: API.SystemApi,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result & { data?: API.SystemApi }>(`/api/v1/systemapi/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** DeleteByID 根据 ID 删除 SystemApi DeleteByID 根据 ID 删除 SystemApi DELETE /api/v1/systemapi/${param0} */
export async function deleteSystemapiId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSystemapiIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Message>(`/api/v1/systemapi/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** CreateBulk 批量创建 SystemApi CreateBulk 批量创建 SystemApi POST /api/v1/systemapi/bulk */
export async function postSystemapiBulk(body: API.SystemApi[], options?: { [key: string]: any }) {
  return request<API.Result & { data?: API.SystemApi[] }>('/api/v1/systemapi/bulk', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** DeleteBulk 根据 IDs 批量删除 SystemApi DeleteBulk 根据 IDs 批量删除 SystemApi POST /api/v1/systemapi/bulk/delete */
export async function postSystemapiBulk__openAPI__delete(
  body: API.DeleteItem,
  options?: { [key: string]: any },
) {
  return request<API.Message>('/api/v1/systemapi/bulk/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
