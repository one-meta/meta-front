import { notNullPlaceholder } from '@/utils/util';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Popover } from 'antd';

type FormProps = {
  prefixText: string;
  content?: any;
  title?: string;
};

const InfoLayout: React.FC<FormProps> = (props) => {
  return (
    <>
      {props.prefixText}
      <Popover content={props.content === undefined ? notNullPlaceholder : props.content} title={props.title === undefined ? "格式要求" : props.title}>
        <InfoCircleOutlined />
      </Popover>
    </>
  );
};
export default InfoLayout;
