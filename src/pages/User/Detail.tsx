import { userColumns } from '@/columns/User';
import ShowDetailLayout from '@/layouts/show/DetailLayout';
import { getUserId } from '@/services/meta/User';

const DetailPage: React.FC<API.User> = () => {
  return <ShowDetailLayout title="User Detail" func={getUserId} columns={userColumns} />;
};
export default DetailPage;
