<template>
  <div class="container font-16" style="width: 400px; margin-top: 170px; border: 1px solid #ccc; padding: 50px; border-radius: 8px; box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;">
  <h4 class="text-center font-20">Đăng Nhập</h4>

  <form method="post" @submit.prevent>
    <div class="form-group">
        <label for="username">username</label>
        <input type="text" class="form-control font-12" id="username" placeholder="Nhập username" name="username" required v-model="username">
    </div>
    <div class="form-group mt-3">
        <label for="password">password</label>
        <input type="password" class="form-control font-12" id="password" placeholder="Nhập password" name="password" required v-model="password">
    </div>
    <input type="submit" name="login" class="btn btn-primary w-100 font-16 mt-3" value="Đăng Nhập" @click="handleLogin()">
  </form>
</div>
</template>

<script>
import axios from 'axios';
export default {
  created(){
    const token =  localStorage.getItem("token")
    if(token){
      this.$router.push("/admin/home");
    }else{
      this.$router.push("/admin");
    }
  },
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async handleLogin(){
      try {
        const response = await axios.post("http://localhost:9000/api/v1/admin/login", {
          username: this.username,
          password: this.password,
        });
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        const status = JSON.parse(response.status);
        if (status == "200") {
          console.log(response);
          this.$router.push("/admin/home");
        }
      } catch (error) {
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 3000);
      }
    }
  }

}
</script>

<style>

</style>