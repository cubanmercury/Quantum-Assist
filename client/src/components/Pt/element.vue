<template>
    <div class="container d-flex align-center" style="flex-direction: column;">
    <ptKey />
        <v-container class="element-card-container">
           
                <v-container class="element-card row-1" v-for="(element) in rowElements(1, 2)" :key="element.atomic_number">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>

                <v-container class="element-card row-2" v-for="(element) in rowElements(3, 10)" :key="element.atomic_number">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>

                <v-container class="element-card row-3" v-for="(element) in rowElements(11, 18)" :key="element.atomic_number">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
           
                <v-container class="element-card row-4" v-for="(element) in rowElements(19, 36)" :key="element.atomic_number">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
           
                <v-container class="element-card row-5" v-for="(element) in rowElements(37, 54)" :key="element.atomic_number">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
           
                <v-container class="element-card row-6" v-for="(element) in rowElements(55, 57)" :key="element.atomic_number">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
                <v-container class="element-card row-6" v-for="(element) in rowElements(72, 86)" :key="element.atomic_number">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
           
                <v-container class="element-card row-7" v-for="(element) in rowElements(87, 89)" :key="element.atomic_number">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
                <v-container class="element-card row-7" v-for="(element) in rowElements(104, 118)" :key="element.atomic_number">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>

                <p class="lanthanide-label">Lanthanide Series</p>
                <v-container class="element-card row-8 row-lanthanide" v-for="(element) in rowElements(58, 71)" :key="element.atomic_number">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>

                <p class="actinide-label">Actinide Series</p>
                <v-container class="element-card row-9 row-actinide" v-for="(element) in rowElements(90, 103)" :key="element.atomic_number">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        <p class="atomic-number">{{element.atomic_number}}</p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            
        </v-container>
    </div>
</template>

<script>
import api from "../../services/Api";
import ptKey from './ptKey';

export default {
    components: {
        ptKey
    },
    name: "ElementCard",
    data() {
        return {
            elements: [],
            raised: true
        };
    },
    methods: {
        retrieveElements() {
            api.get("/pt")
            .then(response => {
                this.elements = response.data;
                console.log(response.data);
            }).catch(e => {
                console.log("The error sits here" + e);
            })
        },
        rowElements(min, max) {     //method for getting elements per row (min = 1st atomic number, max = last atomic number)
            return this.elements.filter(function(element) {
                return element.atomic_number >= min && element.atomic_number <= max;
            })
        }
    },
    beforeMount() {
        this.retrieveElements();
    }
}
</script>

<style scoped>
p{
    margin: 0;
    padding: 0;
}
.container{
    max-width: 100%;
    margin-top: 5px !important;
    align-items: flex-end;
}
.symbol{
    margin: 3px 0;
    font-size: 20px;
    font-weight: 800;
}
.name{
    font-size: 12px;
}
.e-config{
    font-size: 12px;
}
.element-card-container{
    display: grid;
    grid-template-columns: 87px 87px 87px 87px 87px 87px 87px 87px 87px 87px 87px 87px 87px 87px 87px 87px 87px 87px;
    grid-template-rows: 90px 90px 90px 90px 90px 90px 90px 90px 90px;
    grid-gap: 3px;
    max-width: 1750px;
    width: auto;
}
.element-card{
    max-width: 90px;
}
.element-card .card-content{
    font-size: 14px;
    padding: 5px;
}
.radioactive{
    width: 15px;
    position: absolute;
    right: 5px;
}   
.pt-row{
    width: 100%;
    justify-content: space-between;
}
.row-1{
    grid-row-start: 1;
}
.row-1:nth-of-type(2){
    grid-column-start: 18;
}
.row-2{
    grid-row-start: 2;
}

.row-2:nth-of-type(5){
    grid-column-start: 13;
}
.row-2:nth-of-type(6){
    grid-column-start: 14;
}
.row-2:nth-of-type(7){
    grid-column-start: 15;
}
.row-2:nth-of-type(8){
    grid-column-start: 16;
}
.row-2:nth-of-type(9){
    grid-column-start: 17;
}
.row-2:nth-of-type(10){
    grid-column-start: 18;
}
.row-3{
    grid-row-start: 3;
}
.row-3:nth-of-type(13){
    grid-column-start: 13;
}
.row-3:nth-of-type(14){
    grid-column-start: 14;
}
.row-3:nth-of-type(15){
    grid-column-start: 15;
}
.row-3:nth-of-type(16){
    grid-column-start: 16;
}
.row-3:nth-of-type(17){
    grid-column-start: 17;
}
.row-3:nth-of-type(18){
    grid-column-start: 18;
}
.row-4{
    grid-row-start: 4;
}
.row-5{
    grid-row-start: 5;
}
.row-6{
    grid-row-start: 6;
}
.row-7{
    grid-row-start: 7;
}
.row-8{
    grid-row-start: 8;
}
.row-8:nth-of-type(91){
    grid-column-start: 3;
}
.row-8:nth-of-type(92){
    grid-column-start: 4;
}
.row-8:nth-of-type(93){
    grid-column-start: 5;
}
.row-8:nth-of-type(94){
    grid-column-start: 6;
}
.row-8:nth-of-type(95){
    grid-column-start: 7;
}
.row-8:nth-of-type(96){
    grid-column-start: 8;
}
.row-8:nth-of-type(97){
    grid-column-start: 9;
}
.row-8:nth-of-type(98){
    grid-column-start: 10;
}
.row-8:nth-of-type(99){
    grid-column-start: 11;
}
.row-8:nth-of-type(100){
    grid-column-start: 12;
}
.row-8:nth-of-type(101){
    grid-column-start: 13;
}
.row-8:nth-of-type(102){
    grid-column-start: 14;
}
.row-8:nth-of-type(103){
    grid-column-start: 15;
}
.row-8:nth-of-type(104){
    grid-column-start: 16;
}
.row-9{
    grid-row-start: 9;
}
.row-9:nth-of-type(105){
    grid-column-start: 3;
}
.row-9:nth-of-type(106){
    grid-column-start: 4;
}
.row-9:nth-of-type(107){
    grid-column-start: 5;
}
.row-9:nth-of-type(108){
    grid-column-start: 6;
}
.row-9:nth-of-type(109){
    grid-column-start: 7;
}
.row-9:nth-of-type(110){
    grid-column-start: 8;
}
.row-9:nth-of-type(111){
    grid-column-start: 9;
}
.row-9:nth-of-type(112){
    grid-column-start: 10;
}
.row-9:nth-of-type(113){
    grid-column-start: 11;
}
.row-9:nth-of-type(114){
    grid-column-start: 12;
}
.row-9:nth-of-type(115){
    grid-column-start: 13;
}
.row-9:nth-of-type(116){
    grid-column-start: 14;
}
.row-9:nth-of-type(117){
    grid-column-start: 15;
}
.row-9:nth-of-type(118){
    grid-column-start: 16;
}
.lanthanide-label{
    grid-row-start: 8;
    grid-column-start: 2;
    justify-self: center;
    align-self: center;
}
.actinide-label{
    grid-row-start: 9;
    grid-column-start: 2;
    justify-self: center;
    align-self: center;
}
.row-2:nth-of-type(3) > .card-content,      /* Alkali Metals */
.row-3:nth-of-type(11) > .card-content,
.row-4:nth-of-type(19) > .card-content,
.row-5:nth-of-type(37) > .card-content,
.row-6:nth-of-type(55) > .card-content,
.row-7:nth-of-type(73) > .card-content{
    background-color: #3399ff;
}
.row-2:nth-of-type(4) > .card-content,      /* Alkaline Earth Metals */
.row-3:nth-of-type(12) > .card-content,
.row-4:nth-of-type(20) > .card-content,
.row-5:nth-of-type(38) > .card-content,
.row-6:nth-of-type(56) > .card-content,
.row-7:nth-of-type(74) > .card-content{
    background-color: #ff9933;
}
.row-1:nth-of-type(2) > .card-content,
.row-2:nth-of-type(10) > .card-content,      /* Nobel Gases */
.row-3:nth-of-type(18) > .card-content,
.row-4:nth-of-type(36) > .card-content,
.row-5:nth-of-type(54) > .card-content,
.row-6:nth-of-type(72) > .card-content{
    background-color: #cc3300;
}
.row-2:nth-of-type(9) > .card-content,      /* Halogens */
.row-3:nth-of-type(17) > .card-content,
.row-4:nth-of-type(35) > .card-content,
.row-5:nth-of-type(53) > .card-content,
.row-6:nth-of-type(71) > .card-content{
    background-color: #bfbfbf;
}
.row-1:nth-of-type(1) > .card-content,
.row-2:nth-of-type(8) > .card-content,      /* Non Metals */
.row-3:nth-of-type(16) > .card-content,
.row-4:nth-of-type(34) > .card-content,
.row-2:nth-of-type(7) > .card-content,
.row-3:nth-of-type(15) > .card-content,
.row-2:nth-of-type(6) > .card-content{
    background-color: #ffff00;
}
.row-2:nth-of-type(5) > .card-content,      /* Metalloids */
.row-3:nth-of-type(14) > .card-content,
.row-4:nth-of-type(33) > .card-content,
.row-4:nth-of-type(32) > .card-content,
.row-5:nth-of-type(52) > .card-content,
.row-5:nth-of-type(51) > .card-content,
.row-6:nth-of-type(70) > .card-content{
    background-color: #cc33ff;
}
.row-3:nth-of-type(13) > .card-content,      /* Metals */
.row-4:nth-of-type(31) > .card-content,
.row-5:nth-of-type(50) > .card-content,
.row-5:nth-of-type(49) > .card-content,
.row-6:nth-of-type(69) > .card-content,
.row-6:nth-of-type(68) > .card-content,
.row-6:nth-of-type(67) > .card-content{
    background-color: #00cc00;
}
.row-lanthanide > .card-content,            /* Lanthanide Series */
.row-6:nth-of-type(57) > .card-content{
    background-color: #66ffcc;
}
.row-actinide > .card-content,              /* Actinide Series */
.row-7:nth-of-type(75) > .card-content{
    background-color: #996600;
}
.row-4:nth-of-type(21) > .card-content,      /* Transition Metals */
.row-4:nth-of-type(22) > .card-content,
.row-4:nth-of-type(23) > .card-content,
.row-4:nth-of-type(24) > .card-content,
.row-4:nth-of-type(25) > .card-content,
.row-4:nth-of-type(26) > .card-content,
.row-4:nth-of-type(27) > .card-content,
.row-4:nth-of-type(28) > .card-content,
.row-4:nth-of-type(29) > .card-content,
.row-4:nth-of-type(30) > .card-content,
.row-5:nth-of-type(39) > .card-content,
.row-5:nth-of-type(40) > .card-content,
.row-5:nth-of-type(41) > .card-content,
.row-5:nth-of-type(42) > .card-content,
.row-5:nth-of-type(43) > .card-content,
.row-5:nth-of-type(44) > .card-content,
.row-5:nth-of-type(45) > .card-content,
.row-5:nth-of-type(46) > .card-content,
.row-5:nth-of-type(47) > .card-content,
.row-5:nth-of-type(48) > .card-content,
.row-6:nth-of-type(58) > .card-content,
.row-6:nth-of-type(59) > .card-content,
.row-6:nth-of-type(60) > .card-content,
.row-6:nth-of-type(61) > .card-content,
.row-6:nth-of-type(62) > .card-content,
.row-6:nth-of-type(63) > .card-content,
.row-6:nth-of-type(64) > .card-content,
.row-6:nth-of-type(65) > .card-content,
.row-6:nth-of-type(66) > .card-content{
    background-color: #0000ff;
}
.row-7:nth-of-type(76) > .card-content,         /* Transactinides */
.row-7:nth-of-type(77) > .card-content,
.row-7:nth-of-type(78) > .card-content,
.row-7:nth-of-type(79) > .card-content,
.row-7:nth-of-type(80) > .card-content,
.row-7:nth-of-type(81) > .card-content,
.row-7:nth-of-type(82) > .card-content,
.row-7:nth-of-type(83) > .card-content,
.row-7:nth-of-type(84) > .card-content,
.row-7:nth-of-type(85) > .card-content,
.row-7:nth-of-type(86) > .card-content,
.row-7:nth-of-type(87) > .card-content,
.row-7:nth-of-type(88) > .card-content,
.row-7:nth-of-type(89) > .card-content,
.row-7:nth-of-type(90) > .card-content{
    background-color: #ffff99;
}
</style>