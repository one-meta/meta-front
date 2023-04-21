import { ProForm, ProFormSelect } from '@ant-design/pro-components';

type FormProps = {
  name: string;
  label: string;
  search: any;
  placeholder: string;
  rules?: any;
  responseKey?: string;
  //可以使用两个label: label1 - label2
  labelKey1?: string;
  labelKey2?: string;
  labelSize?: number;
  //可以使用两个value： value1 - value2
  valueKey?: string;
  valueKey2?: string;
  valueSize?: number;
};

const ProFormSelectLayout: React.FC<FormProps> = (props) => {
  return (
    <ProForm.Group>
      <ProFormSelect
        name={props.name}
        label={props.label}
        showSearch
        debounceTime={300}
        width="md"
        request={async ({ keyWords }) => {
          if (keyWords !== undefined && keyWords !== '') {
            let valueKey = 'id';
            if (props.valueKey !== undefined && props.valueKey !== '') {
              valueKey = props.valueKey;
            }
            let valueKey2 = '';
            if (props.valueKey2 !== undefined && props.valueKey2 !== '') {
              valueKey2 = props.valueKey2;
            }

            let labelKey1 = 'name';
            if (props.labelKey1 !== undefined && props.labelKey1 !== '') {
              labelKey1 = props.labelKey1;
            }
            let labelKey2 = 'code';
            if (props.labelKey2 !== undefined && props.labelKey2 !== '') {
              labelKey2 = props.labelKey2;
            }
            let responseKey = 'data';
            if (props.responseKey !== undefined && props.responseKey !== '') {
              responseKey = props.responseKey;
            }

            let data: { value: any; label: string }[] = [];
            let resp = await props.search({ search: keyWords });
            if (resp.success) {
              resp[responseKey].forEach((element: { [x: string]: string }) => {
                //默认两个 lable
                if (props.labelSize === undefined || props.labelSize > 1) {
                  //需要两个value
                  if (props.valueSize !== undefined && props.valueSize > 1 && valueKey2 !== '') {
                    data.push({
                      value: element[valueKey] + '-' + element[valueKey2],
                      label: element[labelKey1] + '-' + element[labelKey2],
                    });
                  } else {
                    //仅需要一个value
                    data.push({
                      value: element[valueKey],
                      label: element[labelKey1] + '-' + element[labelKey2],
                    });
                  }
                  // 仅需要一个lable
                } else {
                  //需要两个value
                  if (props.valueSize !== undefined && props.valueSize > 1 && valueKey2 !== '') {
                    data.push({
                      value: element[valueKey] + '-' + element[valueKey2],
                      label: element[labelKey1],
                    });
                  } else {
                    //仅需要一个value
                    data.push({
                      value: element[valueKey],
                      label: element[labelKey1],
                    });
                  }
                }
              });
            }
            return data;
          }
          return [];
        }}
        placeholder={props.placeholder}
        rules={props.rules}
      />
    </ProForm.Group>
  );
};
export default ProFormSelectLayout;
