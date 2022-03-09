<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.text-white 5
      h1 Registro de información
    .row.mt-4.bgls
      p.mt-4 Para la correcta representación de un monitoreo de agua es necesario contar con una planificación en donde se obtenga información preliminar del área de influencia, para esto se necesita de tres etapas las cuales serán descritas a continuación:
      TabsB.color-acento-contenido.mb-5
          .py-4.py-md-5(titulo="The splendor of the mystery" :icono="require('@/assets/curso/tema5/1.svg')")
            .row
              .col-md-12.mb-4.mb-md-0
                h4 Recolección de datos
                p.mt-4 En esta etapa es donde se inicia el proceso de ejecución de la campaña de monitoreo, en el cual se realiza una planificación de las técnicas y procedimientos a utilizar, junto con los materiales y equipos que se van a requerir para el muestreo.
                p Los datos que se deben obtener son la georreferenciación del proyecto, fotografías donde se observen las características locales, los contactos de las personas encargadas del sitio de muestreo, factores externos como: vías de acceso, el tiempo requerido para el muestreo, los diferentes permisos que sean requeridos, el medio de transporte a utilizar y la forma de almacenar los materiales y las muestras posteriormente se realice el muestreo. 
                p Adicionalmente, es necesario contar con la planificación conjunta con el laboratorio para tener definidos los tiempos de entrega de las muestras y poder diligenciar los formatos una vez se haya realizado del trabajo de campo. 
            
          .py-4.py-md-5(titulo="Don’t lie to yourself" :icono="require('@/assets/curso/tema5/2.svg')")
            .row
              .col-md-12.mb-4.mb-md-0
                h4 Administración de los datos
                p.mt-4 Para poder utilizar de manera efectiva los datos se debe realizar un tratamiento, control, validación, difusión y una posterior publicación de los datos. Dentro de este proceso está la digitalización de los datos manuales. 
                p Antes de que pueda utilizar los datos y a pesar de que están en un formato adecuado, es importante comprobar la fiabilidad y exactitud de éstos. Algunos errores de transcripción y tratamiento podrían no ser evidentes hasta que los examinen los usuarios. 

            
          .py-4.py-md-5(titulo="Don’t quit" :icono="require('@/assets/curso/tema5/3.svg')")
            .row
              .col-md-12.mb-4.mb-md-0
                h4 Uso de la información
                p.mt-4 Una vez realizada la recopilación de los datos hidrológicos se obtendrá una serie de información que será de utilidad para la toma de decisiones las cuales derivarán en estadísticas que serán de beneficio para la elaboración de futuros proyectos de desarrollo. 
      
      p.mt-4 Por tanto, finalmente la publicación de la información ya sea en sistemas de información hidrológica, boletines, estudios, informes, investigaciones, entre otros, es la manera de transmitir la información para la toma de decisiones.
      p.mt-4 Los formatos utilizados al tomar la muestra son:

      .row.mb-5
        .col-sm-1
        .col-sm-4
          .tarjeta.tarjeta-flip.color-primario.mt-4.mb-4(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/4.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5        
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/5.svg')})`}") 
        .col-sm-1
        .col-sm-4
          .tarjeta.tarjeta-flip.color-primario.mt-4.mb-4(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/6.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5        
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/7.svg')})`}") 
                <br><br><br><br><br><br><br><br><br><br><br><br>
      separador
      .row.mt-4
        .col-md-1
        .col-md-10
          p Requisitos de identificación, etiquetado e información de la muestra. Al hacer toma de muestras de agua es importante registrar información sobre el sitio de muestreo y las observaciones realizadas allí, pues servirán para la interpretación de los resultados. La información requerida es la siguiente: 
        .col-md-1
      .row.mt-4
        .col-md-5
          img.mb-4(src='@/assets/curso/tema5/8.svg' alt='AvatarTop')
        .col-md-6
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span.text-white 1
              | Nombre y ubicación del sitio.
            li 
              .lista-ol--cuadro__vineta
                span.text-white 2
              | Latitud, longitud y altitud del sitio. 
            li 
              .lista-ol--cuadro__vineta
                span.text-white 3
              | Fecha y hora de toma de muestra. 

            li 
              .lista-ol--cuadro__vineta
                span.text-white 4
              | Condiciones del tiempo en el momento de tomar la muestra y condiciones recientes como, por ejemplo: un día después de un aguacero torrencial. 
            li 
              .lista-ol--cuadro__vineta
                span.text-white 5
              | Condiciones del sitio, como, por ejemplo: parece estar contaminado con materia orgánica, hay peces o plantas presentes, hay presencia de algas, etc. 
            li 
              .lista-ol--cuadro__vineta
                span.text-white 6
              | Color y olor del agua. 

            li 
              .lista-ol--cuadro__vineta
                span.text-white 7
              | Claridad del agua, el agua se observa clara, turbia o lodosa. 

            li 
              .lista-ol--cuadro__vineta
                span.text-white 8
              | Cualquier otra observación que considere significativa.




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
