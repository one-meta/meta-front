# Meta-Front

[Meta-Front](https://github.com/one-meta/meta-front)是基于 [Antd Pro 6](https://pro.ant.design/zh-CN)的前端脚手架，通过提取通用组件（`src/layouts`目录下的通用组件），结合 [meta-front-g](https://github.com/one-meta/meta-front-g) 生成的代码，实现前端快速开发

## 用法步骤

1. 安装 node
2. 安装依赖：`npm install`或者`yarn`
3. 运行：`npm start`或者`yarn start:dev`

## 与`meta-front-g`一起使用【项目使用可参考 [meta wiki](https://github.com/one-meta/meta/wiki/)】

1. 运行 meta-front-g：`meta-front-g`或者`meta-front-g -path="Meta-Front/src/services/meta/typings.d.ts"`
2. meta-front-g 同级目录下，会生成 Column、Pages、routes.ts 文件
3. 根据实际需求

	`routes.ts`文件的路由，复制到`config/routes.ts`

	`Cloumn`下的列文件，复制到`src/columns`，可以根据实际修改属性，列标题等

	`Pages`下的页面文件，复制到`src/pages`，根据实际修改页面，index.tsx 可以参考代码说明修改

4. 之后运行即可

## 重要目录/文件

### src/columns

meta-front-g 可以生成，复制需要的列，之后修改属性即可

### src/layouts

提取的通用组件，可以通过`src/layouts/extend/ProTableLayout.tsx`，实现页面快速开发

### config/routes.ts（根据权限后端解析的动态路由还没做）

根据实际情况，修改路由，meta-front-g 可以生成 routes.ts

### config/config.ts

可以指定 openapi 的路径，之后通过`npm run openapi`生成`src/services`文件（service 根目录文件不会被删除）

## 开发注意事项

1. logo 文件修改，修改：config/defaultSettings.ts `logo: join(__dirname, 'logo.png')`
2. 自动生成 service、mock 文件 `npm run openapi`
3. 修改 openAPI 文档为在线版本修改：config/config.ts schemaPath
4. 在执行步骤 2 后会自动生成，会覆盖已生成文件，services 根目录的文件不会被删除 mock 文件 src/services
5. service 的文件夹名字，由 package.json 中的 name 生成
6. 国际化使用 @umijs/max 的 useIntl(); ModalLayout 给出了新建的示例；同时需要修改 src/locales 对应的.ts 路由国际化根据 routes.ts 中的 name，再配置 src/locales 对应的.ts【menu】

```
const intl = useIntl();
{intl.formatMessage({
                id: 'component.options.edit',
                defaultMessage: '编辑',
            })}
            <FormattedMessage
                id="component.options.edit"
                defaultMessage="编辑"
            />
```

7. 封装后的`<ProTableLayout>`无法通过 hook 方式显示/隐藏页面表单，数据等，在新建或编辑时，可以有根据不同的值展示不同表单的需求，此时无法使用封装好的组件；可以使用新建页面方式解决
8. `<ProTableLayout>`withPageContainer=false，需要自己增加 PageContainer，要不然没有水印

## TDL

1. 动态路由：根据用户权限，后端动态生成路由（需要修改 app.tsx，还不会）
