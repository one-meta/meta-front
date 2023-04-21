import { systemApiColumns } from '@/columns/SystemApi';
import ShowDetailLayout from '@/layouts/show/DetailLayout';
import { getSystemapiId } from '@/services/meta/SystemApi';

const DetailPage: React.FC<API.SystemApi> = () => {
  return (
    <ShowDetailLayout title="SystemApi Detail" func={getSystemapiId} columns={systemApiColumns} />
  );
};
export default DetailPage;
