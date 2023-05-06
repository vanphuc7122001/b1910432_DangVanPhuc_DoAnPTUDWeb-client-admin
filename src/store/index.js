import { createStore } from "vuex";
import caterogy from "./modules/caterogy";
import product from "./modules/product";
const store = createStore({
  modules: {
    caterogy,
    product,
  },
});

export default store;
