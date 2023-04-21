export const valueEnum = {
  true: { text: '是' },
  false: { text: '否' },
};

export const permissionEnum = {
  g: { text: '用户角色权限' },
  p: { text: '角色资源权限' },
};

export const selectOptions = [
  {
    value: 'false',
    label: '否',
  },
  {
    value: 'true',
    label: '是',
  },
];

export const roleColumnEnum = {
  query: { text: '查询' },
  new: { text: '新建' },
  edit: { text: '编辑' },
  viewDetail: { text: '查看详情' },
  view: { text: '查看' },
  delete: { text: '删除' },
  bulkDelete: { text: '批量删除' },
  bulkCreate: { text: '批量创建' },
};

export const roleRadioEnum = [
  {
    value: 'query',
    label: '查询',
  },
  {
    value: 'view',
    label: '查看',
  },
  {
    value: 'viewDetail',
    label: '查看详情',
  },
  {
    value: 'new',
    label: '新建',
  },
  {
    value: 'edit',
    label: '编辑',
  },
  {
    value: 'delete',
    label: '删除',
  },
  {
    value: 'bulkDelete',
    label: '批量删除',
  },
  {
    value: 'bulkCreate',
    label: '批量创建',
  },
];

export const actRadioEnum = [
  {
    value: 'GET',
    label: '查询/查看/查看详情',
  },
  {
    value: 'POST',
    label: '新建/批量删除',
  },
  {
    value: 'PUT',
    label: '编辑',
  },
  {
    value: 'DELETE',
    label: '删除',
  },
];

export const timeFormat = 'YYYY-MM-DDTHH:mm:ssZ';
export const timeIsNotNull = (data: any) => {
  if (data && data !== '0001-01-01T00:00:00Z') {
    return true;
  }
  return false;
};

//判断是否需要通过传入的func处理data
//处理结果拼到一个json里
export const expandData = (expand: boolean | undefined, data: any, func: any) => {
  if (expand && data && func) {
    return { ...data, ...func(data) };
  }
  return data;
};

