export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos del desarrollo económico',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'El problema económico: escasez, necesidades y asignación de recursos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Escasez',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Asignación de recursos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Valor económico: concepto, creación de valor y su importancia en la economía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Diferencia entre valor y precio',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de medición del valor',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Teorías del valor',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Importancia del valor económico en la economía',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Factores de producción como pilares del desarrollo económico',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Sectores económicos y su relación con el desarrollo económico',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Modelos de desarrollo económico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Modelo de desarrollo económico clásico',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Modelo de desarrollo económico keynesiano',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Modelo de desarrollo económico estructuralista',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Modelo de desarrollo económico neoliberal',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Cue Mancera, A. (2015). Fundamentos de economía: ( ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39385?page=10',
    },
    {
      referencia:
        'Olivera Novelo, J. (2015). Fundamentos de economía: ( ed.). Editorial Digital UNID.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/41176?page=71',
    },
    {
      referencia:
        'Flores Barrera, C. (2006). La economía: virtudes e inconvenientes: manual básico para no economistas: ( ed.). RIL editores.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/67970?page=13',
    },
    {
      referencia:
        'Cue Mancera, A. (2015). Fundamentos de economía: ( ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/39385',
    },
    {
      referencia:
        'Dejuán Asenjo, Ó. (2015). Economía: fundamentos y claves de interpretación: ( ed.). Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/48994?page=58',
    },
    {
      referencia:
        'Flores Barrera, C. (2006). La economía: virtudes e inconvenientes: manual básico para no economistas: ( ed.). RIL editores.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/67970?page=13',
    },
    {
      referencia:
        'Gaviria Mahecha, R. A. Guardiola Esmeral, A. R. & Ríos Giraldo, A. L. D. L. (2023). Sectores económicos en Colombia y su impacto en el comercio internacional: (1 ed.). Fondo Editorial Universidad Cooperativa de Colombia.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/246449?page=8',
    },
    {
      referencia:
        'Dejuán Asenjo, Ó. (2015). Economía: fundamentos y claves de interpretación: ( ed.). Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/48994?page=58',
    },
    {
      referencia:
        'Cue Mancera, A. (2015). Fundamentos de economía: ( ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/39385',
    },
    {
      referencia:
        'Dejuán Asenjo, Ó. (2015). Economía: fundamentos y claves de interpretación: ( ed.). Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/48994?page=7',
    },
  ],
  glosario: [
    {
      termino: 'Crecimiento Económico',
      significado:
        'Proceso mediante el cual una economía aumenta su capacidad productiva y genera mayores niveles de bienes y servicios en un periodo determinado. Se mide generalmente a través del Producto Interno Bruto (PIB).',
    },
    {
      termino: 'Desregulación',
      significado:
        'Proceso de eliminación o reducción de normas y restricciones gubernamentales en sectores económicos con el objetivo de fomentar la competencia y la eficiencia del mercado.',
    },
    {
      termino: 'Excedente Económico',
      significado:
        'Diferencia entre los ingresos obtenidos por una economía y los costos de producción. En el análisis económico clásico, este concepto se vincula con la producción y reproducción de riqueza.',
    },
    {
      termino: 'Fisiocracia',
      significado:
        'Escuela de pensamiento económico del siglo XVIII que sostenía que la riqueza de una nación provenía de la agricultura y que el gobierno debía intervenir lo menos posible en la economía.',
    },
    {
      termino: 'Industrialización',
      significado:
        'Proceso de transformación de una economía basada en la agricultura y la producción artesanal hacia una economía sustentada en la producción mecanizada e industrial.',
    },
    {
      termino: 'Keynesianismo',
      significado:
        'Modelo económico propuesto por John Maynard Keynes que enfatiza el papel del Estado en la economía, promoviendo el gasto público y la intervención estatal para estabilizar el crecimiento y el empleo.',
    },
    {
      termino: 'Mercantilismo',
      significado:
        'Sistema económico de los siglos XVI y XVIII que consideraba que la riqueza de un país dependía de la acumulación de metales preciosos y promovía el proteccionismo y la intervención del Estado en el comercio.',
    },
    {
      termino: 'Neoliberalismo',
      significado:
        'Corriente económica que promueve la reducción del papel del Estado en la economía, la privatización de empresas públicas, la apertura comercial y la desregulación de los mercados.',
    },
    {
      termino: 'Paradigma Económico',
      significado:
        'Conjunto de teorías, métodos y principios que orientan el análisis y la comprensión de los fenómenos económicos en un determinado contexto histórico.',
    },
    {
      termino: 'Valor de Producción',
      significado:
        'Costo total de los insumos y el trabajo utilizados para la fabricación de bienes y servicios. En el análisis económico, se considera un factor clave en la determinación del precio de mercado.',
    },
  ],
}
