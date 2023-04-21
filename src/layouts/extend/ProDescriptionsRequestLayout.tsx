import { ProColumns, ProDescriptions, ProDescriptionsItemProps } from '@ant-design/pro-components';

type ShowFormProps = {
  title?: string;
  id?: string;
  columns?: ProColumns<any>[];
  column?: number;
  func: any;
};

const ProDescriptionsRequestLayout: React.FC<ShowFormProps> = (props) => {
  return (
    <>
      <ProDescriptions<any>
        title={props.title}
        column={props.column}
        request={async () => {
          return props.func({ id: props.id });
        }}
        columns={props.columns as ProDescriptionsItemProps<any>[]}
      />
    </>
  );
};
export default ProDescriptionsRequestLayout;
