<template>
	<div class="card rounded">
		<div class="card-header font-20 bg-dark text-white">
			Thêm sản phẩm
		</div>
		<div class="card-body">
			<form @submit.prevent method="post" enctype="multipart/form-data">
				<div class="form-group font-16">
					<label for="name">Tên sản phẩm</label>
					<input type="text" class="form-control font-12" placeholder="Nhập tên danh mục cần thêm" id="name"
						name="name" required v-model="name">
				</div>
				<div class="form-group font-16">
					<label for="price">Giá sản phẩm</label>
					<input type="text" class="form-control font-12" placeholder="Nhập tên danh mục cần thêm" id="price"
						name="price" required v-model="price">
				</div>
				<div class="form-group font-16">
					<label for="quantity">Số lượng</label>
					<input type="text" class="form-control font-12" placeholder="Nhập tên danh mục cần thêm" id="quantity"
						name="quantity" required v-model="quantity">
				</div>
				<div class="form-group font-16">
					<label for="image">Hình ảnh</label>
					<input type="text" class="form-control-file font-12" placeholder="Nhập tên danh mục cần thêm" id="image"
						name="image" required v-model="image">
				</div>
				<div class="form-group font-16">
					<label for="content">Nội dung</label>
					<textarea class="form-control" id="content" name="content" required
						v-model="content"></textarea>
				</div>
				<div class="form-group font-16">
					<label for="description">Tóm tắt</label>
					<textarea class="form-control" id="description" name="description" required
						v-model="desc"></textarea>
				</div>
				<div class="form-group font-16">
					<label for="category">Danh mục sản phẩm</label>
					<select class="form-control mb-15 font-12" id="category" name="category" style="margin-bottom: 40px;"
						v-model="caterogy_id">
						<option value="" selected>--Chọn danh mục--</option>
						<option v-for="(caterogyItem, index) in caterogies" :key="index" :value="caterogyItem._id">{{
							caterogyItem.name }} </option>
					</select>
				</div>
				<input class="btn btn-primary btn-block font-12" type="submit" name="store" value="Thêm"
					@click="handleAddProduct()">
			</form>
		</div>

	</div>
</template>

<script>
import { getAllCaterogyApi } from '../../../api/caterogy'

import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('product')

export default {
	data() {
		return {
			name: "",
			price: "",
			quantity: "",
			image: "",
			desc: "",
			content: "",
			caterogy_id: ""
			,
			caterogies: null

		}
	},
	methods: {
		async handleAddProduct() {
			const product = {
				name: this.name,
				price: this.price,
				quantity: this.quantity,
				image: this.image,
				desc: this.desc,
				content: this.content,
				caterogy_id: this.caterogy_id
			}
			console.log(product);
			const res = await this.AddProduct(product)
			if(res.success){
				alert('Product added successfully')
                this.$router.push("/admin/home/product");

			}else{
				alert('Product not added successfully')
                this.$router.push("/admin/home/product");
			}
		}
		,
		...mapActions({
			AddProduct: 'actionAddProduct'
		})
	}
	,
	async created() {
		this.caterogies = await getAllCaterogyApi();
		console.log(this.product);
	}
}
</script>

<style></style>
