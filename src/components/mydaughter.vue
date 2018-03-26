<template>
 <div class="mydaughter"
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">

   <ul v-flow=2 class="col">
     <li v-for="(img,index) in pics" :key="index" class="li">
        <img v-lazy="img.src" :title="img.title" class="img">

        <p>this is my daughter</p>
     </li>
   </ul>
 </div>
</template>

<script>
  import {mapState } from 'vuex'
export default {
  name: 'mydaughter',
  data () {
    return {
      page:1,
      loading:false
    }
  },
  created(){
      console.log(this.$store.state.pics);
    this.$store.dispatch("getPic",0)
  },
  components:{

  },
  methods:{
    loadMore(){
      this.loading=true;
      console.log("begin to load "+this.page++);
      console.log("loaded");
      this.loading=false;
    }
  },
  computed:{
      pics(){
          return this.$store.state.pics;
      }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style coped>
  .mydaughter{
    min-height:5rem;
  }
h1{
  font-size:1rem;
}
ul{
  list-style:none;
  width:9rem;
  box-sizing:border-box;
  margin:0 .4rem;
  padding:0
}
li{
  list-style: none;
  box-sizing:border-box;
  width:4.35rem;
  padding:0 .1rem;
}

img{
  width:4.35rem;
  vertical-align: middle;
  border-radius:5px;
  box-shadow: 0  0 2px 2px #ddd;
}
p{
  font-size:.5rem;
  height:.8rem;
  line-height:.8rem;
  margin:0;
}
.mydaughter{
  margin:.2rem 0;
}
  ul.col>div{
    width:43%;
  }
</style>
