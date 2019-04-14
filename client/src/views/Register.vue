<template>
    <div>
        <Register />
        <input type="text" name="username" v-model="username" placeholder="Enter Username">
        <input type="email" name="email" v-model="email" placeholder="Enter Email">
        <input type="text" name="name" v-model="name" placeholder="Enter your Name">
        <input type="password" name="password" v-model="password" placeholder="Enter Password">
        <input @click="register" type="submit" value="Register">
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
            console.log(response.data);
            
        }
    }
}
</script>

<style>

</style>
