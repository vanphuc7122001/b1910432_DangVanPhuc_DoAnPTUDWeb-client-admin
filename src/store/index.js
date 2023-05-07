import { createStore } from "vuex";
import caterogy from "./modules/caterogy";
import product from "./modules/product";
import order from "./modules/order";
const store = createStore({
  modules: {
    caterogy,
    product,
    order,
  },
});

export default store;
