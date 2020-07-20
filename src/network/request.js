import axios from 'axios';

export function request(config){
  //创建axios的实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  });
  
  //响应拦截
  instance.interceptors.request.use(config => {
    console.log('request');
    return config;
  },err => {
    console.log('err');
    return err;
  })

  //返回真正的网络请求
  return instance(config);
}

export function requestNEWS(config){
  //创建axios的实例
  const instance = axios.create({
    baseURL:'https://api.apiopen.top/getWangYiNews',
    timeout:5000,
    method:'POST'
  });
  
  //响应拦截
  instance.interceptors.request.use(config => {
    console.log('requestNEWS');
    return config;
  },err => {
    console.log('err');
    return err;
  })

  //返回真正的网络请求
  return instance(config);
}

