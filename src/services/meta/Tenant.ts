// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Query 根据指定字段、时间范围查询或搜索 Tenant Query 根据指定字段、时间范围查询或搜索 Tenant GET /api/v1/tenant */
export async function getTenant(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTenantParams,
  options?: { [key: string]: any },
) {
  return request<API.Result & { data?: API.Tenant[] }>('/api/v1/tenant', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Create 创建 Tenant Create 创建 Tenant POST /api/v1/tenant */
export async function postTenant(body: API.Tenant, options?: { [key: string]: any }) {
  return request<API.Result & { data?: API.Tenant }>('/api/v1/tenant', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** QueryByID 根据 ID 查询 Tenant QueryByID 根据 ID 查询 Tenant GET /api/v1/tenant/${param0} */
export async function getTenantId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTenantIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result & { data?: API.Tenant }>(`/api/v1/tenant/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** UpdateByID 根据 ID 修改 Tenant UpdateByID 根据 ID 修改 Tenant PUT /api/v1/tenant/${param0} */
export async function putTenantId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putTenantIdParams,
  body: API.Tenant,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result & { data?: API.Tenant }>(`/api/v1/tenant/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** DeleteByID 根据 ID 删除 Tenant DeleteByID 根据 ID 删除 Tenant DELETE /api/v1/tenant/${param0} */
export async function deleteTenantId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTenantIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Message>(`/api/v1/tenant/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** CreateBulk 批量创建 Tenant CreateBulk 批量创建 Tenant POST /api/v1/tenant/bulk */
export async function postTenantBulk(body: API.Tenant[], options?: { [key: string]: any }) {
  return request<API.Result & { data?: API.Tenant[] }>('/api/v1/tenant/bulk', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** DeleteBulk 根据 IDs 批量删除 Tenant DeleteBulk 根据 IDs 批量删除 Tenant POST /api/v1/tenant/bulk/delete */
export async function postTenantBulk__openAPI__delete(
  body: API.DeleteItem,
  options?: { [key: string]: any },
) {
  return request<API.Message>('/api/v1/tenant/bulk/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
