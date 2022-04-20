<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido    
      .titulo-principal__numero
        span 2
      h1 Técnicas de muestreo

    .row.justify-content-center.mb-4
      .col-lg-8
        img(src='@/assets/curso/tema2/img01.svg' alt='AvatarTop')
    p Las técnicas de muestreo se dividen de la siguiente manera, las que son tomadas directamente en el recipiente que se va a enviar al laboratorio y están aquellas que son tomadas mediante el uso de equipos. A continuación, se describen las técnicas utilizadas según los puntos de muestreo, ver tabla 2.

    .row.justify-content-center.align-items-center.mt-5           
        .col-lg-12(data-aos="slide-left")
          .titulo-sexto.color-acento-contenido 
            h5 Tabla 2. Técnicas de muestreo  
          .tabla-b.color-primario.mb-5
            .tabla-b__header
              tr
                th.text-center PUNTOS DE MUESTREO
                td TÉCNICAS DE MUESTREO
            table
              caption Nota. SENA, (2021).
              tr
                th.text-center <b>Grifos</b>
                td Cuando se trata de grifos de agua es necesario retirar los filtros que tenga, posteriormente se limpia con alcohol y se flamea el grifo mientras está cerrado, antes de tomar la muestra se debe dejar correr el agua por al menos cinco (5) minutos, luego se destapa el frasco se llena se cierra.
              tr
                th.text-center <b>Pozos y depósitos</b> 
                td Se introduce en el agua el frasco de muestreo sostenido con una cuerda y se toma la muestra luego de haber agitado la superficie del cuerpo de agua. 
              tr
                th.text-center <b>Lagos y ríos</b>
                td La muestra se debe tomar lo más lejos posible de la orilla, procurando no remover el fondo para liberar sedimentos y se deben evitar las zonas de estancamiento.
              tr
                th.text-center <b>Piscinas</b> 
                td La muestra debe ser tomada en los puntos en los cuales se sospeche una más lenta renovación. 

    .row.justify-content-center.align-items-center.mb-5       
      .col-lg-10
        p(data-aos="fade-down").text-center.mb-0.bg_color3.p-4  Existen tres formas de recoger muestras de agua dependiendo de cuál sea el tipo de análisis que se quiere realizar.

    .bg_img15_2
      .row.justify-content-center
        .col-lg-12
          PasosA.color-primario.mb-5(tipo="n")
            .row.justify-content-center
              .col-md-5.mb-md-0
                p.text-start En primer lugar, están las muestras simples, que son aquellas que son obtenidas en el lugar y momento preestablecido para su análisis de manera individual, estas muestras se obtienen en su mayoría cuando son aguas de suministro o efluentes residuales. 
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/img02.svg', alt='Texto que describa la imagen')

            .row.justify-content-center
              .col-md-5.mb-md-0
                figure
                  img(src='@/assets/curso/tema2/img03.svg', alt='Texto que describa la imagen')
              .col-md-5
                p.text-start Segundo, encontramos las muestras compuestas que están determinadas por la mezcla y homogeneización de muestras simples que fueron recolectadas en el mismo lugar, pero en diferentes momentos. Estas muestras son utilizadas para calcular, por ejemplo, el funcionamiento eficaz de una planta de tratamiento de aguas. 
                
            .row.justify-content-center
              .col-md-5.mb-md-0
                p Por tercer y último, encontramos las muestras integradas, que son aquellas que se obtienen por mezclar y homogeneizar muestras simples que han sido obtenidas en diferentes puntos, pero simultáneamente. 
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/img04.svg', alt='Texto que describa la imagen')

    .row.justify-content-start.align-items-center.mt-5.ms-1           
      .col-lg-7
        .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block             
          .col-lg-11.ps-2
            h5.mb-0 Técnicas de almacenamiento
        .row.justify-content-start.align-items-center.mb-4(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block.margin_top2
            img(src='@/assets/curso/tema1/img05.svg',alt='') 
    
    .row.justify-content-end.align-items-center.mt-5     
      .col-lg-8
        p.mb-4 Para el almacenamiento de la muestra es necesario utilizar recipientes plásticos o de vidrio según los parámetros que se vayan a analizar para evitar la contaminación con microorganismos ajenos a la muestra. Los recipientes de vidrio se deben ser utilizados cuando se trata de muestras destinadas al análisis de metales traza ya que el vidrio libera silicio y además puede absorber trazas de metales que se encuentren en la muestra.  Por otra parte, los recipientes plásticos deberán ser descartados cuando las muestras contengan compuestos orgánicos ya que estos liberan sustancias del plástico y pueden disolver algunos compuestos orgánicos que se encuentren en la muestra. 
        p.mb-0 Es necesario que la muestra se almacene a una temperatura de 4ºC y en ausencia de luz, esto debe realizarse en el momento de la toma de la muestra.  
    .row.justify-content-start.align-items-center     
      .col-lg-4.margin_top4.d-none.d-lg-block
        img.grandor_img.margin_img(data-aos="zoom-in")(src='@/assets/curso/tema2/img05.png', alt='') 

    .row.justify-content-start.align-items-center.mt-5.ms-1           
      .col-lg-7
        .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block             
          .col-lg-11.ps-2
            h5.mb-0 Rotulación de la muestra
        .row.justify-content-start.align-items-center.mb-4(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block.margin_top2
            img(src='@/assets/curso/tema1/img05.svg',alt='') 
    
    p.mb-4 Para identificar la muestra se debe tener en cuenta lo siguiente:

    .row.justify-content-center.mb-4
      .col-lg-10
        img(src='@/assets/curso/tema2/img06.svg' alt='AvatarTop')

    .row.mt-4.mb-4           
      .col-lg-12
        .cajon.color-primario.bg_color2.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0.px-4 La información sobre las operaciones de muestreo es una parte fundamental para asegurar la calidad del programa de muestreo y base fundamental en la cadena de custodia de las muestras, ya que esto genera confianza en los resultados de los análisis aplicados a las muestras. Por tal razón la información consignada en los rótulos de los recipientes y en los registros de toma de muestras debe ser legible, veraz y trazable.

    p.mx-5.px-5 De acuerdo con el ICONTEC (2004), en su Guía Técnica Colombiana [GTC] 100, guía para los procedimientos de cadena de custodia de muestras los rótulos de las muestras pueden:

    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta-color.bg_color4.mx-2
          .row.justify-content-center.mt-5
            .col-lg-7
              p(data-aos="fade-down").mt-4 Tener forma de etiquetas adhesivas, de marca (rótulo) o ambas.
              p(data-aos="fade-down").mb-4 Las etiquetas suelen ser removibles para hacer parte del proceso de registros posteriores, pero se enfrenta a la posibilidad de remoción inapropiada o pérdida, los rótulos o marcas usualmente se hacen en papel a prueba de agua con tinta indeleble y son pegados al frasco o recipiente de muestra, existe una manera alternativa que es cuando se escribe directamente en el recipiente con tinta indeleble, sin embargo, no es el más aconsejado (p.5).
            .col-lg-3.align-self-center
              figure
                img.img295(data-aos="zoom-in")(src='@/assets/curso/tema2/img07.svg', alt='') 

    .titulo-quinto.color-acento-contenido
      h4 Características de los rótulos 

    .bg_img08_t2
      .row.justify-content-center          
        .col-lg-8(data-aos="slide-left")
          figure
            img(src='@/assets/curso/tema2/img09.svg', alt='')
      .row.justify-content-center.align-items-center.mt-5
        .col-lg-8.align-self-center
          ul.lista-ul--color.ps-2.pe-0
            li  
              i.lista-ul__vineta
              p.mb-0 Deben ser diligenciados justo antes o inmediatamente después de la toma de muestras.
            li  
              i.lista-ul__vineta
              p.mb-0 Deben fijarse en el recipiente de tal forma que se asegure que no se borrará o perderá la información.
            li  
              i.lista-ul__vineta
              p.mb-0 Debe ser totalmente legible (no realizar tachones).
            li  
              i.lista-ul__vineta
              p.mb-0 La información mínima que debe contener según el ICONTEC GTC 100 es: si aplica, se debe especificar el código del proyecto, las consideraciones de seguridad y el código del cronograma, por otro lado siempre debe contener, el nombre de identificación de la muestra, la identificación de la ubicación del muestreo, el punto de muestreo y el intervalo de tiempo del mismo (fecha y hora), tipo de muestreo, la empresa o nombre de la persona que realiza la toma, parámetros medidos in situ (p.5)
            li  
              i.lista-ul__vineta
              p.mb-0 Para muestras microbiológicas aparte de los mencionado anteriormente se debe complementar la información con la preservación realizada (se debe consignar en el momento del alistamiento de los recipientes en el laboratorio, ya que la adición del preservante se adiciona antes del proceso de esterilización de los frascos).
        .col-lg-2
          figure
            img.pe-2(src='@/assets/curso/tema2/img10.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5.mt-4           
      .col-lg-10 
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img11.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-5 Una vez aclarados los conceptos anteriormente vistos; es necesario proceder con la integración de estos conocimientos en el desarrollo teórico-práctico que permita afianzarlos y dar inicio a su aplicación en el desarrollo del muestreo.
            br
            br
            p.mb-4 Por lo anterior en este espacio se llevará a cabo la revisión de conceptos de química básica y preparación de soluciones en el laboratorio, por lo que su desarrollo se presenta como un componente teórico-práctico, siendo la parte práctica desarrollada de manera presencial en el laboratorio.
              br
              
    
    p.text-center Dentro de las prácticas presenciales se puede encontrar:

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10(data-aos="slide-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center.align-items-center.pb-1(titulo="Práctica de reconocimiento de materiales y equipos de laboratorio:") 
            .col-lg-10 
              p En esta práctica se realizará todo un recorrido por el espacio de laboratorio donde podrá interactuar con los diferentes materiales (vidrio, plástico), los diferentes instrumentos y equipos con los que se puede trabajar en el mismo y los riesgos que debe tener claros antes de realizar cualquier práctica. A continuación podrá profundizar dicha información.
              img(src='@/assets/curso/tema2/img12.svg', alt='') 
            .row.justify-content-center.align-items-center.mt-5    
              .col-lg-5 
                a.anexo.mb-4.mb-lg-0.bg_enlace(href="https://biblioteca.sena.edu.co/paginas/bases.html" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p.text-blue.text-small Enlace web. Practica de laboratorio Reconocimiento de material de laboratorio. Centro de gestión industrial (CGI).
              .col-lg-5 
                a.anexo.mb-4.mb-lg-0.bg_enlace(href="https://biblioteca.sena.edu.co/paginas/bases.html" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p.text-blue.text-small Enlace web. Practica de laboratorio alistamiento y esterilización de materiales para el muestreo de agua para análisis microbiológico. Centro de gestión industrial (CGI).

          .row.justify-content-center.align-items-center.pb-1(titulo="Práctica de medición de masa y volumen:") 
            .col-lg-10 
              p Con base en el material teórico se iniciará su aplicación en laboratorio. Su finalidad es aprender a utilizar los equipos e instrumentos del laboratorio que son requeridos para la determinación de masa y volumen de diferentes elementos según indicaciones de su instructor.
                figure
                  img(src='@/assets/curso/tema2/img13.svg', alt='') 

          .row.justify-content-center.align-items-center.pb-1(titulo="Práctica de preparación de soluciones:") 
            .col-lg-10 
              p Su instructor le brindara el apoyo requerido para que pueda realizar diferentes soluciones en el laboratorio.
                figure
                  img(src='@/assets/curso/tema2/img14.svg', alt='') 
              .row.justify-content-center
                .col-lg-6
                  a.anexo.mb-4.mb-lg-0.bg_enlace(href="https://biblioteca.sena.edu.co/paginas/bases.html" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-blue.text-small Enlace web. Practica de laboratorio de soluciones. Centro de gestión industrial (CGI).

    .row.justify-content-start.align-items-center.mt-5.ms-1           
      .col-lg-7
        .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block             
          .col-lg-11.ps-2
            h5.mb-0 Transporte de la muestra 
        .row.justify-content-start.align-items-center.mb-4(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block.margin_top2
            img(src='@/assets/curso/tema1/img05.svg',alt='') 

    p Para que el transporte de la muestra sea el indicado se deben tener en cuenta los siguientes criterios: 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color.bg_slyder_t2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img15.svg')
        p La nevera debe estar marcada con firma, sello de quien toma la muestra, fecha y hora. 

      .tarjeta.color.bg_slyder_t2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img16.svg')
        p La nevera de tener la cantidad suficiente de hielo asegurado que se mantenga la temperatura 4°C hasta su llegada al laboratorio.

      .tarjeta.color.bg_slyder_t2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img17.svg')
        p Asegurar la tapa de la nevera para que en su recorrido no se altere el resultado de la muestra.

      .tarjeta.color.bg_slyder_t2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img18.svg')
        p Que el vehículo cumpla con las condiciones seguras para el transporte de la muestra.

      .tarjeta.color.bg_slyder_t2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img19.svg')
        p La nevera se de cuidar de no ser maltratada y conservar su posición horizontal, mantener la nevera   lejos de calor para evitar su alteración.

      .tarjeta.color.bg_slyder_t2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img20.svg')
        p Vigilar la nevera para evitar ser manipuladas por personas extrañas al muestreo.

      .tarjeta.color.bg_slyder_t2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img21.svg')
        p Cuando las neveras se envíen por mensajería o con personal que no participó en la toma de la muestra se debe marcar y sellar conservando su contenido original. Debemos utilizar el transporte de menor tiempo posible para garantizar su llegada al laboratorio.  


    .row.justify-content-start.align-items-center.mt-5.ms-1           
      .col-lg-7
        .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block             
          .col-lg-11.ps-2
            h5.mb-0 Registro de la muestra 
        .row.justify-content-start.align-items-center.mb-4(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block.margin_top2
            img(src='@/assets/curso/tema1/img05.svg',alt='') 
    
    p Para un registro adecuado de la muestra es necesario tener en cuenta lo siguiente: 
    
    .bg_img22_t2
      .row.justify-content-center
        .col-lg-6.align-items-center(data-aos="fade-right")
          .tarjeta-avatar-b.mb-2
            .tarjeta-avatar-b__img
              img.pt-5(src='@/assets/curso/tema2/img23.svg')
            .tarjeta.bg_color5
              .p-4
                p.pt-5 Los recipientes que contengan muestras deben marcarse en forma clara y durable para permitir su identificación en el laboratorio sin ninguna ambigüedad.

        .col-lg-6.align-items-center(data-aos="fade-left")
          .tarjeta-avatar-b.mb-2
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img24.svg')
            .tarjeta.bg_color5
              .p-4
                p Al momento del muestreo es necesario observar numerosos detalles que permitirán una interpretación correcta de la información obtenida. Estos detalles se pueden lograr mediante el diligenciamiento de las etiquetas o formatos diseñados para tal fin, inmediatamente después de la recolección de la muestra, de modo que sea fácilmente identificada.

        .col-lg-6.align-items-center(data-aos="fade-right")
          .tarjeta-avatar-b.mb-3
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img25.svg')
            .tarjeta.color.bg_color5
              .p-4
                p Es importante registrar el tipo de mediciones efectuadas y las variaciones ambientales del sitio tales como condiciones del clima y observaciones inusuales. 

        .col-lg-6.align-items-center(data-aos="fade-left")
          .tarjeta-avatar-b.mb-3
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img26.svg')
            .tarjeta.color.bg_color5
              .p-4
                p  Se puede pegar al recipiente, la tarjeta o etiqueta con la información requerida; pero con frecuencia se mojan al transportar las muestras refrigeradas al laboratorio y la información puede quedar ilegible.

        .col-lg-6.align-items-center(data-aos="fade-right")
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img27.svg')
            .tarjeta.color.bg_color5
              .p-4
                p Identificar el recipiente con un número, deseablemente escrito con lápiz No.2 y que consigne la información necesaria en el acta de toma de muestras, la cual debe ser diligenciada completamente.

        .col-lg-6.align-items-center(data-aos="fade-left")
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img28.svg')
            .tarjeta.color.bg_color5
              .p-4
                p Para asegurarse de no perder la información puede resultar mejor identificar la muestra, tanto por medio de una etiqueta o tarjeta como por una hoja de identificación de muestra.




</template>

<script>
export default {
  name: 'Tema2',
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
