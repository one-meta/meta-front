/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};

  return {
    canAdmin: currentUser && currentUser.role === 'admin',

    canRead: currentUser && currentUser.access?.read ? true : false,
    canView: currentUser && currentUser.access?.view ? true : false,
    canNew: currentUser && currentUser.access?.new ? true : false,
    canEdit: currentUser && currentUser.access?.edit ? true : false,
    canViewDetail: currentUser && currentUser.access?.viewDetail ? true : false,
    canDelete: currentUser && currentUser.access?.delete ? true : false,
    canBulkDelete: currentUser && currentUser.access?.bulkDelete ? true : false,
  };
}
