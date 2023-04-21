import { PageContainer, ProCard } from '@ant-design/pro-components';
// import { history } from "@umijs/max";
// import { Button } from "antd";

type ShowFormProps = {
  title?: string;
  detailPage: any;
};

const ShowDetailPageLayout: React.FC<ShowFormProps> = (props) => {
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
      <ProCard>{props.detailPage}</ProCard>
    </PageContainer>
  );
};
export default ShowDetailPageLayout;
