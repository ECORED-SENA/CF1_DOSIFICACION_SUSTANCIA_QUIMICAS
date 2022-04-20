<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido    
      .titulo-principal__numero
        span 5
      h1 Registro de información
    
    p.mb-4 Para la correcta representación de un monitoreo de agua es necesario contar con una planificación en donde se obtenga información preliminar del área de influencia, para esto se necesita de tres etapas las cuales serán descritas a continuación:

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Recolección de datos")
        p.mx-4 En esta etapa es donde se inicia el proceso de ejecución de la campaña de monitoreo, en el cual se realiza una planificación de las técnicas y procedimientos a utilizar, junto con los materiales y equipos que se van a requerir para el muestreo.
        .row.justify-content-center
            .col-lg-11
              .tarjeta-color.bg_color8 
                p.py-3.px-4 Los datos que se deben obtener son la georreferenciación del proyecto, fotografías donde se observen las características locales, los contactos de las personas encargadas del sitio de muestreo, factores externos como: vías de acceso, el tiempo requerido para el muestreo, los diferentes permisos que sean requeridos, el medio de transporte a utilizar y la forma de almacenar los materiales y las muestras posteriormente se realice el muestreo. 
        p.mx-4 Adicionalmente, es necesario contar con la planificación conjunta con el laboratorio para tener definidos los tiempos de entrega de las muestras y poder diligenciar los formatos una vez se haya realizado del trabajo de campo. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Administración de los datos")
        p.mb-2 Para poder utilizar de manera efectiva los datos se debe realizar un tratamiento, control, validación, difusión y una posterior publicación de los datos. Dentro de este proceso está la digitalización de los datos manuales. 
        p.mb-2 Antes de que pueda utilizar los datos y a pesar de que están en un formato adecuado, es importante comprobar la fiabilidad y exactitud de éstos. Algunos errores de transcripción y tratamiento podrían no ser evidentes hasta que los examinen los usuarios. 
        figure
          img.px-4(src='@/assets/curso/tema5/img01.svg')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Uso de la información")
        p.mb-2 Una vez realizada la recopilación de los datos hidrológicos se obtendrá una serie de información que será de utilidad para la toma de decisiones las cuales derivarán en estadísticas que serán de beneficio para la elaboración de futuros proyectos de desarrollo. 
        figure
          img.px-4(src='@/assets/curso/tema5/img02.svg')

    p.mb-4 Por tanto, finalmente la publicación de la información ya sea en sistemas de información hidrológica, boletines, estudios, informes, investigaciones, entre otros, es la manera de transmitir la información para la toma de decisiones. 
    p.mb-4 Los formatos utilizados al tomar la muestra son:

    .row.mb-5.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-md-5.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.text-center.tarjeta_t5.p-4
              img.mb-4(src='@/assets/curso/tema5/img03.svg')
              h4 Formato para captura de datos en campo
              .tarjeta-numerada__contenido
                p.mb-0 Se registra de inmediato toda la información que se obtiene en campo, las observaciones y los datos de la toma de muestra en un formato destinado para dicha actividad; este incluye aspectos como: propósito del muestreo; localización del sitio de muestreo, datos de la medición del caudal; descripción del punto; método de muestreo; fecha y hora de recolección; identificación del recolector; observaciones y mediciones de parámetros en campo. 
          .col-md-5.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.text-center.tarjeta_t5.p-4(@mouseover="mostrarIndicador = false")
              .indicador--hover(v-if="mostrarIndicador")
              img.mb-4(src='@/assets/curso/tema5/img04.svg')
              h4 Formato para control y vigilancia de la muestra
              .tarjeta-numerada__contenido
                p.mb-0 El formato de control y vigilancia se diligencia para cada una de las muestras o grupo de muestras; este formato incluye la siguiente información: número(s) de la(s) muestra(s); nombre de quien recolecta la muestra; fecha, hora, sitio de muestreo; tipo de muestra; parámetros a analizar, información de campo y observaciones.

    .bg_img15_t5
      p.mb-5.mx-5.px-5 Requisitos de identificación, etiquetado e información de la muestra. Al hacer toma de muestras de agua es importante registrar información sobre el sitio de muestreo y las observaciones realizadas allí, pues servirán para la interpretación de los resultados. La información requerida es la siguiente: 
      .row.justify-content-center.align-items-center.mb-5.mt-4           
        .col-lg-10 
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema5/img05.svg')})`}"
            )
            .bloque-texto-g__texto.p-3
              ul.lista-ul--color.mt-4(data-aos="fade-down")
                li  
                  i.lista-ul__vineta
                  p.mb-0 Nombre y ubicación del sitio. 
                li  
                  i.lista-ul__vineta
                  p.mb-0 Latitud, longitud y altitud del sitio. 
                li  
                  i.lista-ul__vineta
                  p.mb-0 Fecha y hora de toma de muestra. 
                li  
                  i.lista-ul__vineta
                  p.mb-0 Condiciones del tiempo en el momento de tomar la muestra y condiciones recientes como, por ejemplo: un día después de un aguacero torrencial. 
                li  
                  i.lista-ul__vineta
                  p.mb-0 Condiciones del sitio, como, por ejemplo: parece estar contaminado con materia orgánica, hay peces o plantas presentes, hay presencia de algas, etc. 
                li  
                  i.lista-ul__vineta
                  p.mb-0 Color y olor del agua.
                li  
                  i.lista-ul__vineta
                  p.mb-0 Claridad del agua, el agua se observa clara, turbia o lodosa. 
                li  
                  i.lista-ul__vineta
                  p.mb-0 Cualquier otra observación que considere significativa. 
                    br         

</template>
<script>
export default {
  name: 'Tema5',
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
