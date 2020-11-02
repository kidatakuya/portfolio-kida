<template>
  <div id="">
    <MasureitaWarp></MasureitaWarp>
    <EcoloopWarp></EcoloopWarp>
    <MomoryWarp></MomoryWarp>
    <NomimonWarp></NomimonWarp>
    <PuzzleWarp></PuzzleWarp>
  </div>
</template>

<script>
import MasureitaWarp from './worksFirst/MasureitaWarp.vue'
import EcoloopWarp from './worksFirst/EcoloopWarp.vue'
import MomoryWarp from './worksFirst/MomoryWarp.vue'
import NomimonWarp from './worksFirst/NomimonWarp.vue'
import PuzzleWarp from './worksFirst/PuzzleWarp.vue'


export default {
  
  components: {
    MasureitaWarp,
    EcoloopWarp,
    MomoryWarp,
    NomimonWarp,
    PuzzleWarp
  }
}
</script>

<style lang="scss">

</style>
