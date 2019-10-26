<template>
    <div class="login">
        <p class="title">Welcome back</p>
        <v-alert :value="true" color="error" icon="new_releases" v-if="errors.length">
            <ul>
                <li v-for="error in errors" :key="error.id">{{error}}</li>
            </ul>
        </v-alert>
        <v-alert :value="true" type="success" v-else-if="success.length">
            <ul>
                <li v-for="message in success" :key="message.id">{{message}}</li>
            </ul>
        </v-alert>
        <v-form class="login-form" id="loginForm">
            <v-text-field :counter="15" required type="text" name="email" v-model="email" placeholder="Email"></v-text-field>
            <v-text-field required type="password" name="password" v-model="password" placeholder="Password"></v-text-field>uyfgfhvhkkkkkkkkkkkkkkkkkkkkkkkkkkk
            <v-btn @click="checkForm" id="login-btn">Login</v-btn>
        </v-form>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
    data(){
        return {
            email: "",
            password: "",
            errors: [],
            success: []
        }
    },
    methods: {
        checkForm(e){
            this.errors = [];
            if(!this.email){
                this.errors.push('Email Required');
            }
            else if(!this.password){
                this.errors.push('Password Required');
            }
            else{
                e.preventDefault();
                this.login();
            }
        },
        login(){
            this.success = [];
            try{
                console.log(this.email);
                console.log(this.password);
                const response = AuthenticationService.login({
                    u_email: this.email,
                    u_hashedPwd: this.password
                });
                this.success.push(response);
                this.email = "";
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
