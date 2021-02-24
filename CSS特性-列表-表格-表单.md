# 内容概述

学习进度：第18课时第1节



## 一、CSS特性

+ 继承
  + CSS中有些属性是可继承的，何为属性集成？
    + 一个元素如果没有设置某属性的值，就会跟谁父元素的值
    + 一个元素若果有设置有个属性的值，就是用自己设置的值
    + 比如 color、font-size是可以继承
    + 不能继承的属性，一般可以使用 `inherit` 值强制继承
    + CSS属性继承的是 **计算值** ，并不是当初编写属性时的指定值(字面值)
+ 层叠
  + CSS允许多个相同名字的CSS属性层叠同一个元素上
  + 层叠后的结果是：只有一个CSS属性会生效
  + 按照经验，为了方便比较CSS属性的优先级，可以给CSS属性所处的环境定义一个权值(权重)
    + !important:10000
    + 内联样式：1000
    + id：100
    + 类选择器、属性选择器、伪类：10
    + 元素，伪元素：1
    + 通配符：0
  + 比较优先级的严谨方法
    + 从权重值最大的开始比较每一种权重值的数量多少，数量多的则优先级高，即可结束比较
    + 如果数量相同，比较下一个较小的权值，以此类推



## 二、HTML-列表元素

HTML提供了3组常用的用来展示列表的元素

+ 有序列表：ol、li

  + ol(ordered list)
    + 有序列表、直接子元素只能是li
  + li (list item)
    + 列表中的每一项

+ 无序列表：ul、li

  + ul (unordered list)
    + 无序列表、直接子元素只能是li
  + li (list item)
    + 列表中的每一项

+ 定义列表：dl、dt、dd

  + dl (definition list)
    + 定义列表，直接子元素只能是dt、dd
  + dt (definition term)
    + 列表中每一项的项目名
  + dd (definition description)
    + 列表中每一项的具体描述、是对 dt 的描述、解释、补充
    + 一个dt后面一般紧跟一个或者是多个dd
  + dt、dd常见的组合
    + 事物的名称、事物的描述
    + 类别名、归属于这类的各种事物

+ 列表相关的常见CSS属性有四个：list-style-type、list-style-image、list-style-position、list-style

  > 他们都可以继承、所以设置给ol、ul元素，默认也会应用到li元素

  + list-style-type: 设置li元素前面标记的样式
  + list-style-image：设置某张图片为li元素前面的标记、会覆盖list-style-type的设置
  + list-style-position：设置li元素前面标记的位置，可以取outside、inside2个值
  + list-style： 是list-style-type、list-style-image、list-style-position的缩写属性

## 三、HTML-表格元素

+ table
  + 表格
  + 设置属性
    + border 边框
    + cellpadding：内容距边框的的距离
    + cellspacing：单元格之间的间距
    + width：宽度
    + align：对齐方式
+ tr
  + 表格中的行
  + 设置属性
    + valign
+ td
  + 行中的单元格
+ tbody
  + 表格的主体
+ caption
  + 表格的标题
+ thead
  + 表格的头部
+ tfoot
  + 表格的页脚
+ th
  + 表格的表头单元格
+ 单元格的合并
  + 合并要领
    + 合并方向是向右、向下
+ Border-spacing
  + 用于设置单元格之间水平、垂直间距

## 四、HTML-表单元素

+ form
  + 表单
  + 一般情况下，其他表单相关元素都是它的后代元素
  + action
    + 用于提交表单数据请求的URL
  + method
    + 请求方式 get、post
+ input
  + 单行文本输入框、单选框、复选框、按钮等元素
  + type :input 类型
    + text：文本输入框(明文输入)
    + password：文本输入框(密文输入)
    + radio:单选框
    + checkbox：复选框
    + button：按钮
    + reset：重置
    + submit：提交表单数据到服务器
    + file：文件上传
  + maxlength：最大输入字数
  + placeholder: 占位文字
  + readonly：只读
  + disable：禁用
  + checked：默认被选中
    + 仅在radio、checkbox时可用
  + autofocus：当页面加载时，自动聚焦
  + name：名字
    + 在提交数据到服务器时，可用于区分数据类型
  + value：取值
  + form：设置所属的form元素（填写form元素的id）
+ textarea
  + 多行文本
+ select、option
  + 下拉选择框
+ button
  + 按钮
+ label
  + 表单元素的标题
+ fieldset
  + 表单元素组
+ legend
  + fieldset的标题

## 五、元素类型

+ 布尔属性可以没有属性值，协商属性名就代表使用这个属性
+ 常见的布尔属性有disableed、checked、readonly、multiplr、autofocus、selected
+ 如果给布尔值设置，值就是本身
+ 元素类型划分
  + 块级元素 block-level elements
    + 独占父元素的一行
  + 行内级元素 inline-leve elements

## 六、盒子模型

