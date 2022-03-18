<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.text-white 1
      h1 Plan de muestreo
    
    p Para iniciar el monitoreo de agua por medio de la toma de muestras, se deben de tener en cuenta ciertos parámetros o consideraciones previas a iniciar el muestreo, estas son algunas de ellas:

        .row.mb-4.flex-container 
          .col-lg-2
          .col-lg-3
            img(src='@/assets/curso/tema1/1.png')
          .col-lg-6.p-4
            <br><br><br><br>
            ul.lista-ul--color.sss
              <br>
              li.ss 
                i.fas.fa-check
                | Establecer el plan de muestreo.
              li.ss 
                i.fas.fa-check
                | Identificar el lugar de la toma de muestra.                   
              li.ss 
                i.fas.fa-check
                | Determinar las características de la corriente de agua.
              li.ss 
                i.fas.fa-check
                | Variación de las características de la corriente en el tiempo.
              li.ss 
                i.fas.fa-check
                | Variaciones de temperatura.
              <br>

    p.mt-4 Los planes de muestreo están diseñados para determinar las características físicas, químicas y microbiológicas de algún cuerpo de agua específico, con el uso de este plan se proporciona un modelo de guía para las personas que van a realizar la muestra y de esta manera reducir errores en ella, además de que minimiza la posibilidad de que los resultados salgan mal.
    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__contenido.p-4.p-xl-5(:style="{'background-image': `url(${require('@/assets/curso/tema1/2.1.png')})`}")
              <br><br><br><br><br><br>
            .tarjeta-flip__img.p-4.p-xl-5(:style="{'background-image': `url(${require('@/assets/curso/tema1/ss.png')})`}")
              <br>
              p.text-center Un plan de muestreo debe incluir elementos específicos acerca de lugares o sitios de muestreo, métodos y técnicas, número de muestras y clases de muestras. 

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.p-xl-5(:style="{'background-image': `url(${require('@/assets/curso/tema1/ss1.png')})`}")
              <br>
              p.text-center Dichos planes ayudan a garantizar que los resultados del muestreo cumplan los objetivos del proyecto o programa de calidad del agua.
            .tarjeta-flip__contenido.p-4.p-xl-5(:style="{'background-image': `url(${require('@/assets/curso/tema1/3.1.png')})`}")
              <br><br><br><br><br><br>

      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.p-xl-5(:style="{'background-image': `url(${require('@/assets/curso/tema1/ss.png')})`}")
              <br>
              p.text-center Las cuales deben estar sometidas a las diferentes leyes establecidas por los organismos estatales.
            .tarjeta-flip__contenido.p-4.p-xl-5(:style="{'background-image': `url(${require('@/assets/curso/tema1/4.1.png')})`}")
              <br><br><br><br><br><br>


    p.mb-4 Para el muestreo de aguas se manejan una diversa cantidad de equipos, pero estos se pueden clasificar según el lugar en donde se necesite tomar la muestra, A continuación, se verán algunos de estos equipos según su lugar de uso, ver tabla 1.
    <br>
    h2 Importancia del alistamiento de la toma de muestras

    .row.mt-4.p-4

      .col-sm-8.mt-4
        p.mb-4.fondo1 Las principales razones de la importancia del alistamiento de las tomas de muestras tienen que ver con la necesidad de verificar si se cuenta con todos los implementos para lograr identificar la calidad del recurso objeto de análisis, bien sea cuencas de agua dulce, salada, agua para consumo humano y la estimación de los flujos de contaminantes y nutrientes vertidos a los ríos o aguas subterráneas, lagos y océanos, o a través de fronteras internacionales.
        <br>
        p.fondo2 Debido a que el recurso hídrico tiene gran cantidad de usos, el alistamiento debe reflejar no solo las necesidades de equipos, instrumentación y reactivos sino también incluir información de los diferentes usuarios involucrados, dentro de esa información se sugiere de acuerdo al Instituto de hidrología, meteorología y estudios ambientales [IDEAM], (2017):
      .col-sm-4.mt-4
        figure.mt-4
          img.mb-4(src='@/assets/curso/tema1/5.png')

    

    .row.BGI2 
      .row 
        .col-md-1
        .col-md-10
          .row.mt-4
            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/i1.svg' alt='AvatarTop')
                .tarjeta.lll
                  .p-4
                    <br>
                    p Las posibles variables químicas o biológicas presentes en el agua que puedan generar un deterioro en el recurso.
       
            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/i4.svg' alt='AvatarTop')
                .tarjeta.lll
                  .p-4
                    <br>
                    p La relación existente entre la calidad y la cantidad de agua en el cuerpo de agua a estudiar.

            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/i7.svg' alt='AvatarTop')
                .tarjeta.lll
                  .p-4
                    p El establecimiento de límites permisibles, teniendo en cuenta normatividad aplicable a la región.

            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/ico4.svg' alt='AvatarTop')
                .tarjeta.lll
                  .p-4
                    <br>
                    p Observación histórica de la afectación de la calidad del agua por procesos naturales.
            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/i5.svg' alt='AvatarTop')
                .tarjeta.lll
                  .p-4
                    p La capacidad del cuerpo de agua para asimilar el incremento de vertimientos puntuales sin causar altos niveles de contaminación.

            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/i3.svg' alt='AvatarTop')
                .tarjeta.lll
                  .p-4
                    <br>
                    p Las comunidades cercanas a la zona.
                    <br>
            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/ico7.svg' alt='AvatarTop')
                .tarjeta.lll
                  .p-4
                    <br>
                    p Si han existido estrategias de control y de las acciones de gestión en el manejo de la calidad del agua.

            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/i2.svg' alt='AvatarTop')
                .tarjeta.lll
                  .p-4
                    <br>
                    p Si existe algún riesgo asociado a delincuencia o violencia que pueda afectar la toma de la muestra.
      
      .row.mt-4
        .col-sm-1
        .col-sm-10
          p <strong>Tabla 1.</strong> Equipo de muestreo
          .tabla-a.color-acento-contenido.mb-5 
            table
              caption Nota. SENA, (2021).
              thead.rs
                tr
                  th AGUAS SUBTERRÁNEAS
                  th AGUAS SUPERFICIALES
                  th SEDIMENTOS
                  th PRECIPITACIÓN
              tbody
                tr
                  td <strong>Bomba peristáltica:</strong> Estas bombas están diseñadas para utilizar en campo ya que son impermeables. Se pueden utilizar en todas las posiciones y se han desarrollado para ser usadas a largo plazo y en las condiciones menos favorables. 
                  td <strong>Muestreador de agua Van Dorn:</strong> Este dispositivo se ha desarrollado para toma de muestras en aguas abiertas, pero aun así la poca profundidad de agua no provoca aparición de contaminantes que presenten riesgos a la muestra. 
                  td <strong>Disco de Secchi:</strong> Es un sistema sencillo el cual se utiliza para medir la turbidez del agua, el disco desciende en el agua atado a un hilo y cuando ya no es visible se lee la profundidad que marca el hilo. 
                  td <strong>Pluviómetro:</strong> Es un instrumento que es utilizado para medir el agua precipitada en algún sitio determinado.  
                  
                tr
                  td <strong>Bomba de bolas motorizada:</strong> Estos instrumentos son utilizados para bombear agua subterránea que será analizada. Están formadas por un tubo con una válvula de retención con válvula esférica en el extremo inferior.
                  td <strong>Muestreador de agua Kemmerer: </strong> Este muestreador es utilizado para la toma de muestras en lagos, canales, balsas y también en el mar. Está formado únicamente por plástico para asegurar que la muestra no esté en contacto con ningún metal. 
                  td <strong>Recipiente de detección de cieno:</strong> Este recipiente nos permite determinar la profundidad de una capa de residuos o sedimentos. 
                  td <strong>Pluviógrafo:</strong> En este dispositivo se registra gráficamente la cantidad de agua que se precipita en un periodo de tiempo específico lo cual permite conocer la distribución e intensidad de las lluvias. 

                tr
                  td <strong>Conjunto de bomba sumergible:</strong> La gran capacidad de esta bomba permite bombear un punto de medición rápidamente. 
                  td <strong>Muestreador continuo portátil automático:</strong> Este muestreador puede ser utilizado de manera continua o en intervalos en arroyos, ríos y lagos. 
                  td <strong>Dragas Van Veen:</strong> Son utilizadas para tomar muestras de los fondos de lagos, ríos y demás cuerpos de agua. Se compone de una draga la cual desciende abierta y al tomar el fondo se cierra permitiendo así la toma de la muestra.
                  td 


      p Además, un plan de muestreo debe tener en cuenta lo siguiente:
      
      .row.justify-content
        .col-md-4
          img.mb-4.p-4.mt-4.wi(src='@/assets/curso/tema1/8.png')
        .col-md-7.p-1
          <br><br><br>
            ul.lista-ul--color.sssa
              <br>
              li.ss 
                i.fas.fa-check
                | La ubicación del POA: dónde y cómo se tomará la muestra. 

              li.ss 
                i.fas.fa-check
                | El procedimiento o método de muestreo a llevar a cabo. 
                 
              li.ss 
                i.fas.fa-check
                | Los equipos de muestreo que se utilizarán y su respectiva calibración. 

              li.ss 
                i.fas.fa-check
                | Se deben proveer los recipientes de muestreo de acuerdo con las necesidades de la muestra.

              li.ss 
                i.fas.fa-check
                | El almacenamiento de las muestras tomadas. 
              li.ss
                i.fas.fa-check
                | Es necesario la identificación y etiquetado de las muestras. 

              <br>

      .row.justify-content-center.mb-4
        .col-lg-9.cajon.color-primario.p-4
          p Para la correcta elaboración de este plan es necesario comprender la Norma Técnica Colombiana NTC-5667 de 1995 en donde especifican las directrices a tener en cuenta para el diseño de los programas de muestreo.

    .row.p-4
      .col-sm-6.mt-4
        h3 Localización del muestreo
        p.mb-4 El muestreo de aguas puede tener diferentes fines que van desde conocer las características de la fuente de suministro, hasta determinar las condiciones que presenta un vertimiento. Para localizar el sitio de muestreo debe especificarse concretamente el fin de la muestra y el tipo de agua que se quiere muestrear, ya dependiendo de esto se especifica el lugar exacto y protocolo aplicable para la actividad.
        p En cualquier caso, siempre es necesario dejar registro detallado del lugar de la toma, incluso si se dispone de GPS se puede posicionar satelitalmente la ubicación.
        p De manera general la Información requerida al momento del muestreo debe ser como mínimo, la siguiente (Instituto Nacional de Tecnología Agropecuaria [INTA], 2011, p. 3):
      .col-sm-6.mt-4
        figure.mt-6
          img.mb-4(src='@/assets/curso/tema1/9.png')

      .row.p-4.BGI7
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
