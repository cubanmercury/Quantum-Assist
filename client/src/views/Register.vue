<template>
    <div>
        <Register />
        <Login />
    </div>
</template>

<script>
import Register from '@/components/Register.vue';
import Login from '@/components/Login.vue';
export default {
    name: 'register',
    components: {
        Register,
        Login
    }
}
</script>

<style scoped>
    
</style>
