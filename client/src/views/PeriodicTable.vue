<template>
    <div id="periodic-table-container">
        <v-form>
            <v-layout>
                <v-flex xs12 md4>
                    <v-text-field dark v-model="search" label="Search" required></v-text-field>
                </v-flex>

                <v-flex xs12 md4 >
                    <v-select :items="valenceItems" label="Valence Electrons" dark></v-select>
                </v-flex>

                <v-flex xs12 sm6 lg1 d-flex>
                    <v-select :items="blockItems" label="Block" dark></v-select>
                </v-flex>

                <Button title="Search" path="#"/>

                <v-menu bottom left>
                    <template v-slot:activator="{on}">
                        <v-btn icon dark v-on="on">
                            <v-icon>more_vert</v-icon>
                        </v-btn>
                    </template>
                    
                    <v-list>
                        <v-list-tile v-for="(item, i) in menuItems" :key="i">
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>

            </v-layout>
        </v-form>

        <ElementCard />
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import ElementCard from '@/components/Pt/element.vue';

export default {
    components: {
        Button,
        ElementCard
    },
    data: () => ({
        blockItems: ['S', 'P', 'D', 'F'],
        valenceItems: ['1', '2', '3', '4', '5', '6', '7', '8'],
        menuItems: [
            {title: 'Add Boiling Point'},
            {title: 'Add Melting Point'},
            {title: 'Add Year'}
        ]
    })
}
</script>

<style scoped>
    .layout{
        justify-content: space-between;
        align-items: center;
        margin: 0.8rem 1rem;
        padding: 5px 15px;
        background-color: #424242;
        border-radius: 10px;
    }
    .button{
        margin: 0;
    }
</style>
