import Api from '@/services/Api';

export default {
    register(credentials) {
        return Api().post('register', credentials)
        .then(response => {
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        })
    }
}


/*
AuthenticationService.register({
    email: 'test@mail.com',
    password: '12345'
})
*/