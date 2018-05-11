<template lang="html">
	<Panel :class="$style.panel" title="有车有钱">
		<section :class="$style.content">
			<div :class="$style.item" v-for="item in items">
				<router-link :to="{name:'honme'}">
					<img :src="item.src" alt="">
				</router-link>
			</div>
		</section>
	</Panel>
</template>

<script>
import Panel from "../core/panel.vue"

export default {
	components:{
		Panel,
	},
	data(){
		return {
			items:[{
				src:"//img12.360buyimg.com/jrpmobile/jfs/t18319/288/2020359902/20747/e4c1e6d4/5ae28f3bN8d2fabad.png?width=375&height=233"
			},{
				src:"//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233"
			}]
		}
	}
  
}
</script>

<style lang="scss" module>
	@import "../../css/element.scss";
	.panel {
		@include panel();
		.item {
			width:50%;
			float:left;
			img {
				width:100%;
			}
		}
	}
</style>
