<template>
    <div class="list-group">
        <router-link class="p-3 list-group-item list-group-item-action bg-dark text-white" to="/admin/home/" style="font-size: 20px;">
            Admin menu
        </router-link>
        <router-link to="/admin/home/caterogy" class="p-3 list-group-item list-group-item-action"
            style="font-size: 16px;">Danh mục sản phẩm</router-link>
        <router-link to="/admin/home/product" class="p-3 list-group-item list-group-item-action" style="font-size: 16px;">Sản
            Phẩm</router-link>
        <router-link to="/admin/home/order" class="p-3 list-group-item list-group-item-action" style="font-size: 16px;">Đơn
            Hàng</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>