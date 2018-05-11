<template lang="html">
	<div>
		<cs-header></cs-header>
		<Slider/>
		<Foot></Foot>
	    <Navbar></Navbar>
	</div>
</template>

<script>
import csHeader from "../public/header.vue"
import Foot from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./mslider.vue"
export default {
  components:{
  	csHeader,
  	Foot,
    Navbar,
    Slider,
  },
}
</script>
