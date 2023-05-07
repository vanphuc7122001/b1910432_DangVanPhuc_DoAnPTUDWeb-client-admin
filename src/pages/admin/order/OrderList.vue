<template>
  <div class="card">
    <div class="card-header font-20 bg-dark text-white">Danh sách đơn hàng</div>
    <div class="card-body font-16">
      <table class="table table-bordered text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Thời gian đặt</th>
            <th>Thông tin người đặt</th>
            <th>Trạng thái</th>
            <th>Tổng tiền</th>
            <th>Xem</th>
            <th>Sửa</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(orderItem, index) in orderList" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ orderItem.createdAt }}</td>
            <td>
              {{ orderItem.owner.name }}
              <br>
              {{ orderItem.owner.phone_number }}
              <br>
              {{ orderItem.owner.address }}

            </td>
            <td>
              <span v-if="orderItem.status==1">Duyệt</span>
              <span v-if="orderItem.status==2">Hủy</span>
              <span v-if="orderItem.status==0">Chờ xác nhận</span>
            </td>
            <td>
              {{ orderItem.totalPrice }} .000.000 VND
            </td>
            <td>
              <!-- /admin/home/view-order -->
              <router-link :to="`/admin/home/view-order/${orderItem._id}`">
                Xem chi tiết
              </router-link>
            </td>
            <td>
              <button class="btn p-3 text-info" style="font-size: 16px;" @click="handleApprove({id: orderItem._id, status: 1})">
                Duyệt
              </button>
              <button
              class="btn p-3 text-danger" style="font-size: 16px;" @click="handleCancel({id: orderItem._id, status: 2})"
              >
                Hủy
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapActions } = createNamespacedHelpers('order')

export default {
  computed: {
    ...mapState({
      orderList: (state) => state.orderList
    }),
  },

  methods: {
    ...mapActions({
      getAllOrder: "actionGetAllOrder",
      handleApprove: "actionHandleApprove",
      handleCancel: "actionHandleCancel"
    }),
    
  },

  created() {
    this.getAllOrder()
  }
};
</script>

<style></style>