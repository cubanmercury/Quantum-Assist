<template>
    <v-container d-flex class="key-container">
        <h3>Periodic Table Key:</h3>
        <div class="key-card" v-for="(type, i) in types" :key="i">
            <div class="key" :style="type.colour" >

            </div>
            <div class="key-label">
                <p>{{type.family}}</p>
            </div>
        </div>
        <div class="state-key-card" v-for="(state, i) in states" :key="i">
            <div class="state-key">
                <p :style="state.colour">{{state.example}}</p>
            </div>
            <div class="state-key-label">
                <p>{{state.state}}</p>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: "ptKey",
    data() {
        return{
            types: [
                {family: "Alkali Metals", colour: "background-color: #3399ff;"},
                {family: "Alkaline Earth Metals", colour: "background-color: #ff9933;"},
                {family: "Lanthanide Series", colour: "background-color: #66ffcc;"},
                {family: "Actinide Series", colour: "background-color: #996600;"},
                {family: "Transition Metals", colour: "background-color: #0000ff;"},
                {family: "Metals", colour: "background-color: #00cc00;"},
                {family: "Metalloids", colour: "background-color: #cc33ff;"},
                {family: "Non Metals", colour: "background-color: #ffff00;"},
                {family: "Halogens", colour: "background-color: #8c8c8c;"},
                {family: "Noble Gases", colour: "background-color: #cc3300;"},
                {family: "Transactinides", colour: "background-color: #ffff99;"}
            ],
            states: [
                {state: "Liquid", colour: "color: #00ff00;", example: "Br"},
                {state: "Gas", colour: "color: #ff00ff;", example: "H"},
                {state: "Solid", colour: "color: #000000;", example: "Li"},
                {state: "Synthetic", colour: "color: #ff0000;", example: "Tc"}
            ]
        }
    }
}
</script>

<style scoped>
h3{
    text-align: left;
    width: 100%;
    margin: 0px 5px 3px 5px;
}
.key-container{
    flex-flow: column nowrap;
    align-items: flex-start !important;
    width: 10%;
}
.key-card,
.state-key-card{
    display: flex;
    flex-flow: row nowrap;
    margin: 1px 5px;
}
.state-key-card{
    margin-top: 10px;
}
.key-label,
.state-key-label{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 0 15px 0 5px;
    width: auto;
    background-color: #f2f2f2;
    min-width: 125px;
    color: #fff;
    background-color: #424242;
    border: 1px solid #505055;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.key-label p,
.state-key-label p{
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 10px;
}
.key,
.state-key{
    min-width: 35px;
    height: 50px;
    border: 1px solid #505055;
    border-right: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.state-key{
    background-color: #cccccc;
}
.state-key p{
    font-size: 18px;
    font-weight: 800;
    width: 40px;
    padding: 10px 5px;
}
</style>