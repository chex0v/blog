module.exports = {
    plugins: ['vue-typed-js'],
    themeConfig: {
      logo: '/logo.jpg',
      nav: [
        { text: 'Главная', link: '/' },
        { text: 'Обо мне', link: '/about/' },
      ]
    },
    main: 'theme',
    head: [
      ['link', { rel: 'icon', href: '/logo.jpg' }],
      [
        'script', {}, `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-556Q44Z');`
      ]
    ],
    locales: {
      '/': {
        lang: 'ru-RU',
        title: 'Дмитрий Дмитриенко',
        description: 'Full stack web developer Дмитрий Дмитриенко'
      }
    }
  }