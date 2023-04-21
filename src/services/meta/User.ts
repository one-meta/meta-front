// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Query 根据指定字段、时间范围查询或搜索 User Query 根据指定字段、时间范围查询或搜索 User GET /api/v1/user */
export async function getUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserParams,
  options?: { [key: string]: any },
) {
  return request<API.Result & { data?: API.User[] }>('/api/v1/user', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Create 创建 User Create 创建 User POST /api/v1/user */
export async function postUser(body: API.User, options?: { [key: string]: any }) {
  return request<API.Result & { data?: API.User }>('/api/v1/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** QueryByID 根据 ID 查询 User QueryByID 根据 ID 查询 User GET /api/v1/user/${param0} */
export async function getUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result & { data?: API.User }>(`/api/v1/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** UpdateByID 根据 ID 修改 User UpdateByID 根据 ID 修改 User PUT /api/v1/user/${param0} */
export async function putUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putUserIdParams,
  body: API.User,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result & { data?: API.User }>(`/api/v1/user/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** DeleteByID 根据 ID 删除 User DeleteByID 根据 ID 删除 User DELETE /api/v1/user/${param0} */
export async function deleteUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Message>(`/api/v1/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** CreateBulk 批量创建 User CreateBulk 批量创建 User POST /api/v1/user/bulk */
export async function postUserBulk(body: API.User[], options?: { [key: string]: any }) {
  return request<API.Result & { data?: API.User[] }>('/api/v1/user/bulk', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** DeleteBulk 根据 IDs 批量删除 User DeleteBulk 根据 IDs 批量删除 User POST /api/v1/user/bulk/delete */
export async function postUserBulk__openAPI__delete(
  body: API.DeleteItem,
  options?: { [key: string]: any },
) {
  return request<API.Message>('/api/v1/user/bulk/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** UserInfo 获取用户信息 User UserInfo 获取用户信息 User GET /api/v1/user/info */
export async function getUserInfo(options?: { [key: string]: any }) {
  return request<API.Message>('/api/v1/user/info', {
    method: 'GET',
    ...(options || {}),
  });
}

/** Login 根据用户名和密码登录 User Login 根据用户名和密码登录 User POST /api/v1/user/login */
export async function postUserLogin(body: API.User, options?: { [key: string]: any }) {
  return request<API.Result & { data?: API.UserInfo }>('/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Logout 根据退出登录 User Logout 根据退出登录 User GET /api/v1/user/logout */
export async function getUserLogout(body: API.User, options?: { [key: string]: any }) {
  return request<API.Result & { data?: API.UserInfo }>('/api/v1/user/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
