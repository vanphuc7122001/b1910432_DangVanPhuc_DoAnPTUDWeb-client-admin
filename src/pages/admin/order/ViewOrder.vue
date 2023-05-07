<template>
    <div class="card">
        <div class="card-header font-20 bg-dark text-white">
            Danh sách đơn hàng
        </div>
        <div class="card-body font-16">
            <table class="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>Ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in orderDetail" :key="index">
                        <td>
                            <img :src="product.image" alt="" style="width: 50px;">
                        </td>
                        <td> {{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        <td> 1 </td>
                        <td>
                            {{ product.price}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="card-footer text-danger">
            <h4>Tổng tiền cho đơn hàng này là : {{ totalPrice }} .000.000 VND</h4>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapActions } = createNamespacedHelpers('order')

export default {
  computed: {
    ...mapState({
        orderDetail: (state) => state.orderDetail,
        totalPrice: (state) => state.totalPrice
    }),
  },

  methods: {
    ...mapActions({
      getOrderDetails: "actionGetOrderDetail"
    }),
    
  },

  created() {
    this.getOrderDetails(this.$route.params.id)
  }
};
</script>



<style></style>