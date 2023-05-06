<template>
    <div class="container-fluid">
    <the-header />
    <main class="main">
      <div class="row">
        <div class="col-md-2">
          <the-side-bar/>
        </div>
        <div class="col-md-10">
          <router-view></router-view>
        </div>
      </div>
    </main>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from "../../components/admin/TheHeader.vue";
import TheFooter from "../../components/admin/TheFooter.vue";
import TheSideBar from "../../components/admin/TheSideBar.vue";
export default {
    components: {
    TheHeader,
    TheFooter,
    TheSideBar

  },
    created(){
    const token =  localStorage.getItem("token")
    if(token){
      this.$router.push("/admin/home");
    }else{
      this.$router.push("/admin");
    }
  },
}
</script>

<style>

</style>