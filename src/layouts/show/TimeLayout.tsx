import { timeIsNotNull } from '@/utils/util';
import moment from 'moment';

type FormProps = {
  time?: string;
};

const TimeLayout: React.FC<FormProps> = (props) => {
  // 不展示 0001-01-01T00:00:00Z
  if (timeIsNotNull(props.time)) {
    return <>{moment(props.time).format('YYYY-MM-DD HH:mm:ss')}</>;
  }
  return <>-</>;
};
export default TimeLayout;
