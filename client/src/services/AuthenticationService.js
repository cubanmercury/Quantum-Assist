import Api from '@/services/Api';

export default {
    register(credentials) {
        return Api().post('register', credentials)
        .then(response => {
            return response.data.message;
        })
    }
}
