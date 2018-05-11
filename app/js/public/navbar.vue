<template lang="html">
	<ul class="navbar">
		<li class="item" v-for="item in items">
			<router-link :to="{name:item.href}">
				<img :src="item.src" alt="">
				<p>{{item.name}}</p>
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
  data() {
  	return {
  		items:[{
  			href:"home",
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t17587/158/1300523690/1908/eabacaac/5ac4850bNdf876dd8.png?width=60&height=60",
  			name:"首页"
  		},{
  			href:"money",
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t7690/252/3621724688/1715/757a3ca1/59e9d81bN27304850.png?width=60&height=60",
  			name:"赚钱"
  		},{
  			href:"home",
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t11653/76/201131398/1192/bf1b2852/59e9d7f3N5f691137.png?width=60&height=60",
  			name:"借钱"
  		},{
  			href:"home",
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t19729/201/1027312338/1395/95cecd48/5ab85d0eN01f81011.png?width=56&height=56",
  			name:"省钱"
  		},{
  			href:"home",
  			src:"//img12.360buyimg.com/jrpmobile/jfs/t10897/141/1894216742/2046/ad0e8dc1/59e9d7feNaa5dd2fd.png?width=60&height=60",
  			name:"金融会员"
  		},],
  	}
  }
}
</script>

<style lang="scss" scoped>
	.navbar {
		display:flex;
		justify-content:space-around;
		position:fixed;
		bottom:0;
		left:0;
		z-index:1000;
		width:100%;
		background-color:#fff;
		padding-top:20px;
		.item {
			text-align:center;
			width:100px;
			height:80px;
			a {
				text-decoration:none;
				img {
					display:block;
					width:44px;
					margin:0 auto;
				}
				p {
					font-size:24px;
					color:#B1B4BB;
					line-height:40px;
				}
			}
		}
	}
</style>