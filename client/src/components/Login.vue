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
        <v-form class="login-form" id="loginForm">
            <v-text-field :counter="15" required type="text" name="username" v-model="username" placeholder="Username"></v-text-field>
            <v-text-field required type="password" name="password" v-model="password" placeholder="Password"></v-text-field>
            <v-btn @click="checkForm" id="login-btn">Login</v-btn>
        </v-form>
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
.error{
    color: red;
}
.success{
    color: green;
}
.login-form{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}
.login-form input{
    width: 100%;
    margin: 5px 0;
    padding: 0;
    text-align: center;
    box-sizing: border-box;
}
</style> 
