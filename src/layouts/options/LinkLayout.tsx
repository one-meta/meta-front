import { Access, FormattedMessage, Link, useAccess } from '@umijs/max';

type FormProps = {
  to: any;
};

const LinkLayout: React.FC<FormProps> = (props) => {
  const access = useAccess();
  return (
    <Access accessible={access.canViewDetail}>
      <Link to={props.to}>
        <FormattedMessage id="component.options.detail" defaultMessage="详情" />
      </Link>
    </Access>
  );
};
export default LinkLayout;
