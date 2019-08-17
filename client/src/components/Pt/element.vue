<template>
    <div class="container">
        <div class="md6">
            <ul>
                <li v-for="(element, index) in elements" :key="index">
                    {{element.name}}
                </li>
            </ul>
        </div>
        <div class="render-elements md2">
            <v-btn depressed small color="primary" @click="retrieveElements">get elements</v-btn>
        </div>
        
    </div>
</template>

<script>
import api from "../../services/Api";
export default {
    name: "ElementCard",
    data() {
        return {
            elements: []
        };
    },
    methods: {
        retrieveElements() {
            console.log(api);
            api.get("/pt")
            .then(response => {
                this.elements = response.data;
                console.log(response.data);
            }).catch(e => {
                console.log("The error sits here" + e);
            })
        }
        
    }
}
</script>

<style scoped>

</style>