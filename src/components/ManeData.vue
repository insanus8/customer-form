<template>
      <fieldset class="from__group">
            <legend class="from__titel">Регистрация клиента</legend>
            <span class="from__grid">
                  <label class="from__item">
                        <span class="required">Фамилия</span>
                        <input class="from__input" 
                        v-model.trim="maneData.surname" 
                        :class="$v.maneData.surname.$error ? 'is-invalid' : ''"
                        type="text" placeholder="Громов">
                        <span v-if="$v.maneData.surname.$error" class="from__message">Введите вашу фамилию</span>
                  </label>
                  <label class="from__item">
                        <span class="required">Имя</span>
                        <input class="from__input" 
                        v-model.trim="maneData.name"
                        :class="$v.maneData.name.$error ? 'is-invalid' : ''"
                        type="text" placeholder="Алексей">
                        <span v-if="$v.maneData.name.$error" class="from__message">Введите ваше имя</span>
                  </label>
                  <label class="from__item">
                        <span>Отчество</span>
                        <input class="from__input" v-model.trim="maneData.lastName" type="text" placeholder="Викторович">
                  </label>
                  <label class="from__item">
                        <span class="required">Дата рождения</span>
                        <input class="from__input" 
                        v-model="maneData.dateBirth"
                        :class="$v.maneData.dateBirth.$error ? 'is-invalid' : ''"
                        type="date">
                        <span v-if="$v.maneData.dateBirth.$error" class="from__message">Введите вашу дату рожденияя</span>
                  </label>
                  <label class="from__item">
                        <span class="required">Номер телефона</span>
                        <input class="from__input" @keydown.space.prevent="''"
                        v-model="maneData.phone" 
                        :class="$v.maneData.phone.$error ? 'is-invalid' : ''"
                        type="tel" placeholder="79999999999"
                        maxlength="11">
                        <span v-if="!$v.maneData.phone.required && $v.maneData.phone.$dirty" 
                        class="from__message">Введите ваш номер телефона</span>
                        <span v-else-if="!$v.maneData.phone.numeric && $v.maneData.phone.required && $v.maneData.phone.$dirty" 
                        class="from__message">Введите корректный номер телефона</span>
                        <span v-else-if="!$v.maneData.phone.minLength && $v.maneData.phone.required && $v.maneData.phone.$dirty" 
                        class="from__message">Введенный номер телефона слишком короткий</span>
                        <span v-else-if="!$v.maneData.phone.maxLength && $v.maneData.phone.required && $v.maneData.phone.$dirty" 
                        class="from__message">Введенный номер телефона слишком длиный</span>
                        <span v-else-if="!$v.maneData.phone.firstCharacterSeven && $v.maneData.phone.required && $v.maneData.phone.$dirty" 
                        class="from__message">Номер телефона должен начинаться с 7</span>
                  </label>
                  <label class="from__item">
                        <span>Пол</span>
                        <input class="from__input" v-model.trim="maneData.gender" type="text" placeholder="мужской">
                  </label>
                        <label class="from__item">
                        <span class="required">Группа клиентов</span>
                        <select class="from__input select" 
                        multiple aria-label="выберите вышу группу"
                        v-model="maneData.grops"
                        :class="$v.maneData.grops.$error ? 'is-invalid' : ''">
                              <option 
                                    class="select__item"
                                    v-for="(group, index) in maneData.clientGroup" 
                                    :key="index"
                                    :value='group.value'>
                                    {{group.label}}
                              </option>
                        </select>
                        <span v-if="$v.maneData.grops.$error" class="from__message">Выберите хотябы одну группу</span>
                  </label>
                  <label class="from__item">
                        <span>Лечащий врач</span>
                        <select class="from__input select" aria-label="выберите лечащего врача" v-model="maneData.attendingDoctor">
                              <option 
                                    v-for="(doctor, index) in maneData.doctors" 
                                    :key="index"
                                    :value='doctor.value'>
                                    {{doctor.label}}
                              </option>
                        </select>
                  </label>
                  <label class="from__item from__item--check">
                        <input class="checkbox" type="checkbox" v-model="maneData.noAgreeWithSendingSMS">
                        <span>Не отправлять СМС</span>
                  </label>
            </span>
      </fieldset>
</template>
<script>
import { required, numeric, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
      data() {
            return {
                  maneData: {
                        surname: '',
                        name: '',
                        lastName: '',
                        dateBirth: '',
                        phone: '',
                        gender: '',
                        grops: [],
                        clientGroup: [
                              {
                                    label: 'VIP',
                                    value: 'VIP'
                              },
                              {
                                    label: 'Проблемные',
                                    value: 'Problematic'
                              },
                              {
                                    label: 'ОМС',
                                    value: 'OMC'
                              },
                        ],
                        doctors: [
                              {
                                    label: 'Иванов',
                                    value: 'Ivanov'
                              },
                              {
                                    label: 'Захаров',
                                    value: 'Zakharov'
                              },
                              {
                                    label: 'Чернышева',
                                    value: 'Chernysheva'
                              }
                        ],
                        attendingDoctor: 'Ivanov',
                        noAgreeWithSendingSMS: false,
                  }
            }
      },
      validations: {
            maneData: {
                  surname: {
                        required
                  },
                  name: {
                        required
                  },
                  dateBirth: {
                        required
                  },
                  phone: {
                        required,
                        numeric,
                        minLength: minLength(11),
                        maxLength: maxLength(11),
                        firstCharacterSeven(value) {
                              return value[0] === '7'
                        }
                  },
                  grops: {
                        required
                  },
            }
      }
}
</script>
