<template>
  <div id="app">
    <message v-if="formIsValid" ></message>
    <form class="from" @submit.prevent="checkForm">
      <mane-data ref="maneData"></mane-data>
      <address-client ref="addressClient"></address-client>
      <passport ref="passport"></passport>
      <button type="submit" class="btn">Зарегистрировать</button>
    </form>
  </div>
</template>

<script>
import maneData from './components/ManeData';
import addressClient from './components/addressClient';
import Passport from './components/passport';
import message from './components/message';

export default {
  name: 'App',
  components: {
    maneData,
    addressClient,
    Passport,
    message,
  },
  data(){
    return {
      formIsValid: false,
    }
  },
  methods: {
    checkForm() {
      this.$refs.maneData.$v.$touch()
      this.$refs.addressClient.$v.$touch()
      this.$refs.passport.$v.$touch()
      if (!this.$refs.maneData.$v.$error && !this.$refs.addressClient.$v.$error && !this.$refs.passport.$v.$error) {
            this.formIsValid = true
            setTimeout(() => this.formIsValid = false, 4000)
      }
    },
  },
}
</script>

<style lang="sass">
*, :before, :after
  box-sizing: border-box

body
  margin: 0
  padding: 0

#app 
  width: 100%
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #000000
  padding: 60px 120px
  font-size: 16px
  line-height: 120%
  
.from
  max-width: 990px
  margin: 0 auto
  display: flex
  flex-direction: column
  align-items: flex-start

  &__group
    border: none
    margin: 0
    padding: 0
    width: 100%
    &:not(:last-child)
      margin-bottom: 50px
      
  &__titel
    font-size: 1.2em
    font-weight: 600
    padding: 0
    margin: 0

  &__grid
    margin-top: 30px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: min-content
    grid-gap: 20px

  &__item
    display: flex
    flex-direction: column
    &--check
      flex-direction: row
      align-items: center
      grid-column-end: span 3
      cursor: pointer

  &__input
    width: 100%
    min-height: 46px
    background-color: transparent
    border: 1px solid #e5e5e5
    border-radius: 5px
    font-family: inherit
    font-size: 16px
    line-height: 120%
    margin: 0
    margin-top: 10px
    padding: 0
    padding: 10px
    overflow: auto
    transition: .6s border
    outline: none
    &:hover, &:focus 
      border-color: #1e90ff
  &__message
    font-size: 14px
    color: #e63946
    margin-top: 3px

.checkbox
  cursor: pointer
  width: 16px
  height: 16px
  margin: 0
  margin-right: 10px

.select
  cursor: pointer
  &__item
    padding: 5px

.required:after
  content: "*"
  display: inline-block
  color: #e63946
  font-size: 20px
  line-height: 80%
  margin-left: 2px

.btn
  background-color: #1e90ff
  border: none
  border-radius: 5px
  padding: 20px 40px
  font-family: inherit
  font-size: 1em
  font-weight: 600
  color: #fff
  cursor: pointer
  transition: opacity .6s
  &:hover
    opacity: .8
  &:active
    opacity: .6

.is-invalid
  border-color: #e63946

input[type="date"]
  cursor: pointer

@media screen and (max-width: 1200px)
  .from
    &__grid
      grid-template-columns: repeat(2, 1fr)
    &__item--check
      grid-column-end: span 1
@media screen and (max-width: 960px)
  #app 
    padding: 60px

@media screen and (max-width: 768px)
  #app 
    padding: 60px 30px

  .from__grid
      grid-template-columns: repeat(1, 1fr)
</style>