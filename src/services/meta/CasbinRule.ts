// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Query 根据指定字段、时间范围查询或搜索 CasbinRule Query 根据指定字段、时间范围查询或搜索 CasbinRule GET /api/v1/casbinrule */
export async function getCasbinrule(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCasbinruleParams,
  options?: { [key: string]: any },
) {
  return request<API.Result & { data?: API.CasbinRule[] }>('/api/v1/casbinrule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Create 创建 CasbinRule Create 创建 CasbinRule POST /api/v1/casbinrule */
export async function postCasbinrule(body: API.CasbinRule, options?: { [key: string]: any }) {
  return request<API.Result & { data?: API.CasbinRule }>('/api/v1/casbinrule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** QueryByID 根据 ID 查询 CasbinRule QueryByID 根据 ID 查询 CasbinRule GET /api/v1/casbinrule/${param0} */
export async function getCasbinruleId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCasbinruleIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result & { data?: API.CasbinRule }>(`/api/v1/casbinrule/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** UpdateByID 根据 ID 修改 CasbinRule UpdateByID 根据 ID 修改 CasbinRule PUT /api/v1/casbinrule/${param0} */
export async function putCasbinruleId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putCasbinruleIdParams,
  body: API.CasbinRule,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result & { data?: API.CasbinRule }>(`/api/v1/casbinrule/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** DeleteByID 根据 ID 删除 CasbinRule DeleteByID 根据 ID 删除 CasbinRule DELETE /api/v1/casbinrule/${param0} */
export async function deleteCasbinruleId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteCasbinruleIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Message>(`/api/v1/casbinrule/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** CreateBulk 批量创建 CasbinRule CreateBulk 批量创建 CasbinRule POST /api/v1/casbinrule/bulk */
export async function postCasbinruleBulk(body: API.CasbinRule[], options?: { [key: string]: any }) {
  return request<API.Result & { data?: API.CasbinRule[] }>('/api/v1/casbinrule/bulk', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** DeleteBulk 根据 IDs 批量删除 CasbinRule DeleteBulk 根据 IDs 批量删除 CasbinRule POST /api/v1/casbinrule/bulk/delete */
export async function postCasbinruleBulk__openAPI__delete(
  body: API.DeleteItem,
  options?: { [key: string]: any },
) {
  return request<API.Message>('/api/v1/casbinrule/bulk/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
