import store from "@/store"

export default {
    ...store,
    state: {
        ...store.state,
        entities: {}
    },
    getters: {
        ...store.getters,
        getEntities: (state) => state.entities,
        getEntitiesByType: (state) => (type) => {
            return state.entities[type] ? state.entities[type] : {}
        },
        getEntity: state => (type, id) => {
            let entity = null;
            if (state.entities[type]) {
                entity = state.entities[type].find(entity => entity.id === id)
            }
            return entity;
        }
    },
    mutations: {
        ...store.mutations,
        storeEntity: (state, { type, entity }) => {
            state.entities[type] = {...state.entities[type], [entity.id]: entity};
        }
    }
}