<template>
    <div class="card rounded">
        <div class="card-header font-20 bg-dark text-white">
            Thêm danh mục sản phẩm
        </div>
        <div class="card-body">
            <form @submit.prevent  method="post">
                <div class="form-group font-16">
                    <label for="name">Tên danh mục sản phẩm:</label>
                    <input type="text" class="form-control font-12" placeholder="Nhập tên danh mục cần thêm" id="name"
                        name="name" required v-model="name">
                </div>
                <input class="btn btn-primary btn-block" type="submit" name="store" value="Thêm" @click="handleAddCaterogy(name)">
            </form>
        </div>

    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('caterogy')

export default {
    data(){
        return {
            caterogy: {
                name: ''
            }
        }
    },


    methods : {
        async handleAddCaterogy(name){
            const res = await this.addCaterogy({name})
            if(res.success){
                alert('Add Caterogy successfully')
                this.$router.push("/admin/home/caterogy");
            }else{
                alert('Add Caterogy failed')
                this.$router.push("/admin/home/caterogy");
            }
        },
        ...mapActions({
            addCaterogy: "actionAddCaterogy"
        })
    }


}
</script>

<style></style>