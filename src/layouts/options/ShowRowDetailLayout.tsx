import { Access, FormattedMessage, useAccess } from '@umijs/max';

type FormProps = {
  setShowDetailPage: any;
  detailPage: any;
  setShowDetail: any;
};

const ShowRowDetailLayout: React.FC<FormProps> = (props) => {
  const access = useAccess();
  return (
    <Access accessible={access.canView}>
      <a
        onClick={() => {
          props.setShowDetailPage(props.detailPage);
          props.setShowDetail(true);
        }}
      >
        <FormattedMessage id="component.options.view" defaultMessage="查看" />
      </a>
    </Access>
  );
};
export default ShowRowDetailLayout;
