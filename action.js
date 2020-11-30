/* ASSIGNMENT
Aggiungere Header e Footer con VueJs
creando una struttura dati che consenta di inserire i link nelle navbar.
*/

// ------------------------------ VUE JS ------------------------------

let app = new Vue({
  el: '#root',
  data: {
    nav_logo: {
      url: 'avadabarbers-logo-x1',
      alt: 'Avada Barbers logo',
    },
    page_title: 'Barber Shop',
    jumbo_slogan: 'The Pinnacle of Male Grooming',
    jumbo_img: {
      url: 'avadabarbers_hero_focalmirror-400x550',
      alt: 'Barber working',
    },
  },
  methods: {

  },
});
