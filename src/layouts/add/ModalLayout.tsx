import { ModalForm, ProFormInstance } from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { useRef } from 'react';

type UpdateFormProps = {
  onSubmit: (values: any) => Promise<void>;
  addModalDetail: boolean;
  setAddModalDetail: any;
  detailPage: any;
  onValuesChange?: any;
  formRef: any;
};

const AddModalForm: React.FC<UpdateFormProps> = (props) => {
  const restFormRef = useRef<ProFormInstance>();
  return (
    <>
      <ModalForm
        title={<FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />}
        formRef={props.formRef === undefined ? restFormRef : props.formRef}
        onFinish={async (values) => {
          props.onSubmit(values);
        }}
        open={props.addModalDetail}
        onOpenChange={props.setAddModalDetail}
        onValuesChange={props.onValuesChange}
        autoFocusFirstInput
        modalProps={{ destroyOnClose: true }}
        submitter={{
          searchConfig: {
            resetText: <FormattedMessage id="menu.reset" defaultMessage="重置" />,
          },
          resetButtonProps: {
            onClick: () => {
              if (props.formRef === undefined) {
                restFormRef.current?.resetFields();
              } else {
                props.formRef.current?.resetFields();
              }
            },
          },
        }}
      >
        {props.detailPage}
      </ModalForm>
    </>
  );
};
export default AddModalForm;
