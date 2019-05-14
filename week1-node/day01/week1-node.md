#  一、nodejs基础复习与express

## 学习目标

1. 讲解
    * 自我介绍
    * 复习nodejs基础
2. 练习
    * 建立三阶段学习资料文件及熟悉使用各种学习工具
    * 利用 NodeJS 实现静态服务器
3. 讲解
    * 复习服务器相关知识
    * Express 基础
4. 练习
    * 学员熟悉 Express 文档
    * 自主搭建 Express 服务器
    
  ## 课程大纲及其笔记

 ### 1、介绍
 #### 1.1 自我介绍
  > **姓名**: 吴勋勋

  > **联系方式**：18813007814(手机)、522864637(QQ)

  >**专业技能**: HTML/CSS/HTML5/CSS3/JS/jQuery/node/vue/react/angular/小程序/android/as/flash等

  > **教学目标**: 学员学会为目标，学员就业为目标，学员胜任工作为目标

  > **教学理念**：没有教不会的学生，只有不会教的老师，态度决定一切，方法是制胜关键

  > **教学思维**：技术来源于生活，最终也会回归于生活，要想学的明白，必须得先活的明白

  > **个人信奉**：问题是一切的源头也是尽头，只要我们找对方法一切都可以迎刃而解

>英文>尖角号，为标注重点:竖线。**加粗**为四个星号。

> **工作能力**：技术（30%） + 技巧（50%） + 表达（20%）

> **企业标准**：以项目结果为准，以优化项目为准。

 #### 1.2 三阶段课程内容与目标
 * 第一周

   **NodeJS 实战开发**
   
   * Node.js 基础复习与 Express
   * MongoDB 与 项目启动
   * 项目实战
   * SSR/BSR SEO Socket
   
 * 第二周

    **Vue基础**
    
    * 开发流程规范
    * Vue 基础
    * Vue-cli 移动端布局
    
 * 第三周

    **Vue 项目开发**
    
    * 移动端事件相关 vue-router
    * vue-router 与项目
    * vuex 应用 自定义指令 组件库
    * Vue 案例项目实现
    
 * 第四周

    **Vue 项目与高级应用**
    
    * 自主项目启动及 Git 基础与多人协作
    * 自主项目开发
    * 服务端渲染与 Nuxt.js
    * 远程服务器部署上线
    
 * 第五周

    **React.js 基础**
    
    * webpack4.0 与脚手架开发
    * React.js 基础
    * React.js 生命周期与组件通信
    * Redux 基础
    * Redux 高级与应用
    
 * 第六周

    **React.js 高级与应用**
    
    * React-Router
    
 * 第七周

     **React.js 项目开发与混合开发**
     * React 项目开发
     * 扩展高级：Immutable + Mobx
     * 混合开发
     * ReactNative
     
 * 第八周

     **微信公众号及小程序开发**
     
     * 微信公众号网页开发(Jssdk)+ 微信小程序开发
     * 原生小程序开发
     * mpvue/wepy 框架基础
     * 利用框架开发小程序（mpvue 或者 wepy）
     
 * 第九周

     * canvas 与数据可视化
     * 讲解面试题与面试技巧
     
#### 1.3 三阶段学习方式
1.3.1 随堂笔记
1.3.2 MarkDown、xmind思维导图、有道云笔记或者印象笔记

 ### 2、复习nodejs基础

 NodeJS 原生路由实现静态 webserver

 ``` node服务器
 
var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
 ```

 ### 3、复习服务器相关知识

 #### 3.1 复习服务器相关知识

 3.1.1 什么是服务器

 >服务器，也称伺服器，是提供计算服务的设备。由于服务器需要响应服务请求，并进行处理，因此一般来说服务器应具备承担服务并且保障服务的能力。

 >在网络环境下，根据服务器提供的服务类型不同，分为文件服务器、数据库服务器、应用程序服务器、WEB服务器等。

 3.1.2 前后端分离与耦合架构的概念

 **前后端分离**

 >前端HTML页面通过Ajax调用后端的RestFul API并使用Json数据进行交互

![](E:\1000phone\课程体系\2019新大纲\img\740218-20170415151453517-1287031428.png)


 **前后端耦合---传统的系统架构**

 >前端写完的HTML页面交给后端，后端负责渲染数据，前后端相互调整的方式

![](E:\1000phone\课程体系\2019新大纲\img\740218-20170415151453517-1287031428.png)


 #### 3.2 Express 基础

 ##### 3.2.1 Express 介绍


>[Express](http://www.expressjs.com.cn/)基于 Node.js 平台，快速、开放、极简的 Web 开发框架

>Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能。

 ###### a) 安装express

  ``` 安装express
 npm install express --save
  ```

 ##### 3.2.2 Express 创建服务器与 generator 生成器初始化项目

  ###### a) 使用express构建简单服务器

  ```express构建服务器
    const express = require('express')
    const app = express()

    app.get('/', (req, res) => res.send('Hello World!'))

    app.listen(3000, () => console.log('Example app listening on port 3000!'))
  ```

  ###### b) generator生成器初始化项目

  ``` express生成器
    npm install express-generator -g
    express myapp --view=ejs
    cd myapp
    npm start
  ```

 ##### 3.2.3 静态资源托管（static)

 > 为了提供诸如图像、CSS 文件和 JavaScript 文件之类的静态文件，使用 Express 中的 express.static 内置中间件函数。

 > Express 在静态目录查找文件，因此，存放静态文件的目录名不会出现在 URL 中。

 > 如果要使用多个静态资源目录，请多次调用 express.static 中间件函数

 生成的项目文件中app.js中含有如下代码：

 ``` 静态资源文件设置
    app.use(express.static(path.join(__dirname, 'public')));
 ```

 ##### 3.2.4 路由与中间件

 ###### a) [路由](http://www.expressjs.com.cn/guide/routing.html)

 > 路由是指确定应用程序如何响应对特定端点的客户端请求，该请求是URI（或路径）和特定HTTP请求方法（GET，POST等）。每个路由都可以有一个或多个处理函数，这些函数在路由匹配时执行。

 ``` 路由的写法
    app.METHOD(PATH, HANDLER)
 ```

 * app是一个实例express。
 * METHOD是一个HTTP请求方法，小写。
 * PATH 是服务器上的路径。
 * HANDLER 是路由匹配时执行的功能。

 ###### b) [中间件](http://www.expressjs.com.cn/guide/writing-middleware.html)

 >中间件函数是可以访问请求对象 （req），响应对象（res）以及next应用程序请求 - 响应周期中的函数的函数。该next功能是Express路由器中的一个功能，当被调用时，它将执行当前中间件之后的中间件。

 可以使用 **app.use()** 调用中间件

 ##### 3.2.5 模板引擎 [EJS](https://ejs.bootcss.com/)

 > <%= EJS %>高效的 JavaScript 模板引擎。

 **标签含义**

* <% '脚本' 标签，用于流程控制，无输出。
* <%_ 删除其前面的空格符
* <%= 输出数据到模板（输出是转义 HTML 标签）
* <%- 输出非转义的数据到模板
* <%# 注释标签，不执行、不输出内容
* <%% 输出字符串 '<%'
* %> 一般结束标签
* -%> 删除紧随其后的换行符
* _%> 将结束标签后面的空格符删除

**包含**

``` 包含 可以携带参数
    <%- include('user/show', {user: user}); %>
```

**条件判断**

  ``` 条件判断  user为变量
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
  ```

 **列表渲染**

 ```
    <% for (var i = 0; i < data.length; i++) { %>
        <li>data[i].title</li>
    <% } %>
 ```

 ###  4、安装mongodb

 #### 4.1 下载 [mongodb](https://www.mongodb.com/download-center/community)

 ![](E:\1000phone\课程体系\2019新大纲\img\QQ截图20190507085849.png)

百度网盘下载:
链接：[https://pan.baidu.com/s/1mIbNrhzFMzMzB3jLs92Dsg](https://pan.baidu.com/s/1mIbNrhzFMzMzB3jLs92Dsg)
提取码：o8pw 

 #### 4.2 安装mongodb可视化工具

 [Robo3T](https://robomongo.org/download)

 ![](E:\1000phone\课程体系\2019新大纲\img\QQ截图20190507093748.png)

百度网盘下载:
链接：[https://pan.baidu.com/s/1jpI4Oe1AqugE8XRfNWz75w](https://pan.baidu.com/s/1jpI4Oe1AqugE8XRfNWz75w)
提取码：6k8i 

# 二、MongoDB 与 项目启动

## 学习目标

1.  讲解
    
    * Mongodb 概念解析
    * 关系型数据库与非关系型数据库的区别
    * 命令行操作 Mongodb
    
2. 练习

    * 利用 Mongodb 存储模拟班级学员信息数据
    * 整理 Mongodb 的特性与语法文档笔记

3. 讲解
   
    * Mongodb 可视化工具 Robo3T
    * 在 Express 中利用 Mongoose 操作 Mongodb
    * 启动 NodeJS 管理系统项目
    
 4. 练习

    * 构建自己的项目环境，建立 github 远程仓库

## 课程大纲及其笔记

### 1、mongodb概念解析

 > MongoDB 是一个基于分布式文件存储的数据库。

> 由 C++ 语言编写。

> 旨在为 WEB 应用提供可扩展的高性能数据存储解决方案.

> MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的

> 在高负载的情况下，添加更多的节点，可以保证服务器性能。

> MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。

> MongoDB 文档类似于 JSON 对象。

> 字段值可以包含其他文档，数组及文档数组。

### 2、关系型数据库与非关系型数据库的区别


不管我们学习什么数据库都应该学习其中的基础概念，在mongodb中基本的概念是文档、集合、数据库，下面我们挨个介绍。下表将帮助您更容易理解Mongo中的一些概念:

| sql术语/概念 | mongodb术语/概念 | 解释/说明                           |
| :----------- | :--------------- | :---------------------------------- |
| database     | database         | 数据库                              |
| table        | collection       | 数据库表/集合                       |
| row          | document         | 数据记录行/文档                     |
| column       | field            | 数据字段/域                         |
| index        | index            | 索引                                |
| table joins  |                  | 表连接，mongodb不支持               |
| primary key  | primary key      | 主键，mongdb自动将_id字段设置为主键 |

下表说明各自的优缺点以及特性

| 数据库类型     | 特性                                                         | 优点                                                         | 缺点                                                         |
| :------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 关系型数据库   | 1、关系型数据库，是指采用了关系模型来组织数据的数据库；2、关系型数据库的最大特点就是事务的一致性；3、简单来说，关系模型指的就是二维表格模型，而一个关系型数据库就是由二维表及其之间的联系所组成的一个数据组织。 | 1、容易理解：二维表结构是非常贴近逻辑世界一个概念，关系模型相对网状、层次等其他模型来说更容易理解；2、使用方便：通用的SQL语言使得操作关系型数据库非常方便；3、易于维护：丰富的完整性(实体完整性、参照完整性和用户定义的完整性)大大减低了数据冗余和数据不一致的概率；4、支持SQL，可用于复杂的查询。 | 1、为了维护一致性所付出的巨大代价就是其读写性能比较差；2、固定的表结构；3、高并发读写需求；4、海量数据的高效率读写； |
| 非关系型数据库 | 1、使用键值对存储数据；2、分布式；3、一般不支持ACID特性；4、非关系型数据库严格上不是一种数据库，应该是一种数据结构化存储方法的集合。 | 1、无需经过sql层的解析，读写性能很高；2、基于键值对，数据没有耦合性，容易扩展；3、存储数据的格式：nosql的存储格式是key,value形式、文档形式、图片形式等等，文档形式、图片形式等等，而关系型数据库则只支持基础类型。 | 1、不提供sql支持，学习和使用成本较高；2、无事务处理，附加功能bi和报表等支持也不好； |

### 3、命令行操作 Mongodb

#### 3.1 数据库常用命令

##### 3.1.1 help查看命令提示

``` help查看命令提示
help
db.help()
db.test.help()
db.test.find().help()
```

##### 3.1.2 创建切换数据库

``` movies为数据库名称
use movies
```

##### 3.1.3 查询数据库

```查询数据库
show dbs
```

##### 3.1.4 显示当前DB状态

```显示当前DB状态
db.stats()
```

##### 3.1.5 查看当前DB版本

```查看当前DB版本
db.version()
```

##### 3.1.6 查看当前DB的链接机器地址

```查看当前DB的链接机器地址
db.getMongo()
```

##### 3.1.7 删除数据库

```删除数据库
db.dropDatabase()
```

##### 3.1.8 查询当前所使用的数据库

 ```查询当前所使用的数据库
 db.getName()
 ```

#### 3.2 collection 聚集集合操作

##### 3.2.1、创建一个聚集集合

```
db.createCollection(name, options)
db.createCollection("collName", {size: 20, capped: true, max: 100});

// 如果是sql语句
INSERT INTO table_name ( field1 ) VALUES  ( value1 );
```

参数说明：

* name: 要创建的集合名称

* options: 可选参数, 指定有关内存大小及索引的选项


| 字段        | 类型         | 描述                                                         |
| :---------- | :----------- | :----------------------------------------------------------- |
| capped      | 布尔（可选） | 如果为 true，则创建固定集合。固定集合是指有着固定大小的集合，当达到最大值时，它会自动覆盖最早的文档。当该值为 true 时，必须指定 size 参数。 |
| autoIndexId | 布尔（可选） | 如为 true，自动在 _id 字段创建索引。默认为 false。           |
| size        | 数值（可选） | 为固定集合指定一个最大值（以字节计）。如果 capped 为 true，也需要指定该字段。 |
| max         | 数值（可选） | 指定固定集合中包含文档的最大数量。                           |

##### 3.2.2、得到指定名称的聚集集合

```得到指定名称的聚集集合
db.getCollection("collName");
```

##### 3.2.3、得到当前DB的所有的聚集集合

```得到当前DB的所有的聚集集合
db.getCollectionNames()
```

##### 3.2.4、显示当前db所有集合的状态

```
db.printCollectionStats();
```

#### 3.3 document文档操作

##### 3.3.1 插入文档

MongoDB 使用 insert() 或 save() 方法向集合中插入文档，语法如下：

```
db.COLLECTION_NAME.insert(document)

db.collection.insertOne(document) // 向指定集合中插入一条文档数据 
db.collection.insertMany(document) // 向指定集合中插入多条文档数据
 
db.collection.insertOne({name: '吴大勋', age: 18})
db.collection.insertMany([ {name: '吴大勋', age: 18},{name:'吴勋勋', age: 19} ])
```

插入文档你也可以使用 db.col.save(document) 命令。如果不指定 _id 字段 save() 方法类似于 insert() 方法。如果指定 _id 字段，则会更新该 _id 的数据。

##### 3.3.2 获得当前 db 的所有文档

```
db.collection.find(query, projection)

// 获得当前 db 的所有文档
db.col.find().pretty() // 使用 pretty() 方法以格式化的方式来显示所有文档

// 满足两个条件
db.col.find({key1:value1, key2:value2}).pretty()

// 只需要满足一个条件即可
db.col.find({$or: [{key1: value1}, {key2:value2}] }).pretty()
```

##### 3.3.3 更新文档

```
db.col.updateOne({key: value}, {$set: {key: value}})
db.col.updateMany({key: value}, {$set: {key: value}})

// key字段自增1
db.col.updateOne({key: value}, {$inc: {key: 1}})
// key字段自减1
db.col.updateMany({key: value}, {$inc: {key: -1}})
db.col.updateOne({key: value}, {$inc: {key: 1}})
db.col.updateMany({key: value}, {$inc: {key: -1}})
```

##### 3.3.4 删除文档

```
db.col.deleteOne({key:value})
db.col.deleteMany({key: value})
```

#### 3.4 聚集集合查询

##### 3.4.1 条件操作符

```
db.col.find({key1:value1, key2:value2}).pretty()
db.col.find({key1: {$gt: value1}}) //key值大于value
db.col.find({key1: {$gte: value1}})//key值大于等于value
db.col.find({key1: {$lt: value1}})
db.col.find({key1: {$lte: value1}})
```

##### 3.4.2 Limit 与 Skip 方法

```
db.col.find().limit(5); // 查询前5条数据
db.col.find().skip(10); // 查询10条以后的数据
db.userInfo.find().limit(5).skip(5) // 查询在5-10之间的数据
```

##### 3.4.3 排序

```
 db.col.find().sort({key: 1}); // 按照key值升序
 db.col.find().sort({key: -1}); // 按照key值降序
```

##### 3.4.4 索引

```
db.col.getIndexes()
```

##### 3.4.5 查询某个结果集的记录条数

```
db.col.find({key: value}).count();
```
##### 3.4.6 按照某列进行排序计数

```
db.col.find({key: {$exists: true}}).count();
```

### 4、在 Express 中利用 Mongoose 操作 Mongodb

#### 4.1 安装mongoose

```
npm i mongoose -D
```
#### 4.2 连接数据库

``` db.js
const mongoose = require('mongoose');
const DB_URL = "mongodb://127.0.0.1:27017/bk1901";

mongoose.connect(DB_URL, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('数据库已连接')
})
mongoose.connection.on('error', () => {
    console.log('数据库连接异常')
})
mongoose.connection.on('disconnected', () => {
    console.log('数据库连接失败')
})
module.exports = mongoose;
```
#### 4.3 插入数据

##### 4.3.1 设计用户数据表

``` user.js
const mongoose = require('./db');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String },
    password: { type: String },
    age: { type: Number }
})

module.exports = mongoose.model('User', UserSchema);
```

##### 4.3.2 插入数据

```insert.js
var User = require("./user.js");

const user = new User({
    username: '吴大勋',
    password: '123456',
    age: 18
})

user.save((err, res) => {
    if (err) throw err;
    console.log('插入成功')
})
```

##### 4.3.3 查询数据

```find.js
var User = require("./user.js");

User.find({username:'吴大勋'}, {_id: 0}, (err, data) => {
    if (err) throw err;
    console.log(data)
})
// 另一种写法
User.find({}, {_id: 0}).skip(0).limit(1).exec((err, data) => {
    if (err) throw err;
    console.log(data)
})
```

##### 4.3.4 更新数据

```find.js
var User = require("./user.js");
// updateOne 更新单条数据
// updateMany 更新多条数据
User.updateMany({}, {$inc: {age:1}}, (err, res) => {
    if (err) throw err;
    console.log('更新成功')
})
```

##### 4.3.5 删除数据

```delete.js
var User = require("./user.js");
// deleteOne 删除单条
// deleteMany 删除多条
// remove 删除满足条件的
User.remove({}, (err, data) => {
    if (err) throw err;
    console.log(data)
})
```

### 5、 启动 NodeJS 管理系统项目

#### 5.1 建立github仓库

#### 5.2 利用express分别构建webserver与apiserver

* webserver 前后端不分离
* apiserver 前后端分离



# 三、项目实战

## 学习目标

1、讲解

* 利用bootstrap在webserver中构建项目前端页面
* RestfulAPI 规范
* 编写接口文档
* postman接口调试工具的使用
* 各种请求方式的区别（GET/POST/DELETE/PATCH等）
* apiserver编写一个简单接口

2、练习

* 复习前后端交互及其ajax
* 下载工具并且编写自己的接口文档
* 整理课堂笔记

3、讲解

* 跨域问题产生的原因
* 解决跨域问题
* 实现注册功能

4、练习

* 自主实现跨域代理与注册功能
* 整理跨域方式文档资料

## 课程大纲及其笔记

### 1、 利用bootstrap在webserver中构建项目前端页面

#### 1.1 准备工作

* 下载模板[admin-lte](https://adminlte.io/)

百度网盘下载
链接：[https://pan.baidu.com/s/128UX3FzlkkNNYc3IoR5jvA](https://pan.baidu.com/s/128UX3FzlkkNNYc3IoR5jvA)
提取码：lbbg 

#### 1.2 RestfulAPI 规范

RESTful 是目前最流行的 API 设计规范，用于 Web 数据接口的设计。


RESTful 的核心思想就是，客户端发出的数据操作指令都是"动词 + 宾语"的结构。
比如，GET /articles这个命令，GET是动词，/articles是宾语。
动词通常就是五种 HTTP 方法，对应 CRUD 操作。

```
GET：读取（Read）
POST：新建（Create）
PUT：更新（Update）
PATCH：更新（Update），通常是部分更新
DELETE：删除（Delete）
```

根据 HTTP 规范，动词一律大写。

> 有些客户端只能使用GET和POST这两种方法。
> 服务器必须接受POST模拟其他三个方法（PUT、PATCH、DELETE）。
> 这时，客户端发出的 HTTP 请求，要加上X-HTTP-Method-Override属性，告诉服务器应该使用哪一个动词，覆盖POST方法。

#### 1.3 编写诶接口文档

>正规的团队合作或者是项目对接，接口文档是非常重要的，一般接口文档都是通过开发人员写的。一个工整的文档显得是非重要

#### 1.3.1 接口规范内容

* 接口名称
* 场景说明
* 接口说明
* 请求参数
* 响应参数
* 错误码

#### 1.3.2 参数内容

* 字段名 
* 变量名 
* 是否必填
* 类型 
* 示例值 
* 描述

#### 1.3.3 错误码内容

* 名称 
* 描述
* 原因 
* 解决方案

#### 1.3.4 接口示例（来源：[聚合数据](https://www.juhe.cn/)新闻接口）

接口地址：http://v.juhe.cn/toutiao/index
返回格式：json
请求方式：get/post
请求示例：http://v.juhe.cn/toutiao/index?type=top&key=APPKEY
接口备注：返回头条，社会，国内，娱乐，体育，军事，科技，财经，时尚等新闻信息


>请求参数说明：

| 名称 | 必填 | 类型   | 说明                                                         |
| :--- | :--- | :----- | :----------------------------------------------------------- |
| key  | 是   | string | 应用APPKEY                                                   |
| type | 否   | string | 类型,top(头条，默认),shehui(社会),guonei(国内),guoji(国际),yule(娱乐),tiyu(体育)junshi(军事),keji(科技),caijing(财经),shishang(时尚) |


>返回参数说明：

| 名称           | 类型 | 说明 |
| :------------- | :--- | :--- |
| 见JSON返回示例 | -    | -    |

>JSON返回示例：

````
{ 
    "reason": "成功的返回", 
    "result": { 
        "stat": "1", 
        "data": [
            { 
                "uniquekey": "6c4caa0c3ba6e05e2a272892af43c00e", 
                "title": "杨幂的发际线再也回不去了么？网友吐槽像半秃",
                "date": "2017-01-05 11:03", 
                "category": "yule", 
                "author_name": "腾讯娱乐", 
                "url": "http://mini.eastday.com/mobile/170105110355287.html?qid=juheshuju",
                "thumbnail_pic_s": "http://03.imgmini.eastday.com/mobile/20170105/20170105110355_ 806f4ed3fe71d04fa452783d6736a02b_1_mwpm_03200403.jpeg", 
                "thumbnail_pic_s02": "http://03.imgmini.eastday.com/mobile/20170105/20170105110355_ 806f4ed3fe71d04fa452783d6736a02b_2_mwpm_03200403.jpeg", 
                "thumbnail_pic_s03": "http://03.imgmini.eastday.com/mobile/20170105/20170105110355_ 806f4ed3fe71d04fa452783d6736a02b_3_mwpm_03200403.jpeg" 
           }, 
      ]
   }
}
```

#### 1.4 postman接口调试工具的使用

[postman](https://www.getpostman.com/downloads/)

用户在开发或者调试网络程序或者是网页B/S模式的程序的时候是需要一些方法来跟踪网页请求的，用户可以使用一些网络的监视工具比如著名的Firebug等网页调试工具。


#### 1.5  各种请求方式的区别（GET/POST/DELETE/PATCH等）

```
GET：读取（Read）
POST：新建（Create）
PUT：更新（Update）
PATCH：更新（Update），通常是部分更新
DELETE：删除（Delete）
```

#### 1.6  apiserver编写一个简单接口

### 2、跨域问题

#### 2.1 跨域问题产生的原因

> 同源策略
>
> - 协议相同
> - 域名相同
> - 端口相同

#### 2.2 解决apiserver与webserver之间的跨域问题

##### 2.2.1 前后端实现jsonp并讲解原理



 