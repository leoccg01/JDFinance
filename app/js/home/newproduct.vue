<template lang="html">
	<Panel :class="$style.panel" title="众筹新品">
		<span><a href="#">更多尖货 &gt;</a></span>
		<section :class="$style.content">
			<Slider :options="options" :items="items" cname="product-slider"></Slider>
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
	data(){
		return {
			items:[{
				href:'home',
				src:"//img12.360buyimg.com/jrpmobile/jfs/t17692/108/1667948905/47352/b3b5fec5/5ad4077bN829fc64d.jpg?width=335&height=421"
			},{
				href:'home',
				src:"//img12.360buyimg.com/jrpmobile/jfs/t17017/315/1681990516/35892/46d5d0e/5ad40797Nd8624d82.jpg?width=335&height=421"
			},{
				href:'home',
				src:"//img12.360buyimg.com/jrpmobile/jfs/t17977/1/1701720589/44385/219809f6/5ad407a8N8feeb421.jpg?width=335&height=421"
			},{
				href:'home',
				src:"//img12.360buyimg.com/jrpmobile/jfs/t18598/49/1683491486/34072/cb622afa/5ad407b7N95527875.jpg?width=335&height=421"
			},],
			options:{
				slidesPerView:2.3,
          		spaceBetween:30,
          		freeMode: true,
			}
		}
	}	
}
</script>
<style lang="scss">
	.product-slider{
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
						height:314px;
						border:1px solid #ddd;
					}
				}
			}
		}	
	}
</style>
<style lang="scss" module>
	.panel {
		position:relative;
		span {
			display:inline-block;
			position:absolute;
			top:31px;
			right:30px;
			a {
				font-size:28px;
				line-height:1;
				text-decoration:none;
				color:#999;
			}
		}
	}
</style>
