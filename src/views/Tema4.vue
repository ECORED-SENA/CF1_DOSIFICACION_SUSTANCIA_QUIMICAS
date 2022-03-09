<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.text-white 4
      h1 Características físicas y químicas del agua
    p La importancia del agua es capital, pero más allá de ello lo cierto es que este elemento tiene diferentes propiedades de interés a nivel científico. A continuación, se describirán algunas de las principales características físicas y químicas del agua: 
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Es incolora")
        .col-md-4
          figure
            img(src='@/assets/curso/tema4/1.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0.mg1
          p En algunas ocasiones cuando observamos el mar o algún rio parece que el agua tuviera un color azul – verde, esto se debe a la forma en que el agua refleja la luz y también a la manera en que absorbe más fácilmente las longitudes de onda cortas. Sin embargo, no se percibe ningún color en ella a no ser que este mezclada con alguna otra sustancia, de no ser así es totalmente transparente para nuestra vista. 
      .row(titulo="No tiene sabor ni olor")
        .col-md-4
          figure
            img(src='@/assets/curso/tema4/2.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0.mg1
          p El agua a diferencia de otras sustancias, no tiene un sabor u olor característico, cuando esto sucede es porque ha sido alterado de alguna manera o porque al momento de consumirla ha traído consigo partículas de otros elementos. 
      .row(titulo="Los tres estados del agua")
        .col-md-4
          <br>
          figure
            img(src='@/assets/curso/tema4/3.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.agg Una característica fundamental del agua es que es el único elemento que se puede encontrar en los tres estados de la materia:
          img(src='@/assets/curso/tema4/7.svg', alt='Texto que describa la imagen')
      .row(titulo="pH")
        .col-md-4
          figure
            img(src='@/assets/curso/tema4/4.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0.mg1
          p Una de las principales características del agua es que por lo general tiene un pH neutro el cual oscila entre los 6,5 y 8,5; esto implica que por lo general el agua puede ser medianamente acida o medianamente básica. 
      .row(titulo="Conductividad")
        .col-md-4
          figure
            img(src='@/assets/curso/tema4/5.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0.mg1
          p El agua destilada o pura no es conductora de la electricidad sino aislante, dado que no posee electrones libres que puedan conducirla. Pero esto solo sucede cuando es agua destilada ya que solo está conformada por moléculas de agua, en cambio que el agua que utilizamos diariamente si es conductora de electricidad ya que está compuesta por una gran cantidad de minerales y otros conductores. 
      .row(titulo="Temperatura")
        .col-md-4
          figure
            img(src='@/assets/curso/tema4/6.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0.mg1
          p El agua tiene la capacidad de retener el calor, por lo que se enfría más lentamente que otras sustancias y también tarda en calentarse. 
    <br>
    h2.mb-4 Tipos de ensayos: Ensayos in situ 
    <br>
    p Los ensayos in situ, son los ensayos o mediciones que realizan de algunos parámetros en campo, que por su naturaleza si no se realiza de manera inmediata los resultados arrojados posteriormente no serán verídicos, para agua de consumo humano se encuentran dentro de estos parámetros: la temperatura, el olor, el sabor, el cloro residual libre y el pH (INS, 2011, p.46), sin embargo para otro tipos de aguas como las residuales o las superficiales, estos también son aplicables para mediciones in situ incluyendo Conductividad, turbidez y Oxígeno Disuelto, la medición de estos se realiza con el equipo multiparamétrico.                         
    
    .row.bg333
      .col-md-7
        p.p-4.sssa Estas mediciones se realizan generalmente haciendo uso de equipos portátiles como sondas multiparamétricas, pHmetros y conductímetros, sin embargo, se debe resaltar que para hacer estos análisis siempre se debe llevar a cabo bajo las indicaciones de revisión y calibración de los equipos.
      .col-md-5
    .row
      .col-md-7
      .col-md-5
        img.tp2(src='@/assets/curso/tema4/8.png', alt='Texto que describa la imagen')
    <br><br><br>

    .row.BGI22.mt-4
      h2 Explicación de algunos parámetros medidos in situ:
      .col-sm-12.mt-4
        SlyderF(columnas="col-12")
            .row.p-4.BGI333.mb-4
              h2.mt-4 Turbidez
              p La turbidez del agua es provocada por la materia insoluble, en suspensión o dispersión coloidal. Es un fenómeno óptico que consiste esencialmente en una absorción de luz combinado con un proceso de difusión.
              p En caso de requerirse la extracción de una muestra para la medición de los parámetros in situ, es recomendable realizar la medición de los parámetros de inmediato para evitar variación de estos (INVEMAR, 2013, p.26).              
              .col-sm-2.mt-4
              .col-sm-8.mt-4
                img.mb-4(src='@/assets/curso/tema4/9.svg', alt='Texto que describa la imagen')    
            .row.p-4.BGI333.mb-4
              h2.mt-4 Conductividad
              p La conductividad de una muestra de agua es una medida de la capacidad que tiene la solución para transmitir corriente eléctrica. Esta capacidad depende de la presencia, movilidad, valencia y concentración de iones, así como de la temperatura del agua. Se debe tener en cuenta que las sales minerales son buenas conductoras y que las materias orgánicas y coloidales tienen poca conductividad. (INVEMAR, 2013, p.24)
              .col-sm-2.mt-4
              .col-sm-8.mt-4
                img.mb-4(src='@/assets/curso/tema4/10.svg', alt='Texto que describa la imagen')   
            .row.p-4.BGI333.mb-4
              .col-sm-8.gg
                h3.mt-4 Temperatura
                p La temperatura juega un papel muy importante en la solubilidad de los gases, en la disolución de las sales y por lo tanto en la conductividad eléctrica, en la determinación de pH, en el conocimiento del origen de agua y de las eventuales mezclas, etc. Las descargas de agua a altas temperaturas pueden causar daños a la flora y fauna de las aguas receptoras al interferir con la reproducción de las especies, incrementar el crecimiento de bacterias y otros organismos, acelerar las reacciones químicas, reducir los niveles de oxígeno y acelerar la eutrofización.
                p La medición de temperatura en muestras ambientales debe ser una labor realizada in situ, y no aplica por ello los procedimientos de almacenamiento y preservación. El mejor método para la lectura de este parámetro es introducir directamente los equipos de medición (termómetro o sonda) en el cuerpo de agua.
              .col-sm-4.mt-4
                img.mb-4(src='@/assets/curso/tema4/11.svg', alt='Texto que describa la imagen')   
              p Las muestras en campo deben medirse directamente en la columna de agua introduciendo la sonda y procurando mantenerla siempre a la misma profundidad (25 cm por debajo de la superficie). Para tomar la temperatura en el fondo de la columna de agua es conveniente el uso de botellas que posean termómetros invertidos, o el uso de sondas que puedan bajar hasta el lugar donde se necesita leer. Si no se dispone de estos materiales, se toma la muestra con una de las botellas de muestreo (Nansen o Niskin) y se transfiere la mayor cantidad de agua a un recipiente grande (balde, con el fin de minimizar los errores por la transferencia de calor con el ambiente), y se introduce la sonda o termómetro, se mantiene una agitación constante con movimientos circulares y se registra el valor de temperatura; esta operación debe hacerse lo más rápido posible (INVEMAR, 2013, p.21).
            .row.p-4.BGI333.mb-4
              h2.mt-4 Oxígeno disuelto
              p Este parámetro proporciona una medida de la cantidad de oxígeno disuelto en el agua. Mantener una concentración adecuada de oxígeno disuelto en el agua es importante para la supervivencia de los peces y otros organismos de vida acuática. La temperatura, el material orgánico disuelto, los oxidantes inorgánicos, etc. afectan sus niveles. La baja concentración de oxígeno disuelto puede ser un indicador de que el agua tiene una alta carga orgánica provocada por aguas residuales.
              p Las fuentes de oxígeno en el agua son la aireación y la fotosíntesis de las algas, su concentración depende fundamentalmente de la temperatura, presión y salinidad. (INVEMAR, 2013, p.14)
              .col-sm-2.mt-4
              .col-sm-8.mt-4
                img.mb-4(src='@/assets/curso/tema4/12.svg', alt='Texto que describa la imagen')  
            .row.p-4.BGI333.mb-4
              h2.mt-4 Ph
              p El pH es una medida de la concentración de iones de hidrógeno en el agua. Aguas fuera del rango normal de 6 a 9 pueden ser dañinas para la vida acuática. Estos niveles de pH pueden causar perturbaciones celulares y la eventual destrucción de la flora y fauna acuática. En el campo de abastecimiento de agua el pH tiene importancia en la coagulación química, desinfección, ablandamiento del agua y control de corrosión. (INVEMAR, 2013, p.22)
              .col-sm-2.mt-4
              .col-sm-8.mt-4
                img.mb-4(src='@/assets/curso/tema4/13.svg', alt='Texto que describa la imagen')  
      separador
      h2.mt-4 Pasos prácticos para la toma de la muestra para análisis físico-químico:
      img.mt-4(src='@/assets/curso/tema4/14.png', alt='Texto que describa la imagen')  
      
      separador
      p.mt-4 Dentro de los análisis fisicoquímicos que se le realizan al agua se encuentran los siguientes junto con sus métodos de determinación como son:

      p Parámetros físicos que cuenta con 7 características:
      .col-md-1
      .col-md-10
        TabsC.color-acento-contenido.mt-4
          .py-3.py-md-4(titulo="Color")
            .row
              .col-md-11.mb-4.mb-md-0.p-4
                p  Método espectrofotométrico, que se usa principalmente en aguas industriales contaminadas que tienen colores poco usuales, y que no pueden ser igualados por el método colorimétrico.
                p El método del platino-cobalto: por comparación visual de la muestra con soluciones coloreadas de concentraciones conocidas.
                <br><br><br>
          .py-3.py-md-4(titulo="Olor")
            .row
              .col-md-11.mb-4.mb-md-0.p-4
                p  Se cuantifica mediante un test de dilución hasta desaparición del olor.
                <br><br><br><br><br><br>         
          .py-3.py-md-4(titulo="Turbidez")
            .row
              .col-md-11.mb-4.mb-md-0.p-4
                p  El método más utilizado para determinar la turbidez en el agua es la nefelometría la cual se basa en incidir un rayo luminoso en la muestra, así las partículas en suspensión dispersan parte de esta luz, posteriormente esa luz dispersada se recoge sobre una célula fotoeléctrica la cual genera una corriente eléctrica que influye en la intensidad y por lo tanto influye en el grado de turbidez de la muestra. 
                <br><br><br>          
          .py-3.py-md-4(titulo="Temperatura")
            .row
              .col-md-11.mb-4.mb-md-0.p-4
                p La medida de este parámetro se puede hacer de manera sencilla y exacta mediante el empleo de sensores basados en el cambio de la resistencia de un resistor metálico. La termometría de resistencia esta basada en el cambio que se genera en la resistencia de los elementos conductores y semiconductores metálicos presentes en la muestra.
                <br><br><br><br>
          .py-3.py-md-4(titulo="Densidad")
            .row
              .col-md-11.mb-4.mb-md-0.p-4
                p Para esta medición se utiliza un densímetro el cual sirve para calcular la densidad relativa de algún líquido. 
                 <br><br><br><br><br><br><br>     
          .py-3.py-md-4(titulo="Sólidos en suspensión")
            .row
              .col-md-11.mb-4.mb-md-0.p-4
                p Para la determinación de este parámetro se filtra la muestra a través de un papel de filtro de 0.45 μm que se seca a una temperatura de 105ºC, posteriormente se pesa el filtro antes y después de pasar la muestra y así indicara el contenido de materiales en suspensión
                <br><br><br><br>    
          .py-3.py-md-4(titulo="Conductividad")
            .row
              .col-md-11.mb-4.mb-md-0.p-4
                p La conductividad en el agua se mide a través de un sistema amperimétrico o potenciométrico. Cuanta mayor intensidad pase o mayor potencia se genere, mayor será la conductividad.                              
                <br><br><br><br><br>
    <br><br><br>
    
    p Para el caso de los parámetros químicos cuenta con 4 características:
    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-4
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            <br>
            b pH
          p El método de medida más común es usar una celda electroquímica, consistente en un electrodo indicador sensible a la concentración de protones, esto se realiza mediante el uso de un pHmetro. 
          <br><br><br><br><br>
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-4
          .tarjeta-numerada__numero
            .h2.text-white 2
          p.text-center 
            <br>
            b Alcalinidad  
          p La determinación de la alcalinidad de una muestra de agua se logra por titulación con una solución de ácido sulfúrico de normalidad conocida y se hace por medio de la fenolftaleína como indicador dependiendo del pH iniciar de la muestra. 
          <br><br><br> 
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-4
          .tarjeta-numerada__numero
            .h2.text-white 3
          p.text-center
            <br> 
            b Carbono orgánico total 
          p Se utilizan diversos métodos instrumentales los cuales arrojan resultados en pocos minutos y requieren de 1mL de muestra. El procedimiento se realiza introduciendo la muestra en un tubo de combustión a 960ºC lo cual vaporiza el agua. La cantidad de CO2 registrada es proporcional al contenido de carbono de la muestra.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-4
          .tarjeta-numerada__numero
            .h2.text-white 4
          p.text-center 
            <br>
            b Oxígeno disuelto
          p El método más utilizado es el de Alsterberg, el cual fija el oxígeno en la muestra utilizando la adición de nitruro y sulfato de manganeso, luego se añade ácido sulfúrico el cual libera iodo y se valora utilizando almidón como indicador. 
          <br><br><br><br>

    
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
