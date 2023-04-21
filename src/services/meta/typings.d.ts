declare namespace API {
  type Access = {
    bulkDelete?: boolean;
    delete?: boolean;
    edit?: boolean;
    new?: boolean;
    query?: boolean;
    view?: boolean;
    viewDetail?: boolean;
  };

  type CasbinRule = {
    /** Act holds the value of the "act" field. */
    act?: string;
    /** Dom holds the value of the "dom" field. */
    dom?: string;
    /** ID of the ent. */
    id?: number;
    /** Obj holds the value of the "obj" field. */
    obj?: string;
    /** Sub holds the value of the "sub" field. */
    sub?: string;
    /** Type holds the value of the "type" field. */
    type?: string;
  };

  type deleteCasbinruleIdParams = {
    /** CasbinRule ID */
    id: number;
  };

  type DeleteItem = {
    ids?: number[];
  };

  type deleteSystemapiIdParams = {
    /** SystemApi ID */
    id: number;
  };

  type deleteTenantIdParams = {
    /** Tenant ID */
    id: number;
  };

  type deleteUserIdParams = {
    /** User ID */
    id: number;
  };

  type getCasbinruleIdParams = {
    /** CasbinRule ID */
    id: number;
  };

  type getCasbinruleParams = {
    /** type */
    type?: string;
    /** sub */
    sub?: string;
    /** dom */
    dom?: string;
    /** obj */
    obj?: string;
    /** act */
    act?: string;
    /** v4 */
    v4?: string;
    /** v5 */
    v5?: string;
    /** 需要搜索的值，多个值英文逗号,分隔 */
    search?: string;
    /** 当前页 */
    current?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序，默认id逆序(-id) */
    order?: string;
  };

  type getSystemapiIdParams = {
    /** SystemApi ID */
    id: number;
  };

  type getSystemapiParams = {
    /** created_at */
    created_at?: string;
    /** updated_at */
    updated_at?: string;
    /** remark */
    remark?: string;
    /** name */
    name?: string;
    /** path */
    path?: string;
    /** http_method */
    http_method?: string;
    /** public */
    public?: boolean;
    /** sa */
    sa?: boolean;
    /** 需要搜索的值，多个值英文逗号,分隔 */
    search?: string;
    /** 当前页 */
    current?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序，默认id逆序(-id) */
    order?: string;
  };

  type getTenantIdParams = {
    /** Tenant ID */
    id: number;
  };

  type getTenantParams = {
    /** name */
    name?: string;
    /** code */
    code?: string;
    /** 需要搜索的值，多个值英文逗号,分隔 */
    search?: string;
    /** 当前页 */
    current?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序，默认id逆序(-id) */
    order?: string;
  };

  type getUserIdParams = {
    /** User ID */
    id: number;
  };

  type getUserParams = {
    /** name */
    name?: string;
    /** password */
    password?: string;
    /** super_admin */
    super_admin?: boolean;
    /** 需要搜索的值，多个值英文逗号,分隔 */
    search?: string;
    /** 当前页 */
    current?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序，默认id逆序(-id) */
    order?: string;
  };

  type Message = {
    message?: string;
    success?: boolean;
  };

  type Project = {
    code?: string;
    name?: string;
  };

  type putCasbinruleIdParams = {
    /** CasbinRule ID */
    id: number;
  };

  type putSystemapiIdParams = {
    /** SystemApi ID */
    id: number;
  };

  type putTenantIdParams = {
    /** Tenant ID */
    id: number;
  };

  type putUserIdParams = {
    /** User ID */
    id: number;
  };

  type Result = {
    code?: number;
    data?: any;
    message?: string;
    success?: boolean;
    total?: number;
  };

  type SystemApi = {
    /** 创建时间 */
    created_at?: string;
    /** http方法 */
    http_method?: string;
    /** ID of the ent. */
    id?: number;
    /** 名称 */
    name?: string;
    /** 路径 */
    path?: string;
    /** 是否公共接口，所有用户可以访问 */
    public?: boolean;
    /** 备注 */
    remark?: string;
    /** 角色 */
    roles?: string[];
    /** 是否sa接口，sa接口仅sa用户可操作（如果public，则普通用户可以访问(get） */
    sa?: boolean;
    /** 更新时间 */
    updated_at?: string;
  };

  type Tenant = {
    /** Code holds the value of the "code" field. */
    code?: string;
    /** ID of the ent. */
    id?: number;
    /** Name holds the value of the "name" field. */
    name?: string;
  };

  type User = {
    /** ID of the ent. */
    id?: number;
    /** Name holds the value of the "name" field. */
    name?: string;
    /** Password holds the value of the "password" field. */
    password?: string;
    /** 超级管理员，可操作所有租户数据 */
    super_admin?: boolean;
    /** 有效 */
    valid?: boolean;
  };

  type UserInfo = {
    access?: Access;
    avatar?: string;
    name?: string;
    projects?: Project[];
    role?: string;
    token?: string;
  };
}
