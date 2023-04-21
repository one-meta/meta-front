import ShowArrayProCardLayout from '@/layouts/show/ArrayProCardLayout';
import { valueEnum } from '@/utils/util';
import { ProColumns } from '@ant-design/pro-components';
import { nameColumns, remarkColumns, searchColumns, timeColumns } from './Comon';
export const systemApiColumns: ProColumns<API.SystemApi>[] = [
  ...searchColumns,
  ...nameColumns,
  {
    title: 'HTTP方法',
    dataIndex: 'http_method',
    valueType: 'text',
  },

  {
    title: '路径',
    dataIndex: 'path',
    valueType: 'text',
    copyable: true,
  },
  {
    title: '角色',
    dataIndex: 'roles',
    valueType: 'textarea',
    hideInSearch: true,
    render: (_, row) => <ShowArrayProCardLayout data={row.roles} noCollapsible={true} />,
  },
  {
    title: '公共',
    dataIndex: 'public',
    valueType: 'select',
    valueEnum: valueEnum,
    hideInSearch: true,
  },
  {
    title: '仅sa可操作',
    dataIndex: 'sa',
    valueType: 'select',
    valueEnum: valueEnum,
    hideInSearch: true,
  },
  ...remarkColumns,
  ...timeColumns,
];
