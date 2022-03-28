<template>
  <header class="py-3">
      <div class="container-md d-flex justify-content-between align-items-center">
          <h2 class="text-white">WiV NFTs Market</h2>
      </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
        }
    },
    methods:{
        
    }
}
</script>


<style lang="scss" scoped>
    header{
        background-color: #dabb42;
        h2{
            text-shadow: -1px 3px 2px rgba(0,0,0,0.3);
            &.cursor{
                cursor: pointer;
            }
        }
    }
</style>
