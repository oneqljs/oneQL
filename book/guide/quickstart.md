快速开始
------

- clone模板仓库 (后续考虑cli创建)
- npm install
- npm run dev

- 访问：(http://localhost:3600/graphql)

```js
query db($key: String, $ext: [ExtensionType]){
  hello
  city(request: {key: $key,  ext: $ext } ) {
    datainfo{
      CountryId
      country
      type
    }
  }
}
```

##### QUERY VARIABLES
```js
{"key":"D", "ext": [{ "key":"2", "value":"1"}] }
```

![avatar](../doc/oneQL-example.png)

> 使用oneQL的同学，默认你对graphql有一定了解，如type 和schema之间的关系。

查看接口Schema
------
最右边绿色的SCHEMA 按钮
![avatar](../doc/schema-detail.png)