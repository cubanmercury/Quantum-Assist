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
	<form class="register-form" id="registerForm" novalidate="true">
		<input type="text" name="username" v-model="username" placeholder="Username">
		<input type="email" name="email" v-model="email" placeholder="Email">
		<input type="text" name="name" v-model="name" placeholder="Name">
		<input type="password" name="password" v-model="password" placeholder="Password">
		<input type="password" name="password2" v-model="password2" placeholder="Confirm Password">
		<input type="button" @click="checkForm" value="Register" id="register-btn">
	</form>
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
            username: '',
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
                u_username: this.username,
                u_email: this.email,
                u_name: this.name,
                u_hashedPwd: this.password,
                u_signedUp: dateString
                });
                this.success.push(response);
                this.username = "";
                this.email = "";
                this.name = "";
                this.password = "";
                this.password2 = "";
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
            if(!this.username){
                this.errors.push('username required');
            }
            else if(!this.email){
                this.errors.push('email required');
            }
            else if(!this.validEmail(this.email)){
                this.errors.push('please enter a valid email');
            }
            else if(this.password !== this.password2){
                this.errors.push('passwords don\'t match');
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
