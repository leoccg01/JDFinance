<template lang="html">
	<Panel class="panel" title="保险保障">
		<section cname="content">
			<Slider :options="options" :items="items" cname="slide-list"></Slider>
			<a class="pic">
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t15583/348/2209539372/42536/6bae28a8/5a953b19Nd7e46726.jpg?width=750&height=200" alt="">
				</a>
		</section>
	</Panel>
</template>

<script>
import Panel from "../core/panel.vue"
import Slider from "../core/slider.vue"
export default {
	components:{
 		Panel,
 		Slider,
	},
    data (){
  	return {
  		items:[{
  			href:"home",
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260"
  		},
  		{
  			href:"home",
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260"
  		},
  		{
  			href:"home",
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260"
  		},
  		{
  			href:"home",
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260"
  		},{
  			href:"home",
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260"
  		},],
  		options:{
  			slidesPerView:2.2,
          	spaceBetween: 30,
          	freeMode: true,
  		},
  	}
  }
}
</script>

<style lang="scss">
	.slide-list {
		.swiper-container {
			padding:0 24px;
			.swiper-slide {
				box-sizing:border-box;
				a {
					display:inline-block;
					width:100%;
					img {
						display:block;
						width:100%;
					}
				}
			}
		}
	}
</style>
<style lang="scss" scoped>
	.panel {
			a.pic {
				display:block;
				padding:30px 0;
				img {
					display:block;
					width:100%;
				}
			}
	}
</style>