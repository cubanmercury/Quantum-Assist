<template>
  <div class="register">
    <p class="title">New to Quantum Assist?</p>
  
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
	<v-form class="register-form" id="registerForm" novalidate="true">
		<v-text-field type="email" name="email" v-model="email" placeholder="Email"></v-text-field>
		<v-text-field type="text" name="name" v-model="name" placeholder="Name"></v-text-field>
		<v-text-field type="password" name="password" v-model="password" placeholder="Password"></v-text-field>
		<v-text-field type="password" name="password2" v-model="password2" placeholder="Confirm Password"></v-text-field>
		<v-btn @click="checkForm" id="register-btn">Register</v-btn>
	</v-form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
  name: 'register',
  props: {
  },
  data() {
        return {
            email: '',
            name: '',
            password: '',
            password2: '',
            errors: [],
            success: []
        }
    },
    methods: {
        async register () {
            this.success = [];
            let d = new Date();
            let dateString = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            try{
                const response = await AuthenticationService.register({
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    u_signedUp: dateString
                });
                console.log(response);
                this.success.push(response);
                // this.email = "";
                // this.name = "";
                // this.password = "";
                // this.password2 = "";
            }catch(e){
                if(e.response){
                    this.errors.push(e.response.data.err);
                    console.log(e.response.data.err);
                    this.password = "";
                    this.password2 = "";
                }else{
                    console.log(e); 
                }
            }
        },
        checkForm(e) {
            this.errors = [];
            if(!this.email){
                this.errors.push('Email Required');
            }
            else if(!this.validEmail(this.email)){
                this.errors.push('Please enter a valid Email');
            }
            else if(this.password !== this.password2){
                this.errors.push('Passwords don\'t match');
            }
            else{
                e.preventDefault();
                this.register();
            }
            e.preventDefault();
        },
        validEmail(email){
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p.title{
    font-size: 2rem;
    font-weight: 700;
  }
  .register-form{
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 70%;
        margin: 0 auto;
    }
    .register-form input{
        box-sizing: border-box;
        margin: 5px 0;
        width: 100%;
        padding: 0;
        text-align: center;
    }
    #register-btn{
        cursor: pointer;
    }
    .error{
        color: red;
    }
    .success{
        color: green;
    }
</style>
