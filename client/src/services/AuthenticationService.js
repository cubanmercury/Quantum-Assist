import Api from '@/services/Api';
import router from '../router';

export default {
    register(credentials) {
        Api.post('/register', credentials)
        .then(response => {
            // router.go('/about');
            console.log(response);
            return response.data;
        }).catch(e => {
            console.log("ERROR: Error occured with Register Flow");
        });
    },
    login(credentials){
        Api.post('/login', credentials)
        .then(response => {
            return response.data;
        }).catch(e => {
            return console.log("ERROR: Error with Login");
        });
    }
}
