渐进式开发
-------

每个框架都会有一些使用条件 和一些框架主张。 oneQL只想提供你一间空房子，只通水电网，或许还提供一张床，剩下的每个项目(房子)或许都有一些需要定制化的东西, 你可以在oneQL提供的简洁方案上 或者抛弃oneQL提供的默认选项，自主逐渐添加你认为项目的样子。


场景假设
----

<p>例如你的项目需要用到了数据库，到底是用mysql, mongodb, mssql呢? </p>

// Todo补全代码
----

## Mysql
```sh
// config/config.${env}.js
mysql: {
    // 单数据库信息配置
    client: {
        // host
        host: 'mysql-dev.com',
        // 端口号
        port: '3306',
        // 用户名
        user: 'local_user',
        // 密码
        password: 'local_password',
        // 数据库名
        database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true
}

```

调用方法
```sh
await app.mysql.query(${querystring})
```

<p>又或者你们团队正准备重构一个旧项目，里面用到mssql, 也用到mysql, 这时候你可能会想到用Sequelize；又或者是一个全新的，没有历史包袱的项目，可能你会想体验prisma的简单、友好。</p>

## Sequelize
```sh
// config/config.${env}.js
sequelize: {
    dialect: 'mssql',
    // 数据库名
    database: 'test',
    // 用户名
    user: 'local_user',
    // 密码
    password: 'local_password',
    // host
    host: 'mysql-dev.com',
    // 端口号
    port: '3306',
    // 是否加载到 app 上，默认开启
    app: true
}

```

// 调用方法
```sh
class User extends Sequelize.Model {}
User.init({
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
}, { sequelize });

sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.toJSON());
});
```

Todo prisma
---- 