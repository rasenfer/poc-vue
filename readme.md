# Vue-Poc

>>>>>>BORRADOR

El objetivo de este proyecto es proveer la estructura e implementacion de un arquetipo base para proyectos vue.

Este arquetipo da un configuración base de proyecto con las siguientes configuraciones:

- vue
- vuex
- vue-router
- axios
- bootstrap (opcional)
- lodash (opcional)
- mock-server
- babel-polyfill
- whatwg-fetch polyfill (opcional)
- esLint

Ademas proporciona las siguientes funcionalidades:

- Starter de aplicación + configuración.
- Modulo de vuex para gestión de respuestas axios en el estado.
- Modulo de vuex para gestión de rutas vue-router en el estado.

Se ha procurado implementar todo el core conforme a los estandares de cada libreria.

En vue + vuex evitando la herencia y resolviendo la reutilización mediante composicion, utilizando implementaciones muy similares a como trabaja vuex, de manera que los componentes tengan que utilizar conscientemente las gestiones de estado.

Para axios mediante el uso de interceptores, sin obligar a utilizar ninguna libreria core que envuelva a axios, de manera que puedan realizarse las llamadas con el api nativa.

Las configuraciones marcadas como opcionales solo arrancan si su libreria correspondiente esta incluida en el package.json de la aplicación.

No se utilizan configuraciones "magicas", toda configuracion que tenga que venir dada por la aplicacion se le proporcionará al core mediante el starter.

A futuro se espera proporcionar las siguientes configuraciones/funcionalidades:

- testing.
- gestion de errores respuestas axios.
- estudiar posibilitar el uso de vuetify en lugar de bootstrap

## Estructura base

```Text
├─ api                                  - recursos mock-server.
├─ public                               - recursos html publicos (index.html, favicon.ico).
├─ src
│   ├─ core                             - Contiene código importado de libreria core.
│   │
│   ├─ main.js                          - Script inicial de la aplicacion que invoca al starter.
│   ├─ app                              - configuraciones de aplicacion (routes, api-urls, etc. ).
│   │   ├─ api-urls.json                - configuracion de urls de apis.
│   │   ├─ routes.js                    - configuracion vue-router de la aplicación.
│   │   └─ app-config-helpers.js        - [OPCIONAL] scripts de configuracion de aplicación adicionales
│   ├─ assets                           - recursos de aplicacion como imagenes o documentos.
│   ├─ components                       - componentes para utilizar en vistas u otros componentes.
│   │   ├─ styles                       - estilos separados de los componentes.
│   │   │   └─ name-style.scss          - [OPCIONAL] hoja de estilo sass-css del componente.
│   │   └─ Name.vue                     - componente tipo single-file
│   ├─ services                         - servicios (lógica o llamadas api).
│   │   └─ name-service.js              - js del servicio.
│   ├─ store                            - store de vuex.
│   │   ├─ store.js                     - configuración store de vuex para la aplicación
│   │   ├─ actions.js                   - [OPCIONAL] acciones del store
│   │   ├─ mutations.js                 - [OPCIONAL] mutaciones del store
│   │   └─ modules                      - carpeta de modulos store.
│   │       ├─ name-module.js           - modulo store
│   │       ├─ name-module-actions.js   - [OPCIONAL] acciones del modulo store
│   │       └─ name-module-mutations.js - [OPCIONAL] mutaciones del modulo store
│   └─ views                            - componentes de tipo vistas / paginas navegables.
│       ├─ styles                       - estilos separados de los componentes.
│       │   └─ name-view-style.scss     - [OPCIONAL] hoja de estilo sass-css de la vista.
│       └─ NameView.vue                 - vista tipo single-file.
├─ .babelrc                             - configuración babel-polyfill.
├─ .env.local                           - configuración entorno mock server.
├─ .eslintrc                            - configuración eslint.
├─ package.json                         - configuración webpack.
├─ readme.md                            - documentación.
├─ vue.config.js                        - configuración pluging vue cli (serve-api-mocks).
```

## Starter

Para facilitar la inicialización de aplicaciones la funcionalidad core provee un starter al que proporcionandole la configuración porpia de la aplicacion es capaz de arancar la misma junto con las preconfiguraciones dadas por el core.

Este starter inicializa la aplicación con un componente **vue** con unas configuraciones predefinidas que gestiona los cambios de estado en **vuex** del modulo router y peticiones axios, también renderiza la vista principal que se le proporcione.

El modo de utilizar este starter es invocandolo desde es script principal de la aplicación (```main.js```).

```core.start(appName, MainView, appStore, appRoutes, apiUrls)```

- appName: id de la aplicación formato **camelCase** para el div sobre el que se inicializará vue.
- MainView: Componente tipo vista principal que se renderizará.
- appStore: Store de **vuex** de la aplicación.
- appRoutes: Configuración de rutas para **vue-router**.
- apiUrls: Json, con los mapeos de las url base de api que utilizará **axios**.

Las configuraciones que inicializa son las siguientes:

- vuex: Inicializa la libería de **vuex** con el store ```appStore``` proporcionado al starter + los módulos **api-module** y **router-module** para gestionar en el estado las peticiones api a traves de **axios** y las navegaciones de **vue-router**, respectivamente.
- vue-router: Configura la libreria **vue-router** con las rutas ```appRoutes``` proporcionadas.
- axios: vincula las rutas de api proporcionadas al api de axios e inicializa varios interceptores para gestion de peticiones / respuestas.
- bootstrap: Incluye los css/js de bottstrap para poder utilizarlos en la aplicación (opcional)
- lodash: Incluye la libreria de lodash para poder utilizarla en la aplicación
- whatwg-fetch polyfill: Polyfil para poder utilizar la funcion fetch en navegadores no compatibles.

En cada apartado correspondiente se detalla mas cada una de estas configuraciones.

Esta configuración utiliza la implementacion estandar de cada libreria por lo que seria perfectamente posible modificar o añadir configuraciones según la documentación oficial de cada una.

---

```javascript
// main.js
import { start } from '@/core';

import routes from '@/app/routes';
import apiUrls from '@/app/api-urls';
import store from '@/store';
import { MainView } from '@/views';

const name = require('../package.json').name;

start(name, MainView, store, routes, apiUrls);
```

```json
// app/api-urls.json
{
  "local": "/api", // peticiones api-mock
  "dev": "http://localhost:8080", // peticiones api en maquina local
  "development": "https://development.org/api", // peticiones api desarrollo
  "production": "https://production.org/api" // peticiones api produccion
}
```

```javascript
// app/routes.js -> https://router.vuejs.org/
import { ViewA, ViewB, ViewList, ViewDetail } from '@/views';

export default [
  { name: 'a', path: '/a', component: ViewA },
  { name: 'b', path: '/b', component: ViewB },
  {
    name: 'list',
    path: '/list',
    component: ViewList,
    props: route => ({ page: Number(route.query.page || 1) })
  },
  {
    name: 'detail',
    path: '/detail/:id',
    component: ViewDetail,
    props: route => ({ id: Number(route.params.id) })
  }
];

```

```javascript
// store/index.js -> https://vuex.vuejs.org/
import aModule from '@/store/a-module/AModule';
import bModule from '@/store/a-module/AModule';

export default {
  state: {},
  mutations: {},
  actions: {},
  modules: {
    aModule,
    bModule
  }
};

```

```v
// views/main-view/MainView.vue -> https://vuex.vuejs.org/
<template>
  <div>
  </div>
</template>

<script>
import { aService } from '@/services';
import { AComponent, BComponent } from '@/components';

export default {
  props: {},
  components: {AComponent, BComponent},
  data: function() {
    return {};
  },
  methods: {
    aMethod: {
      aService.funct();
    }
  },
  mounted: {},
  updated: {},
  watchers: {},
  computed: {}
};
</script>

<style lang="scss" src="./main-view-style.scss" />


```

## Vuex + Axios

El core incluye un módulo de vuex para gestión de respuestas axios en el estado de la aplicación.

Esto permite que cualquier peticion realizada por axios quede reflejada en el estado de manera cumplan el patrón flux de vuex. Con ello se consigue que al navegar/restaurar por el estado de la aplicación también se reflejen estos cambios en las propiedades de los componentes en lugar de realizar nuevas peticiones al servidor.

Para ello se apoya en unos interceptores creados para axios, que vuelcan cada respuesta json en el estado de la aplicación dentro del modulo ```apiRequest```. Almacena tantas entradas como peticiones axios tenga el componente e identifincandolas por su url. Estas entadas se vacian cada vez que cambia la url de la aplicación.
Se almacena de la siguiente manera:

```json
{
  "apiRequest": {
    "/service1": { //el nombre coincide siempre con el path de la petición.
      "data": { ... //service response object },
      "config": { ... //axios request object }
    },
    "/service2/id": {
      "data": { ... //service response object },
      "config": { ... //axios request object }
    },
    "/service2/id": {
      "data": { ... //service response object },
      "config": { ... //axios request object }
    }
  }
}
```

El interceptor lanza dos mutaciones por cada petición axios:

- apiFetching: cuando se esta ejecutando la petición.
- apiRequestDone: una vez ha finalizado la petición.

Para facilitar la obtención de estos datos en el componente  que refleje siempre el cambio de estado se apoya en una implementación mediante un patrón ```service``` y una utilidad proporcionada ```mapApiGetters```

### Api Service

Se definen los servicios de api con un path base y una serie de metodos con las llamadas al api mediante axios.

```javascript
import axios from 'axios';

const basepath = '/service';
export default {
  basepath,
  list: params => axios.get(basepath, params),
  get: id => axios.get(`${basepath}/${id}`)
};
```

### mapApiGetters

Permite el mapeo de datos de respuestas axios almacenadas en el estado de la aplicación a propiedades del componente de forma sencilla, al cambiar este elemento del estado se refleja en la propiedad mapeada.

Como propiedad solo se mapea el elemento ```data``` ```{propName} = response.data``` de la respuesta axios, lo que es el objeto json devuelto por el server, adicionalemente se mapea también una propiedad adicional ```{propName}Response``` con todo el objeto de respuesta axios para su uso en caso de ser necesario.

En casos de respuestas con paginación se mapea como porpiedad ```{propName} = response.data.content``` (el array json) con los objetos y una propiedad adiconal mas ```{propName}PageMetadata = response.data.pageMetadata``` con los metadatos de paginación.

Al mapear respuestas api a propiedades podemos indicar que utilize valores de propiedades/datos del componente para identificar la respuesta mediante el uso del atributo ```props```

```javascript
import { service1, service2 } from '@/services';
import { mapApiGetters } from '@/core/store';

computed: {
    ...mapApiGetters({
    propName1: service1, // service1.basePath = '/service1/path'
    propName2: service2,
    propName3: {service: service3, props: ['propUsedInPathVariable']}
  })
}
```

### Ejemplo de uso

```javascript
// /services/example-service.js
import axios from 'axios';

const basepath = '/service';
export default {
  basepath,
  list: params => axios.get(basepath, params),
  get: id => axios.get(`${basepath}/${id}`)
};
```

```v
// /views/ExampleView.vue
<template>
  <div>
    <div v-if="loading">
      loading... {{ loading }}
    </div>
    <div v-if="!loading">
      {{ list.size - listPageMetadata.totalPages }}
    <div>
    <div v-if="!loading">
      {{ detail.id }} - {{ detail.name }}
    <div>
  </div>
</template>
<script>
<script>
import exampleService from '@/services/characters-service';
import { mapApiGetters } from '@/core/store';

export default {
  props: {
    id: { type: Number, required: true }
  },
  mount: function () {
    exampleService.list(id); // carga el listado al montar el componente
  }
  computed: {
    ...mapApiGetters({
      list: exampleService // mapea las propiedades list, listResponse, listPageMetadata.
      detail: { service: exampleService, props: ['id'] } // mapea las propiedades detail, detailResponse.
    }),
    loading: function() { // refresca la propiedad loading en funcion de los estados de las respuestas.
      return !this.listResponse.status && !this.detailResponse.status;
    }
  },
  watch: {
    id: {
      immediate: true, // fuerza el refresco del detalle al montar el componente
      handler: function(id) {
        exampleService.get(id); // refresca el detalle al cambiar el id
      }
    }
  }
};
</script>
```

### usos alternativos de mapApiGetters

#### mapeo de nombres a alias asignados por basePath del servicio *RECOMENDADO*

```javascript
//mapeo de nombres a alias asignados por basePath del servicio *RECOMENDADO*
import { service1, service2 } from '@/services';
import { mapApiGetters } from '@/core/store';

computed: {
    ...mapApiGetters({
    alias1: service1, // service1.basePath = '/service1/path'
    alias2: service2,
    alias3: {service: service3, props: ['propUsedInPathVariable']}
  })
}
```

##### mapeo de nombres a alias asignados por url de peticion

```javascript
//mapeo de nombres a alias asignados por url de peticion
import { mapApiGetters } from '@/core/store';

computed: {
  ...mapApiGetters({
    alias1: '/service1/path',
    alias2: '/service2/path',
    alias3: {service: '/service3/path', props: ['propUsedInPathVariable']}
  })
}
```

##### mapeo automatico de nombres por basePath del servicio

```javascript
//mapeo automatico de nombres por basePath del servicio
import { service1, service2 } from '@/services';
import { mapApiGetters } from '@/core/store';

computed: {
  ...mapApiGetters([service1, service2])
}
```

##### mapeo automatico de nombres por url de peticion

```javascript
//mapeo automatico de nombres por url de peticion
import { mapApiGetters } from '@/core/store';

computed: {
  ...mapApiGetters(['/service1/path', '/service2/path'])
}
```

## Core

Documentar la implementación del core.
