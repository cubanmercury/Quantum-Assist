<template>
    <!-- <v-container fluid>
        <v-layout column wrap justify-space-between>
            
                <div class="forms">
                    <v-flex lg6>
                        <Register />
                    </v-flex>
                    <v-flex lg6>
                        <Login />
                    </v-flex>
                </div>
            
        </v-layout>
    </v-container> -->

    <v-layout align-center>
    <v-item-group
      v-model="window"
      class="shrink mr-4"
      mandatory
      tag="v-flex"
    >
      <v-item
        v-for="n in length"
        :key="n"
      >
        <div slot-scope="{ active, toggle }">
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
            class="toggle-btn"
            color="primary"
            small
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-flex>
      <v-window
        v-model="window"
        class="elevation-1"
        vertical
      >
        <v-window-item lazy key:="register">
          <v-card flat>
            <v-card-text>
              <v-layout align-center mb-3>
                <v-avatar color="grey" class="mr-3"></v-avatar>
                <strong class="title">Register</strong>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-layout>

              <Register />

            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item lazy key:="login">
          <v-card flat>
            <v-card-text>
              <v-layout align-center mb-3>
                <v-avatar color="grey" class="mr-3"></v-avatar>
                <strong class="title">Login</strong>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-layout>

              <Login />

            </v-card-text>
          </v-card>
        </v-window-item>

      </v-window>
    </v-flex>
  </v-layout>
</template>

<script>
import Register from '@/components/Account/subComponents/Register.vue';
import Login from '@/components/Account/subComponents/Login.vue';
export default {
    name: 'account',
    components: {
        Register,
        Login
    },
    data: () => ({
        length: 2,
        window: 0
    })
}
</script>

<style scoped>
    .forms{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: flex-start;
    }
    /* .toggle-btn{
        background-color: black;
    } */
</style>
