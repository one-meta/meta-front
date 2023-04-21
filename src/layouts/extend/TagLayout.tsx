import { Tag } from 'antd';

type FormProps = {
  prefixText: string;
  enabled?: boolean;
};

const TagLayout: React.FC<FormProps> = (props) => {
  if (props.enabled) {
    return (
      <>
        {props.prefixText} <Tag color="green">开</Tag>
      </>
    );
  } else {
    return (
      <>
        {props.prefixText} <Tag color="orange">关</Tag>
      </>
    );
  }
};
export default TagLayout;
