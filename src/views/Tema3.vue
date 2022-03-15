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
      .row.mb-4.mt-4.asa
        .col-md-4
          img(src='@/assets/curso/tema5/8.svg')
        .col-md-1
        .col-md-7
            <br><br>
            ul.lista-ul
              li 
                i.fa.fa-angle-right
                | Seguir las reglas de seguridad
              li 
                i.fas.fa-angle-right
                | No jugar bromas mientras realiza actividades de toma de muestras o de laboratorio

              li 
                i.fas.fa-angle-right
                | Familiarizarse con los equipos de seguridad
              li 
                i.fas.fa-angle-right
                | Siempre indagar antes sobre los peligrosos si va a manejar sustancias químicas (p.3)

      
      p.mt-4 Para realizar la actividad de toma de muestras de aguas se debe garantizar que las personas cuenten con unos implementos de seguridad mínimos:
      .row.mt-4
        .col-md-1
        .col-md-10  
          .row.mb-5
            .col-md-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/ico1.png' alt='AvatarTop')
                .tarjeta.color-primario--borde
                  .p-4.fondo3
                    <br>
                    p.mb-0 Cofia:
                    p Si tiene el cabello largo, manténgalo recogido durante el desarrollo de la práctica. Use la cofia si el instructor lo considera necesario.
            
            .col-md-2
            .col-md-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/ico2.png' alt='AvatarTop')
                .tarjeta.color-primario--borde
                  .p-4.fondo3
                    <br>                    
                    p.mb-0 Casco:
                    p En campo es necesario como prevención     
                    p.text-white ------------------------------------------------------------------------------
      .row
        .col-md-1
        .col-md-10  
          .row.mb-5
            .col-md-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/ico3.png' alt='AvatarTop')
                .tarjeta.color-primario--borde
                
                  .p-4.fondo3
                    <br>
                    p.mb-0 Protección de ojos:
                    p Es obligatorio que todo el personal que permanezca en el laboratorio use permanentemente las gafas de seguridad, aun cuando no estén realizando prácticas. Las personas que utilizan gafas de manera permanente deben disponer de unas gafas de seguridad suplementarias, No utilice lentes de contacto dentro del laboratorio, ya que su uso facilita la acumulación de sustancias tóxicas en los ojos. Los lentes blandos absorben los vapores de sustancias tóxicas, ocasionando la irritación, además de interferir con los procedimientos de lavado de emergencia (Sociedad Americana de química, 2003, p.3).
            
            .col-md-2
            .col-md-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/ico4.png' alt='AvatarTop')
                .tarjeta.color-primario--borde
                  .p-4.fondo3
                    <br>
                    p.mb-0 Mascarilla o Tapabocas:
                    p  Cuando la práctica de laboratorio implique la manipulación de compuestos volátiles, tóxicos, nocivos y/o irritantes, es indispensable emplear equipos de protección respiratoria, adaptados y homologados para la sustancia en cuestión. También deben utilizarse en caso de fugas y derrames de las sustancias anteriores, dada la gran concentración ambiental que resulta de los mismos (INS, 2011, p.40).    
                    <br><br>
      .row
        .col-md-1
        .col-md-10  
          .row.mb-5
            .col-md-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/ico5.png' alt='AvatarTop')
                .tarjeta.color-primario--borde
                  .p-4.fondo3
                    <br>
                    p.mb-0 Instrumental de campo o vestimenta (Guardapolvo blanco): 
                    p Primero se debe aclarar que la ropa utilizada en laboratorio o en campo, debe proteger tanto de salpicaduras como de derrames, preferiblemente un guardapolvo blanco, si es para uno de cuencas de agua contaminadas este debe ser impermeable (Sociedad Americana de química, 2003, p.4).
            
            .col-md-2
            .col-md-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/ico6.png' alt='AvatarTop')
                .tarjeta.color-primario--borde
                  .p-4.fondo3
                    <br>
                    p.mb-0 Bata de laboratorio:
                    p Si se usa la bata las características más aconsejables son: Material: algodón, dril o gabardina, Color: blanco, Manga: larga con puño recortado, Largo (extensión): mínimo hasta el muslo (3/4), Tipo de cierre: de abotonar a presión (INS, 2011, p.40).    
      .row
        .col-md-1
        .col-md-10  
          .row.mb-5
            .col-md-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/ico7.png' alt='AvatarTop')
                .tarjeta.color-primario--borde
                  .p-4.fondo3
                    <br>
                    p.mb-0 Zapatos:
                    p En el caso de los laboratorios se debe usar zapatos totalmente cerrados y que no sean de cuero o cuero sintético, no se podrá usar sandalias o cualquier zapato que deje piel al descubierto ni con tacones. (INS, 2011, p.40).
                    <br><br>
            .col-md-2
            .col-md-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/ico8.png' alt='AvatarTop')
                .tarjeta.color-primario--borde
                  .p-4.fondo3
                    <br>
                    p.mb-0 Guantes de nitrilo, de neopreno, gruesos y delgados:
                    p Cualquier manipulación de sustancias corrosivas, irritantes, de elevada toxicidad o de elevado poder de penetración a través de la piel, debe ser llevada a cabo empleando guantes adecuados y limpios. Finalizada la práctica, lave los guantes con abundante agua y jabón. Haga lo propio con sus manos. (Sociedad Americana de química, 2003, p.5)
                    


    .row.justify-content-center.mt-4
      .col-lg-10.col-md-10.bordes4
        .row.p-4
          .col-1
          .col-3.centrar
            a.mb-4.mb-lg-0(href="https://drive.google.com/open?id=1-0DBW0V7b86svVyc35atqrHHdsMOyW5u" target="_blank")
              img.mt-3(src="@/assets/curso/tema2/btn.svg", style="width:150px")
          .col-8
            p.mb-0.p-2.text-white Por favor diríjase al documento <br>Seguridad en laboratorios químicos académicos, Volumen 1, Séptima edición, que encuentra en material de apoyo y amplíe la información acá presentada.
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
      
      .row.saps.mt-4
        .col-md-8.p-2
          p Sin embargo, existen sustancias que cuentan con más de un peligro, por lo cual se considera que el grado de peligrosidad de las sustancias químicas puede variar, por ello siempre trabajar de forma segura es la manera correcta de desarrollar actividades con estos implementos.
          p Se recomienda ampliar la información en sesiones en línea con su instructor y con el material de apoyo, pero se dejan las siguientes acciones como tips necesarios para contrarrestar los peligros químicos:
          ul.lista-ul
            <br><br>
            li 
              i.fa.fa-angle-right
              | Siempre lea detenidamente las etiquetas de las sustancias químicas antes de usarlas.
            li 
              i.fas.fa-angle-right
              | Siga las recomendaciones dadas en las hojas de seguridad de los productos.
            li 
              i.fas.fa-angle-right
              | Siempre siga las recomendaciones de su instructor. (Sociedad Americana de química, 2003, p.10)     
        .col-md-4
          img.mb-4(src='@/assets/curso/tema3/l1.svg')
      


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
