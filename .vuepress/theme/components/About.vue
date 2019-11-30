<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero"></header>
    <div class="footer" v-if="data.footer">{{ data.footer }}</div>
  </main>
</template>
<script>
export default {
  name: "About",
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>