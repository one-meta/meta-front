import { Drawer } from 'antd';

type ShowFormProps = {
  onCancel: () => void;
  showDetail: boolean;
  detailPage: any;
};

const ShowDrawer: React.FC<ShowFormProps> = (props) => {
  return (
    <>
      <Drawer
        width={'40%'}
        open={props.showDetail}
        title="查看"
        onClose={() => {
          props.onCancel();
        }}
      >
        {props.detailPage}
      </Drawer>
    </>
  );
};
export default ShowDrawer;
