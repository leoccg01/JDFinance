<template lang="html">
    <div>
        <cs-header></cs-header>>
        <Slider/>
        <Novice></Novice>
        <Newproduct></Newproduct>
        <Insurance></Insurance>
        <Carmoney></Carmoney>
        <Life></Life>
        <Foot></Foot>
        <Navbar></Navbar>
    </div>
</template>

<script>
import csHeader from "../public/header.vue"
import Foot from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./hslider.vue"
import Novice from "./novice.vue"
import Newproduct from "./Newproduct.vue"
import Insurance from "./insurance.vue"
import Carmoney from "./carmoney.vue"
import Life from "./life.vue"

export default {
	components: {
		csHeader,
    	Slider,
    	Novice,
        Insurance,
        Carmoney,
        Newproduct,
        Life,
        Foot,
        Navbar,
	}
}
</script>

