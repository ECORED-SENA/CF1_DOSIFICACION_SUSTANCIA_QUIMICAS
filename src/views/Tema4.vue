<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.text-white 4
      h1 Características físicas y químicas del agua
    p La importancia del agua es capital, pero más allá de ello lo cierto es que este elemento tiene diferentes propiedades de interés a nivel científico. A continuación, se describirán algunas de las principales características físicas y químicas del agua: 

    separador
</template>
<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
