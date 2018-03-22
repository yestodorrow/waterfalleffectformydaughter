<template>
 <div class="mydaughter">
   <ul v-flow=2>
     <li v-for="(img,index) in imgs" :key="index">
        <img v-lazy="img.src" :title="img.title" class="img">
        <p>this is my daughter</p>
     </li>
   </ul>
 </div>
</template>

<script>

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
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style coped>
h1{
  font-size:1rem;
}
ul{
  list-style:none;
  width:10rem;
}
li{
  list-style: none;
 

}
img{
  width:4.5rem;
  vertical-align: middle;
  border-radius:5px;
  box-shadow: 0  0 2px 2px #ddd;
}
p{
  font-size:.5rem;
}
</style>
