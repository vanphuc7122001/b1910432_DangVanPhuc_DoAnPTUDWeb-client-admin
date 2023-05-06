<template>
  <header class="header bg-dark text-white ">

    <h6 class="ml-6" style="margin-left: 86px; color: white;">Xin chào Admin
      <span class="text-danger text-uppercase"></span>

    </h6>
    <div class="header__right">
      <h6 class="header_right-home">
        <router-link class="header__right-link text-decoration-none text-white" to="/admin/home">
          <i class="fa-solid fa-house-user"></i>
          Trang chủ
        </router-link>
      </h6>
      <h6 class="header_right-logout">
        <button class="header__right-link text-decoration-none text-white bg-dark" style="outline: none; border: none;" @click="handleLogout">
          <i class="fa-solid fa-power-off"></i>
          Đăng xuất
        </button>
      </h6>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    handleLogout(){
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      this.$router.push('/admin')
    }
  }
}
</script>

<style></style>