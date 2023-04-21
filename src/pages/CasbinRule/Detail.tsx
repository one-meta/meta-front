import { casbinRuleColumns } from '@/columns/CasbinRule';
import ShowDetailLayout from '@/layouts/show/DetailLayout';
import { getCasbinruleId } from '@/services/meta/CasbinRule';

const DetailPage: React.FC<API.CasbinRule> = () => {
  return (
    <ShowDetailLayout
      title="CasbinRule Detail"
      func={getCasbinruleId}
      columns={casbinRuleColumns}
    />
  );
};
export default DetailPage;
