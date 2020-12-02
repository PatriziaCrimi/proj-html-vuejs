// ------------------------------ VUE JS ------------------------------

let app = new Vue({
  el: '#root',
  data: {
    is_burger_active: false,
    index_active_item: '',
    index_active_bg: null,
    logo: {
      url: 'avadabarbers_logo',
      alt: 'Avada Barbers logo',
    },
    page_title: 'Barber Shop',
    burger_menu: [
      {
        list_item: 'Home',
        url: '#',
      },
      {
        list_item: 'About us',
        url: '#',
      },
      {
        list_item: 'Services',
        url: '#',
      },
      {
        list_item: 'Shop',
        url: '#',
      },
      {
        list_item: 'Our team',
        url: '#',
      },
      {
        list_item: 'Blog',
        url: '#',
      },
      {
        list_item: 'Contact us',
        url: '#',
      },
    ],
    burger_bg_list: [
      {
        url: 'home_bg',
        description: 'Avada barber shop',
      },
      {
        url: 'about_bg',
        description: 'Man being shaved detail',
      },
      {
        url: 'services_bg',
        description: 'Main having an haircut',
      },
      {
        url: 'shop_bg',
        description: 'Barber leather armchair',
      },
      {
        url: 'products_bg',
        description: 'Man being shaved',
      },
      {
        url: 'blog_bg',
        description: 'Leather armchairs in barber shop',
      },
      {
        url: 'contact_us_bg',
        description: 'Barber tools',
      },
    ],
    jumbo_slogan: 'The Pinnacle of Male Grooming',
    jumbo_img: {
      url: 'jumbotron_poster',
      alt: 'Barber hairstyling',
    },
    footer_products_img: {
      url: 'footer_products',
      alt: 'Shaving products',
    },
    footer_barber_img: {
      url: 'footer_poster',
      alt: 'Barber hairstyling',
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
        name: 'facebook',
        code: '-f',
        url: '#',
      },
      {
        name: 'twitter',
        code: '',
        url: '#',
      },
      {
        name: 'youtube',
        code: '',
        url: '#',
      },
      {
        name: 'instagram',
        code: '',
        url: '#',
      },
    ],
    footer_credits: [
      '\u00A9 Copyright 2012-2020', // \u00A9 JS unicode for © Copyright
      'Avada Theme by ThemeFusion',
      'All Rights Reserved',
      'Powered by WordsPress',
    ],
  },  // Closing data
  methods: {
    toggleBurgerMenu() {
      if(this.is_burger_active) {
        this.is_burger_active = false;
      } else {
        this.is_burger_active = true;
      }
    },
    activateItemBurger(current_index) {
      this.index_active_item = current_index;
      this.index_active_bg = this.index_active_item;
    },
    deactivateItemBurger() {
      this.index_active_item = '';
      this.index_active_bg = null;
    },
    showName(current_index) {
      this.index_active_item = current_index;
    },
    hideName() {
      this.index_active_item = '';
    },
  },  // Closing methods
});
