# Vue-Poc

>>>>>>DOC IN PROGRESS

El objetivo de este proyecto es proveer la estructura e implementacion de un arquetipo base para proyectos vue.

Este arquetipo da un configuración base de proyecto con las siguientes inicializaciones:

- vue
- vuex
- vue-router
- axios
- lodash
- mock-server
- babel-polyfill
- whatwg-fetch polyfill
- esLint

Ademas proporciona las siguientes funcionalidades:

- Starter de aplicación + configuración
- Modulo de vuex para gestión de respuestas axios
- Modulo de vuex para gestión de rutas vue-router en el store de vuex

A futuro se espera proporcionar las siguientes configuraciones/funcionalidades:

- testing
- gestion de errores respuestas axios

## Estructura base

    ├── App
    ├── src
    │   ├─ core #asd
    │   │
    │   ├─ main.js
    │   ├─ app
    │   ├─ assets
    │   ├─ components
    │   ├─ services
    │   ├─ store
    │   └─ views

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
