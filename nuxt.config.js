module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Five Star Studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Modules configuration
  */
  modules: [
    '@nuxtjs/apollo',
  ],
  /*
  ** Apollo configuration
  */
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://grapql.datocms.com',
        getAuth: () => 'Bearer 9aaf99d768b73adc9d4f12eda7e27a'
      },
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

