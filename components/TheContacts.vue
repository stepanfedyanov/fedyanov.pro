<template>
  <section class="the-contacts">
    <!-- <h2 class="title-2 the-contacts__title">{{ $t('footer.title') }}</h2> -->
    <div class="the-contacts__wrapper">
      <div class="the-contacts__column">
        <h3 class="title-3 the-contacts__column-title" v-html="$t('footer.contacts_title')" />
        <Contacts />
      </div>
      <!-- <div class="the-contacts__column">
        <h3 class="title-3 the-contacts__column-title">{{ $t('footer.form_title') }}</h3>
        <MessageForm />
      </div> -->
    </div>
  </section>
</template>

<style lang="sass" scoped>
.the-contacts
    margin-top: 100px
    @media (max-width: 800px)
        margin-top: 50px
    &__title
        width: 480px
        @media (max-width: 480px)
            width: 100%
    &__wrapper
        margin-top: 50px
        display: flex
        justify-content: space-between
    &__column
        width: 50%
        @media (max-width: 800px)
            width: 100%
</style>
