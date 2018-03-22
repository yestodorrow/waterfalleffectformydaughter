<template>
  <div class="headlines">
        <swiper :options="swiperOption">
             <swiper-slide   class="headline headline1">
                 
                    {{ headlines[0] }}
               
            </swiper-slide>
             <swiper-slide  class="headline headline2">
               
                    {{ headlines[1] }}
                  
            </swiper-slide>
             <swiper-slide class="headline headline3" >
                
                    {{ headlines[2] }}
               
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
                width:500
            //     height: 50,
            //     effect : 'coverflow',
            //     slidesPerView: 2,
            //      coverflowEffect: {
            //     rotate: 10,
            //     stretch: 2,
            //     depth: 30,
            //     modifier: 2,
            //     slideShadows : true
            // }
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

.headline{
    font-size:.5rem;
    width:10rem;
    height:2rem;
    line-height:2rem;
}
.headline1{
    background:yellow;
}


.headline2{
    background:red;
}
.headline3{
    background:green;
}
div.full{

width:100%;



}
</style>


