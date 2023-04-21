import { ProCard } from "@ant-design/pro-components";
import Tag from "antd/es/tag";

type ShowFormProps = {
  title?: string
  data?: any[];
  noCollapsible?: boolean;
  dataMap?: any;
  colorMap?: any;
};

const ShowArrayProCardLayout: React.FC<ShowFormProps> = (props) => {
  if (props.data) {
    let result = props.data.map((value, key) => {
      if (props.dataMap) {
        if (props.colorMap) {
          return <Tag key={key} color={props.colorMap[value]}>{props.dataMap[value]}</Tag>
        } else {
          return <Tag key={key}>{props.dataMap[value]}</Tag>
        }
      } else {
        return <div key={key}>{value}</div>
      }
    })
    if (props.noCollapsible === true) {
      return <ProCard ghost>
        {result}
      </ProCard >
    } else {
      return <ProCard
        title={props.title}
        collapsible
        ghost
      >
        {result}
      </ProCard >
    }

  }
  return <></>
};
export default ShowArrayProCardLayout;
