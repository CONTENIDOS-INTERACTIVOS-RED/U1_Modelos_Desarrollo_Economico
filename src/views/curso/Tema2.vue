<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Valor económico: concepto, creación de valor y su importancia en la economía'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4 
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 El valor económico es un concepto que representa la importancia o utilidad de un bien o servicio, en términos monetarios o de satisfacción que proporciona a un individuo o a la sociedad. Este valor no solo se mide por el precio de mercado, sino también por el impacto que un bien o servicio tiene en la eficiencia productiva, la calidad de vida y el bienestar social. En economía, el valor económico está relacionado con la capacidad de un bien o servicio, para generar beneficios o ingresos a quienes lo poseen o utilizan.
          .bg-azul.p-4(data-aos="fade-up")
            p.mb-4 El valor económico también puede medirse a través de la disposición a pagar de los consumidores por un bien o servicio, lo que refleja su importancia en la toma de decisiones. <br>Factores como la escasez, la utilidad, la demanda y la percepción de calidad, influyen en la determinación del valor económico.

      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 Diferencia entre valor y precio

      .row.mb-4
        .col-12.col-xl-8.d-flex.flex-column
          p.mb-4 El valor y el precio son conceptos interrelacionados, pero distintos en economía. El valor representa la utilidad o importancia que un bien o servicio tiene para un individuo o la sociedad, mientras que el precio es la cantidad de dinero que se paga por ese bien o servicio en el mercado.
          .d-flex.align-items-start.bg-verde.p-4(data-aos="fade-up").d-flex.align-items-center
            img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-15.svg', alt='Texto que describa la imagen')
            .my-auto
              p.pe-xl-3.mb-0 El valor puede ser subjetivo, puesto que varía de una persona a otra, según sus necesidades y preferencias. En cambio, el precio es una medida objetiva determinada por las fuerzas del mercado, como la oferta y la demanda. Un bien puede tener un alto valor para un consumidor, pero un precio bajo debido a la abundancia del producto en el mercado; de la misma manera, algunos bienes pueden tener un precio elevado sin reflejar necesariamente, su verdadero valor económico.
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
  
      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 Tipos de medición del valor

      p.mb-4 Existen diversas formas de medir el valor económico, dependiendo del contexto y la naturaleza del bien o servicio:

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row
            .col-4.d-none.d-xl-block(data-aos="zoom-in")
              img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
            .col-12.col-xl-8
              SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
                div.custom-image-card.rounded-8px.h-100
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Valor de mercado
                    p.px-1.text-small.mb-0.d-flex.text-center Se basa en el precio de transacción de un bien o servicio en un mercado competitivo. Refleja cuánto está dispuesto a pagar un comprador en condiciones normales de oferta y demanda.
                div.custom-image-card.rounded-8px.h-100
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-19.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Valor de uso
                    p.px-1.text-small.mb-0.d-flex.text-center Representa la utilidad que un bien o servicio proporciona a un consumidor. Depende de factores como la funcionalidad, la durabilidad y la capacidad de satisfacer una necesidad específica.
                div.custom-image-card.rounded-8px.h-100
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Valor de cambio
                    p.px-1.text-small.mb-0.d-flex.text-center Se refiere a la capacidad de un bien para intercambiarse por otro, en el mercado. En el comercio y la economía de trueque, el valor se determina por la equivalencia entre productos o servicios.
                div.custom-image-card.rounded-8px.h-100
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Valor contable
                    p.px-1.text-small.mb-0.d-flex.text-center Calculado a partir de los estados financieros de una empresa, representa el costo de los activos, menos la depreciación.
                div.custom-image-card.rounded-8px.h-100
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-22.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Valor Presente Neto (VPN)
                    p.px-1.text-small.mb-0.d-flex.text-center Es utilizado en evaluaciones de inversiones, para determinar la rentabilidad futura de un proyecto. Se calcula descontando los flujos futuros de caja a un valor presente, ayudando a los inversionistas a tomar decisiones fundamentadas.
                div.custom-image-card.rounded-8px.h-100
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-23.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Valor social
                    p.px-1.text-small.mb-0.d-flex.text-center Evalúa el impacto de un bien o servicio en el bienestar colectivo. Incluye factores como el acceso a la educación, la salud y la reducción de desigualdades económicas.
                div.custom-image-card.rounded-8px.h-100
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-24.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Valor ambiental
                    p.px-1.text-small.mb-0.d-flex.text-center Considera los beneficios económicos de los recursos naturales y los costos asociados a su explotación. Se utiliza en la evaluación de políticas de sostenibilidad y conservación.
                div.custom-image-card.rounded-8px.h-100
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-25.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Valor subjetivo
                    p.px-1.text-small.mb-0.d-flex.text-center Depende de la percepción individual de cada persona, respecto a un bien o servicio. Este tipo de medición varía ampliamente y está influenciado por la cultura, la experiencia y las preferencias personales.

      #t_2_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.3
          h2 Teorías del valor

      p.mb-4 Las teorías del valor en economía, buscan explicar cómo se determina el valor de los bienes y servicios. Algunas de las principales teorías son:

      .row.mb-4
        .col-12.col-lg-7
          AcordionA(tipo="b")
            .div(titulo="Teoría del valor-trabajo")(data-aos="fade-up")
              p Planteada por economistas como Adam Smith, David Ricardo y Karl Marx, sostiene que el valor de un bien es determinado por la cantidad de trabajo necesario para producirlo. En esta teoría, se considera que el esfuerzo humano invertido en la producción de un bien, es el principal determinante de su valor, lo que implica que el trabajo es la fuente fundamental de riqueza y que el valor se mide en términos de tiempo de trabajo.
            .div(titulo="Teoría subjetiva del valor")(data-aos="fade-up")
              p Propuesta por la escuela austríaca de economía, sostiene que el valor depende de la percepción y preferencias individuales de los consumidores. Según esta perspectiva, el valor de un bien es determinado por la utilidad que le asigna cada persona, lo que implica que el mismo producto puede tener diferentes valores para distintos individuos, en función de sus necesidades y deseos.
            .div(titulo="Teoría del valor-utilidad marginal")(data-aos="fade-up")
              p Explica que el valor de un bien depende de la utilidad adicional que proporciona al consumidor. A diferencia de la teoría del valor-trabajo, esta teoría enfatiza que los consumidores valoran los bienes en función de su utilidad en el momento de la elección y que el valor de un bien disminuye a medida que se consume en mayor cantidad.
            .div(titulo="Teoría del valor de oferta y demanda")(data-aos="fade-up")
              p Sostiene que el valor es determinado por la interacción entre la oferta y la demanda de un bien o servicio en el mercado. En esta teoría, el precio de un bien refleja un equilibrio entre la cantidad de bienes disponibles y la cantidad que los consumidores están dispuestos a comprar a diferentes precios, lo que influye directamente en su valor económico.
        .col-12.col-lg-5.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

      h2 ¿Cómo se crea valor?
      p.mb-4 La creación de valor económico se da cuando un bien o servicio incrementa su utilidad, generando mayores beneficios para la sociedad en general. En términos económicos generales, el valor se genera a través de diversos mecanismos que impactan la productividad, la eficiencia y el bienestar colectivo:

      ImagenInfografica.color-secundario.mb-4.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-27.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='17%' y='78%' numero='+')
          .h5.mb-2 01. Innovación y tecnología 
          p El desarrollo de nuevas tecnologías y la innovación en procesos productivos, permiten mejorar la eficiencia, reducir costos y satisfacer necesidades emergentes en la sociedad.
        .tarjeta.bg-white.p-4(x='18%' y='46%' numero='+')
          .h5.mb-2 02. Infraestructura y desarrollo
          p La inversión en infraestructura como carreteras, redes de comunicación y servicios públicos facilita el crecimiento económico y mejora la calidad de vida de la población.
        .tarjeta.bg-white.p-4(x='27%' y='22%' numero='+')
          .h5.mb-2 03. Educación y capital humano
          p Un sistema educativo eficiente aumenta la productividad laboral, fomenta la innovación y genera una fuerza de trabajo más capacitada, lo que incrementa el valor económico de la sociedad.
        .tarjeta.bg-white.p-4(x='74%' y='22%' numero='+')
          .h5.mb-2 04. Eficiencia en el uso de recursos
          p La optimización del uso de los recursos naturales y económicos permite una mayor sostenibilidad y rentabilidad a largo plazo.
        .tarjeta.bg-white.p-4(x='83%' y='45.7%' numero='+')
          .h5.mb-2 05. Políticas públicas y regulaciones
          p La implementación de normativas que promuevan la competencia justa, la estabilidad financiera y el acceso a bienes y servicios básicos contribuye a la generación de valor económico en un país.
        .tarjeta.bg-white.p-4(x='84%' y='78%' numero='+')
          .h5.mb-2 06. Sostenibilidad y medio ambiente
          p La adopción de modelos económicos sustentables, garantiza que el crecimiento económico no comprometa los recursos naturales ni el bienestar de futuras generaciones.

      #t_2_4.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.4
          h2 Importancia del valor económico en la economía

      .row.mb-4
        .col-4.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 El valor económico desempeña un papel fundamental en el desarrollo y funcionamiento de las economías, porque permite asignar eficientemente los recursos, orientar la producción de bienes y servicios y facilitar la toma de decisiones económicas. La comprensión del valor económico permite a los gobiernos, empresas y consumidores evaluar costos y beneficios, optimizar el uso de los factores de producción y generar crecimiento sostenible.
          .bg-azul.p-4.mb-4(data-aos="fade-up")
            span Además, el valor económico influye en el bienestar social, debido a que impacta en la distribución del ingreso, la inversión en infraestructura y el acceso a servicios esenciales, promoviendo el progreso y la estabilidad económica, a largo plazo.
          span Por otro lado, la asignación de recursos en sectores públicos y privados, también depende del valor económico. En el sector público, los gobiernos evalúan el valor económico de proyectos de infraestructura, salud y educación mediante análisis costo-beneficio. En el sector empresarial, las decisiones de inversión dependen de la rentabilidad esperada y del valor que se generará a partir de los recursos utilizados.

      h2 Valor económico y sostenibilidad

      .row.mb-5
        .col-12.col-xl-8.d-flex.flex-column
          p.mb-4 En la economía moderna, el concepto de valor económico se ha expandido para incluir consideraciones ambientales y sociales. La economía del bienestar y la economía ecológica han destacado la importancia de incorporar externalidades en la evaluación del valor económico. Por ejemplo, los costos ambientales asociados con la producción industrial, como la contaminación y el cambio climático, pueden afectar el valor real de los bienes y servicios.
          .d-flex.align-items-start.bg-verde.p-4(data-aos="fade-up").d-flex.align-items-center
            img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-29.svg', alt='Texto que describa la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Modelos como la economía circular, buscan redefinir el valor económico al priorizar la reutilización y el reciclaje de materiales para reducir el desperdicio. Asimismo, el desarrollo de indicadores como el Producto Interno Bruto Verde (PIB Verde) y el Índice de Desarrollo Humano Ajustado a la Sostenibilidad (IDHAS), reflejan el creciente reconocimiento de la importancia del valor económico en un contexto de desarrollo sustentable.
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')


      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://revistas.pucp.edu.pe/index.php/contabilidadyNegocios/article/view/1651/1597") Medina Giacomozzi, A. (2011). Valor económico de la empresa: alcances y consideraciones. Contabilidad y Negocios, 6(12), 36-49.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/2Pw1IOeAlrA?si=8McgwUXC0ED6G1hT") [Vídeo] ¿Qué entendemos por "Valor" en Agilidad?
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
