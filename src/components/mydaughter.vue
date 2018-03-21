<template>
 <div class="mydaughter">
   <ul v-flow=2>
     <li v-for="(img,index) in imgs" :key="index">
        <img :src="img.src" :title="img.title" class="img">
        <p>this is my daughter</p>
     </li>
   </ul>
 </div>
</template>

<script>
import {Waterfall, WaterfallItem} from 'vue2-waterfall';
export default {
  name: 'mydaughter',
  data () {
    return {
      imgs:[]
    }
  },
  created:function(){
    this.$http.get("./static/daughter.txt").then(data=>{
      this.imgs=data.data;
      console.log(this.imgs)
    }).catch(err=>{
      console.log(err)
    })
  },
  components:{
    Waterfall, WaterfallItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style coped>
ul{
  list-style:none;
 
}
li{
  list-style: none
  
}
img{
  width:500px;
  vertical-align: middle;
  border-radius:5px;
  box-shadow: 0  0 2px 2px #ddd;
}
</style>
