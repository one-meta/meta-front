import ProDescriptionsRequestLayout from '@/layouts/extend/ProDescriptionsRequestLayout';
import { PageContainer, ProCard, ProColumns } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
// import { Button } from "antd";

type ShowFormProps = {
  title?: string;
  func: any;
  columns?: ProColumns<any>[];
};

const ShowDetailLayout: React.FC<ShowFormProps> = (props) => {
  const params = useParams();
  if (params.id === ':id') {
    return <></>;
  }
  return (
    <PageContainer
      header={{ title: props.title }}
      //详情页返回按钮
      // extra={[
      //     <Button key="3" type="primary" onClick={() => {
      //         history.back();
      //         // history.push('/')
      //     }}>返回</Button>,
      // ]}
    >
      <ProCard>
        <ProDescriptionsRequestLayout func={props.func} id={params.id} columns={props.columns} />
      </ProCard>
    </PageContainer>
  );
};
export default ShowDetailLayout;
