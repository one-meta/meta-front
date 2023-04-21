import { handleRemoveRow } from '@/services/common';
import { Access, FormattedMessage, useAccess } from '@umijs/max';
import { Popconfirm } from 'antd';

type FormProps = {
  actionRef: any;
  api: any;
  id?: number;
};

const PopconfirmDeleteLayout: React.FC<FormProps> = (props) => {
  const access = useAccess();
  return (
    <Access accessible={access.canDelete}>
      <Popconfirm
        title="Confirm?"
        onConfirm={async () => {
          const success = await handleRemoveRow(props.api, props.id);
          if (success) {
            props.actionRef.current?.reloadAndRest?.();
          }
        }}
      >
        <a key="delete">
          <FormattedMessage id="component.options.delete" defaultMessage="删除" />
        </a>
      </Popconfirm>
    </Access>
  );
};
export default PopconfirmDeleteLayout;
