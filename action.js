// ------------------------------ VUE JS ------------------------------

let app = new Vue({
  el: '#root',
  data: {
    logo: {
      url: 'avadabarbers_logo',
      alt: 'Avada Barbers logo',
    },
    page_title: 'Barber Shop',
    jumbo_slogan: 'The Pinnacle of Male Grooming',
    jumbo_img: {
      url: 'jumbotron_poster',
      alt: 'Barber hairstyling',
    },
    footer_products_img: {
      url: 'footer_products',
      alt: 'Shaving products',
    },
    footer_contacts: {
      holder: 'Avada Barbers',
      address: {
        street: '123 New York Street',
        city: 'New York City',
      },
      email: 'info@yourwebsite.com',
      tel: '+1(555)555-1212',
    },
    footer_social_media: [
      {
        name: 'facebook-f',
        url: '#',
      },
      {
        name: 'twitter',
        url: '#',
      },
      {
        name: 'youtube',
        url: '#',
      },
      {
        name: 'instagram',
        url: '#',
      },
    ],
    footer_barber_img: {
      url: 'footer_poster',
      alt: 'Barber hairstyling',
    },
    footer_credits: [
      '\u00A9 Copyright 2012-2020', // \u00A9 JS unicode for © Copyright
      'Avada Theme by ThemeFusion',
      'All Rights Reserved',
      'Powered by WordsPress',
    ],
  },  // Closing data
  methods: {

  },  // Closing methods
});
