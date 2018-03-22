<template>
  <div class="headlines">
        <swiper :options="swiperOption">
             <swiper-slide v-for="(headline,index) in headlines" :key="index">I'm Slide {{ headline }}</swiper-slide>
        </swiper>
  </div>
</template>
<script>

// for convenience
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
 

export default {
  name:"headline",
  data(){
      return{
          headlines:[
              "this is headline 1",
              "this is headline 2",
              "this is headline 3" 
          ],
          swiperOption:{
                autoplay: true,
                speed: 400,
                loop:true,
                grabCursor: true,
                setWrapperSize: true,
                autoHeight: true,
                mousewheelControl: true,
                observeParents: true,
          }
      }
  },
  components:{
    swiper,
    swiperSlide
  }
}
</script>
<style coped>
.headlines{
    width:100%;
    height:2rem;
}
div{
    
}
</style>


