<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido    
      .titulo-principal__numero
        span 4
      h1 Características físicas y químicas del agua

    p La importancia del agua es capital, pero más allá de ello lo cierto es que este elemento tiene diferentes propiedades de interés a nivel científico. A continuación, se describirán algunas de las principales características físicas y químicas del agua: 
    
    .bg_img08_t4
      .row.justify-content-center.align-items-center.mt-5           
        .col-lg-10(data-aos="slide-left")
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center.align-items-center.pb-1(titulo="Es incolora:") 
              .col-lg-10 
                p en algunas ocasiones cuando observamos el mar o algún rio parece que el agua tuviera un color azul – verde, esto se debe a la forma en que el agua refleja la luz y también a la manera en que absorbe más fácilmente las longitudes de onda cortas. Sin embargo, no se percibe ningún color en ella a no ser que este mezclada con alguna otra sustancia, de no ser así es totalmente transparente para nuestra vista. 
                img(src='@/assets/curso/tema4/img01.png', alt='') 
              
            .row.justify-content-center.align-items-center.pb-1(titulo="No tiene sabor ni olor:") 
              .col-lg-10 
                p el agua a diferencia de otras sustancias, no tiene un sabor u olor característico, cuando esto sucede es porque ha sido alterado de alguna manera o porque al momento de consumirla ha traído consigo partículas de otros elementos. 
                  figure
                    img(src='@/assets/curso/tema4/img02.png', alt='') 

            .row.justify-content-center.align-items-center.pb-1(titulo="Los tres estados del agua:") 
              .col-lg-10 
                p una característica fundamental del agua es que es el único elemento que se puede encontrar en los tres estados de la materia:
                ul.lista-ul--color.mt-4
                  li  
                    i.lista-ul__vineta
                    p.mb-0 <b>Estado sólido:</b> este estado se produce cuando el agua es sometida a temperaturas inferiores a los 0ºC y se congela. Este fenómeno en específico tiene el nombre de solidificación, y se genera cuando las moléculas que forman el agua están unidas. Cuando esto sucede encontramos el agua en los glaciares o en zonas de montaña con nieve. 
                  li  
                    i.lista-ul__vineta
                    p.mb-0 <b>Estado líquido:</b> este es el estado del agua más predominante en el planeta tierra ya que se encuentra en ríos, lagos, mares, océanos y aguas subterráneas, una vez el agua pasa de estado sólido a estado líquido tiene el nombre de fusión, allí la mayoría de las moléculas permanecen unidas, esto sucede entre los 0º y 100º. 
                  li  
                    i.lista-ul__vineta
                    p.mb-0 <b>Estado gaseoso:</b> cuando el agua se somete a determinadas temperaturas se produce el fenómeno de la evaporación y se condensa en la atmósfera. Así es como surgen las nubes, las cuales se componen por partículas de agua acumuladas.
                  figure
                    img(src='@/assets/curso/tema4/img03.png', alt='') 
            .row.justify-content-center.align-items-center.pb-1(titulo="pH:") 
              .col-lg-10 
                p una de las principales características del agua es que por lo general tiene un pH neutro el cual oscila entre los 6,5 y 8,5; esto implica que por lo general el agua puede ser medianamente acida o medianamente básica. 
                img(src='@/assets/curso/tema4/img04.png', alt='') 
              
            .row.justify-content-center.align-items-center.pb-1(titulo="Conductividad:") 
              .col-lg-10 
                p el agua destilada o pura no es conductora de la electricidad sino aislante, dado que no posee electrones libres que puedan conducirla. Pero esto solo sucede cuando es agua destilada ya que solo está conformada por moléculas de agua, en cambio que el agua que utilizamos diariamente si es conductora de electricidad ya que está compuesta por una gran cantidad de minerales y otros conductores. 
                  figure
                    img(src='@/assets/curso/tema4/img05.png', alt='') 

            .row.justify-content-center.align-items-center.pb-1(titulo="Temperatura:") 
              .col-lg-10 
                p el agua tiene la capacidad de retener el calor, por lo que se enfría más lentamente que otras sustancias y también tarda en calentarse.  
                figure
                  img(src='@/assets/curso/tema4/img06.png', alt='') 

    .row.justify-content-start.align-items-center.mt-5.ms-1           
      .col-lg-7
        .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block             
          .col-lg-11.ps-2
            h5.mb-0 Tipos de ensayos: ensayos <em>in situ</em>
        .row.justify-content-start.align-items-center.mb-4(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block.margin_top2
            img(src='@/assets/curso/tema1/img05.svg',alt='')

    .row.justify-content-end.align-items-center.mt-4
      .col-lg-8.index_img
        p.mb-4 Los ensayos <em>in situ</em>, son los ensayos o mediciones que realizan de algunos parámetros en campo, que por su naturaleza si no se realiza de manera inmediata los resultados arrojados posteriormente no serán verídicos, para agua de consumo humano se encuentran dentro de estos parámetros: la temperatura, el olor, el sabor, el cloro residual libre y el pH (INS, 2011, p.46), sin embargo para otro tipos de aguas como las residuales o las superficiales, estos también son aplicables para mediciones in situ incluyendo conductividad, turbidez y oxígeno disuelto, la medición de estos se realiza con el equipo multiparamétrico.
        p.mb-0 Estas mediciones se realizan generalmente haciendo uso de equipos portátiles como sondas multiparamétricas, pHmetros y conductímetros, sin embargo, se debe resaltar que para hacer estos análisis siempre se debe llevar a cabo bajo las indicaciones de revisión y calibración de los equipos. 
    .row.justify-content-start.align-items-center     
      .col-lg-4.margin_top6.d-none.d-lg-block
          img.grandor_img.margin_img(data-aos="zoom-in")(src='@/assets/curso/tema4/img07.png',alt='')

    .titulo-quinto.color-acento-contenido.pt-5
      h4 Explicación de algunos parámetros medidos <em>in situ</em>:

    LineaTiempoD.color-acento-contenido.mb-5
      .row(numero="1" titulo="Oxígeno disuelto").justify-content-center.align-items-center
        .col-md-5.mb-4.mb-md-0
         p.pt-4 Este parámetro proporciona una medida de la cantidad de oxígeno disuelto en el agua. Mantener una concentración adecuada de oxígeno disuelto en el agua es importante para la supervivencia de los peces y otros organismos de vida acuática. La temperatura, el material orgánico disuelto, los oxidantes inorgánicos, etc. afectan sus niveles. La baja concentración de oxígeno disuelto puede ser un indicador de que el agua tiene una alta carga orgánica provocada por aguas residuales.
        .col-md-5
          figure
            img.pt-4(src='@/assets/curso/tema4/img08.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-10
            .tarjeta-color.bg_color8 
              p.m-4.p-4 Las fuentes de oxígeno en el agua son la aireación y la fotosíntesis de las algas, su concentración depende fundamentalmente de la temperatura, presión y salinidad. (INVEMAR, 2013, p.14).

      .row(numero="2" titulo="Temperatura").justify-content-center.align-items-center
        .col-md-5.mb-4.mb-md-0
          p.pt-4 La temperatura juega un papel muy importante en la solubilidad de los gases, en la disolución de las sales y por lo tanto en la conductividad eléctrica, en la determinación de pH, en el conocimiento del origen de agua y de las eventuales mezclas, etc. Las descargas de agua a altas temperaturas pueden causar daños a la flora y fauna de las aguas receptoras al interferir con la reproducción de las especies, incrementar el crecimiento de bacterias y otros organismos, acelerar las reacciones químicas, reducir los niveles de oxígeno y acelerar la eutrofización.
        .col-md-5
          figure.flex-end
            img.pt-4(src='@/assets/curso/tema4/img09.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-10
            .tarjeta-color.bg_color8 
              p.m-4.p-4 La medición de temperatura en muestras ambientales debe ser una labor realizada in situ, y no aplica por ello los procedimientos de almacenamiento y preservación. El mejor método para la lectura de este parámetro es introducir directamente los equipos de medición (termómetro o sonda) en el cuerpo de agua.
        p.mb-4 Las muestras en campo deben medirse directamente en la columna de agua introduciendo la sonda y procurando mantenerla siempre a la misma profundidad (25 cm por debajo de la superficie). Para tomar la temperatura en el fondo de la columna de agua es conveniente el uso de botellas que posean termómetros invertidos, o el uso de sondas que puedan bajar hasta el lugar donde se necesita leer. Si no se dispone de estos materiales, se toma la muestra con una de las botellas de muestreo (<em>Nansen o Niskin</em>) y se transfiere la mayor cantidad de agua a un recipiente grande (balde, con el fin de minimizar los errores por la transferencia de calor con el ambiente), y se introduce la sonda o termómetro, se mantiene una agitación constante con movimientos circulares y se registra el valor de temperatura; esta operación debe hacerse lo más rápido posible (INVEMAR, 2013, p.21).

      .row(numero="3" titulo="Conductividad").justify-content-center.align-items-center
        .col-md-5.mb-4.mb-md-0
          p.pt-4 La conductividad de una muestra de agua es una medida de la capacidad que tiene la solución para transmitir corriente eléctrica. Esta capacidad depende de la presencia, movilidad, valencia y concentración de iones, así como de la temperatura del agua. Se debe tener en cuenta que las sales minerales son buenas conductoras y que las materias orgánicas y coloidales tienen poca conductividad. (INVEMAR, 2013, p.24).
        .col-md-5
          figure
            img.pt-4(src='@/assets/curso/tema4/img10.png', alt='Texto que describa la imagen')

      .row(numero="4" titulo="pH").justify-content-center.align-items-center
        .col-md-5.mb-4.mb-md-0
          p.pt-4 El pH es una medida de la concentración de iones de hidrógeno en el agua. Aguas fuera del rango normal de 6 a 9 pueden ser dañinas para la vida acuática. Estos niveles de pH pueden causar perturbaciones celulares y la eventual destrucción de la flora y fauna acuática. En el campo de abastecimiento de agua el pH tiene importancia en la coagulación química, desinfección, ablandamiento del agua y control de corrosión. (INVEMAR, 2013, p.22).
        .col-md-5
          figure
            img.pt-4(src='@/assets/curso/tema4/img11.png', alt='Texto que describa la imagen')

      .row(numero="5" titulo="Turbidez").justify-content-center.align-items-center.mb-5
        .col-md-5.mb-4.mb-md-0
          p.pt-4.mb-4 la turbidez del agua es provocada por la materia insoluble, en suspensión o dispersión coloidal. Es un fenómeno óptico que consiste esencialmente en una absorción de luz combinado con un proceso de difusión.
          p.mb-4 En caso de requerirse la extracción de una muestra para la medición de los parámetros in situ, es recomendable realizar la medición de los parámetros de inmediato para evitar variación de estos (INVEMAR, 2013, p.26).
        .col-md-5
          figure
            img.pt-4(src='@/assets/curso/tema4/img12.png', alt='Texto que describa la imagen')

    .row.justify-content-start.align-items-center.mt-5.ms-1.pt-5           
      .col-lg-7
        .row.justify-content-start.align-items-center.title-color.p-2(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block             
          .col-lg-11.ps-2
            h5.mb-0 Pasos prácticos para la toma de muestras
        .row.justify-content-start.align-items-center.mb-4(data-aos="fade-left")
          .col-1.p-0.d-none.d-lg-block.margin_top2
            img(src='@/assets/curso/tema1/img05.svg',alt='') 

    .bg_img15_t4
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-3
          img(data-aos="zoom-in")(src='@/assets/curso/tema4/img13.svg', alt='')  
        .col-lg-9
          ul.lista-ul--color.mt-4(data-aos="fade-down")
            li  
              i.lista-ul__vineta
              p.mb-0 Si el envase está rotulado verificar que sea el correcto. 
            li  
              i.lista-ul__vineta
              p.mb-0 Que el envase tenga una capacidad de por lo menos 1 litro. 
            li  
              i.lista-ul__vineta
              p.mb-0 Enjuagar 2 a 3 veces con la fuente de agua que se va a muestrear, desechando el agua de enjuague. 
            li  
              i.lista-ul__vineta
              p.mb-0 Recoger la muestra sin dejar la cámara de aire. Se puede dejar un mínimo sin llenar que permita la variación de volumen debida a potenciales diferencias térmicas. Si se le va a agregar algún conservante contemplar el volumen necesario para el mismo.
            li  
              i.lista-ul__vineta
              p.mb-0 Cerrar el envase asegurando su cierre hermético.
            li  
              i.lista-ul__vineta
              p.mb-0 Guardar la muestra en lugar fresco, conservar con hielo o gel refrigerante si fuera necesario y llevarla al laboratorio en el menor tiempo posible. 
          
      .row.justify-content-center.pt-4
        .col-lg-8
          .tarjeta-color.bg_color7
            .row.justify-content-center.align-items-center.mb-4      
              .col-lg-10
                p.text-center.pb-2.pt-3 Dentro de los análisis fisicoquímicos que se le realizan al agua se encuentran los siguientes junto con sus métodos de determinación como son:
    
      p.text-center Parámetros físicos que cuenta con 7 características:     

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema4/img14.png', alt='Texto que describa la imagen')

      .tarjeta.color.infografica_A.p-3(x="9.5%" y="74%")
        .h5.mb-2 Color
        p.mb-4 Método espectrofotométrico, que se usa principalmente en aguas industriales contaminadas que tienen colores poco usuales, y que no pueden ser igualados por el método colorimétrico.
        p El método del platino-cobalto: por comparación visual de la muestra con soluciones coloreadas de concentraciones conocidas.

      .tarjeta.color.infografica_A.p-3(x="23%" y="24%")
        .h5.mb-2 Olor
        p Se cuantifica mediante un test de dilución hasta desaparición del olor.
      
      .tarjeta.color.infografica_A.p-3(x="36.5%" y="74%")
        .h5.mb-2 Turbidez
        p El método más utilizado para determinar la turbidez en el agua es la nefelometría la cual se basa en incidir un rayo luminoso en la muestra, así las partículas en suspensión dispersan parte de esta luz, posteriormente esa luz dispersada se recoge sobre una célula fotoeléctrica la cual genera una corriente eléctrica que influye en la intensidad y por lo tanto influye en el grado de turbidez de la muestra. 

      .tarjeta.color.infografica_A.p-3(x="50%" y="24%")
        .h5.mb-2 Temperatura
        p La medida de este parámetro se puede hacer de manera sencilla y exacta mediante el empleo de sensores basados en el cambio de la resistencia de un resistor metálico. La termometría de resistencia esta basada en el cambio que se genera en la resistencia de los elementos conductores y semiconductores metálicos presentes en la muestra. 

      .tarjeta.color.infografica_A.p-3(x="63%" y="74%")
        .h5.mb-2 Densidad
        p Para esta medición se utiliza un densímetro el cual sirve para calcular la densidad relativa de algún líquido. 

      .tarjeta.color.infografica_A.p-3(x="76%" y="24%")
        .h5.mb-2 Sólidos en suspensión
        p Para la determinación de este parámetro se filtra la muestra a través de un papel de filtro de 0.45 μm que se seca a una temperatura de 105ºC, posteriormente se pesa el filtro antes y después de pasar la muestra y así indicara el contenido de materiales en suspensión. 

      .tarjeta.color.infografica_A.p-3(x="89.4%" y="74%")
        .h5.mb-2 Conductividad 
        p La conductividad en el agua se mide a través de un sistema amperimétrico o potenciométrico. Cuanta mayor intensidad pase o mayor potencia se genere, mayor será la conductividad.
    .row.justify-content-center
      .col-lg-10.up
        p.mb-4.text-center Para el caso de los parámetros químicos cuenta con 4 características: 

    .row.justify-content-center
      .col-lg-10.up
        .row.justify-content-center.align-items-center
          <hr> 
            .col-lg-1
              figure
                img.img-t.img-a(src='@/assets/curso/tema4/img16.svg')
            .col-lg-9
              p.mb-2 <b>pH:</b>
              p.mb-4 el método de medida más común es usar una celda electroquímica, consistente en un electrodo indicador sensible a la concentración de protones, esto se realiza mediante el uso de un pHmetro.
        .row.justify-content-center.align-items-center               
          <hr> 
            .col-lg-1
              figure
                img.img-t.img-a(src='@/assets/curso/tema4/img17.svg')
            .col-lg-9
              p.mb-2 <b>Alcalinidad:</b>
              p.mb-4 la determinación de la alcalinidad de una muestra de agua se logra por titulación con una solución de ácido sulfúrico de normalidad conocida y se hace por medio de la fenolftaleína como indicador dependiendo del pH iniciar de la muestra.
        .row.justify-content-center.align-items-center               
          <hr> 
            .col-lg-1
              figure
                img.img-t.img-a(src='@/assets/curso/tema4/img18.svg')
            .col-lg-9
              p.mb-2 <b>Carbono orgánico total:</b>
              p.mb-4 se utilizan diversos métodos instrumentales los cuales arrojan resultados en pocos minutos y requieren de 1mL de muestra. El procedimiento se realiza introduciendo la muestra en un tubo de combustión a 960ºC lo cual vaporiza el agua. La cantidad de CO2 registrada es proporcional al contenido de carbono de la muestra.
        .row.justify-content-center.align-items-center              
          <hr> 
            .col-lg-1
              figure
                img.img-t.img-a(src='@/assets/curso/tema4/img19.svg')
            .col-lg-9
              p.mb-2 <b>Oxígeno disuelto:</b>
              p.mb-4 el método más utilizado es el de Alsterberg, el cual fija el oxígeno en la muestra utilizando la adición de nitruro y sulfato de manganeso, luego se añade ácido sulfúrico el cual libera iodo y se valora utilizando almidón como indicador.  
          <hr>


      

    
</template>
<script>
export default {
  name: 'Tema4',
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
