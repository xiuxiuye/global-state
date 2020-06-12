# 介绍

global-message提供微前端父子、子子应用之间的实时通信能力。

# 使用指南

## 安装

```
npm install --save global-message
```

## 引入

```
import { init, send, receive, close } from 'global-message'
```

## 通用通信方式

### 方法介绍

* init(mark: string, data: any)

  init()用于初始化一个通信实例，该通信实例以mark为唯一标识，初始值为data。

  ```
  const userInfo = {
    name: 'Tony',
    age: 24,
    gender: 'men'
  }

  init('customer', userInfo)
  ```

* send(mark: string, data: any)

  send()用于发送通信数据，mark指定使用哪个通信实例，data为要发送的数据。

  ```
  userInfo.name = 'Tom'

  send('customer', userInfo)
  ```

* receive(mark: string, callback: function)

  receive()用于监听指定mark通信实例，如果有信息通信，可通过回调方法callback处理监听接收到的数据。

  ```
  // data为通信数据
  const callback = (data) => {
    console.log('客户信息：', data)
  }

  receive('customer', callback)
  ```

  如果回调函数还需处理额外的参数，可参考下面：

  ```
  function getCallback (carNumber) {
    return (data) => {
      console.log(`车牌${carNumber}的客户信息：`, data)
    }
  }

  const callback = getCallback('京A666666')

  receive('customer', callback)

  ```

* close(mark: string, callback: function)

  close()用于关闭指定mark的通信，callback指定要移除的回调方法。

  ```
  // data为通信数据
  const callback = (data) => {
    console.log('客户信息：', data)
  }

  receive('customer', callback)

  setTimeout(() => {
    // 3s后关闭customer的通信，不再执行callback
    close('customer', callback)
  }, 3000)
  ```

  所以从上面例子中可以看出，一个mark通信实例的receive()可以同时绑定多个callback，移除时只要通过close()指定要移除某个mark对应的callback即可。