<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 El agua es la sustancia con mayor importancia para la vida que tiene excepcionales propiedades a consecuencia de su composición y estructura ya que tiene la capacidad de disolver los nutrientes presentes en el suelo para que las plantas puedan aprovecharlos, a su vez, tiene infinidades de complementos para la vida de la flora y fauna que se alberga en el planeta tierra, con el siguiente video se da la más cordial bienvenida. 
              
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rX_fnACK9RI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
