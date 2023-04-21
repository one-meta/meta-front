import { DrawerForm } from "@ant-design/pro-components";
import { Modal } from "antd";

type UpdateFormProps = {
  onSubmit: (values: any) => Promise<void>;
  updateDrawerDetail: boolean;
  setUdateDrawerDetail: any;
  initValues: any;
  detailPage: any;
  secondConfirm?: boolean;
  secondConfirmContent?: string,
};

const UpdateDrawerForm: React.FC<UpdateFormProps> = (props) => {
  return (
    <>
      <DrawerForm
        width={'40%'}
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
        open={props.updateDrawerDetail}
        onOpenChange={props.setUdateDrawerDetail}
        autoFocusFirstInput
        drawerProps={{ destroyOnClose: true }}
        initialValues={props.initValues}
      >
        {props.detailPage}
      </DrawerForm>
    </>
  );
};
export default UpdateDrawerForm;
