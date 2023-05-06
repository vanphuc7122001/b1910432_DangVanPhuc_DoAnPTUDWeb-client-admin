<template>
  <div class="card rounded">
    <div class="card-header font-20 bg-dark text-white">
      Danh mục Sản Phẩm
    </div>
    <div class="card-body font-16">

      <router-link to="/admin/home/add-caterogy" class="btn__common text-decoration-none btn-primary">
        Thêm
      </router-link>
      <table class="table table-bordered mt-3">
        <thead class="thead-dark">
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Sửa</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(caterogyItem, index) in caterogyList" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ caterogyItem.name }}</td>
            <td>
              <router-link :to="`/admin/home/edit-caterogy/${caterogyItem._id}`"
                class="btn__common btn-primary text-decoration-none">Sửa</router-link>
            </td>
            <td>
              <button class="btn__common btn-primary text-decoration-none" @click="handleDeleteCaterogy(caterogyItem._id)" style="width: 70px;">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('caterogy')
export default {
  computed: {
    ...mapState({
      caterogyList: (state) => state.caterogyList
    })
  },
  methods: {
    async handleDeleteCaterogy(id){
      console.log(id);
      const res = await this.deleteCaterogy(id)
      if(res.message){
        alert('Delete Caterogy successfully')
        this.$router.push("/admin/home/caterogy");
      }else{
        alert('Delete Caterogy faild')
        this.$router.push("/admin/home/caterogy");
      }
    },
    ...mapActions({
      getAllCaterogy: 'actionGetAllCaterogy',
      deleteCaterogy: 'actionDeleteCaterogy'
    }),

  },
  created(){
    this.getAllCaterogy()
  }

}
</script>

<style></style>