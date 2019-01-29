# fcweb

Fcweb is a Front-end and back-end separated Front-end webiste. 
It include home page, froum, admin and others.
It can deploy on CDN.

## Directory 
```
.
|-- README.md
|-- babel.config.js
|-- node_modules
|   |-- ..
|   `-- ..
|-- package-lock.json
|-- package.json
|-- public
|   |-- favicon.ico
|   |-- index.html    ( include bootstrap and other css/js file is here)
|   |-- robots.txt    
|   `-- static        ( bootstrap, not need pack image file is here)
`-- src
    |-- App.vue
    |-- api          ( api, ajax is here )
    |-- assets       ( icon font is here, like user avatar )
    |-- components   ( vue commont components is here)
    |-- config       ( vue config file is here, like different environment)
    |-- libs         ( utils lib is here)
    |-- main.js
    |-- router       ( router file is here)
    |-- store        ( store is here, offen use api module)
    `-- views        ( view or template is here)
```

## Require
```
npm install -g @vue/cli
npm install less
npm install less-loader
npm install vue-loader
npm install vue-router
npm install vuex axios iview js-cookie
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Visit It
See [https://wechat.baobeihuijia.com](https://wechat.baobeihuijia.com/).
