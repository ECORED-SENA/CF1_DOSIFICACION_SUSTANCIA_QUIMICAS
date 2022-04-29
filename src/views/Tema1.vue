<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido    
      .titulo-principal__numero
        span 1
      h1 Plan de muestreo

    .row.justify-content-end.align-items-center.mt-5 
      .col-lg-9.ps-5.index_img(data-aos="fade-left") 
        p.mt-5.mb-4 Para iniciar el monitoreo de agua por medio de la toma de muestras, se deben tener en cuenta ciertos parámetros o consideraciones previas a iniciar el muestreo, estas son algunas de ellas:
        ul.lista-ul--color
          li 
            i.fas.fa-regular.fa-flask
            p.mb-0.lh-1 <b>Establecer el plan de muestreo.</b>
          li 
            i.fas.fa-regular.fa-flask
            p.mb-0.lh-1 <b>Identificar el lugar de la toma de muestra.</b>
          li 
            i.fas.fa-regular.fa-flask
            p.mb-0.lh-1 <b>Determinar las características de la corriente de agua.</b>
          li 
            i.fas.fa-regular.fa-flask
            p.mb-0.lh-1 <b>Variación de las características de la corriente en el tiempo.</b>
          li 
            i.fas.fa-regular.fa-flask
            p.mb-0.lh-1 <b>Variaciones de temperatura. </b>

    .row.justify-content-start.align-items-center     
      .col-lg-4.margin_top.d-none.d-lg-block
          img.grandor_img.margin_img(src='@/assets/curso/tema1/img01.png' alt='')(data-aos="zoom-in") 

    p.mt-5 Los planes de muestreo están diseñados para determinar las características físicas, químicas y microbiológicas de algún cuerpo de agua específico, con el uso de este plan se proporciona un modelo de guía para las personas que van a realizar la muestra y de esta manera reducir errores en ella, además de que minimiza la posibilidad de que los resultados salgan mal.

    .row.justify-content-center.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img02.svg' alt='AvatarTop')
          .tarjeta.color.bg_color1
            .p-4
              p Un plan de muestreo debe incluir elementos específicos acerca de lugares o sitios de muestreo, métodos y técnicas, número de muestras y clases de muestras. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img03.svg' alt='AvatarTop')
          .tarjeta.color.bg_color1
            .p-4
              p Dichos planes ayudan a garantizar que los resultados del muestreo cumplan los objetivos del proyecto o programa de calidad del agua.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop')
          .tarjeta.color.bg_color1
            .p-4
              p Las cuales deben estar sometidas a las diferentes leyes establecidas por los organismos estatales.

    p.mb-4 Para el muestreo de aguas se maneja una diversa cantidad de equipos, pero estos se pueden clasificar según el lugar en donde se necesite tomar la muestra. A continuación, se verán algunos de estos equipos según su lugar de uso, ver tabla 1.

    .row.justify-content-start.align-items-center.mt-5.ms-1           
      .col-lg-7
        .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block             
          .col-lg-11.ps-2
            h5.mb-0.ps-3 Importancia del alistamiento de la toma de muestras
        .row.justify-content-start.align-items-center.mb-4(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block.margin_top2
            img.grandor_img(src='@/assets/curso/tema1/img05.svg',alt='') 

    p.mb-4 Las principales razones de la importancia del alistamiento de las tomas de muestras tienen que ver con la necesidad de verificar si se cuenta con todos los implementos para lograr identificar la calidad del recurso objeto de análisis, bien sea cuencas de agua dulce, salada, agua para consumo humano y la estimación de los flujos de contaminantes y nutrientes vertidos a los ríos o aguas subterráneas, lagos y océanos, o a través de fronteras internacionales.

    .row.mt-4.mb-4           
      .col-lg-12
        .cajon.color-primario.bg_color2.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0.px-4 Debido a que el recurso hídrico tiene gran cantidad de usos, el alistamiento debe reflejar no solo las necesidades de equipos, instrumentación y reactivos sino también incluir información de los diferentes usuarios involucrados, dentro de esa información se sugiere de acuerdo con el Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM], (2017):

    .row.justify-content-center.mb-5
      .col-lg-8
        SlyderF(columnas="col-12")
          .tarjeta.color.bg_slyder.p-4
            .row.justify-content-center
              .col-lg-6.my-2
                img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
              .col-lg-6.align-self-end
                p Las posibles variables químicas o biológicas presentes en el agua que puedan generar un deterioro en el recurso.

          .tarjeta.color.bg_slyder.p-4
            .row.justify-content-center
              .col-lg-6.my-2
                img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')
              .col-lg-6.align-self-end
                p La relación existente entre la calidad y la cantidad de agua en el cuerpo de agua a estudiar.

          .tarjeta.color.bg_slyder.p-4
            .row.justify-content-center
              .col-lg-6.my-2
                img(src='@/assets/curso/tema1/img08.svg' alt='AvatarTop')
              .col-lg-6.align-self-end
                p El establecimiento de límites permisibles, teniendo en cuenta normatividad aplicable a la región.

          .tarjeta.color.bg_slyder.p-4
            .row.justify-content-center
              .col-lg-6.my-2
                img(src='@/assets/curso/tema1/img09.svg' alt='AvatarTop')
              .col-lg-6.align-self-end
                p Observación histórica de la afectación de la calidad del agua por procesos naturales.

          .tarjeta.color.bg_slyder.p-4
            .row.justify-content-center
              .col-lg-6.my-2
                img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
              .col-lg-6.align-self-end
                p La capacidad del cuerpo de agua para asimilar el incremento de vertimientos puntuales sin causar altos niveles de contaminación.

          .tarjeta.color.bg_slyder.p-4
            .row.justify-content-center
              .col-lg-6.my-2
                img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
              .col-lg-6.align-self-end
                p Las comunidades cercanas a la zona.

          .tarjeta.color.bg_slyder.p-4
            .row.justify-content-center
              .col-lg-6.my-2
                img(src='@/assets/curso/tema1/img12.svg' alt='AvatarTop')
              .col-lg-6.align-self-end
                p Si han existido estrategias de control y de las acciones de gestión en el manejo de la calidad del agua.

          .tarjeta.color.bg_slyder.p-4
            .row.justify-content-center
              .col-lg-6.my-2
                img(src='@/assets/curso/tema1/img13.svg' alt='AvatarTop')
              .col-lg-6.align-self-end
                p Si existe algún riesgo asociado a delincuencia o violencia que pueda afectar la toma de la muestra.

    .bg_img15
      .row.justify-content-center.align-items-center.mt-5           
        .col-lg-10(data-aos="slide-left")
          .titulo-sexto.color-acento-contenido 
            h5 Tabla 1. Equipos de muestreo 
          .tabla-a.color-primario.mb-5 
            table
              caption Nota. SENA, (2021).
              thead
                tr
                  th AGUAS SUBTERRÁNEAS
                  th AGUAS SUPERFICIALES
                  th SEDIMENTOS
                  th PRECIPITACIÓN
              tbody
                tr
                  td <b>Bomba peristáltica:</b> estas bombas están diseñadas para utilizar en campo ya que son impermeables. Se pueden utilizar en todas las posiciones y se han desarrollado para ser usadas a largo plazo y en las condiciones menos favorables.
                  td <b>Muestreador de agua Van Dorn:</b> este dispositivo se ha desarrollado para toma de muestras en aguas abiertas, pero aun así la poca profundidad de agua no provoca aparición de contaminantes que presenten riesgos a la muestra. 
                  td <b>Disco de Secchi:</b> es un sistema sencillo el cual se utiliza para medir la turbidez del agua, el disco desciende en el agua atado a un hilo y cuando ya no es visible se lee la profundidad que marca el hilo. 
                  td <b>Pluviómetro:</b>  es un instrumento que es utilizado para medir el agua precipitada en algún sitio determinado. 
                tr
                  td <b>Bomba de bolas motorizada:</b> estos instrumentos son utilizados para bombear agua subterránea que será analizada. Están formadas por un tubo con una válvula de retención con válvula esférica en el extremo inferior.
                  td <b>Muestreador de agua Kemmerer:</b> este muestreador es utilizado para la toma de muestras en lagos, canales, balsas y también en el mar. Está formado únicamente por plástico para asegurar que la muestra no esté en contacto con ningún metal.
                  td <b>Recipiente de detección de cieno:</b> este recipiente nos permite determinar la profundidad de una capa de residuos o sedimentos.
                  td <b>Pluviógrafo:</b> en este dispositivo se registra gráficamente la cantidad de agua que se precipita en un periodo de tiempo específico lo cual permite conocer la distribución e intensidad de las lluvias. 
                tr
                  td <b>Conjunto de bomba sumergible:</b> la gran capacidad de esta bomba permite bombear un punto de medición rápidamente.
                  td <b>Muestreador continuo portátil automático:</b> este muestreador puede ser utilizado de manera continua o en intervalos en arroyos, ríos y lagos.
                  td <b>Dragas Van Veen:</b> son utilizadas para tomar muestras de los fondos de lagos, ríos y demás cuerpos de agua. Se compone de una draga la cual desciende abierta y al tomar el fondo se cierra permitiendo así la toma de la muestra.
                  td

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10 
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img16.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Además, un plan de muestreo debe tener en cuenta lo siguiente: 
              br
              br
            ul.lista-ul--color
              li  
                i.fas.fa-solid.fa-clipboard-check
                p.mb-0 La ubicación del POA: dónde y cómo se tomará la muestra. 
              li  
                i.fas.fa-solid.fa-clipboard-check
                p.mb-0 El procedimiento o método de muestreo a llevar a cabo.  
              li  
                i.fas.fa-solid.fa-clipboard-check
                p.mb-0 Los equipos de muestreo que se utilizarán y su respectiva calibración. 
              li  
                i.fas.fa-solid.fa-clipboard-check
                p.mb-0 Se deben proveer los recipientes de muestreo de acuerdo con las necesidades de la muestra.
              li  
                i.fas.fa-solid.fa-clipboard-check
                p.mb-0 El almacenamiento de las muestras tomadas. 
              li  
                i.fas.fa-solid.fa-clipboard-check
                p.mb-0 Es necesario la identificación y etiquetado de las muestras.  
        
    p Para la correcta elaboración de este plan es necesario comprender la Norma Técnica Colombiana NTC-5667 de 1995 en donde especifican las directrices a tener en cuenta para el diseño de los programas de muestreo. 

    .row
      .col-lg-12
        .row.justify-content-start.align-items-center.mt-5.ms-1           
          .col-lg-8
            .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
              .col-1.p-0.d-none.d-lg-block             
              .col-lg-11.ps-2
                h5.mb-0 Localización del muestreo
            .row.justify-content-start.align-items-center.mb-4(data-aos="fade-left")
              .col-1.p-0.d-none.d-lg-block.margin_top2
                img.grandor_img(src='@/assets/curso/tema1/img05.svg',alt='') 
            p.mb-4 El muestreo de aguas puede tener diferentes fines que van desde conocer las características de la fuente de suministro, hasta determinar las condiciones que presenta un vertimiento. Para localizar el sitio de muestreo debe especificarse concretamente el fin de la muestra y el tipo de agua que se quiere muestrear, ya dependiendo de esto se especifica el lugar exacto y protocolo aplicable para la actividad.
            p En cualquier caso, siempre es necesario dejar registro detallado del lugar de la toma, incluso si se dispone de GPS se puede posicionar satelitalmente la ubicación.   
          .col-lg-4.d-none.d-lg-block
            img.mb-4(data-aos="zoom-in")(src='@/assets/curso/tema1/img19.png', alt='')  
    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        p(data-aos="fade-down").mt-5.bg_cajon.p-3.text-center De manera general la información requerida al momento del muestreo debe ser como mínimo, la siguiente (Instituto Nacional de Tecnología Agropecuaria [INTA], 2011, p. 3):
      img.img-a.img-t.mt-5(data-aos="slide-left")(src='@/assets/curso/tema1/img20.svg', alt='')
    .row.mb-5.justify-content-center.mt-5
      .col-lg-10
        .bloque-texto-c.color.bg_color2.p-4
          i.fas.fa-quote-right
          h5.mb-2.mt-3 Igualmente dependiendo del fin de la muestra es posible que se requiera previamente a la actividad, realizar el lavado y desinfección del punto de muestreo para reducir el riesgo de contaminación por presencia de agentes, elementos o compuestos que puedan estar presentes en la estructura debido a su entorno. Para esto es común emplear diferentes agentes como hipoclorito de sodio o calcio.
          span - Ortiz, 2011, p. 33
          

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
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
