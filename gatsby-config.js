module.exports = {
  siteMetadata: {
    title: 'EasyGet - доставка та викуп з США та Китаю',
    description:
      'EasyGet — інструмент для зручної доставки та покупки товарів з іноземних сайтів. Ви можете придбати товар самостійно або просто додати його фото чи назву в нашому додатку і через 7-14 днів отримати його у своєму відділенні Нової Пошти.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCRF-a-lQ30gDcSBGColv0-ms8d4a91RTo",
          authDomain: "easygetcloudmessage.firebaseapp.com",
          databaseURL: "https://easygetcloudmessage.firebaseio.com",
          projectId: "easygetcloudmessage",
          storageBucket: "easygetcloudmessage.appspot.com",
          messagingSenderId: "930162095286",
          appId: "1:930162095286:web:d62b1200c3a9b1ba6ca217",
          measurementId: "G-KRX6KH365B",
        },
        features: {     
          auth: false,       
          database: false,  
          firestore: false,
          storage: false,    
          messaging: false, 
          functions: false,  
          performance: false, 
          analytics:true,    
        }, 
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
