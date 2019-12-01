import VueTypedJs from 'vue-typed-js'
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'

export default ({
    Vue,
    options, 
    router, 
    siteData
}) => {
    Vue.use(VueTypedJs)

    Vue.component('parallax-container', ParallaxContainer)
    Vue.component('parallax-element', ParallaxElement)
}