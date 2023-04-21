import { ProColumns, ProDescriptions, ProDescriptionsItemProps } from '@ant-design/pro-components';

type ShowFormProps = {
  title?: string;
  data?: Partial<any>;
  columns?: ProColumns<any>[];
  column?: number;
};

const ProDescriptionsLayout: React.FC<ShowFormProps> = (props) => {
  if (props.data) {
    return (
      <>
        <ProDescriptions<any>
          title={props.title}
          column={props.column}
          request={async () => ({
            data: props.data || {},
          })}
          columns={props.columns as ProDescriptionsItemProps<any>[]}
        />
      </>
    );
  }
  return <></>;
};
export default ProDescriptionsLayout;
