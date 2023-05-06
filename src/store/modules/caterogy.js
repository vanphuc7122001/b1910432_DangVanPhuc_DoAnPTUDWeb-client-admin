import {
  getAllCaterogyApi,
  getDetailCaterogyApi,
  updateCaterogyApi,
  deleteCaterogyApi,
  addCaterogyApi,
} from "../../api/caterogy";

const caterogy = {
  namespaced: true,
  state() {
    return {
      caterogyList: [],
    };
  },
  mutations: {
    getAllCaterogyMutations(state, payload) {
      state.caterogyList = [...payload];
    },
  },
  actions: {
    async actionGetAllCaterogy(context) {
      const payload = await getAllCaterogyApi();
      // console.log(payload);
      context.commit("getAllCaterogyMutations", payload);
    },
    async actionGetCaterogyItem(context, id) {
      return await getDetailCaterogyApi(id);
    },

    async actionUpdateCaterogyItem(context, caterogy) {
      const res = await updateCaterogyApi(caterogy);
      return res;
    },
    async actionDeleteCaterogy(context, id) {
      const res = await deleteCaterogyApi(id);
      context.dispatch("actionGetAllCaterogy");
      return res;
    },

    async actionAddCaterogy(context, payload) {
      const res = await addCaterogyApi(payload);
      return res;
    },
  },
};

export default caterogy;
