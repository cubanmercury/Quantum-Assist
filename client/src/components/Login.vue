<template>
    <div class="login">
        <p class="title">Welcome back</p>
        <p v-if="errors.length" class="error">
            <ul>
                <li v-for="error in errors" :key="error.id">{{error}}</li>
            </ul>
        </p>
        <p v-else-if="success.length" class="success">
            <ul>
                <li v-for="message in success" :key="message.id">{{message}}</li>
            </ul>
        </p>
        <form class="login-form" id="loginForm">
            <input type="text" name="username" v-model="username" placeholder="Username">
            <input type="password" name="password" v-model="password" placeholder="Password">
            <input type="button" @click="checkForm" value="Login" id="login-btn">
        </form>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
    data(){
        return {
            username: "",
            password: "",
            errors: [],
            success: []
        }
    },
    methods: {
        checkForm(e){
            this.errors = [];
            if(!this.username){
                this.errors.push('Username Required');
            }
            else if(!this.password){
                this.errors.push('Password Required');
            }
            else{
                e.preventDefault();
                this.login();
            }
        },
        async login(){
            this.success = [];
            try{
               const response = await AuthenticationService.login({
                   u_username: this.username,
                   u_hashedPwd: this.password
                });
                this.success.push(response);
                this.username = "";
                this.password = "";
            }
            catch(e){
                if(e.response){
                    this.errors.push(e.response.data.err);
                    this.password = "";
                }else{
                    console.log(e); 
                }
            }
        }
    }
}
</script>

<style scoped>
p.title{
    font-size: 2rem;
    font-weight: 700;
}
#login-btn{
    cursor: pointer;
}
</style> 
