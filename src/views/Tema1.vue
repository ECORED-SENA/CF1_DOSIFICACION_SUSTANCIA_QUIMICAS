<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.text-white 1
      h1 Componentes del sistema socio ecológico
    
    p Para iniciar el monitoreo de agua por medio de la toma de muestras, se deben de tener en cuenta ciertos parámetros o consideraciones previas a iniciar el muestreo, estas son algunas de ellas:

        .row.mb-4 
          .col-lg-2
          .col-lg-8
            figure(data-aos="flip-up")
              img(src='@/assets/curso/tema1/1.svg')
          .col-lg-2

    p.mt-4 Los planes de muestreo están diseñados para determinar las características físicas, químicas y microbiológicas de algún cuerpo de agua específico, con el uso de este plan se proporciona un modelo de guía para las personas que van a realizar la muestra y de esta manera reducir errores en ella, además de que minimiza la posibilidad de que los resultados salgan mal.
    .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario.mt-4.mb-4(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5        
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/2.1.png')})`}") 
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario.mt-4.mb-4(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/3.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5        
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/3.1.png')})`}") 
              <br>
              <br>
              <br>
              <br>
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario.mt-4.mb-4(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/4.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5        
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/4.1.png')})`}") 


    p.mb-4 Para el muestreo de aguas se manejan una diversa cantidad de equipos, pero estos se pueden clasificar según el lugar en donde se necesite tomar la muestra, A continuación, se verán algunos de estos equipos según su lugar de uso, ver tabla 1.
    <br>
    h2 Importancia del alistamiento de la toma de muestras

    .row.mt-4.p-4.BGI2

      .col-sm-8.mt-4
        p.mb-4 Las principales razones de la importancia del alistamiento de las tomas de muestras tienen que ver con la necesidad de verificar si se cuenta con todos los implementos para lograr identificar la calidad del recurso objeto de análisis, bien sea cuencas de agua dulce, salada, agua para consumo humano y la estimación de los flujos de contaminantes y nutrientes vertidos a los ríos o aguas subterráneas, lagos y océanos, o a través de fronteras internacionales.
        <br>
        <br>
        p Debido a que el recurso hídrico tiene gran cantidad de usos, el alistamiento debe reflejar no solo las necesidades de equipos, instrumentación y reactivos sino también incluir información de los diferentes usuarios involucrados, dentro de esa información se sugiere de acuerdo al Instituto de hidrología, meteorología y estudios ambientales [IDEAM], (2017):
      .col-sm-4.mt-4
        figure.mt-4
          img.mb-4(src='@/assets/curso/tema1/5.png')

    

      row.p-4
        img.mb-4.mt-4(src='@/assets/curso/tema1/6.svg')
        <br>
        img.mb-4(src='@/assets/curso/tema1/7.svg')

    p Además, un plan de muestreo debe tener en cuenta lo siguiente:
      
      img.mb-4.p-4.mt-4(src='@/assets/curso/tema1/8.svg')
      .row.justify-content-center.mb-4
        .col-lg-9.cajon.color-primario.p-4
          p Para la correcta elaboración de este plan es necesario comprender la Norma Técnica Colombiana NTC-5667 de 1995 en donde especifican las directrices a tener en cuenta para el diseño de los programas de muestreo.

    .row.p-4
      .col-sm-6.mt-4
        h2 Localización del muestreo.
        p.mb-4 El muestreo de aguas puede tener diferentes fines que van desde conocer las características de la fuente de suministro, hasta determinar las condiciones que presenta un vertimiento. Para localizar el sitio de muestreo debe especificarse concretamente el fin de la muestra y el tipo de agua que se quiere muestrear, ya dependiendo de esto se especifica el lugar exacto y protocolo aplicable para la actividad.
        p En cualquier caso, siempre es necesario dejar registro detallado del lugar de la toma, incluso si se dispone de GPS se puede posicionar satelitalmente la ubicación.
        p De manera general la Información requerida al momento del muestreo debe ser como mínimo, la siguiente (Instituto Nacional de Tecnología Agropecuaria [INTA], 2011, p. 3):
      .col-sm-6.mt-4
        figure.mt-6
          img.mb-4(src='@/assets/curso/tema1/9.png')

      .row.p-4
        .col-sm-1
        .col-sm-4
          img.mb-4(src='@/assets/curso/tema1/10.svg')
        .col-sm-7.mt-4
          SlyderF(columnas="col-12")
              .row.p-4
                img.mb-4(src='@/assets/curso/tema1/11.svg')
              .row.p-4
                img.mb-4(src='@/assets/curso/tema1/12.svg')
              .row.p-4
                img.mb-4(src='@/assets/curso/tema1/13.svg')
              .row.p-4
                img.mb-4(src='@/assets/curso/tema1/14.svg')
              .row.p-4
                img.mb-4(src='@/assets/curso/tema1/15.svg')
              .row.p-4
                img.mb-4(src='@/assets/curso/tema1/16.svg')
              .row.p-4
                img.mb-4(src='@/assets/curso/tema1/17.svg')
              .row.p-4
                img.mb-4(src='@/assets/curso/tema1/18.svg')
              .row.p-4
                img.mb-4(src='@/assets/curso/tema1/19.svg')
    p Igualmente dependiendo del fin de la muestra es posible que se requiera previamente a la actividad, realizar el lavado y desinfección del punto de muestreo para reducir el riesgo de contaminación por presencia de agentes, elementos o compuestos que puedan estar presentes en la estructura debido a su entorno. Para esto es común emplear diferentes agentes como hipoclorito de sodio o calcio (Ortiz, 2011, p. 33).


  
</template>
<script>
import BotonesA from '../components/BotonesA.vue'
export default {
  name: 'Tema1',
  components: {
    BotonesA,
  },
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
