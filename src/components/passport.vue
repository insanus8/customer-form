<template>
      <fieldset class="from__group">
            <legend class="from__titel">Паспорт</legend>
            <span class="from__grid">
                  <label class="from__item">
                        <span class="required">Тип документа</span>
                        <select class="from__input select" 
                        aria-label="выберите вид документа"
                        v-model="passport.documentType"
                        :class="$v.passport.documentType.$error ? 'is-invalid' : ''">
                              <option 
                                    v-for="(document, index) in passport.documentTypes" 
                                    :key="index"
                                    :value='document.value'>
                                    {{document.label}}
                              </option>
                        </select>
                        <span v-if="$v.passport.documentType.$error" class="from__message">Выберите вид документа</span>
                  </label>
                  <label class="from__item">
                        <span>Серия</span>
                        <input class="from__input" v-model="passport.series" type="number" min="1" step="1" placeholder="9999">
                  </label>
                  <label class="from__item">
                        <span>Номер</span>
                        <input class="from__input" v-model="passport.ID" type="number" min="1" step="1" placeholder="999999">
                  </label>
                  <label class="from__item">
                        <span>Кем выдан</span>
                        <input class="from__input" v-model.trim="passport.issuedBy" type="text" placeholder="введите название отделения">
                  </label>
                  <label class="from__item">
                        <span class="required">Дата выдачи</span>
                        <input class="from__input" 
                        v-model="passport.dateIssue" 
                        :class="$v.passport.dateIssue.$error ? 'is-invalid' : ''"
                        type="date">
                        <span v-if="$v.passport.dateIssue.$error" class="from__message">Введите дата регистрации документа</span>
                  </label>
            </span>
      </fieldset>
</template>
<script>
import { required } from 'vuelidate/lib/validators'

export default {
      data() {
            return {
                  passport: {
                        documentTypes: [
                              {
                                    label: 'Паспорт',
                                    value: 'Passport'
                              },
                              {
                                    label: 'Свидетельство о рождении',
                                    value: 'Birth certificate'
                              },
                              {
                                    label: 'Вод. удостоверение',
                                    value: 'Water. certificate'
                              },
                        ],
                        documentType: 'Passport',
                        series: '',
                        ID: '',
                        issuedBy: '',
                        dateIssue: '',
                  }
            }
      },
      validations: {
            passport: {
                  documentType: {
                        required
                  },
                  dateIssue: {
                        required
                  }
            }
      }
}
</script>