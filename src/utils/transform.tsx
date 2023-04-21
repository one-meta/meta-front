// json 中 sorter 转换成 url order
// {created_at: 'ascend'} => order = created_at
// {created_at: 'descend'} => order = -created_at
export const transformOder = (data: any) => {
  for (let value in data) {
    if (data.hasOwnProperty(value)) {
      if (data[value] === 'ascend') {
        return value;
      }
      if (data[value] === 'descend') {
        return '-' + value;
      }
    }
  }
};

export const transformCreateTime = (values: any) => {
  return {
    created_at: [values.created_at_gte, values.created_at_lte],
  };
};

export const transformUpdatedTime = (values: any) => {
  return {
    updated_at: [values.updated_at_gte, values.updated_at_lte],
  };
};

export const transformStartTime = (values: any) => {
  return {
    start_time: [values.startTime_gte, values.startTime_lte],
  };
};

export const transformEndTime = (values: any) => {
  return {
    end_time: [values.endTime_gte, values.endTime_lte],
  };
};
export const transformTimeTime = (values: any) => {
  return {
    time: [values.time_gte, values.time_lte],
  };
};

export const transformOpTime = (values: any) => {
  return {
    op_time: [values.opTime_gte, values.opTime_lte],
  };
};

// 时间转换，用于重置时清空对应字段
export const transformTime = (values: any) => {
  return {
    ...transformCreateTime(values),
    ...transformUpdatedTime(values),
  };
};
