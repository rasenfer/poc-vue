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
- Modulo de vuex para gestión de respuestas axios.
- Modulo de vuex para gestión de rutas vue-router en el store de vuex.

Se ha procurado implementar todo el core conforme a los estandares de cada libreria.

En vue evitando la herencia y resolviendo la reutilización mediante composicion, mediante implementaciones muy similares a como trabaja vuex, de manera que los componentes tengan que utilizar conscientemente las gestiones de estado.

Para axios mediante el uso de interceptores, sin obligar a utilizar ninguana libreria que envuelva a axios, de manera que puedan realizarse las llamadas con el api nativa.

Las configuraciones marcadas como opcionales solo arrancan si su libreria correspondiente esta incluida en el package.json de la aplicación.

No se utilizan configuraciones "magicas", toda configuracion que tenga que venir dada por la aplicacion se le proporcionará al core mediante el starter, no se va a interntar buscar automaticamente ningun fichero en direcctiorios propios de la aplicación.

A futuro se espera proporcionar las siguientes configuraciones/funcionalidades:

- testing.
- gestion de errores respuestas axios.
- estudiar posibilitar el uso de vuetify en lugar de bootstrap

## Estructura base

```Text
├─ api             - recursos mock-server.
├─ public          - recursos html publicos (index.html, favicon.ico).
├─ src
│   ├─ core        - Contiene código importado de libreria core.
│   │
│   ├─ main.js     - Script inicial de la aplicacion que invoca al starter.
│   ├─ app         - configuraciones de aplicacion (routes, api-urls, etc. ).
│   ├─ assets      - recursos de aplicacion como imagenes o documentos.
│   ├─ components  - componentes para utilizar en vistas u otros componentes.
│   ├─ services    - servicios (lógica o llamadas api).
│   ├─ store       - store de vuex.
│   └─ views       - componentes de tipo vistas / paginas navegables.
├─ .babelrc        - configuración babel-polyfill.
├─ .env.local      - configuración entorno mock server.
├─ .eslintrc       - configuración eslint.
├─ package.json    - configuración webpack.
├─ readme.md       - documentación.
├─ vue.config.js   - configuración pluging vue cli (serve-api-mocks).
```

## Starter

Para facilitar la inicialización de aplicaciones la funcionalidad core provee un starter al que proporcionandole la configuración porpia de la aplicacion es capaz de arancar aplicacion.

Este starter inicializa la aplicación con un componente **vue** con unas configuraciones predefinidas que gestiona los cambios de  en **vuex** del modulo router y peticiones axios, también renderiza la vista principal que se le proporcione.


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
- whatwg-fetch polyfill:
- esLint:

En cada apartado correspondiente se detalla mas cada una de estas configuraciones

Esta configuración utiliza la implementacion standar de todas las librerias por lo que seria perfectamente posible importar cualquiera de ellas y a
Si quisieran realizarse acciones de configuración adicional propias de la aplicacion como 

---

```javascript
import { start } from '@/core';

import routes from '@/app/routes';
import apiUrls from '@/app/api-urls';
import store from '@/store';
import { MainView } from '@/views';

const name = require('../package.json').name;

start(name, MainView, store, routes, apiUrls);
```

```javascript
import { start } from '@/core';

import routes from '@/app/routes';
import apiUrls from '@/app/api-urls';
import store from '@/store';
import { MainView } from '@/views';

const name = require('../package.json').name;

start(name, MainView, store, routes, apiUrls);
```

## Vuex + Axios

### Service

### MapServiceGetters

#### mapeo de nombres a alias asignados por basePath del servicio *RECOMENDADO*

```javascript
//mapeo de nombres a alias asignados por basePath del servicio *RECOMENDADO*
import { service1, service2 } from '@/services';
import { mapServiceGetters } from '@/core/store';

computed: {
    ...mapServiceGetters({
    alias1: service1, // service1.basePath = '/service1/path'
    alias2: service2,
    alias3: {service: service3, props: ['propUsedInPathVariable']}
  })
}
```

#### mapeo de nombres a alias asignados por url de peticion

```javascript
//mapeo de nombres a alias asignados por url de peticion
import { mapServiceGetters } from '@/core/store';

computed: {
  ...mapServiceGetters({
    alias1: '/service1/path',
    alias2: '/service2/path',
    alias3: {service: '/service3/path', props: ['propUsedInPathVariable']}
  })
}
```

#### mapeo automatico de nombres por basePath del servicio

```javascript
//mapeo automatico de nombres por basePath del servicio
import { service1, service2 } from '@/services';
import { mapServiceGetters } from '@/core/store';

computed: {
  ...mapServiceGetters([service1, service2])
}
```

#### mapeo automatico de nombres por url de peticion

```javascript
//mapeo automatico de nombres por url de peticion
import { mapServiceGetters } from '@/core/store';

computed: {
  ...mapServiceGetters(['/service1/path', '/service2/path'])
}
```

## Core
