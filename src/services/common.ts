import { message } from 'antd';
const loadingInfo = 'Processing';
const successInfo = 'Success';
const errorInfo = 'Failed, please try again';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
export async function handleAdd(func: any, body: any) {
  const hide = message.loading(loadingInfo);
  try {
    const res = await func(body);
    hide();
    if (res.success) {
      message.success(successInfo);
      return true;
    }
    message.error(res.message);
    return false;
  } catch (error) {
    hide();
    message.error(errorInfo);
    return false;
  }
}

/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */
export async function handleUpdate(func: any, body: any) {
  const hide = message.loading(loadingInfo);
  try {
    const res = await func({ id: body.id }, body);
    hide();
    if (res.success) {
      message.success(successInfo);
      return true;
    }
    message.error(res.message);
    return false;
  } catch (error) {
    hide();
    message.error(errorInfo);
    return false;
  }
}

/**
 *  Bulk delete node
 * @zh-CN 批量删除节点
 *
 * @param selectedRows
 */
export async function handleRemove(func: any, selectedRows: any[]) {
  const hide = message.loading(loadingInfo);
  if (!selectedRows) return true;
  try {
    const res = await func({ ids: selectedRows.map((row) => row.id) });
    hide();
    if (res.success) {
      message.success(successInfo);
      return true;
    }
    message.error(res.message);
    return false;
  } catch (error) {
    hide();
    message.error(errorInfo);
    return false;
  }
}

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
export async function handleRemoveRow(func: any, id?: number) {
  const hide = message.loading(loadingInfo);
  if (id === undefined) {
    hide();
    message.error(errorInfo);
    return false;
  }
  try {
    const res = await func({ id: id });
    hide();
    if (res.success) {
      message.success(successInfo);
      return true;
    }
    message.error(res.message);
    return false;
  } catch (error) {
    hide();
    message.error(errorInfo);
    return false;
  }
}
