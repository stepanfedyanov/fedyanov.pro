<template>
  <div class="container">
    <TheMain />
    <TheExperience />
    <TheContacts />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$i18n.locale = 'en';
  },
  setup() {
    useSeoMeta({
      title: 'Fedyanov Stepan – Frontend Developer | CV',
      ogTitle: 'Fedyanov Stepan – Frontend Developer | CV',
      description:
        'Frontend developer in VueJS. Currently an intern at the Art. Lebedev Studio. I have developed over 20 projects, 15 of which received the highest rating from the client. I was awarded the special status "Rising Star" for my speed and quality of work.',
      ogDescription:
        'Frontend developer in VueJS. Currently an intern at the Art. Lebedev Studio. I have developed over 20 projects, 15 of which received the highest rating from the client. I was awarded the special status "Rising Star" for my speed and quality of work.',
      ogImage: '/ogImageEn.png',
      twitterCard: 'summary_large_image',
    });
  },
};
</script>
