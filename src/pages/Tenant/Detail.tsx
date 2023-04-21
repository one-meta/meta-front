import { tenantColumns } from '@/columns/Tenant';
import ShowDetailLayout from '@/layouts/show/DetailLayout';
import { getTenantId } from '@/services/meta/Tenant';

const DetailPage: React.FC<API.Tenant> = () => {
  return <ShowDetailLayout title="Tenant Detail" func={getTenantId} columns={tenantColumns} />;
};
export default DetailPage;
