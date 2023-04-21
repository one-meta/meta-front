import { SwapOutlined } from '@ant-design/icons';
import { Divider, message, Select } from 'antd';
import React, { useEffect, useState } from 'react';

const GlobalHeaderLeft: React.FC = () => {
  const [showProject, setShowProject] = useState<string>();
  const [menums, setMenums] = useState<any[]>();

  const handleSelect = (key: string, data: any) => {
    if (data.label !== showProject) {
      setShowProject(data.label);
      let name = data.label.replace(key, '').replace('（', '').replace('）', '');
      localStorage.setItem('project', JSON.stringify({ code: key, name: name }));
      message.success('切换至 ' + data.label);
      setTimeout(function () {
        window.location.reload();
      }, 600);
    }
  };

  //首次运行执行
  useEffect(() => {
    //有项目列表
    if (localStorage.projects !== undefined) {
      let datas: any = [];
      let data = JSON.parse(localStorage.projects);
      for (const v of data) {
        datas.push({ value: v.code, label: v.code + '（' + v.name + '）' });
      }
      //已经设置 Auth-Project 头
      if (localStorage.project) {
        let data = JSON.parse(localStorage.project);
        setShowProject(data.code + '（' + data.name + '）');
      } else {
        //未设置，取项目列表的第一个
        setShowProject(data[0].code + '（' + data[0].name + '）');
      }
      setMenums(datas);
    }
  }, []);
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginInlineEnd: 52,
        }}
      >
        <Divider
          style={{
            height: '1.5em',
            backgroundColor: '#dfdfdf',
          }}
          type="vertical"
        />
        <SwapOutlined />
        <Select
          showSearch
          bordered={false}
          showArrow={false}
          style={{ width: 300 }}
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={menums}
          value={showProject}
          onSelect={handleSelect}
        />
      </div>
    </>
  );
};
export default GlobalHeaderLeft;
