<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. El problema económico: escasez, necesidades y asignación de recursos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-up").d-flex.align-items-center
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-7.svg', alt='Texto que describa la imagen')
          .my-auto
            p.pe-xl-3.mb-0 El problema económico surge debido a la existencia de necesidades humanas ilimitadas frente a recursos escasos, lo que obliga a tomar decisiones sobre la asignación de estos recursos. Esta situación afecta a individuos, empresas y gobiernos, quienes deben determinar la mejor manera de utilizar los bienes y servicios disponibles, para maximizar el bienestar y la eficiencia.
        p.mb-0 La economía como ciencia, ha abordado este problema desde diversas perspectivas teóricas. Adam Smith introdujo la idea de la "mano invisible" del mercado, que permite la asignación eficiente de recursos a través de la oferta y la demanda. Karl Marx, por otro lado, analizó cómo la distribución de los recursos está condicionada por las relaciones de producción y las estructuras de poder económico. Paul Samuelson destacó la importancia de la eficiencia en la asignación de recursos y la necesidad de intervención gubernamental en ciertos casos de fallas del mercado.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Escasez

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 La escasez se refiere a la insuficiencia de recursos para satisfacer todas las necesidades y deseos de la sociedad. Los recursos pueden clasificarse en naturales, humanos y de capital, y su disponibilidad es limitada en contraste con la demanda creciente. Se define la economía como la ciencia que estudia la asignación de recursos escasos, para satisfacer necesidades ilimitadas; por tanto, se resalta que la escasez es el problema central de la disciplina económica.
        span Conozcamos cada uno de estos recursos:
      .d-none.d-xl-block.col-xl-4(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')

    .row.position-relative.mb-0.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Recursos naturales
              p Los recursos naturales, son aquellos bienes y materias primas proporcionados por la naturaleza y utilizados en la producción económica. Se dividen en <b>recursos renovables</b>, como el agua, los bosques y la energía solar, que pueden regenerarse con el tiempo, y en <b>recursos no renovables</b>, como los minerales, el petróleo y el gas natural, cuya disponibilidad es limitada. Es necesario una gestión eficiente de estos recursos, para evitar su agotamiento y garantizar la sostenibilidad a largo plazo.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
          
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Recursos humanos
              p Los recursos humanos representan la mano de obra y el talento de las personas que participan en la producción de bienes y servicios. Incluyen habilidades, conocimientos, experiencia y capacidades laborales. La educación, la capacitación y la salud de la población, son factores determinantes en la calidad y productividad de estos recursos.<br>Un país con una fuerza laboral bien educada y capacitada, tiene mayores posibilidades de crecimiento y desarrollo económico. Por ejemplo, en el sector tecnológico, la creatividad y el conocimiento especializados de los ingenieros y programadores, impulsan la innovación y la competitividad global.

            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
          
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Recursos de capital
              p El capital económico se refiere a los bienes manufacturados utilizados en la producción de otros bienes y servicios. Se divide en capital físico, como maquinaria, herramientas, infraestructuras y edificios, y capital financiero, que incluye el dinero y los instrumentos financieros, utilizados para invertir en la producción. <br>La acumulación de capital es necesaria para el desarrollo económico, dado que permite aumentar la eficiencia productiva y la competitividad. 

            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')

    .bg-full-width.d-flex.align-items-start.bg-azul.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-12.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 Por ejemplo, en una región con tierras fértiles limitadas, el gobierno y los agricultores deben decidir si destinarlas al cultivo de alimentos básicos como arroz y trigo, o a la producción de productos de exportación como café y flores. Esta decisión implica costos de oportunidad, dado que, al elegir una opción, se renuncia a los beneficios que ofrecería la otra. La escasez también se refleja en el acceso a energía, agua potable y minerales, lo que ha generado conflictos y estrategias de optimización, a nivel global.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Asignación de recursos

    p.mb-4 La asignación de recursos es el proceso mediante el cual se distribuyen los factores de producción entre diferentes usos para satisfacer las necesidades de la sociedad, de la manera más eficiente posible. Existen diversos mecanismos de asignación, como el mercado, la planificación gubernamental y la combinación de ambos en sistemas mixtos.

    .row.mb-5
      .col-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .bg-amarillo.p-4.mb-4(data-aos="fade-up")
          span Friedrich Hayek argumentó que los precios en un mercado libre, actúan como señales para la asignación eficiente de recursos, permitiendo que productores y consumidores tomen decisiones informadas. Por otro lado, John Maynard Keynes, destacó la importancia de la intervención estatal para corregir desequilibrios y garantizar una distribución más equitativa de los recursos.
        span Un ejemplo ilustrativo es el mercado de vivienda en una ciudad en crecimiento; si la demanda de viviendas aumenta debido a la migración, los promotores inmobiliarios deben decidir si construir más apartamentos de lujo o viviendas accesibles para la población de bajos ingresos. La decisión dependerá de factores como el potencial de ganancias, las regulaciones gubernamentales y las políticas de subsidios.
    
    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://revistas.pucp.edu.pe/index.php/economia/article/download/582/569/") Iguíñiz, J. (2007). Tres conceptos de escasez. Economía, 30(59), 9-28.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/YnUYYEYigFE?si=YQSR_uXsQiXK0kzn") [Vídeo] UTPL ¿QUÉ ES LA ECONOMÍA Y CUÁL ES EL PROBLEMA ECONÓMICO? [(ECONOMÍA)(MICROECONOMÍA I)]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
