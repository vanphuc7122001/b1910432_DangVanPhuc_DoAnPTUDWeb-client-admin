import { getAllOrder, getDetailsOrder, updateOrder } from "../../api/order";

const order = {
  namespaced: true,
  state() {
    return {
      orderList: null,
      orderDetail: null,
      totalPrice: null,
    };
  },
  mutations: {
    mutationsSetOrderList(state, payload) {
      state.orderList = payload;
    },
    mutationsSetOrderDetails(state, payload) {
      state.orderDetail = payload.product;
      state.totalPrice = payload.totalPrice;
    },
  },

  actions: {
    async actionGetAllOrder(context) {
      const res = await getAllOrder();
      console.log(res.data);
      context.commit("mutationsSetOrderList", res.data);
    },

    async actionGetOrderDetail(context, id) {
      const res = await getDetailsOrder(id);
      context.commit("mutationsSetOrderDetails", {
        product: res.data.products,
        totalPrice: res.data.totalPrice,
      });
    },

    async actionHandleApprove(context, payload) {
      const res = await updateOrder(payload);
      console.log(res);
      context.dispatch("actionGetAllOrder");
    },

    async actionHandleCancel(context, payload) {
      const res = await updateOrder(payload);
      console.log(res);
      context.dispatch("actionGetAllOrder");
    },
  },
};

export default order;
