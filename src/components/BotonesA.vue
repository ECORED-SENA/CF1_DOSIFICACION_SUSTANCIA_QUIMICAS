<template lang="pug">
.btns
  img(src='@/assets/curso/tema3/2.svg')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.row.align-items-center.justify-content-end.px-2.py-3(v-if="index === hover" :style="{left:boton.left, top:boton.top}")
      .col-md-7.p-2
        p.mb-0.text-center(v-html="boton.texto")
      .col-md-5

  
</template>

<script>
export default {
  name: 'BotonesA',
  data: () => ({
    indicador: true,
    hover: null,
    size: '7%',
    botones: [
      {
        pos_x: '85%',
        pos_y: '8%',
        left: '-150%',
        top: '-220%',
        texto:
          'Los turbidímetros son productos de laboratorio para medir la turbidez, un indicador que permite evaluar la calidad de las aguas y determinar el nivel de la transparencia de diferentes líquidos.',
        imagen: 'img',
      },
      {
        pos_x: '90%',
        pos_y: '30%',
        left: '-50%',
        top: '-300%',
        texto:
          'Estos instrumentos son utilizados para medir los colores de los objetos y hacer comparaciones entre ellos. Con esta opción es posible diferenciar productos que se producen masivamente en las industrias. ',
      },
      {
        pos_x: '95%',
        pos_y: '47%',
        left: '-310%',
        top: '-275%',
        texto:
          'Es un instrumento científico que mide la actividad del ion hidrógeno en soluciones acuosas, indicando su grado de acidez o alcalinidad expresada como pH. El medidor de pH mide la diferencia de potencial eléctrico entre un electrodo de pH y un electrodo de referencia.',
      },
      {
        pos_x: '95%',
        pos_y: '70%',
        left: '-250%',
        top: '-280%',
        texto:
          'Es un instrumento que se utiliza para medir la conductividad eléctrica de los iones en una disolución. Para ello aplica un campo eléctrico entre dos electrodos y mide la resistencia eléctrica de la disolución. ',
      },
      {
        pos_x: '85%',
        pos_y: '85%',
        left: '-130%',
        top: '-320%',
        texto:
          'Es el instrumento que se usa para medir la temperatura del aire. Los termómetros más comunes son tubos de vidrio huecos. En la parte inferior del tubo se encuentra la ampolleta que contiene un líquido como alcohol o mercurio. Cuando el calor aumenta, el líquido dentro de la ampolleta se expande y sube por el tubo.',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.btns
  position: relative
  &__item
    position: absolute
    background-size: auto
    background-repeat: no-repeat
    cursor: pointer
    background-position: center
    transition: background-image 0.2s ease-in-out
  &__text
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1)
    border-radius: 20px
    position: absolute
    left: 200%
    background-color: #B6D6C6
    width: 400px
    z-index: 100
    line-height: 1.2em
    transform: translate(-50%)
    .number
      position: absolute
      top: -10px
      left: 3%
      width: 91px

@media (max-width: $bp-max-md)
  .btns__text
    text-align: center
    width: 200px
    left: 50%
</style>
