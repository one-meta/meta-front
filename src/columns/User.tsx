import { valueEnum } from '@/utils/util';
import { ProColumns } from '@ant-design/pro-components';
import { nameColumns, searchColumns, timeColumns } from './Comon';
export const userColumns: ProColumns<API.User>[] = [
  ...searchColumns,
  ...nameColumns,
  {
    title: '密码',
    dataIndex: 'password',
    valueType: 'text',
    hideInTable: true,
    hideInSearch: true,
  },
  {
    title: '超级管理员',
    dataIndex: 'super_admin',
    valueType: 'select',
    valueEnum: valueEnum,
  },

  {
    title: '有效',
    dataIndex: 'valid',
    valueType: 'select',
    valueEnum: valueEnum,
  },
  ...timeColumns,
];
