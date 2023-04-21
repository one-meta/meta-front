import { ProForm, ProFormTextArea } from '@ant-design/pro-components';

const RemarkProFormTextArea: React.FC = () => {
  return (
    <ProForm.Group>
      <ProFormTextArea name="remark" label="备注" width="md" />
    </ProForm.Group>
  );
};
export default RemarkProFormTextArea;
