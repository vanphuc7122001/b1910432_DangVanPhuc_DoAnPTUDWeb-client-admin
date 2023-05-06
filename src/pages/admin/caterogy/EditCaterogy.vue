<template>
    <div class="card rounded">
        <div class="card-header font-20 bg-dark text-white">
            Sửa danh mục sản phẩm
        </div>
        <div class="card-body">
            <form @submit.prevent method="post">
                <input type="hidden" name="id_update" value="<?php echo $id ?>">
                <div class="form-group font-16">
                    <label for="name">Tên danh mục sản phẩm:</label>
                    <input type="text" class="form-control font-12" placeholder="Nhập tên danh mục cần thêm" id="name"
                        name="name" v-model="caterogyItem.name">
                </div>
                <input class="btn btn-primary btn-block" type="submit" name="update" value="Sửa" @click="handleUpdate(caterogyItem)">
            </form>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('caterogy')

export default {
    data(){
        return{
            caterogyItem : null
        }
    },
  methods: {
    async handleUpdate(caterogyItem){
        const caterogy = {
            id :  caterogyItem._id,
            name : caterogyItem.name
        }
        const res = await this.updateCaterogyItem(caterogy)
        if(res.success) {
            alert('Updated Successfully')
            this.$router.push("/admin/home/caterogy");
        }else{
            alert('Updated failed')
            this.$router.push("/admin/home/caterogy");
        }
    },
    ...mapActions({
      getCaterogyItem: 'actionGetCaterogyItem',
      updateCaterogyItem: 'actionUpdateCaterogyItem',
    })
  },
  async created(){
    this.caterogyItem = await this.getCaterogyItem(this.$route.params.id)
  }
}
</script>

<style></style>