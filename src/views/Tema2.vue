<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.text-white 2
      h1 Técnicas de muestreo
    
    .row.mb-12
      p.mb-4 Las técnicas de muestreo se dividen de la siguiente manera, las que son tomadas directamente en el recipiente que se va a enviar al laboratorio y están aquellas que son tomadas mediante el uso de equipos. A continuación, se describen las técnicas utilizadas según los puntos de muestreo, ver tabla 2.
    <br><br><br>
    t <strong>Tabla 2.</strong> Técnicas de muestreo
    .tabla-b.color-acento-contenido.mt-4
      .tabla-b__header
        .row
          .col-md-2
            h5.mb-0.text-white.cssa PUNTOS DE MUESTREO
          .col-md-10  
            h5.mb-0.text-white.cssd TÉCNICAS DE MUESTREO
      table
        caption Nota. SENA (2021).
        tr
          th Grifos
          td Cuando se trata de grifos de agua es necesario retirar los filtros que tenga, posteriormente se limpia con alcohol y se flamea el grifo mientras está cerrado, antes de tomar la muestra se debe dejar correr el agua por al menos cinco (5) minutos, luego se destapa el frasco se llena se cierra.
        tr
          th Pozos y depósitos
          td Se introduce en el agua el frasco de muestreo sostenido con una cuerda y se toma la muestra luego de haber agitado la superficie del cuerpo de agua. 
        tr
          th Lagos y ríos
          td La muestra se debe tomar lo más lejos posible de la orilla, procurando no remover el fondo para liberar sedimentos y se deben evitar las zonas de estancamiento.
        tr
          th Piscinas
          td La muestra debe ser tomada en los puntos en los cuales se sospeche una más lenta renovación. 

      <br><br>
      p.mb-4.mt-4 Existen tres formas de recoger muestras de agua dependiendo de cuál sea el tipo de análisis que se quiere realizar.
      <br>
    .row.justify-content-center
      .col-md-10
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              <br><br>
              p En primer lugar, están las muestras simples, que son aquellas que son obtenidas en el lugar y momento preestablecido para su análisis de manera individual, estas muestras se obtienen en su mayoría cuando son aguas de suministro o efluentes residuales. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema2/p1.png', alt='Texto que describa la imagen')
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/p2.png', alt='Texto que describa la imagen')
            .col-md-6
              <br><br>
              p Segundo, encontramos las muestras compuestas que están determinadas por la mezcla y homogeneización de muestras simples que fueron recolectadas en el mismo lugar, pero en diferentes momentos. Estas muestras son utilizadas para calcular, por ejemplo, el funcionamiento eficaz de una planta de tratamiento de aguas
          .row
            .col-md-6.mb-4.mb-md-0
              <br><br>
              p Por tercer y  último, encontramos las muestras integradas, que son aquellas que se obtienen por mezclar y homogeneizar muestras simples que han sido obtenidas en diferentes puntos, pero simultáneamente. 
          
            .col-md-6
              figure
                img(src='@/assets/curso/tema2/p3.png', alt='Texto que describa la imagen')



    <br>
    <br>
    .row.BGI2
      h2.mt-4 Técnicas de almacenamiento
      .row.mt-4
        .col-md-1
        .col-md-10
          .bloque-texto-g.color-primario.p-3.p-sm-5.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema2/mg4.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Para el almacenamiento de la muestra es necesario utilizar recipientes plásticos o de vidrio según los parámetros que se vayan a analizar para evitar la contaminación con microorganismos ajenos a la muestra. Los recipientes de vidrio se deben ser utilizados cuando se trata de muestras destinadas al análisis de metales traza ya que el vidrio libera silicio y además puede absorber trazas de metales que se encuentren en la muestra. Por otra parte, los recipientes plásticos deberán ser descartados cuando las muestras contengan compuestos orgánicos ya que estos liberan sustancias del plástico y pueden disolver algunos compuestos orgánicos que se encuentren en la muestra. 
                br
                br
                | Es necesario que la muestra se almacene a una temperatura de 4ºC y en ausencia de luz, esto debe realizarse en el momento de la toma de la muestra. 


      separador
      h2.mt-4 Rotulación de la muestra
      p Para identificar la muestra se debe tener en cuenta lo siguiente:

      .row.justify-content-center.mb-4
        .col-lg-11.mar
          .tarjeta.BGIMG13.p-4
            LineaTiempoC.color-acento-contenido(text-small)
              .row(titulo="Paso 1")
                .col-md-8.mb-4.p-4
                  h5 Paso 1
                  p Colocar el lugar donde se tomó la muestra, la dirección el punto donde se tomó, nombre completo de la persona que tomó la muestra, la fecha de toma y el análisis indicado.
                  <br>  
                  <br>  
              .row(titulo="Paso 2")
                .col-md-8.mb-4.p-4
                  h5 Paso 2
                  p Marca o rótulo la marca de una vasija que contenga una muestra debe realizarse muy clara, con un marcador perdurable de modo tal que el laboratorio identifique ésta correctamente, sin que quede dudas sobre la información suministrada.
                  <br>  
                  <br>  
              .row(titulo="Paso 3")
                .col-md-8.mb-4.p-4
                  h5 Paso 3
                  p Etiqueta, en esta se debe colocar detalladamente los procesos que se emplearon para la recolección de la muestra, en el mismo instante en que se toma la muestra.
                  <br>  
                  <br>     
              .row(titulo="Paso 4")
                .col-md-8.mb-4.p-4
                  h5 Paso 4
                  p La etiqueta con la información pertinente se pega a la vasija que contiene la muestra, advirtiendo aquí que la información podría perderse en caso de transporte de las muestras refrigeradas.
                  <br>  
                  <br>   
              .row(titulo="Paso 5")
                .col-md-8.mb-4.p-4
                  h5 Paso 5
                  p La vasija ha de ser identificada con un número, usando un lápiz mirado # 2. Después de escribir los datos en un formato indicado se coloca este en la parte externa de la nevera de icopor.
                  <br>  
                  <br>  
        
        p.mt-4 La información sobre las operaciones de muestreo es una parte fundamental para asegurar la calidad del programa de muestreo y base fundamental en la cadena de custodia de las muestras, ya que esto genera confianza en los resultados de los análisis aplicados a las muestras. Por tal razón la información consignada en los rótulos de los recipientes y en los registros de toma de muestras debe ser legible, veraz y trazable.
        p.mt-4 De acuerdo con el ICONTEC (2004), en su guía técnica colombiana [GTC] 100, guía para los procedimientos de cadena de custodia de muestras los rótulos de las muestras pueden: 
        
        
        .row.BGI3.mb-4
          .col-md-7.sm2
            p.mt-4 Tener forma de etiquetas adhesivas, de marca (rótulo) o ambas. 
            <br>
            p.mt-4 Las etiquetas suelen ser removibles para hacer parte del proceso de registros posteriores, pero se enfrenta a la posibilidad de remoción inapropiada o pérdida, los rótulos o marcas usualmente se hacen en papel a prueba de agua con tinta indeleble y son pegados al frasco o recipiente de muestra, existe una manera alternativa que es cuando se escribe directamente en el recipiente con tinta indeleble, sin embargo, no es el más aconsejado (p.5).
          .col-md-4
            img.mb-4(src='@/assets/curso/tema2/4.svg' alt='AvatarTop')
        .row.mt-4.justify-content-center
          .col-md-7
            img.mb-4(src='@/assets/curso/tema2/5.svg' alt='AvatarTop')
          .col-md-5
            h3.mb-3 Características de los rótulos 
            ul.lista-ul--separador
              li 
                i.fas.fa-angle-right
                | Deben ser diligenciados justo antes o inmediatamente después de la toma de muestras.
              li 
                i.fas.fa-angle-right
                | Deben fijarse en el recipiente de tal forma que se asegure que no se borrará o perderá la información.
              li 
                i.fas.fa-angle-right
                | Debe ser totalmente legible (no realizar tachones).
              li 
                i.fas.fa-angle-right
                | La información mínima que debe contener según el ICONTEC GTC 100 es: si aplica, se debe especificar el código del proyecto, las consideraciones de seguridad y el código del cronograma, por otro lado siempre debe contener, el nombre de identificación de la muestra, la identificación de la ubicación del muestreo, el punto de muestreo y el intervalo de tiempo del mismo (fecha y hora), tipo de muestreo, la empresa o nombre de la persona que realiza la toma, parámetros medidos in situ (p.5)
              li 
                i.fas.fa-angle-right
                | Para muestras microbiológicas aparte de los mencionado anteriormente se debe complementar la información con la preservación realizada (se debe consignar en el momento del alistamiento de los recipientes en el laboratorio, ya que la adición del preservante se adiciona antes del proceso de esterilización de los frascos).


        .row.justify-content-center.mb-4
          .col-lg-10.cajon.bg33.mb-4.p-4
            p Una vez aclarados los conceptos anteriormente vistos; es necesario proceder con la integración de estos conocimientos en el desarrollo teórico-práctico que permita afianzarlos y dar inicio a su aplicación en el desarrollo del muestreo.
            p Por lo anterior en este espacio se llevará a cabo la revisión de conceptos de química básica y preparación de soluciones en el laboratorio, por lo que su desarrollo se presenta como un componente teórico-práctico, siendo la parte práctica desarrollada de manera presencial en el laboratorio.
            p Dentro de las prácticas presenciales se puede encontrar:

        .row
          .col-md-1
          .col-md-7
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Práctica de reconocimiento de materiales y equipos de laboratorio: en esta práctica se realizará todo un recorrido por el espacio de laboratorio donde podrá interactuar con los diferentes materiales (vidrio, plástico), los diferentes instrumentos y equipos con los que se puede trabajar en el mismo y los riesgos que debe tener claros antes de realizar cualquier práctica. A continuación podrá profundizar dicha información. 
              li 
                i.fas.fa-angle-right
                | Práctica de medición de masa y volumen: con base en el material teórico se iniciará su aplicación en laboratorio. Su finalidad es aprender a utilizar los equipos e instrumentos del laboratorio que son requeridos para la determinación de masa y volumen de diferentes elementos según indicaciones de su instructor.
              li 
                i.fas.fa-angle-right
                | Práctica de preparación de soluciones: su instructor le brindara el apoyo requerido para que pueda realizar diferentes soluciones en el laboratorio.
          .col-md-4
            img(src='@/assets/curso/tema2/8.png' alt='AvatarTop')
      .row
        .col-md-1
        .col-md-10
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.t2.p-5.text-white
              .row.justify-content-center.mb-4
              h3 Servicio Nacional de Aprendizaje (SENA). 2020.
              p Practica de laboratorio Reconocimiento de material de laboratorio. Centro de gestión industrial (CGI).
              <br>
              img(src='@/assets/curso/tema1/l1.png' )            
            .col-md.tarjeta.color-primario.p-5
              .row.justify-content-center.mb-4
              h3 Servicio Nacional de Aprendizaje (SENA). 2020. 
              p Practica de laboratorio alistamiento y esterilización de materiales para el muestreo de agua para análisis microbiológico. Centro de gestión industrial (CGI).
              img(src='@/assets/curso/tema1/l1.png' )
            
            .col-md.tarjeta.t3.text-white.p-5
              .row.justify-content-center.mb-4
              h3 Servicio Nacional de Aprendizaje (SENA). 2020. 
              p Practica de laboratorio de soluciones. Centro de gestión industrial (CGI).  
              <br><br>            
              img(src='@/assets/curso/tema1/l1.png' )
          .row.mb-4
            .col-md-4.lsa
              a.mb-4.mb-lg-0(href="https://drive.google.com/file/d/1aTl4ycZqWgZXl1u-s6kcmXfOz0qj22Je/view?usp=sharing" target="_blank")
                img.mg(src="@/assets/curso/tema2/btn.svg" style="width:150px")
            .col-md-4.lsa
              a.mb-4.mb-lg-0(href="https://drive.google.com/file/d/1hBjJof2Xd6pV9b5cPnSCJlA2g4HjeOlQ/view?usp=sharing" target="_blank")
                img.mg(src="@/assets/curso/tema2/btn.svg" style="width:150px")
            .col-md-4.lsa      
              a.mb-4.mb-lg-0(href="https://drive.google.com/file/d/1E4WsPLBqEPk24xKjkT-y04iMnOhhWXfU/view?usp=sharing" target="_blank")
                img.mg(src="@/assets/curso/tema2/btn.svg" style="width:150px")                
    <br>
    .row.BGI7  
      h2.mt-4 Transporte de la muestra
      p.mt-4 Para que el transporte de la muestra sea el indicado se deben tener en cuenta los siguientes criterios:
      <br> 
        SlyderF.mt-4(columnas="col-lg-6 col-xl-4")
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/tema2/13.svg' alt='AvatarTop')

          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/tema2/14.svg' alt='AvatarTop')

          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/tema2/15.svg' alt='AvatarTop')

          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/tema2/16.svg' alt='AvatarTop')

          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/tema2/17.svg' alt='AvatarTop')

          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/tema2/18.svg' alt='AvatarTop')

          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/tema2/19.svg' alt='AvatarTop')

      <br>
      h2.mt-4 Registro de la muestra
      p.mt-4 Para un registro adecuado de la muestra es necesario tener en cuenta lo siguiente: 
      .row 
        .col-md-1
        .col-md-10
          .row.mt-4
            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema2/i1.svg' alt='AvatarTop')
                .tarjeta.color-acento-contenido
                  .p-2
                    <br><br>   
                    p Los recipientes que contengan muestras deben marcarse en forma clara y durable para permitir su identificación en el laboratorio sin ninguna ambigüedad.
                    <br>      
            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema2/i2.png' alt='AvatarTop')
                .tarjeta.color-acento-contenido
                  .p-2
                    p Al momento del muestreo es necesario observar numerosos detalles que permitirán una interpretación correcta de la información obtenida. Estos detalles se pueden lograr mediante el diligenciamiento de las etiquetas o formatos diseñados para tal fin, inmediatamente después de la recolección de la muestra, de modo que sea fácilmente identificada.

            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema2/i3.png' alt='AvatarTop')
                .tarjeta.color-acento-contenido
                  .p-4
                    p Es importante registrar el tipo de mediciones efectuadas y las variaciones ambientales del sitio tales como condiciones del clima y observaciones inusuales. 
                    <br>
            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema2/i4.png' alt='AvatarTop')
                .tarjeta.color-acento-contenido
                  .p-4
                    p Se puede pegar al recipiente, la tarjeta o etiqueta con la información requerida; pero con frecuencia se mojan al transportar las muestras refrigeradas al laboratorio y la información puede quedar ilegible.
            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema2/i5.png' alt='AvatarTop')
                .tarjeta.color-acento-contenido
                  .p-4
                    p Identificar el recipiente con un número, deseablemente escrito con lápiz No.2 y que consigne la información necesaria en el acta de toma de muestras, la cual debe ser diligenciada completamente.

            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema2/i6.png' alt='AvatarTop')
                .tarjeta.color-acento-contenido
                  .p-4
                    <br>
                    p Para asegurarse de no perder la información puede resultar mejor identificar la muestra, tanto por medio de una etiqueta o tarjeta como por una hoja de identificación de muestra.

    
</template>
<script>
import BotonesB from '../components/BotonesB.vue'
export default {
  name: 'Tema2',
  components: {
    BotonesB,
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
