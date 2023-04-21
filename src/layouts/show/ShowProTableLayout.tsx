import { ProTable } from '@ant-design/pro-components';

type ShowFormProps = {
  columns: any;
  dataSource: any;
};

const ShowProTableLayout: React.FC<ShowFormProps> = (props) => {
  if (props.dataSource) {
    return (
      <ProTable
        search={false}
        toolBarRender={false}
        pagination={false}
        columns={props.columns}
        dataSource={props.dataSource}
      />
    );
  }
  return <></>;
};
export default ShowProTableLayout;
