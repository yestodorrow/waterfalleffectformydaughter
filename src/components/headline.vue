<template>
  <div class="headlines">
        <swiper :options="swiperOption">
             <swiper-slide >
                 <div class="headline" >
                    {{ headlines[0] }}
                 </div>
            </swiper-slide>
             <swiper-slide >
                 <div class="headline" >
                    {{ headlines[1] }}
                 </div>  
            </swiper-slide>
             <swiper-slide >
                 <div class="headline" >
                    {{ headlines[2] }}
                 </div>
            </swiper-slide>
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
                direction: 'horizontal',
                height: 50,
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
    width:10rem;
    height:1rem;
    line-height:1rem;
}
.headline{
    font-size:.5rem;
}
div{





}
</style>


