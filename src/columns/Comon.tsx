import TimeLayout from "@/layouts/show/TimeLayout";
import { ProColumns } from "@ant-design/pro-components";
import { DatePicker } from "antd";
import moment from 'moment';

const { RangePicker } = DatePicker;

const today = moment()
const lastDay = today.subtract(1, 'days')
const lastDayEnd = moment(lastDay).endOf("day")
const rangePresets: {
  label: string;
  value: [moment.Moment, moment.Moment];
}[] = [
    { label: '今天', value: [today.startOf("day"), today.endOf("day")] },
    { label: '昨天', value: [moment(lastDay).startOf("day"), lastDayEnd] },
    { label: '近一周', value: [moment(today.subtract(1, 'weeks')).startOf("day"), lastDayEnd] },
    { label: '近一个月', value: [moment(today.subtract(1, 'months')).startOf("day"), lastDayEnd] },
    { label: '近三个月', value: [moment(today.subtract(1, 'quarters')).startOf("day"), lastDayEnd] },
    { label: '近六个月', value: [moment(today.subtract(6, 'months')).startOf("day"), lastDayEnd] },
    { label: '近一年', value: [moment(today.subtract(6, 'years')).startOf("day"), lastDayEnd] },
  ];

function disabledDate(current) {
  return current && current > moment().endOf('day');
}


//公共列
//搜索、时间、备注单独提取出来，方便放置在列的各个位置
//搜索
export const searchColumns: ProColumns<any>[] = [
  {
    title: '搜索',
    dataIndex: 'search',
    valueType: 'text',
    hideInDescriptions: true,
    hideInTable: true,
    tip: "需要搜索的值，多个值英文逗号,分隔；搜索可与时间范围查询同时生效",
  },
];

//创建时间，更新时间
export const createTimeColumns: ProColumns<any>[] = [
  {
    title: '创建时间',
    dataIndex: 'created_at',
    valueType: 'dateTime',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    valueType: 'dateTimeRange',
    // table中不显示
    hideInTable: true,
    //详情中不显示
    hideInDescriptions: true,
    search: {
      transform: (value) => ({
        //dateTimeRange 转换 成gte和lte字段
        created_at_gte: value[0],
        created_at_lte: value[1],
      })
    },
    renderFormItem: ({ ...rest }) => {
      return <RangePicker
        presets={rangePresets}
        showTime
        disabledDate={disabledDate}
        {...rest}
      />
    }
  },
];
export const updateTimeColumns: ProColumns<any>[] = [
  {
    title: '更新时间',
    dataIndex: 'updated_at',
    valueType: 'dateTime',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: '更新时间',
    dataIndex: 'updated_at',
    valueType: 'dateTimeRange',
    // table中不显示
    hideInTable: true,
    hideInDescriptions: true,
    search: {
      transform: (value) => ({
        //dateTimeRange 转换 成gte和lte字段
        updated_at_gte: value[0],
        updated_at_lte: value[1],
      }),
    },
    renderFormItem: ({ ...rest }) => {
      return <RangePicker
        presets={rangePresets}
        showTime
        disabledDate={disabledDate}
        {...rest}
      />
    }
  },
];
export const timeColumns: ProColumns<any>[] = [
  ...createTimeColumns,
  ...updateTimeColumns,
];


//开始时间，结束时间
export const startTimeColumns: ProColumns<any>[] = [
  {
    title: '开始时间',
    dataIndex: 'start_time',
    valueType: 'dateTime',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: '开始时间',
    dataIndex: 'start_time',
    valueType: 'dateTimeRange',
    // table中不显示
    hideInTable: true,
    //详情中不显示
    hideInDescriptions: true,
    search: {
      transform: (value) => ({
        //dateTimeRange 转换 成gte和lte字段
        start_time_gte: value[0],
        start_time_lte: value[1],
      })
    },
    renderFormItem: ({ ...rest }) => {
      return <RangePicker
        presets={rangePresets}
        showTime
        disabledDate={disabledDate}
        {...rest}
      />
    }
  },
];
export const endTimeColumns: ProColumns<any>[] = [
  {
    title: '结束时间',
    dataIndex: 'end_time',
    valueType: 'dateTime',
    hideInSearch: true,
    sorter: true,
    render: (_, record) => <TimeLayout time={record.end_time} />
  },
  {
    title: '结束时间',
    dataIndex: 'end_time',
    valueType: 'dateTimeRange',
    // table中不显示
    hideInTable: true,
    hideInDescriptions: true,
    search: {
      transform: (value) => ({
        //dateTimeRange 转换 成gte和lte字段
        end_time_gte: value[0],
        end_time_lte: value[1],
      }),
    },
    renderFormItem: ({ ...rest }) => {
      return <RangePicker
        presets={rangePresets}
        showTime
        disabledDate={disabledDate}
        {...rest}
      />
    }
  },
];
export const startEndTimeColumns: ProColumns<any>[] = [
  ...startTimeColumns,
  ...endTimeColumns,
];

export const singelTimeColumns: ProColumns<any>[] = [
  {
    title: '时间',
    dataIndex: 'time',
    valueType: 'dateTime',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: '时间',
    dataIndex: 'time',
    valueType: 'dateTimeRange',
    // table中不显示
    hideInTable: true,
    //详情中不显示
    hideInDescriptions: true,
    search: {
      transform: (value) => ({
        //dateTimeRange 转换 成gte和lte字段
        time_gte: value[0],
        time_lte: value[1],
      })
    },
    renderFormItem: ({ ...rest }) => {
      return <RangePicker
        presets={rangePresets}
        showTime
        disabledDate={disabledDate}
        {...rest}
      />
    }
  },
];

//备注
export const remarkColumns: ProColumns<any>[] = [
  {
    title: '备注',
    dataIndex: 'remark',
    valueType: 'text',
  },
];

//项目（租户）
export const projectColumns: ProColumns<any>[] = [
  {
    title: '项目',
    dataIndex: 'project',
    valueType: 'text',
    hideInSearch: true,
    render: (_, row) => {
      if (row.edges.tenant) {
        return row.edges.tenant.code
      } else {
        return <>-</>
      }
    }
  },
];

//名称
export const nameColumns: ProColumns<any>[] = [
  {
    title: '名称',
    dataIndex: 'name',
    valueType: 'text',
  },
];
