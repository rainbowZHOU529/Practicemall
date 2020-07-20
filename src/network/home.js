import {request,requestNEWS} from './request';

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}

export function getHomeNEWS(page){
  return requestNEWS({
    params:{
      page:page,
      count:10
    }
  })
}


