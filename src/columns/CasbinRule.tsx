import { permissionEnum, roleColumnEnum } from '@/utils/util';
import { ProColumns } from '@ant-design/pro-components';
import { searchColumns } from './Comon';

export const casbinRuleColumns: ProColumns<API.CasbinRule>[] = [
  ...searchColumns,
  {
    title: '类型',
    dataIndex: 'type',
    valueType: 'select',
    valueEnum: permissionEnum,
  },
  {
    title: 'sub',
    dataIndex: 'sub',
    valueType: 'text',
  },
  {
    title: 'dom',
    dataIndex: 'dom',
    valueType: 'text',
  },
  {
    title: 'obj',
    dataIndex: 'obj',
    valueType: 'text',
  },
  {
    title: '权限',
    dataIndex: 'act',
    valueType: 'text',
  },
];

export const casbinPermissionColumns: ProColumns<API.CasbinRule>[] = [
  // ...searchColumns,
  // {
  //     title: '类型',
  //     dataIndex: 'type',
  //     valueType: 'select',
  //     valueEnum: permissionEnum,
  // },
  {
    title: '角色',
    dataIndex: 'sub',
    valueType: 'select',
    valueEnum: roleColumnEnum,
  },
  {
    title: '项目',
    dataIndex: 'dom',
    valueType: 'text',
  },
  {
    title: 'API资源',
    dataIndex: 'obj',
    valueType: 'text',
    copyable: true,
  },
  {
    title: '权限',
    dataIndex: 'act',
    valueType: 'text',
    hideInSearch: true,
    hideInTable: true,
  },
];

export const casbinRoleColumns: ProColumns<API.CasbinRule>[] = [
  // ...searchColumns,
  {
    title: '用户',
    dataIndex: 'sub',
    valueType: 'text',
  },
  {
    title: '角色',
    dataIndex: 'dom',
    valueType: 'select',
    valueEnum: roleColumnEnum,
  },
  {
    title: '项目',
    dataIndex: 'obj',
    valueType: 'text',
  },
];
