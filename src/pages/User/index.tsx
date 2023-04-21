import { userColumns } from '@/columns/User';
import ProDescriptionsLayout from '@/layouts/extend/ProDescriptionsLayout';
import ProTableLayout from '@/layouts/extend/ProTableLayout';
import EditRowLayout from '@/layouts/options/EditRowLayout';
import PopconfirmDeleteLayout from '@/layouts/options/PopconfirmDeleteLayout';
import ShowRowDetailLayout from '@/layouts/options/ShowRowDetailLayout';
import {
  deleteUserId,
  getUser,
  postUser,
  postUserBulk__openAPI__delete,
  putUserId,
} from '@/services/meta/User';
import { transformTime } from '@/utils/transform';
import {
  ActionType,
  ProColumns,
  ProForm,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-components';
import { useRef, useState } from 'react';

const IndexPage: React.FC = () => {
  const actionRef = useRef<ActionType>();

  //多行选择
  const [selectedRowsState, setSelectedRows] = useState<API.User[]>([]);

  // 新建 使用ModalForm
  const [addModalDetail, setAddModalDetail] = useState<boolean>(false);
  const [addDetailPage, setAddDetailPage] = useState<any>();

  // 查看 使用Drawer
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [showDetailPage, setShowDetailPage] = useState<any>();

  // 更新 使用ModalForm
  const [updateModalDetail, setUpdateModalDetail] = useState<boolean>(false);
  // 更新 使用DrawerForm
  const [updateDrawerDetail, setUpdateDrawerDetail] = useState<boolean>(false);
  // 更新的值
  const [updateDetailPage, setUpdateDetailPage] = useState<any>();
  const [updateValues, setUpdateValues] = useState<any>();

  //新建页面的字段
  //如果编辑的字段也和新建页面一样（可操作的字段相同），可以共用
  const newPageDetail = (
    <>
      <ProForm.Group>
        <ProFormText name="name" label="用户名" rules={[{ required: true }]} />
        <ProFormText
          name="password"
          label="密码"
          rules={[
            { required: true },
            {
              min: 6,
              message: '密码不能少于6个字符',
            },
          ]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSwitch name="super_admin" label="超级管理员" />
        <ProFormSwitch name="valid" label="有效" />
      </ProForm.Group>
    </>
  );
  //增加行操作：编辑、查看、删除
  const columns: ProColumns<API.User>[] = [
    ...userColumns,
    {
      title: '操作',
      valueType: 'option',
      hideInDescriptions: true,
      render: (_text, record) => [
        //编辑
        <EditRowLayout
          key="edit"
          setUpdateValues={setUpdateValues}
          setUpdateDetailPage={setUpdateDetailPage}
          //在这里控制使用drawer还是modal，二选一
          // setUpdateDrawerDetail={setUpdateDrawerDetail}
          setUpdateModalDetail={setUpdateModalDetail}
          //需要更新的值，字段名与columns中相同
          //updateValues中id必须设置
          updateValues={{
            //id必须设置
            id: record.id,
            name: record.name,
            password: record.password,
            super_admin: record.super_admin,
            valid: record.valid,
          }}
          //更新页面表单
          updateDetailPage={<>{newPageDetail}</>}
        />,
        //详情（跳转页面）
        // TODO：根据需求修改路径
        // <LinkLayout key="link" to={`/user/detail/${record.id}`} />,
        //查看
        <ShowRowDetailLayout
          key="view"
          setShowDetailPage={setShowDetailPage}
          setShowDetail={setShowDetail}
          detailPage={
            <>
              <ProDescriptionsLayout data={record} columns={columns} column={2} />
            </>
          }
        />,
        //删除
        <PopconfirmDeleteLayout
          key="delete"
          actionRef={actionRef}
          api={deleteUserId}
          id={record.id}
        />,
      ],
    },
  ];

  //POST 数据转换，可以在提交时对字段进行特殊处理
  // const transformPostData = (data: any) => {
  //   return {
  //   // 提交时，将单行数据转换成数组
  //     dataList: data['dataList']?.split(/[(\r\n)\r\n]+/)
  //   }
  // }

  //GET 数据转换，可以在查询时对字段进行特殊处理
  // const transformGetData = () => {
  //   return {
  //   // 查询时，增加字段type，值为g
  //     type: 'g'
  //   }
  // }

  return (
    <ProTableLayout
      actionRef={actionRef}
      columns={columns}
      //Service 方法
      getMethod={getUser}
      editMethod={putUserId}
      newMethod={postUser}
      deleteBulkMethod={postUserBulk__openAPI__delete}
      //提交时（新建/编辑），将单行数据转换成数组
      //默认false，如果true，需要同时传入转换函数
      transform={true}
      // transformPostData={transformPostData}
      transformTime={transformTime}
      //多选操作
      //显示多选操作；默认显示
      showRowSelect={true}
      selectedRowsState={selectedRowsState}
      setSelectedRows={setSelectedRows}
      //单击行数据，增加背景色，双击取消；默认不生效
      //每次都会遍历所有行，有点消耗资源？
      // rowSelectBackground={true}

      //显示分页栏；默认显示
      pagination={true}
      //显示搜索框；默认显示
      showSearch={true}
      //显示工具栏；默认显示
      showToolbar={true}
      //新建
      //显示新建按钮；默认显示
      showNew={true}
      addModalDetail={addModalDetail}
      setAddModalDetail={setAddModalDetail}
      addDetailPage={addDetailPage}
      setAddDetailPage={setAddDetailPage}
      newPageDetail={newPageDetail}
      // 显示
      showDetail={showDetail}
      setShowDetail={setShowDetail}
      showDetailPage={showDetailPage}
      setShowDetailPage={setShowDetailPage}
      // 更新
      updateDetailPage={updateDetailPage}
      setUpdateDetailPage={setUpdateDetailPage}
      updateValues={updateValues}
      setUpdateValues={setUpdateValues}
      // 使用ModalForm或者使用DrawerForm更新
      updateDrawerDetail={updateDrawerDetail}
      setUpdateDrawerDetail={setUpdateDrawerDetail}
      updateModalDetail={updateModalDetail}
      setUpdateModalDetail={setUpdateModalDetail}
    />
  );
};
export default IndexPage;
