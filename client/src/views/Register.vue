<template>
    <v-container fluid>
        <v-layout column wrap justify-space-between>
            
                <div class="forms">
                    <v-flex lg6>
                        <Register />
                    </v-flex>
                    <v-flex lg6>
                        <Login />
                    </v-flex>
                </div>
            
        </v-layout>
    </v-container>
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
    .forms{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: flex-start;
    }
</style>
