
const vue = new Vue({
  el:"#app",
  data:{
    appss:'1231',
    books:[
      {
        id:1,
        name:"算法导论",
        date:"2095-2",
        price:100.00,
        count:1
      },
      {
        id:2,
        name:"php",
        date:"2005-12",
        price:24.00,
        count:1
      },
      {
        id:3,
        name:"javascript",
        date:"1005-7",
        price:75.00,
        count:1
      },
      {
        id:4,
        name:"python",
        date:"2030-7",
        price:68.00,
        count:1
      }
    ]
  },
  methods:{
    decrement(indexes){
        this.books[indexes].count--;

    },
    increment(indexes){
      this.books[indexes].count++;
    },
    removed(index){
      this.books.splice(index,1);
    }
  },
  computed:{
    totalPice(){
      // let totalPrice = 0;
      // for (let i=0;i<this.books.length;i++){
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      //
      // return totalPrice;


      // 高阶函数 reduce的使用，preValue 是上一次return的结果，book是这一次从books中取的一个值
      return this.books.reduce(function (preValue,book) {
          return preValue + book.price * book.count;
      },0)

    }
  },
  filters:{
    showPrice(price){
      return "￥" + price.toFixed(2);
    }
  }
})
