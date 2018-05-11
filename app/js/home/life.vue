<template lang="html">
	<ul class="content">
		<li class="item">
			<img src="//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90" alt="">
			<p>旅游</p>
		</li>
		<li class="item">
			<img src="//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90" alt="">
			<p>医美</p>
		</li>
		<li class="item">
			<img src="//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88" alt="">
			<p>房抵贷</p>
		</li>
		<li class="item">
			<img src="//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90" alt="">
			<p>驾校</p>
		</li>
		<li class="item">
			<img src="//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88" alt="">
			<p>分期用</p>
		</li>
	</ul>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
	@import "../../css/element.scss";
	.content {
		background-color:#fff;
		width:100%;
		@include list(row);
		box-sizing:border-box;
		padding-top:60px;
		.item {
			width:20%;
			text-align:center;
			img {
				width:90px;
				height:90px;
			}
			p {
				font-size:26px;
				color:#666;
				line-height:48px;
				white-space:nowrap;
				text-overflow:elipsis;
				over-flow:hidden;
			}
		}
	}
</style>