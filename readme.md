>>>>>>DOC IN PROGRESS

# Vue-Poc

El objetivo de este proyecto es proveer la estructura e implementacion de un arquetipo base para proyectos vue.

Este arquetipo da un configuración base de proyecto con las siguientes inicializaciones:

- Vue
- Vuex
- Vue-Router
- axios
- lodash
- mock-server
- babel-polyfill
- whatwg-fetch polyfill
- esLint

Ademas contiene interceptores de axios para manejar peticiones y respuestas de la libreria en el estado global de Vuex.

## Estructura base
    ├── App
    ├── src
    │   ├─ core
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
