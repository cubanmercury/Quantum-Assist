<template>
    <div>
        <Register />
        <div class="register-form">
            <input type="text" name="username" v-model="username" placeholder="Username">
            <input type="email" name="email" v-model="email" placeholder="Email">
            <input type="text" name="name" v-model="name" placeholder="Name">
            <input type="password" name="password" v-model="password" placeholder="Password">
            <input @click="register" type="submit" value="Register">
        </div>
    </div>
    
</template>

<script>
import Register from '@/components/Register.vue';
import AuthenticationService from '@/services/AuthenticationService';
export default {
    name: 'register',
    components: {
        Register
    },
    data() {
        return {
            username: '',
            email: '',
            name: '',
            password: ''
        }
    },
    methods: {
        register () {
            let d = new Date();
            let dateString = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            const response = AuthenticationService.register({
                u_username: this.username,
                u_email: this.email,
                u_name: this.name,
                u_hashedPwd: this.password,
                u_signedUp: dateString
            });
            //console.log(response.data);
            
        }
    }
}
</script>

<style scoped>
    .register-form{
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 30%;
        margin: 0 auto;
    }
    .register-form input{
        box-sizing: border-box;
        margin: 5px 0;
        width: 100%;
        padding: 0;
        text-align: center;
    }
</style>
