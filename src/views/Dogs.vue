<template>
  <div class="dogs">
    <div class="header">
      <b-container>
        <h2>認養暖心狗兒</h2>
      </b-container>  
    </div>

    <div class="content">
      <b-container>
        <b-row>
          <b-col cols="12" md="6" xl="3"
            class="mb-3"
            v-for="(dog, index) in dogs" :key="index"
          >
            <b-card
              no-body
              class="mb-2 shadow-sm pet-card"
            >
              <b-card-img :src="dog.imgUrl==null? 'https://i.imgur.com/MxUK6xs.jpg':dog.imgUrl" img-alt="dog" top></b-card-img>
              <b-card-header header-bg-variant="warning">
                <h4 class="mb-0">{{dog.name}}</h4>
              </b-card-header>
          
              <b-card-body>
      
                <b-card-text>
                  <ul class="mt-3">
                    <li><b>品種：</b>{{dog.breed}}</li>
                    <li><b>性別：</b>{{dog.gender}}</li>
                    <li><b>年齡：</b>{{dog.age}}</li>
                  </ul>  
                </b-card-text>

                <router-link :to="`/pets/dog/${dog.id}`">
                  <b-button variant="outline-dark"
                  rounded="0"
                  @click="petProfile(dog)"
                  >
                    詳細資訊
                  </b-button>
                </router-link>

              </b-card-body>  
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
    
    
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

  export default {
    data() {
      return {
       
      };
    },
    computed: {
      // 透過computed才能將資料綁在v-for
      ...mapState(['dogs']),

    },
    methods: {
      ...mapActions(['getDogs']),
      petProfile(pet) {
        this.$store.dispatch('petProfile', pet)
      },
     
    },
    mounted() {
     
    },
    created() {
      this.getDogs();
    }
  }

</script>

<style lang="less" scoped>
  .header {
    background-image: -webkit-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../assets/dog-header.jpg);
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../assets/dog-header.jpg);
    background-image: -moz-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../assets/dog-header.jpg);
    background-image: -o-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../assets/dog-header.jpg);
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../assets/dog-header.jpg);
  }
  

</style>