<template>
  <Header />
  <transition name="fade" mode="in-out">
    <router-view />
  </transition>
  <Footer />
</template>

<script>
import Header from "@/components/ui/Header.vue";
import Footer from "@/components/ui/Footer.vue";
export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style></style>
