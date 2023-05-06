<template>
	<div class="card rounded">
		<div class="card-header font-20 bg-dark text-white">
			Sửa sản phẩm 
		</div>
		<div class="card-body">
			<form @submit.prevent method="post" enctype="multipart/form-data">
				<div class="form-group font-16">
					<label for="name">Tên sản phẩm</label>
					<input type="text" class="form-control font-12" placeholder="Nhập tên danh mục cần thêm" id="name"
						name="name" v-model="product.name">
				</div>
				<div class="form-group font-16">
					<label for="price">Giá sản phẩm</label>
					<input type="text" class="form-control font-12" placeholder="Nhập tên danh mục cần thêm" id="price"
						name="price" v-model="product.price">
				</div>
				<div class="form-group font-16">
					<label for="quantity">Số lượng</label>
					<input type="text" class="form-control font-12" placeholder="Nhập tên danh mục cần thêm" id="quantity"
						name="quantity" v-model="product.quantity">
				</div>
				<div class="form-group font-16">
					<label for="image">Hình ảnh</label>
					<img :src="product.image" alt="" width="150px">
					<input type="text" class="form-control-file font-12" placeholder="Nhập tên danh mục cần thêm" id="image"
						name="image" v-model="product.image">
				</div>
				<div class="form-group font-16">
					<label for="content">Nội dung</label>
					<textarea class="form-control" id="content" name="content" v-model="product.content"></textarea>
				</div>
				<div class="form-group font-16">
					<label for="description">Tóm tắt</label>
					<textarea class="form-control" id="description" name="description" v-model="product.desc"></textarea>
				</div>
				<div class="form-group font-16">
					<label for="category">Danh mục sản phẩm</label>
					<select class="form-control mb-15 font-12" id="category" name="category" style="margin-bottom: 40px;" v-model="product.caterogy_id">
						<option :value="product.caterogy_id" selected>{{ product.caterogy_id.name }}</option>
						<option v-for="(caterogyItem, index) in caterogies" :key="index" :value="caterogyItem._id">
							{{ caterogyItem.name }}
						</option>
					</select>
				</div>
				<input class="btn btn-primary btn-block font-12" type="submit" name="update" value="Sửa" @click="handleUpdate(product)">
			</form>
		</div>

	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('product')
import {getDetailProductApi} from '../../../api/product'
import { getAllCaterogyApi } from '../../../api/caterogy'

export default {

	data(){
		return {
			product: null,
			caterogies: null
		}
	},
	methods: {
		async handleUpdate(params){
			const res = await this.updateProduct(params)
			if(res.success == 1) {
				alert('Update added successfully')
                this.$router.push("/admin/home/product");
			}else{
				alert('Update not added successfully')
                this.$router.push("/admin/home/product");
			}
		},
		...mapActions({
			updateProduct: "actionUpdateProduct"
		})
	},
	async created(){
		const res = await getDetailProductApi(this.$route.params.id)
		this.product = {...res.data}
		this.caterogies = await getAllCaterogyApi();
		
	}
}
</script>

<style></style>