<template>
      <fieldset class="from__group">
            <legend class="from__titel">Адрес</legend>
            <span class="from__grid">
                  <label class="from__item">
                        <span>Индекс</span>
                        <input class="from__input" type="number" min="1" step="1" placeholder="101000" v-model.trim="addressClient.index">
                  </label>
                  <label class="from__item">
                        <span>Страна</span>
                        <input class="from__input" type="text" placeholder="Россия" v-model.trim="addressClient.country">
                  </label>
                  <label class="from__item">
                        <span>Область</span>
                        <input class="from__input" type="text" placeholder="Московская область" v-model.trim="addressClient.region">
                  </label>
                  <label class="from__item">
                        <span class="required">Город</span>
                        <input class="from__input" type="text" placeholder="Москва" 
                        v-model.trim="addressClient.city" :class="$v.addressClient.city.$error ? 'is-invalid' : ''">
                        <span v-if="$v.addressClient.city.$error" class="from__message">Введите название города в котором вы проживаете</span>
                  </label>
                  <label class="from__item">
                        <span>Улица</span>
                        <input class="from__input" type="text" placeholder="Ленина" v-model.trim="addressClient.street">
                  </label>
                  <label class="from__item">
                        <span>Дом</span>
                        <input class="from__input" type="text" placeholder="5" v-model.trim="addressClient.house">
                  </label>
            </span>
      </fieldset>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
      data() {
            return {
                  addressClient: {
                        index: '',
                        country: '',
                        region: '',
                        city: '',
                        street: '',
                        house: '',
                  }
            }
      },
      validations: {
            addressClient: {
                  city: {
                        required
                  }
            }
      }
}
</script>