import { handleRemove } from '@/services/common';
import { FooterToolbar } from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { Button, Popconfirm } from 'antd';

type ShowFormProps = {
  api: any;
  selectedRowsState: any;
  setSelectedRows: any;
  actionRef: any;
};

const FooterToolbarLayout: React.FC<ShowFormProps> = (props) => {
  return (
    <FooterToolbar
      extra={
        <div>
          <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}
          <a style={{ fontWeight: 600 }}>{props.selectedRowsState.length}</a>{' '}
          <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
          &nbsp;&nbsp;
          {/* <span>
              <FormattedMessage
                id="pages.searchTable.totalServiceCalls"
                defaultMessage="Total number of service calls"
              />{' '}
              {selectedRowsState.reduce((pre, item) => pre + item.callNo!, 0)}{' '}
              <FormattedMessage id="pages.searchTable.tenThousand" defaultMessage="万" />
            </span> */}
        </div>
      }
    >
      <Popconfirm
        key="batchDelete"
        title="Confirm?"
        onConfirm={async () => {
          const success = await handleRemove(props.api, props.selectedRowsState);
          if (success) {
            props.setSelectedRows([]);
            props.actionRef.current?.reloadAndRest?.();
          }
        }}
        onCancel={async () => {
          props.setSelectedRows([]);
          props.actionRef.current?.reloadAndRest?.();
        }}
      >
        <Button>
          <FormattedMessage id="pages.searchTable.batchDeletion" defaultMessage="Batch deletion" />
        </Button>
      </Popconfirm>

      {/* <Button type="primary">
                <FormattedMessage
                    id="pages.searchTable.batchApproval"
                    defaultMessage="Batch approval"
                />
            </Button> */}
    </FooterToolbar>
  );
};
export default FooterToolbarLayout;
