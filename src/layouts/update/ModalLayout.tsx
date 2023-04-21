import { ModalForm } from "@ant-design/pro-components";
import { Modal, message } from "antd";

type UpdateFormProps = {
  onSubmit: (values: any) => Promise<void>;
  updateModalDetail: boolean;
  setUpdateModalDetail: any;
  initValues: any;
  detailPage: any;
  secondConfirm?: boolean;
  secondConfirmContent?: string,
};

const UpdateModalForm: React.FC<UpdateFormProps> = (props) => {
  return (
    <>
      <ModalForm
        title="编辑"
        onFinish={
          async (values) => {
            if (props.secondConfirm) {
              Modal.confirm({
                title: 'Confirm?',
                content: props.secondConfirmContent,
                onOk: () => {
                  props.onSubmit(values);
                },
                onCancel() {
                },
              });
            } else {
              props.onSubmit(values);
            }
          }}
        open={props.updateModalDetail}
        onOpenChange={props.setUpdateModalDetail}
        autoFocusFirstInput
        modalProps={{
          destroyOnClose: true,
          // onCancel: () => console.log('run'),
        }}
        // 初始化需要更新的值
        initialValues={
          props.initValues
        }
      >
        {props.detailPage}
      </ModalForm>
    </>
  );
};
export default UpdateModalForm;
