<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Factores de producción como pilares del desarrollo económico'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4
        .col-12.col-xl-10
          span En la siguiente imagen, se puede observar que, dentro del proceso de producción, ciertos elementos convierten una serie de insumos, en un resultado final. Este resultado se refiere al producto terminado, mientras que los insumos están vinculados al capital de trabajo. No obstante, en ocasiones, el término insumo también abarca a los recursos productivos.
        .col-2.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

      p.mb-4 <b>Figura 1.</b> Esquema del proceso productivo 
      img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
      figcaption <b>Nota.</b> Tomado de Dejuán Asenjo (2015). 

      p.mb-4 Los primeros estudiosos de la economía, identificaron tres factores de producción: <b>tierra, trabajo y capital</b>; son los insumos necesarios para la producción y representan la base sobre la cual se sustentan los procesos económicos; cada uno de estos elementos desempeña un papel en la generación de riqueza y en la determinación de la eficiencia y competitividad de un sistema productivo.

      .row.bg-marron.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Factores de producción
            p.mb-5(data-aos="fade-up") Los factores de producción representan los elementos esenciales para la generación de bienes y servicios en cualquier economía. En el PDF Factores de producción, se analizan en detalle los tres principales factores: tierra, capital y trabajo, explicando su importancia, características y cómo influyen en los procesos productivos. Además, se abordan las interacciones entre estos elementos y su papel en la eficiencia y el crecimiento económico, destacando la relevancia de una gestión sostenible y estratégica para maximizar el desarrollo de las empresas y la sociedad en general.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Factores de producción.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Factores de producción
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')      

      h2 Análisis

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 La diferenciación entre variables de "fondo" y variables de "flujo", es fundamental para entender cómo opera un proceso productivo. Las variables de fondo se refieren al stock o conjunto de recursos disponibles en un momento determinado y que pueden utilizarse durante un período prolongado. Ejemplos de estas variables incluyen las reservas de petróleo y otros recursos naturales, la fuerza laboral disponible y la maquinaria instalada al inicio del ciclo productivo.
          .bg-azul.p-4.mb-4(data-aos="fade-up")
            span Las variables de flujo se refieren a la cantidad de recursos que realmente se usan y a los bienes nuevos que se producen y consumen en un periodo determinado.
          span Por ejemplo, el petróleo que las empresas extraen y procesan en un año, es un flujo porque se utiliza en el proceso productivo. Otro caso son las máquinas o herramientas que se reemplazan cuando se desgastan, porque forman parte del mantenimiento de la producción. También se consideran flujos los productos que compran los trabajadores para su consumo diario.
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')

      .d-flex.align-items-start.bg-verde.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-5
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-35.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0 Además, cuando se fabrican nuevas máquinas con el objetivo de aumentar la producción en el futuro, esto se llama inversión y también es una variable de flujo, debido a que influye en la oferta y demanda de bienes.

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://pa.bibdigital.ucc.edu.ar/2874/1/TM_Hawryto.pdf") Hawryto, M. (2019). Los factores de producción y su incidencia en el incremento de la productividad. Universidad Católica de Córdoba, Facultad de Ciencias Económicas y de Administración, 1-50.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/3sME9pIL75M?si=qB9ecwU1Vj5a-A0W") [Vídeo] Economía 10 (Factores de Producción)
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')



</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
