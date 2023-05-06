import {
  getAllProductApi,
  addProductApi,
  deleteProductApi,
  updateProductApi,
} from "../../api/product";
// addProductApi
const product = {
  namespaced: true,
  state() {
    return {
      productList: [],
    };
  },
  mutations: {
    getAllProductMutations(state, payload) {
      state.productList = payload;
    },
  },
  actions: {
    async actionGetAllProduct(context) {
      const payload = await getAllProductApi();
      context.commit("getAllProductMutations", payload.data);
    },

    async actionAddProduct(context, payload) {
      const res = await addProductApi(payload);
      return res;
    },

    async actionDeleteProduct(context, payload) {
      const res = await deleteProductApi(payload);
      context.dispatch("actionGetAllProduct");
      return res;
    },

    async actionUpdateProduct(context, payload) {
      const res = await updateProductApi(payload);
      return res;
    },
  },
};

export default product;
