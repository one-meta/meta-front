import AddModalForm from '@/layouts/add/ModalLayout';
import ShowDrawer from '@/layouts/show/DrawerLayout';
import UpdateDrawerForm from '@/layouts/update/DrawerLayout';
import UpdateModalForm from '@/layouts/update/ModalLayout';
import { handleAdd, handleUpdate } from '@/services/common';
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { Access, FormattedMessage, useAccess } from '@umijs/max';
import { Button, Table } from 'antd';
import FooterToolbarLayout from '@/layouts/extend/FooterToolbarLayout';
import { expandData, timeFormat } from "@/utils/util";
import { transformOder } from "@/utils/transform";

// @ts-ignore
import styles from './split.less';
import { useState } from 'react';

type ProTableProps = {
  columns: ProColumns<any>[];
  actionRef: any;
  dataSource?: any;
  expandData?: any;

  //Service 方法
  getMethod: any;
  editMethod: any;
  newMethod: any;
  // deleteMethod: any;
  deleteBulkMethod: any;
  //数据转换
  transform?: boolean;
  //POST：数据转换
  transformPostData?: any;
  transformTime?: any;
  //Get：数据转换
  transformGetData?: any;

  // 可选；多选操作
  selectedRowsState?: any;
  setSelectedRows?: any;
  //默认显示
  pagination?: boolean;

  //可选；单击行，增加背景色，双击取消
  //默认不显示
  rowSelectBackground?: boolean;

  //新建
  addModalDetail?: any;
  setAddModalDetail?: any;
  addDetailPage?: any;
  setAddDetailPage?: any;
  newPageDetail?: any;
  modalFormRef?: any;

  //显示详情
  // 查看 使用Drawer
  showDetail: any;
  setShowDetail: any;
  showDetailPage: any;
  setShowDetailPage: any;

  //编辑 ModalForm 和 DrawerForm二选一
  // 更新 使用ModalForm
  updateModalDetail?: any;
  setUpdateModalDetail?: any;
  // 更新 使用DrawerForm
  updateDrawerDetail?: any;
  setUpdateDrawerDetail?: any;
  //更新值
  updateDetailPage: any;
  setUpdateDetailPage: any;
  updateValues: any;
  setUpdateValues: any;
  secondConfirm?: boolean;
  secondConfirmContent?: string,

  // 可选；显示选择行及页脚操作栏
  //默认显示
  showRowSelect?: boolean;
  // 可选；新建按钮
  //默认显示
  showNew?: boolean;

  //显示搜索框
  showSearch?: boolean;
  //显示工具栏
  showToolbar?: boolean;

  //监听modal表单值变动
  onModalValuesChange?: any;

  // PageContainer
  //标题
  title?: string;
  //是否使用 PageContainer；如果false，需要自己加<PageContainer>，要不然没有水印
  withPageContainer?: boolean;

  //表格标题栏中的增加的按钮；可用于自定义页面（如新建）
  //用于解决 onModalValuesChange 无法通过hook刷新新建页面的问题（显示隐藏部分表单）
  extratoolBar?: any;
};

const ProTableLayout: React.FC<ProTableProps> = (props) => {
  const [, setRowClassName] = useState<string>('');
  const [rowId, setRowId] = useState<string>();
  const access = useAccess();

  //表格数据
  const proTable = (<ProTable<any, API.Result>
    request={(params, sorter) => {
      // json 中 sorter 转换成 url order
      // {createdAt: 'ascend'} => order = created_at
      // {createdAt: 'descend'} => order = -created_at
      let order = transformOder(sorter)
      //Get数据转换
      const data = expandData(props.transform, params, props.transformGetData)
      return props.getMethod({ ...data, order })
    }}
    dataSource={props.dataSource}
    expandable={props.expandData}

    columns={props.columns}
    actionRef={props.actionRef}
    rowKey="id"
    pagination={props.pagination === false ? false : {
      showSizeChanger: true,
      showQuickJumper: true,
      position: ['bottomCenter'],
      size: 'small',
      defaultPageSize: 10,
      hideOnSinglePage: true,
    }}

    //搜索框
    search={props.showSearch === false ? false : { labelWidth: 120 }
    }

    //工具栏
    toolBarRender={props.showToolbar === false ? false : (props.showNew === false ? () => [props.extratoolBar] : () => [
      props.extratoolBar,
      <Access
        key="new"
        accessible={access.canNew}
      >
        <Button
          type="primary"
          onClick={() => {
            props.setAddModalDetail(true);
            props.setAddDetailPage(props.newPageDetail);
          }}
        >
          <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
        </Button>
      </Access>,
    ])}

    //多选操行
    rowSelection={
      (props.showRowSelect === false || access.canBulkDelete === false) ? false : {
        onChange: (_: any, selectedRows: React.SetStateAction<any[]>) => {
          props.setSelectedRows(selectedRows);
        },
        selections: [Table.SELECTION_INVERT, Table.SELECTION_NONE],
      }
    }
    //时间转换成 RFC3339 样式
    dateFormatter={(value) => {
      return value.format(timeFormat);
    }}

    //reset时可以同时清除自定义提交的transform参数
    form={{
      // 由于配置了 transform，提交的参数与定义的不同这里需要转化一下
      // syncToUrl 分页，搜索、查询时，将get请求的参数同步到浏览器地址栏
      syncToUrl: (values, type) => {
        if (type === 'get') {
          if (props.transformTime) {
            return {
              ...values,
              ...props.transformTime(values),
            };
          } else {
            return {
              ...values,
            };
          }
        }
        return values;
      },
    }}

    //浏览器中保存列状态
    columnsState={{
      persistenceKey: 'singe-page',
      persistenceType: 'localStorage',
    }}

    //单击行数据，增加背景色，双击取消
    onRow={
      props.rowSelectBackground === true ?
        (record) => {
          return {
            onClick: () => {
              setRowId(record.id)
              setRowClassName(styles.clickRowStyl)
            },
            onDoubleClick: () => {
              setRowId('')
              setRowClassName('')
            },
          };
        } : () => { return {} }
    }
    rowClassName={
      props.rowSelectBackground === true ?
        (record) => {
          return record.id === rowId ? styles['split-row-select-active'] : '';
        } : () => { return {} }
    }
  />
  )
  //页脚选择操作
  const footerSelected = (
    props.selectedRowsState?.length > 0 && (
      <FooterToolbarLayout
        api={props.deleteBulkMethod}
        selectedRowsState={props.selectedRowsState}
        setSelectedRows={props.setSelectedRows}
        actionRef={props.actionRef}
      />
    )
  )
  //新建页面
  const addModal = (
    props.addModalDetail && (
      <AddModalForm
        onSubmit={async (value) => {
          //将单行数据转换成数组
          const data = expandData(props.transform, value, props.transformPostData)
          const success = await handleAdd(props.newMethod, data);
          if (success) {
            props.setAddModalDetail(false);
            props.setAddDetailPage(undefined);
            props.actionRef.current?.reload();
          }
        }}
        addModalDetail={props.addModalDetail}
        setAddModalDetail={props.setAddModalDetail}
        detailPage={props.addDetailPage}
        onValuesChange={props.onModalValuesChange}
        formRef={props.modalFormRef}
      />
    )
  )
  //编辑 Drawer
  const updateDrawer = (
    props.updateDrawerDetail && (
      <UpdateDrawerForm
        onSubmit={async (value) => {
          //将单行数据转换成数组
          const data = expandData(props.transform, value, props.transformPostData)
          const success = await handleUpdate(props.editMethod, data);
          if (success) {
            props.setUpdateDrawerDetail(false);
            props.setUpdateDetailPage(undefined);
            props.setUpdateValues(undefined);
            props.actionRef.current?.reload();
          }
        }}
        updateDrawerDetail={props.updateDrawerDetail}
        setUdateDrawerDetail={props.setUpdateDrawerDetail}
        initValues={props.updateValues}
        detailPage={props.updateDetailPage}
        secondConfirm={props.secondConfirm}
        secondConfirmContent={props.secondConfirmContent}
      />
    )
  )
  //编辑 Modal
  const updateModal = (
    props.updateModalDetail && (
      <UpdateModalForm
        onSubmit={async (value) => {
          //将单行数据转换成数组
          const data = expandData(props.transform, value, props.transformPostData)
          const success = await handleUpdate(props.editMethod, data);
          if (success) {
            props.setUpdateModalDetail(false);
            props.setUpdateDetailPage(undefined);
            props.setUpdateValues(undefined);
            props.actionRef.current?.reload();
          }
        }}
        updateModalDetail={props.updateModalDetail}
        setUpdateModalDetail={props.setUpdateModalDetail}
        initValues={props.updateValues}
        detailPage={props.updateDetailPage}
        secondConfirm={props.secondConfirm}
        secondConfirmContent={props.secondConfirmContent}
      />
    )
  )
  //查看详情
  const viewDetail = (
    props.showDetail && (
      <ShowDrawer
        onCancel={() => {
          props.setShowDetail(false);
          props.setShowDetailPage(undefined)
        }}
        showDetail={props.showDetail}
        detailPage={props.showDetailPage}
      />
    )
  )
  const totalPage = (
    <>
      {proTable}

      {/* 页脚选择操作 */}
      {footerSelected}

      {/* 新建 */}
      {addModal}

      {/* 编辑 */}
      {/* drawer */}
      {updateDrawer}
      {/* modal */}
      {updateModal}

      {/* 查看详情 */}
      {viewDetail}
    </>
  )
  if (props.withPageContainer === false) {
    return (<>{totalPage}</>)
  }
  return (
    <>
      <PageContainer header={props.title ? { title: props.title } : {}}>
        {totalPage}
      </PageContainer >
    </>
  )
};
export default ProTableLayout;
