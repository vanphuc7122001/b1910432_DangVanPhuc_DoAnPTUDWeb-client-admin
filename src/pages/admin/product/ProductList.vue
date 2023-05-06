<template>
  <div class="card rounded">
    <div class="card-header font-20 bg-dark text-white">
      Danh sách sản phẩm
    </div>
    <div class="card-body font-16">
      <router-link to="/admin/home/add-product" class="btn__common text-decoration-none btn-primary">Thêm</router-link>
      <table class="table table-bordered mt-3">
        <thead class="thead-dark">
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tóm tắt</th>
            <th>Danh mục</th>
            <th>Sửa</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(productItem, index) in productList" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ productItem.name }}</td>
            <td>
              <img :src="productItem.image" alt="Hinh anh" style="width: 100px;">
            </td>
            <td>{{  productItem.price}}</td>
            <td>{{  productItem.quantity}}</td>
            <td>{{  productItem.desc}}</td>
            <td></td>
            <td>
              <router-link :to="`/admin/home/edit-product/${productItem._id}`"
                class="btn__common btn-primary text-decoration-none">Sửa</router-link>
            </td>
            <td>
              <button class="btn__common btn-primary text-decoration-none" @click="handleDeleteProduct(productItem._id)" style="width: 50px;">x</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapActions } = createNamespacedHelpers('product')


export default {
  computed: {
    ...mapState({
      productList: (state) => state.productList
    })
  },

  methods: {
    async handleDeleteProduct(id){
      const res = await this.deleteProduct(id)
      if(res.success == 1){
        alert('Delete product successfully')
      }else{
        alert('Product not found')
      }
    },
    ...mapActions({
      getAllProduct: 'actionGetAllProduct',
      deleteProduct: "actionDeleteProduct"
    })
  },

  created() {
    this.getAllProduct();
  }
}
</script>

<style></style>