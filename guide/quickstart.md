快速开始
------

```sh
# step 1
git clone git@github.com:skyweaver213/oneQL.git

# step 2
npm install

#step 3
npm run dev
```

<p>访问：http://localhost:3600/graphql</p>

<p>输入请求schema 和 查询变量, 点击运行</p>

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


#### 查看Schema详情

最右边绿色的SCHEMA 按钮
![avatar](../doc/schema-detail.png)