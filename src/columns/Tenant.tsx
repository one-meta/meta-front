import { ProColumns } from '@ant-design/pro-components';
import { nameColumns, searchColumns } from './Comon';
export const tenantColumns: ProColumns<API.Tenant>[] = [
  ...searchColumns,
  ...nameColumns,
  {
    title: '代号',
    dataIndex: 'code',
    valueType: 'text',
  },
];
