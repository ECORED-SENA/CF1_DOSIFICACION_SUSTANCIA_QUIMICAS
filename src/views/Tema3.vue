<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido    
      .titulo-principal__numero
        span 3
      h1 Buenas prácticas de laboratorio

    p.mb-4 Las Buenas Prácticas de Laboratorio (BPL) están definidas como un conjunto de reglas, procedimientos operativos y operacionales que están determinados por la Organization for Economic Cooperation and Development (OCDE), y se consideran como obligatorias para asegurar la calidad e integridad de los datos producidos en los procesos del laboratorio, esto con la finalidad de armonizar los protocolos, la información y la documentación de los procedimientos operativos del laboratorio. 

    .row.mt-4.mb-4.justify-content-center           
      .col-lg-10.align-self-center
        .cajon.color-primario.bg_color.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0.px-4 Estos requerimientos conforman una filosofía de trabajo, ya que son vistas como un sistema en el cual se analiza todos sus procesos desde el diseño hasta el archivo de los resultados. 

    .row.justify-content-center.align-items-center
      .col-lg-4.align-self-center
        figure
          img(src='@/assets/curso/tema3/img01.png')
      .col-lg-8.mb-5
        p.position-absolute.top-20.start-50.translate-middle.mt-4 Algunos de los beneficios potenciales de la aplicación de BPL: 
          ul.lista-ul--color.mt-4
            li  
              i.lista-ul__vineta
              p.mb-0 El uso de las Buenas Prácticas de Laboratorio puede evitar los conflictos en el momento de evaluar los riesgos de productos que se comercializan en más de un país, lo cual genera un ahorro de recursos para la industria, el gobierno y los consumidores finales. 
            li  
              i.lista-ul__vineta
              p.mb-0 Participación en el mercado mundial como proveedor de servicios de evaluación (MAD).
            li  
              i.lista-ul__vineta
              p.mb-0 Permiten evitar que se realicen los mismos trámites ante los países que han implementado la aceptación de datos mutua. 
            li  
              i.lista-ul__vineta
              p.mb-0 Disminución del número de animales e insectos involucrados en los estudios, promoviendo el bienestar animal. 
    
    p.mb-4.mt-5 Los laboratorios utilizados para el análisis fisicoquímico de muestras de agua deberán contar en sus instalaciones con los siguientes implementos de medición: 
    
    .row.justify-content-center
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img02.svg')
    
    .row.justify-content-start.align-items-center.mt-5.ms-1           
      .col-lg-7
        .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block             
          .col-lg-11.ps-2
            h5.mb-0 Seguridad y salud en el trabajo de muestreo
        .row.justify-content-start.align-items-center.mb-4(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block.margin_top2
            img(src='@/assets/curso/tema1/img05.svg',alt='') 

    p.mt-4.mb-4 De acuerdo a la Sociedad americana de química (2003), en su publicación seguridad en los laboratorios químicos académicos, prevenir accidentes de cualquier tipo en un laboratorio, es responsabilidad de todos los que usan este espacio de trabajo, por lo cual es necesario siempre una actitud cooperativa activa, es importante recordar que los accidentes que se pueden dar cuando se trabaja con insumos químicos bien sea dentro de un laboratorio o en pruebas de campo, suelen ser asociadas a:

    .row.mb-4
      .col-md-10.col-lg.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img06.svg')

    p.text-center.mt-5 Cuando se menciona tomar un “rol activo” hace referencia a seguir siempre las siguientes recomendaciones:

    .row.justify-content-center.align-items-center.mb-5.mt-4           
      .col-lg-10 
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img07.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            ul.lista-ul--color.mt-4
              li  
                i.lista-ul__vineta
                p.mb-0 Seguir las reglas de seguridad.
              li  
                i.lista-ul__vineta
                p.mb-0 No jugar bromas mientras realiza actividades de toma de muestras o de laboratorio.
              li  
                i.lista-ul__vineta
                p.mb-0 Familiarizarse con los equipos de seguridad.
              li  
                i.lista-ul__vineta
                p.mb-0 Siempre indagar antes sobre los peligrosos si va a manejar sustancias químicas (p.3). 
                br
                br
    
    LineaTiempoD.color-acento-contenido.mb-5
      .row(numero="1" titulo="Cofia")
        .col-md-6.mb-4.mb-md-0
          p.pt-4 Si tiene el cabello largo, manténgalo recogido durante el desarrollo de la práctica. Use la cofia si el instructor lo considera necesario.    
        .col-md-3
          figure
            img.pt-4(src='@/assets/curso/tema3/img08.svg', alt='Texto que describa la imagen')

      .row(numero="2" titulo="Casco")
        .col-md-6.mb-4.mb-md-0
          p.pt-4 En campo es necesario como prevención.
        .col-md-3
          figure
            img.pt-4(src='@/assets/curso/tema3/img09.svg', alt='Texto que describa la imagen')

      .row(numero="3" titulo="Protección de ojos")
        .col-md-6.mb-4.mb-md-0
          p.pt-4 Es obligatorio que todo el personal que permanezca en el laboratorio use permanentemente las gafas de seguridad, aun cuando no estén realizando prácticas. Las personas que utilizan gafas de manera permanente deben disponer de unas gafas de seguridad suplementarias. No utilice lentes de contacto dentro del laboratorio, ya que su uso facilita la acumulación de sustancias tóxicas en los ojos. Los lentes blandos absorben los vapores de sustancias tóxicas, ocasionando la irritación, además de interferir con los procedimientos de lavado de emergencia (Sociedad americana de química, 2003, p.3).
        .col-md-3
          figure
            img.pt-4(src='@/assets/curso/tema3/img10.svg', alt='Texto que describa la imagen')

      .row(numero="4" titulo="Mascarilla o Tapabocas")
        .col-md-6.mb-4.mb-md-0
          p.pt-4 Cuando la práctica de laboratorio implique la manipulación de compuestos volátiles, tóxicos, nocivos y/o irritantes, es indispensable emplear equipos de protección respiratoria, adaptados y homologados para la sustancia en cuestión. También deben utilizarse en caso de fugas y derrames de las sustancias anteriores, dada la gran concentración ambiental que resulta de los mismos (INS, 2011, p.40).
        .col-md-3
          figure
            img.pt-4(src='@/assets/curso/tema3/img11.svg', alt='Texto que describa la imagen')

      .row(numero="5" titulo="Instrumental de campo o vestimenta (Guardapolvo blanco)")
        .col-md-6.mb-4.mb-md-0
          p.pt-4 Primero se debe aclarar que la ropa utilizada en laboratorio o en campo, debe proteger tanto de salpicaduras como de derrames, preferiblemente un guardapolvo blanco, si es para uno de cuencas de agua contaminadas este debe ser impermeable (Sociedad americana de química, 2003, p.4).
        .col-md-3
          figure
            img.pt-4(src='@/assets/curso/tema3/img12.svg', alt='Texto que describa la imagen')

      .row(numero="6" titulo="Bata de laboratorio")
        .col-md-6.mb-4.mb-md-0
          p.pt-4 Si se usa la bata las características más aconsejables son: material: algodón, dril o gabardina, color: blanco, manga: larga con puño resortado, largo (extensión): mínimo hasta el muslo (3/4), tipo de cierre: de abotonar a presión (INS, 2011, p.40).
        .col-md-3
          figure
            img.pt-4(src='@/assets/curso/tema3/img13.svg', alt='Texto que describa la imagen')

      .row(numero="7" titulo="Zapatos")
        .col-md-6.mb-4.mb-md-0
          p.pt-4 En el caso de los laboratorios se debe usar zapatos totalmente cerrados y que no sean de cuero o cuero sintético, no se podrá usar sandalias o cualquier zapato que deje piel al descubierto ni con tacones. (INS, 2011, p.40).
        .col-md-3
          figure
            img.pt-4(src='@/assets/curso/tema3/img14.svg', alt='Texto que describa la imagen')

      .row(numero="8" titulo="Guantes de nitrilo, de neopreno, gruesos y delgados")
        .col-md-6.mb-4.mb-md-0
          p.pt-4 Cualquier manipulación de sustancias corrosivas, irritantes, de elevada toxicidad o de elevado poder de penetración a través de la piel, debe ser llevada a cabo empleando guantes adecuados y limpios. Finalizada la práctica, lave los guantes con abundante agua y jabón. Haga lo propio con sus manos. (Sociedad americana de química, 2003, p.5)
        .col-md-3          
          figure
            img.pt-4(src='@/assets/curso/tema3/img15.svg', alt='Texto que describa la imagen')

    .tarjeta.color.bg_color3
      .row.justify-content-center.align-items-center.mb-5       
        .col-lg-10
          p(data-aos="fade-down").text-center.mb-0.p-4  Por favor diríjase al documento Seguridad en laboratorios químicos académicos, Volumen 1, Séptima edición, que encuentra en material de apoyo y amplíe la información acá presentada. 
        .col-lg-5 
          a.anexo.mb-4.mb-lg-0.bg_enlace(href="https://biblioteca.sena.edu.co/paginas/bases.html" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p.text-blue.text-small Enlace web. Seguridad en laboratorios químicos académicos.

    .row.justify-content-start.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-7
        p.mb-4 En el laboratorio: es de carácter obligatorio que, en la primera sesión en laboratorio, el instructor dé a conocer a los aprendices las normas y disposiciones generales de seguridad de este manual, explicándoles y haciendo las aclaraciones necesarias, dando lugar a la participación de los aprendices.
        p.mb-4 Así mismo, el instructor debe hacer un recorrido con sus aprendices por todas las instalaciones, mostrando y ubicando los diversos dispositivos relacionados con la seguridad, tales como salida de emergencia, ruta de evacuación, ubicación de extintores, botiquines de primeros auxilios, duchas de emergencia y fuente lavaojos.
        p.mb-4 Antes de las prácticas de campo o de laboratorio su instructor socializará las normas adecuadas para las actividades.
      .col-lg-5
        img(data-aos="zoom-in")(src='@/assets/curso/tema3/img16.svg', alt='')  

    .row.justify-content-start.align-items-center.mt-5.ms-1           
      .col-lg-7
        .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block             
          .col-lg-11.ps-2
            h5.mb-0 Peligros químicos
        .row.justify-content-start.align-items-center.mb-4(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block.margin_top2
            img(src='@/assets/curso/tema1/img05.svg',alt='') 

    p.mb-4 Las sustancias químicas pueden causar daño si no son manipuladas de forma adecuada y según protocolos, lo más importante por resaltar es que estas sustancias tienen diferentes características (tóxicas, inflamables, corrosivas y reactivas) y debe reconocerlas y saber cómo reaccionar en caso de accidentes.

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-3
        img(data-aos="zoom-in")(src='@/assets/curso/tema3/img17.svg', alt='')  
      .col-lg-7
        p.mb-4 Sin embargo, existen sustancias que cuentan con más de un peligro, por lo cual se considera que el grado de peligrosidad de las sustancias químicas puede variar, por ello siempre trabajar de forma segura es la manera correcta de desarrollar actividades con estos implementos.
        p Se recomienda ampliar la información en sesiones en línea con su instructor y con el material de apoyo, pero se dejan las siguientes acciones como tips necesarios para contrarrestar los peligros químicos:

    .row.justify-content-center
      .col-lg-10
        .tarjeta.color.bg_color7
          .row.justify-content-center.align-items-center.mb-5       
            .col-lg-10
              ul.lista-ul--color.mt-4(data-aos="fade-down").text-center.mb-0.p-4
                li  
                  i.lista-ul__vineta
                  p.mb-0 Siempre lea detenidamente las etiquetas de las sustancias químicas antes de usarlas.
                li  
                  i.lista-ul__vineta
                  p.mb-0 Siga las recomendaciones dadas en las hojas de seguridad de los productos.
                li  
                  i.lista-ul__vineta
                  p.mb-0 Siempre siga las recomendaciones de su instructor. (Sociedad Americana de química, 2003, p.10)
              

</template>

<script>
export default {
  name: 'Tema3',
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
