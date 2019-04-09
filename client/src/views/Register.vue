<template>
    <div>
        <Register />

        <input type="email" name="email" v-model="email" placeholder="Enter Email">
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
            email: '',
            password: ''
        }
    },
    methods: {
        register () {
                const response = AuthenticationService.register({
                email: this.email,
                password: this.password
            });
            console.log(response.data);
            
        }
    }
}
</script>

<style>

</style>
