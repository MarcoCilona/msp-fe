<template lang="pug">
.ph-5.contact
  .contact-form
    h5 Contattaci
    q-form.q-gutter-md(@submit="onSubmit", @reset="onReset")
      q-input(v-model='name', label='Name', lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']")
      q-input(v-model='email', label='Email', type="email", lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']")
      q-input(v-model='company', label='Company', lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']")
      q-input(v-model='message', label='Message', autogrow, :rules="[ val => val && val.length > 0 || 'Please type something']")
      .actions
        q-btn(label="Reset" type="reset" color="primary" flat class="q-ml-sm")
        q-btn(label="Submit" type="submit" color="primary")
  .company-info
    h5.mb-0 Dove siamo
    span Via Gorizia, 42 • 21047 SARONNO (VA) - ITALIA
    iframe.mt-7(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.050012268882!2d9.029719915468679!3d45.60963893174808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478693efb8ab7111%3A0x7e8c71ba504dddda!2sMaspe%20s.a.s%20di%20Demurtas%20Laura%20%26%20C.!5e0!3m2!1sit!2sit!4v1595280545097!5m2!1sit!2sit" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContactPage extends Vue {
  name: string = '';
  email: string = '';
  company: string = '';
  message: string = '';

  onSubmit() {
    this.$q.notify({
      color: 'green-4',
      icon: 'cloud_done',
      message: 'Submitted',
      textColor: 'white'
    });
  }

  onReset() {
    this.name = '';
    this.email = '';
    this.company = '';
    this.message = '';
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

.actions {
  display: flex;
  justify-content: flex-end;
}

.contact {
  display: block;
}

.company-info {
  width: 100%;

  iframe {
    height: 400px;
    width: 100%;
  }
}

.contact-form {
  width: 100%;
}

@include respond-above(sm) {
  .contact {
    display: inline-flex;
  }

  .company-info {
    width: 50%;

    iframe {
      height: 100%;
      max-height: 383px;
      width: 80%;
    }
  }

  .contact-form {
    width: 50%;
  }
}
</style>
