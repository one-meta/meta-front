import { casbinPermissionColumns, casbinRoleColumns } from '@/columns/CasbinRule';
import ProFormSelectLayout from '@/layouts/extend/ProFormSelectLayout';
import ProTableLayout from '@/layouts/extend/ProTableLayout';
import EditRowLayout from '@/layouts/options/EditRowLayout';
import PopconfirmDeleteLayout from '@/layouts/options/PopconfirmDeleteLayout';
import {
  deleteCasbinruleId,
  getCasbinrule,
  postCasbinrule,
  postCasbinruleBulk__openAPI__delete,
  putCasbinruleId,
} from '@/services/meta/CasbinRule';
import { getTenant } from '@/services/meta/Tenant';
import { getUser } from '@/services/meta/User';
import { actRadioEnum, roleRadioEnum } from '@/utils/util';
import {
  ActionType,
  PageContainer,
  ProCard,
  ProColumns,
  ProForm,
  ProFormRadio,
  ProFormText,
} from '@ant-design/pro-components';
import { useRef, useState } from 'react';

const IndexPage: React.FC = () => {
  const actionRefRole = useRef<ActionType>();
  const actionRefPermission = useRef<ActionType>();

  //多行选择
  const [selectedRowsStateRole, setSelectedRowsRole] = useState<API.CasbinRule[]>([]);
  const [selectedRowsStatePermission, setSelectedRowsPermission] = useState<API.CasbinRule[]>([]);

  // 新建 使用ModalForm
  const [addModalDetailRole, setAddModalDetailRole] = useState<boolean>(false);
  const [addDetailPageRole, setAddDetailPageRole] = useState<any>();
  const [addModalDetailPermission, setAddModalDetailPermission] = useState<boolean>(false);
  const [addDetailPagePermission, setAddDetailPagePermission] = useState<any>();

  // 查看 使用Drawer
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [showDetailPage, setShowDetailPage] = useState<any>();

  // 更新 使用ModalForm
  const [updateModalDetailRole, setUpdateModalDetailRole] = useState<boolean>(false);
  const [updateDrawerDetailRole, setUpdateDrawerDetailRole] = useState<boolean>(false);
  // 更新 使用DrawerForm
  const [updateModalDetailPermission, setUpdateModalDetailPermission] = useState<boolean>(false);
  const [updateDrawerDetailPermission, setUpdateDrawerDetailPermission] = useState<boolean>(false);
  // 更新的值
  const [updateDetailPage, setUpdateDetailPage] = useState<any>();
  const [updateValues, setUpdateValues] = useState<any>();

  //新建页面的字段
  //如果编辑的字段也和新建页面一样（可操作的字段相同），可以共用
  const newRolePage = (
    <>
      <ProForm.Group>
        <ProFormText name="type" label="类型" initialValue={'g'} hidden />
        {/* <ProFormText name="sub" label="用户" rules={[{ required: true }]} /> */}
        <ProFormSelectLayout
          name="sub"
          label="用户"
          search={getUser}
          placeholder="请输入用户名进行搜索"
          rules={[{ required: true, message: '请输入用户名' }]}
          valueKey="name"
          labelSize={1}
          valueSize={1}
        />
        {/* <ProFormText name="dom" label="角色" rules={[{ required: true }]} /> */}
        <ProFormRadio.Group
          name="dom"
          label="角色"
          rules={[{ required: true, message: '请选择角色类型' }]}
          options={roleRadioEnum}
          radioType="button"
        />
        {/* <ProFormText name="obj" label="项目" rules={[{ required: true }]} /> */}
        <ProFormSelectLayout
          name="obj"
          label="项目"
          search={getTenant}
          placeholder="请输入项目名称或代号进行搜索"
          rules={[{ required: true, message: '请输入项目' }]}
          valueKey="code"
        />
      </ProForm.Group>
    </>
  );
  const permissionBox = (
    <ProFormText name="act" width="lg" label="资源权限" rules={[{ required: true }]} />
  );
  const newPermissionPage = (
    <>
      <ProForm.Group>
        <ProFormText name="type" label="类型" initialValue={'p'} hidden />
        {/* <ProFormText name="sub" label="角色" rules={[{ required: true }]} /> */}
        <ProForm.Group>
          <ProFormRadio.Group
            name="sub"
            label="角色"
            rules={[{ required: true, message: '请选择角色类型' }]}
            options={roleRadioEnum}
            radioType="button"
          />
          <ProFormRadio.Group
            name="act"
            label="资源权限"
            rules={[{ required: true, message: '请选择资源权限' }]}
            options={actRadioEnum}
            radioType="button"
          />
        </ProForm.Group>
        {/* <ProFormText name="dom" label="项目" rules={[{ required: true }]} /> */}

        <ProFormSelectLayout
          name="dom"
          label="项目"
          search={getTenant}
          placeholder="请输入项目名称或代号进行搜索"
          rules={[{ required: true, message: '请输入项目' }]}
          valueKey="code"
        />
        <ProFormText name="obj" label="API资源" rules={[{ required: true }]} />
        {/* {permissionBox} */}
      </ProForm.Group>
    </>
  );

  //增加行操作：编辑、查看、删除
  const roleColumns: ProColumns<API.CasbinRule>[] = [
    ...casbinRoleColumns,
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
          setUpdateModalDetail={setUpdateModalDetailRole}
          //需要更新的值，字段名与columns中相同
          //updateValues中id必须设置
          updateValues={{
            //id必须设置
            id: record.id,
            type: record.type,
            sub: record.sub,
            dom: record.dom,
            obj: record.obj,
          }}
          //更新页面表单
          updateDetailPage={
            <ProFormText name="type" label="类型" hidden /> && (
              <ProForm.Group>
                <ProFormText name="sub" label="用户" rules={[{ required: true }]} />
                <ProFormText name="dom" label="角色" rules={[{ required: true }]} />
                <ProFormText name="obj" label="项目" rules={[{ required: true }]} />
              </ProForm.Group>
            )
          }
        />,
        // //详情（跳转页面）
        // // TODO：根据需求修改路径
        // <LinkLayout key="link" to={`/permission/rbac/detail/${record.id}`} />,
        // //查看
        // <ShowRowDetailLayout
        //   key="view"
        //   setShowDetailPage={setShowDetailPage}
        //   setShowDetail={setShowDetail}
        //   detailPage={<>
        //     <ProDescriptionsLayout data={record} columns={roleColumns} column={2} />
        //   </>}
        // />,
        //删除
        <PopconfirmDeleteLayout
          key="delete"
          actionRef={actionRefRole}
          api={deleteCasbinruleId}
          id={record.id}
        />,
      ],
    },
  ];

  const permissionColumns: ProColumns<API.CasbinRule>[] = [
    ...casbinPermissionColumns,
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
          setUpdateModalDetail={setUpdateModalDetailPermission}
          //需要更新的值，字段名与columns中相同
          //updateValues中id必须设置
          updateValues={{
            //id必须设置
            id: record.id,
            type: record.type,
            sub: record.sub,
            dom: record.dom,
            obj: record.obj,
            act: record.act,
          }}
          //更新页面表单
          updateDetailPage={
            <ProFormText name="type" label="类型" hidden /> && (
              <ProForm.Group>
                <ProFormText name="sub" label="角色" rules={[{ required: true }]} />
                <ProFormText name="dom" label="项目" rules={[{ required: true }]} />
                <ProFormText name="obj" label="API资源" rules={[{ required: true }]} />
                {permissionBox}
              </ProForm.Group>
            )
          }
        />,
        // //详情（跳转页面）
        // // TODO：根据需求修改路径
        // <LinkLayout key="link" to={`/permission/rbac/detail/${record.id}`} />,
        // //查看
        // <ShowRowDetailLayout
        //   key="view"
        //   setShowDetailPage={setShowDetailPage}
        //   setShowDetail={setShowDetail}
        //   detailPage={<>
        //     <ProDescriptionsLayout data={record} columns={permissionColumns} column={2} />
        //   </>}
        // />,
        //删除
        <PopconfirmDeleteLayout
          key="delete"
          actionRef={actionRefPermission}
          api={deleteCasbinruleId}
          id={record.id}
        />,
      ],
    },
  ];

  //查询时，数据转换
  const transformGetGData = () => {
    return {
      type: 'g',
    };
  };
  const transformGetPData = () => {
    return {
      type: 'p',
    };
  };

  return (
    <>
      <PageContainer>
        <ProCard split="vertical">
          {/* role */}
          <ProCard title="用户角色权限">
            <ProTableLayout
              withPageContainer={false}
              actionRef={actionRefRole}
              columns={roleColumns}
              //Service 方法
              getMethod={getCasbinrule}
              editMethod={putCasbinruleId}
              newMethod={postCasbinrule}
              deleteBulkMethod={postCasbinruleBulk__openAPI__delete}
              //提交时（新建/编辑），将单行数据转换成数组
              //默认false，如果true，需要同时传入转换函数
              transform={true}
              // transformPostData={transformPostData}
              // transformTime={transformTime}
              transformGetData={transformGetGData}
              //多选操作
              //显示多选操作；默认显示
              showRowSelect={true}
              selectedRowsState={selectedRowsStateRole}
              setSelectedRows={setSelectedRowsRole}
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
              addModalDetail={addModalDetailRole}
              setAddModalDetail={setAddModalDetailRole}
              addDetailPage={addDetailPageRole}
              setAddDetailPage={setAddDetailPageRole}
              newPageDetail={newRolePage}
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
              updateDrawerDetail={updateDrawerDetailRole}
              setUpdateDrawerDetail={setUpdateDrawerDetailRole}
              updateModalDetail={updateModalDetailRole}
              setUpdateModalDetail={setUpdateModalDetailRole}
            />
          </ProCard>

          {/* permission */}
          <ProCard title="角色资源权限">
            <ProTableLayout
              withPageContainer={false}
              actionRef={actionRefPermission}
              columns={permissionColumns}
              //Service 方法
              getMethod={getCasbinrule}
              editMethod={putCasbinruleId}
              newMethod={postCasbinrule}
              deleteBulkMethod={postCasbinruleBulk__openAPI__delete}
              //提交时（新建/编辑），将单行数据转换成数组
              //默认false，如果true，需要同时传入转换函数
              transform={true}
              // transformPostData={transformPostData}
              // transformTime={transformTime}
              transformGetData={transformGetPData}
              //多选操作
              //显示多选操作；默认显示
              showRowSelect={true}
              selectedRowsState={selectedRowsStatePermission}
              setSelectedRows={setSelectedRowsPermission}
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
              addModalDetail={addModalDetailPermission}
              setAddModalDetail={setAddModalDetailPermission}
              addDetailPage={addDetailPagePermission}
              setAddDetailPage={setAddDetailPagePermission}
              newPageDetail={newPermissionPage}
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
              updateDrawerDetail={updateDrawerDetailPermission}
              setUpdateDrawerDetail={setUpdateDrawerDetailPermission}
              updateModalDetail={updateModalDetailPermission}
              setUpdateModalDetail={setUpdateModalDetailPermission}
            />
          </ProCard>
        </ProCard>
      </PageContainer>
    </>
  );
};
export default IndexPage;
