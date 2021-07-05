<template>
      <div :class="classVisibel" class="notification">
            Клиент успушно создан
      </div>
</template>

<script>
export default {
      data(){
            return {
                  classVisibel: ''
            }
      },
      mounted() {
            setTimeout(() => this.classVisibel = 'notVisibel', 3000)
      }
}
</script>

<style lang="sass" scoped>
.notification 
      font-size: 1.2em
      position: fixed
      top: 0
      left: 50%
      transform: translateX(-50%)
      background-color: #4fbb7c
      display: flex
      justify-content: center
      align-items: center
      text-align: center
      max-width: 300px
      width: 100%
      height: 100px
      border-radius: 0 0 5px 5px 
      animation-name: fadeIn
      animation-duration: 1s
      animation-fill-mode: both
      &.notVisibel
            animation-name: fadeOut
            animation-duration: 1s
            animation-fill-mode: both

@-webkit-keyframes fadeIn 
      0% {opacity: 0;}
      100% {opacity: 1;}

@keyframes fadeIn 
      0% {opacity: 0;}
      100% {opacity: 1;}

@-webkit-keyframes fadeOut 
      0% {opacity: 1;}
      100% {opacity: 0;}

@keyframes fadeOut 
      0% {opacity: 1;}
      100% {opacity: 0;}

</style>