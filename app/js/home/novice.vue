<template lang="html">
	<Panel :class="$style.panel" title="理财精选">
		<section :class="$style.content">
			<ul :class="$style.items">
				<li :class="$style.item" v-for="item in items">
					<h5>{{item.title}}<span>{{item.sub}}}</span></h5>
					<p :class="$style.yield">{{item.rate}}</p>
					<p :class="$style.describe">{{item.text}}</p>
				</li>
			</ul>
		</section>
	</Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components:{
  	Panel,
  },
  data (){
  	return {
  		items:[{
  		title:"定期理财",
  		sub:"90天可质押",
  		rate:"5.50%",
  		text:"历史年华结算利率"
  	},{
  		title:"年年赢",
  		sub:"理财推荐",
  		rate:"5.50%",
  		text:"综合年化收益"
  	},{
  		title:"京智财物",
  		sub:"1000元券",
  		rate:"15.00%",
  		text:"历史回测收益"
  	},{
  		title:"小白基金",
  		sub:"超短期",
  		rate:"5.00%",
  		text:"历史年华结算利率"
  	}]
  	}
  }
}
</script>

<style lang="scss" module>
	.panel {
		.content {
			.items{
				overflow:hidden;
			.item {
				float:left;
				height:218px;
				width:50%;
				box-sizing:border-box;
				padding:49px 0 49px 30px;
				border-bottom:1px solid #ddd;
				white-space:nowrap;
				text-overflow:ellipsis;
				voerflow:hidden;
				&:first-child,&:nth-child(3) {
					position:relative;
					&::after {
						content:"";
						display:block;
						height:178px;
						boxsizing:border-box;
						position:absolute;
						top:50%;
						right:0;
						margin-top:-89px;
						border-right:1px solid #ddd;
					}
				}
				h5 {
					font-size:30px;
					font-weight:700;
					height:42px;
					line-height:42px;
					color:#333;
					span{
						display:inline-block;
						padding:0 5px;
						height:32px;
						line-height:32px;
						font-size:22px;
						color:#FF5155;
						border:1px solid #FF5155;
						margin-left:8px;
						vertical-align:8px;
					}
				}
				p.yield {
					font-size:44px;
					font-weight:700;
					height:58px;
					line-height:58px;
					color:#FF5155;
				}
				p.describe {
					font-size:24px;
					height:34px;
					line-height:34px;
					color:#999;
				}
			}
		}
		}
	}
</style>