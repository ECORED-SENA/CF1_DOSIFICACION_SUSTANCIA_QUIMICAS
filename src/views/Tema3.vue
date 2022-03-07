<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.text-white 3
      h1 Buenas prácticas de laboratorio
    
    .row
      p Las Buenas Prácticas de Laboratorio (BPL) están definidas como un conjunto de reglas, procedimientos operativos y operacionales que están determinados por la Organization for Economic Cooperation and Development (OCDE), y se consideran como obligatorias para asegurar la calidad e integridad de los datos producidos en los procesos del laboratorio, esto con la finalidad de armonizar los protocolos, la información y la documentación de los procedimientos operativos del laboratorio. 
      .row.justify-content-center.mb-4
        .col-lg-12.cajon.color-primario.p-4
          p Estos requerimientos conforman una filosofía de trabajo, ya que son vistas como un sistema en el cual se analiza todos sus procesos desde el diseño hasta el archivo de los resultados. 
      .row.mb-4
        .col-md-1
        .col-md-10
          img(src='@/assets/curso/tema3/1.svg')
        .col-md-1
    <br>
    <br>
    <br>
      
      p.mb-4 Los laboratorios utilizados para el análisis fisicoquímico de muestras de agua deberán contar en sus instalaciones con los siguientes implementos de medición: 
      .row
        .col-md-2
        .col-md-9
          BotonesA.mb-5
    h2.mt-4.mb-4 Seguridad y salud en el trabajo de muestreo.
    <br>
    p.mt-4 De acuerdo a la Sociedad americana de química (2003), en su publicación seguridad en los laboratorios químicos académicos, prevenir accidentes de cualquier tipo en un laboratorio, es responsabilidad de todos los que usan este espacio de trabajo, por lo cual es necesario siempre una actitud cooperativa activa, es importante recordar que los accidentes que se pueden dar cuando se trabaja con insumos químicos bien sea dentro de un laboratorio o en pruebas de campo, suelen ser asociadas a:
    .row.BGI2.mt-4
      .col-md-2
      .col-md-8
        img(src='@/assets/curso/tema3/3.svg')
      p.mt-4 Cuando se menciona tomar un “Rol activo” hace referencia a seguir siempre las siguientes recomendaciones: 
      img(src='@/assets/curso/tema3/4.svg')
      p.mt-4 Para realizar la actividad de toma de muestras de aguas se debe garantizar que las personas cuenten con unos implementos de seguridad mínimos:
      .row
        .col-md-1
        .col-md-10  
          img(src='@/assets/curso/tema3/5.svg')
          img(src='@/assets/curso/tema3/6.svg')
    .row.p-4.mb-4
      .col-md-1
      .col-md-10
        img.mb-4(src='@/assets/curso/tema3/7.svg' alt='AvatarTop')
        .col-md-3
          a.anexo.mb-2.mb-lg-0(href="https://drive.google.com/open?id=1-0DBW0V7b86svVyc35atqrHHdsMOyW5u" target="_blank")
            img(src="@/assets/curso/tema2/btn.svg", style="width:150px").m-auto
    separador
    .row
      .col-md-4
        img.mb-4(src='@/assets/curso/tema3/8.svg')
      .col-md-8
        .col-md-2
          p.sp3.p-1.text-white En el laboratorio:
        p es de carácter obligatorio que, en la primera sesión en laboratorio, el instructor dé a conocer a los aprendices las normas y disposiciones generales de seguridad de este manual, explicándoles y haciendo las aclaraciones necesarias, dando lugar a la participación de los aprendices.
        p Así mismo, el instructor debe hacer un recorrido con sus aprendices por todas las instalaciones, mostrando y ubicando los diversos dispositivos relacionados con la seguridad, tales como salida de emergencia, ruta de evacuación, ubicación de extintores, botiquines de primeros auxilios, duchas de emergencia y fuente lavaojos.
        p Antes de las prácticas de campo o de laboratorio su instructor socializará las normas adecuadas para las actividades.
    <br>
    .row.mt-4
      h2.mb-4 Peligros químicos  
      p.mb-4 Las sustancias químicas pueden causar daño si no son manipuladas de forma adecuada y según protocolos, lo más importante por resaltar es que estas sustancias tienen diferentes características (tóxicas, inflamables, corrosivas y reactivas) y debe reconocerlas y saber cómo reaccionar en caso de accidentes.
      img(src='@/assets/curso/tema3/9.svg')
      


</template>
<script>
import BotonesA from '../components/BotonesA.vue'
export default {
  name: 'Tema3',
  components: {
    BotonesA,
  },
  data: () => ({
    indicadorImagenZoom: true,
  }),
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
