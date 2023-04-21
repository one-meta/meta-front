import { ProFormText } from '@ant-design/pro-components';
import { Access, FormattedMessage, useAccess } from '@umijs/max';

type FormProps = {
  setUpdateValues: any;
  updateValues: any;
  setUpdateDetailPage: any;
  updateDetailPage: any;
  setUpdateDrawerDetail?: any;
  setUpdateModalDetail?: any;
};

const EditRowLayout: React.FC<FormProps> = (props) => {
  const access = useAccess();
  return (
    <Access accessible={access.canEdit}>
      <a
        onClick={() => {
          props.setUpdateValues(props.updateValues);
          props.setUpdateDetailPage(
            <>
              <ProFormText name="id" label="编号" disabled hidden />
              {props.updateDetailPage}
            </>,
          );
          if (props.setUpdateDrawerDetail) {
            props.setUpdateDrawerDetail(true);
          }
          if (props.setUpdateModalDetail) {
            props.setUpdateModalDetail(true);
          }
        }}
      >
        <FormattedMessage id="component.options.edit" defaultMessage="编辑" />
      </a>
    </Access>
  );
};
export default EditRowLayout;
