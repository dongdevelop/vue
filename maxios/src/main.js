import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import {request} from "@/network/request";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// axios({
//   url:'http://job.precast.com.cn/index.php/Job-indexms',
//   params:{
//     id:154,
//   }
// }).then(res=>{
//   console.log(res);
// })

// axios.all([axios({
//   url:'http://job.precast.com.cn/index.php/index-getnews'
// }),axios({
//   url:'http://job.precast.com.cn/index.php/Job-indexms',
//   params:{
//     id:154,
//   }
// })]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// }))

request({
  url:'/index-getnews'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})