export default {
  global: {
    componenteFormativo: 'Planes y técnicas de muestreo',
    descripcionCurso:
      'En este componente formativo se abordan temas que le permitirán tomar muestras de agua adecuadamente y procesarlas para su análisis fisicoquímico para una acertada dosificación de sustancias que permitan su potabilización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Plan de muestreo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de muestreo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Buenas prácticas de laboratorio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Características físicas y químicas del agua',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Registro de información',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Eijkelkamp Agrisearch Equipment BV. (s.f.). Catálogo de equipos para gestión de las aguas.',
      link:
        'https://www.eijkelkamp.com/files/media/downloads/p055scatlogodeequiposparagestindelasaguas.pdf',
    },
    {
      referencia:
        'Secretaria del agua. (2016). Plan de monitoreo de calidad del agua de los sistemas de agua de abastecimiento público de Portoviejo, Manta, Chone, Pedernales, Jama, Bahia de Caráquez, San Vicente, Canoa, Calceta, Junín, Tosagua, Flavio Alfaro Y Muisne. Gobierno Nacional de la República del Ecuador.',
      link:
        'https://www.humanitarianresponse.info/sites/www.humanitarianresponse.info/files/documents/files/plan_de_monitoreo_manabi_y_esmeraldas_final_1.pdf',
    },
    {
      referencia:
        'IDEAM (2017). Protocolo de Monitoreo de Agua. Instituto de Hidrología, Meteorología y Estudios Ambientales.',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/021172/Protocoloparaelmonitoreoyseguimientodelagua.pdf',
    },
    {
      referencia:
        'Servicio de Prevención de Riesgos Laborales del CSIC. (2007). Manual de Buenas Prácticas de Laboratorio.',
      link:
        'https://www.icms.us-csic.es/sites/icms.us-csic.es/files/Manual%20de%20buenas%20pr%C3%A1cticas%20en%20laboratorios.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Calidad del agua',
      significado:
        'Es el resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua, con el contenido de las normas que regulan la materia.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Proceso de muestreo del sistema de suministro de agua para consumo humano, que cubre espacio, tiempo y frecuencia en los puntos concertados según norma.',
    },
    {
      termino: 'Muestra',
      significado:
        'Toma puntual de agua en los puntos de muestreo concertados, que refleja la composición física, química y microbiológica representativa del momento, para el proceso de vigilancia de la autoridad sanitaria.',
    },
    {
      termino: 'Muestreo',
      significado:
        'Proceso de toma de muestras que son analizadas en laboratorios para obtener información sobre la calidad del agua del sitio concertado en que fueron tomadas.',
    },
    {
      termino: 'Sistema de suministro de agua para consumo humano',
      significado:
        'Es el conjunto de estructuras, equipos, materiales, procesos, operaciones y el recurso humano utilizado para la captación, aducción, pretratamiento, tratamiento, almacenamiento, conducción y distribución del agua para consumo humano.',
    },
  ],
  complementario: [
    {
      texto:
        'B@UNAM, (2017). Propiedades físicas y químicas del agua. [video]. YouTube. https://www.youtube.com/watch?v=trA2dOF9eOo',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=trA2dOF9eOo',
    },
    {
      texto:
        'ICONTEC. (1995). ISO 5667/1. Gestión Ambiental. Calidad del agua. Muestreo. Directrices para el diseño de programas de muestreo. ICONTEC',
      tipo: 'PDF',
      descarga: '/downloads/NTC_ISO_5667-1-1995.pdf',
    },
    {
      texto:
        'Chiroque, M.  y Llana, B. (2017). Buenas prácticas de Laboratorio para control de calidad en la industria farmacéutica. Ministerio de salud del Perú.',
      tipo: 'Artículo',
      link:
        'http://www.digemid.minsa.gob.pe/UpLoad/UpLoaded/PDF/Establecimientos/Reuniones/Reunion_Tecnica/IV_ControlCalidad.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Víctor Julián Ardila',
        cargo: 'Instructor',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Beatriz Eugenia Agudelo Vásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital.',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital.',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional.',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Sofia Suarez Suarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
