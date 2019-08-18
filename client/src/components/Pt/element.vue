<template>
    <div class="container d-flex align-center" style="flex-direction: column;">
        
        <v-container class="element-card-container d-flex">
            <div class="pt-row row-1 d-flex">
                <v-container class="element-card" v-for="(element, index) in rowElements(0, 2)" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
            <div class="pt-row row-2 d-flex">
                <div class="row-2-inner-start d-flex">
                    <v-container class="element-card" v-for="(element, index) in rowElements(3, 4)" :key="index">
                        <v-card  class="mx-auto card-content" :raised="raised">
                            <p class="atomic-number">{{element.atomic_number}}
                                <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                            </p>
                            <p class="symbol">{{element.symbol}} </p>
                            <p class="mass-number">{{element.mass_number}}</p>
                            <p class="name">{{element.name}}</p>
                        </v-card>
                    </v-container>
                </div>
                <div class="row-2-inner-end d-flex">
                    <v-container class="element-card" v-for="(element, index) in rowElements(5, 10)" :key="index">
                        <v-card  class="mx-auto card-content" :raised="raised">
                            <p class="atomic-number">{{element.atomic_number}}
                                <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                            </p>
                            <p class="symbol">{{element.symbol}} </p>
                            <p class="mass-number">{{element.mass_number}}</p>
                            <p class="name">{{element.name}}</p>
                        </v-card>
                    </v-container>
                </div>
            </div>
            <div class="pt-row row-3 d-flex">
                <div class="row-3-inner-start d-flex">
                    <v-container class="element-card" v-for="(element, index) in rowElements(11, 12)" :key="index">
                        <v-card  class="mx-auto card-content" :raised="raised">
                            <p class="atomic-number">{{element.atomic_number}}
                                <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                            </p>
                            <p class="symbol">{{element.symbol}} </p>
                            <p class="mass-number">{{element.mass_number}}</p>
                            <p class="name">{{element.name}}</p>
                        </v-card>
                    </v-container>
                </div>
                <div class="row-3-inner-end d-flex">
                    <v-container class="element-card" v-for="(element, index) in rowElements(13, 18)" :key="index">
                        <v-card  class="mx-auto card-content" :raised="raised">
                            <p class="atomic-number">{{element.atomic_number}}
                                <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                            </p>
                            <p class="symbol">{{element.symbol}} </p>
                            <p class="mass-number">{{element.mass_number}}</p>
                            <p class="name">{{element.name}}</p>
                        </v-card>
                    </v-container>
                </div>
            </div>
            <div class="pt-row row-4 d-flex">
                <v-container class="element-card" v-for="(element, index) in rowElements(19, 36)" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
            <div class="pt-row row-5 d-flex">
                <v-container class="element-card" v-for="(element, index) in rowElements(37, 54)" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
            <div class="pt-row row-6 d-flex">
                <v-container class="element-card" v-for="(element, index) in rowElements(55, 57)" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
                <v-container class="element-card" v-for="(element, index) in rowElements(72, 86)" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
            <div class="pt-row row-7 d-flex">
                <v-container class="element-card" v-for="(element, index) in rowElements(87, 89)" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
                <v-container class="element-card" v-for="(element, index) in rowElements(104, 118)" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
            <div class="pt-row row-lanthanide d-flex">
                <p>Lanthanide Series</p>
                <v-container class="element-card" v-for="(element, index) in rowElements(58, 71)" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
            <div class="pt-row row-actinide d-flex">
                <p>Actinide Series</p>
                <v-container class="element-card" v-for="(element, index) in rowElements(90, 103)" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        <p class="atomic-number">{{element.atomic_number}}</p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
        </v-container>
        
        
    </div>
</template>

<script>
import api from "../../services/Api";
export default {
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
.pt-row{
    width: 100%;
    justify-content: space-between;
}
.row-2-inner-start,
.row-3-inner-start{
    justify-content: flex-start
}
.row-2-inner-end,
.row-3-inner-end{
    justify-content: flex-end;
}
.row-lanthanide > p,
.row-actinide > p{
    max-width: 175px;
}
.element-card-container{
    flex-flow: column nowrap;
    max-width: 1750px;
    width: 100%;
    justify-content: center;
}
.element-card{
    max-width: 90px;
    margin: 3px !important;
    border-radius: 5px;
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
</style>