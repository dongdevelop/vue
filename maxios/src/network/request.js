import axios from "axios";

export  function request(config){
  const  instance = axios.create({
    baseURL:'http://job.precast.com.cn/index.php',
    timeout:5000
  })

  // 请求拦截
  instance.interceptors.request.use(config=>{
    // 某些请求，要显示loader图标，或者token，修改不符合服务器的请求

    return config;
  },err=>{
    console.log(err);
  })

// 相应拦截
  instance.interceptors.response.use(res=>{
    return res.data
  },error => {
    console.log(error);
  })

  return instance(config)

}