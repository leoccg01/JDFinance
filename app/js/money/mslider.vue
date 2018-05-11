<template lang="html">
		<section class="content">
			<div class="ad1"><img src="//img12.360buyimg.com/jrpmobile/jfs/t19486/212/2027578940/37343/4dbdfbda/5ae2f28bNcb2272c5.png?width=750&height=120" alt=""></div>
			<Slider :items="items" cname="slider"></Slider>
			<div class="nav">
				<div class="sign">
					<span class="member">会员等级</span>
					<span class="text">立即登入&nbsp;马上赚钱</span>
					<span class="signin">签到</span>
				</div>
				<div class="nav-wrap">
					<ul>
						<li class="item" v-for="item in lists">
							<router-link :to="{name:'money'}">
								<img :src="item.src" alt="">
								<p>{{item.text}}</p>	
							</router-link>
						</li>
					</ul>
					<span>送京豆</span>
				</div>
			</div>
		</section>
</template>

<script>
// import Panel from "../core/panel.vue"
import Slider from "../core/slider.vue"
export default {
  components:{
  	// Panel,
  	Slider,
  },
  data() {
  	return {
  		items:[{
  			href:"money",
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t19510/140/2182792640/35540/4510e39d/5aeaec08N31c13037.jpg?width=750&height=400"
  		},{
  			href:"money",
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t19750/300/2228041378/42003/baafec7/5aeaec20N9cd01124.jpg?width=750&height=400"
  		},{
  			href:"money",
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t19828/212/199599778/40368/338cd61c/5aeaec3eN11b755ac.jpg?width=750&height=400"
  		},],
  		lists:[{
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t18103/37/490404196/5076/dfe2d74f/5a8440f1Nbda4f02a.png?width=90&height=90",
  			text:"领红包"
  		},
  		{
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t18073/271/483133084/5159/f8133cd6/5a844103N02f95449.png?width=90&height=90",
  			text:"领福利"
  		},
  		{
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t17710/198/468680838/4169/de69ccb0/5a844046N1f4f2958.png?width=90&height=90",
  			text:"领券"
  		},
  		{
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t19330/108/485433577/4856/13f8bcb9/5a844068N464525c2.png?width=90&height=90",
  			text:"支付抽奖"
  		},
  		{
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t17563/145/489151866/3943/bed46aef/5a8440cfN4a1fabc3.png?width=90&height=90",
  			text:"全部"
  		},],
  	}
  },
}
</script>

<style lang="scss">
	.slider {
		.swiper-container{
			.swiper-slide {
				a {
					display:block;
					width:100%;
					height:auto;
					img {
						display:block;
						width:100%;
						height:auto;
					}
				}
			}
			.swiper-pagination {
				margin-bottom:20px;
			}
		}
	}
</style>
<style lang="scss" scoped>
@import "../../css/element.scss";
	.content {
		padding-top:100px;
		.ad1 {
			position:fixed;
			top:100px;
			left:0;
			right:0;
			z-index:99;
			img {
				display:block;
				height:100px;
				width:100%;
				z-index:99;
			}
		}
		.nav {
			position:relative;
			background-color:#fff;
			font-size:20px;
			width:100%;
			.sign {
				position:absolute;
				left:20px;
				top:-20px;
				z-index:10;
				@include flex(row);
				align-items:center;
				text-align:center;
				height:130px;
				box-sizing:border-box;
				width:94%;
				border:1px solid rgba(101,118,155,.15);
				box-shadow:1px 2px 1px rgba(101,118,155,.15);
				background-color:#fff;
				span {
					display:inline-block;
					height:66px;
					line-height:66px;
				}
				.member {
					flex:0 0 91px;
					border-radius:4px;
					background: url(../../image/huiyuan.png) no-repeat;
					margin-left:20px;
					background-size:contain;
					color:#fff;
				}
				.text {
					flex:1;
					text-align:left;
					margin-left:20px;
					font-size:26px;
					color:#c6a76f;
				}
				.signin {
					flex:0 0 128px;
					background: url(../../image/sign.png) no-repeat;
					margin-right:30px;
					border-radius:66px;
					background-size:contain;
					color:#fff;
				}
			}
			.nav-wrap {
				padding-top:130px;
				ul {
					@include flex(row);
					justify-content:space-around;
					width:100%;
					li {
						width:90px;
						height:170px;
						text-align:center;
						padding-top:20px;
						a {
							text-decoration:none;
							color:#000;
							display:inline-block;
							img {
								display:block;
								width:90px;
								height:90px;
							}
							p {
								line-height:40px;
							}
						}
					}
				}
				span {
					position:absolute;
					top:145px;
					left:50%;
					display:inline-block;
					width:74px;
					height:22px;
					color:#fff;
					text-indent:6px;
					border-radius:22px;
					background:url(../../image/bean.png) no-repeat;
					background-size:cover;
				}
			}
		}
	}
</style>
