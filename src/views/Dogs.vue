<template>
  <div class="dogs">
    <h1>Dogs</h1>

    <b-row>
      <b-col cols="12" md="6" xl="3"
        v-for="(dog, index) in dogs" :key="index"
      >
        <b-card
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article" 
          border-variant="warning"
          header-bg-variant="warning"
          class="mb-2"
        >
          
          <template v-slot:header >
            <h4 class="mb-0">{{dog.name}}</h4>
          </template>

          <b-card-text>
            <ul class="mt-3">
              <li>品種：{{dog.breed}}</li>
              <li>性別：{{dog.gender}}</li>
              <li>年齡：{{dog.age}}</li>
            </ul>  
          </b-card-text>

          <router-link :to="`/pets/${dog.id}`">
            <b-button  variant="primary">
              Go somewhere
            </b-button>
          </router-link>
        </b-card>
      </b-col>
    </b-row>
    
    

<!-- 
    <b-row>
      <b-col cols="12" md="6" xl="4"
      class="mb-5" 
      v-for="(dog, index) in dogs" :key="index"
      >
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body>
                <div class="pet-title">{{dog.name}}</div> 
                <b-card-text>
                  <ul class="mt-3">
                    <li>品種：{{dog.breed}}</li>
                    <li>性別：{{dog.gender}}</li>
                    <li>年齡：{{dog.age}}</li>
                  </ul>  
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row> -->

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
      // dogs: function() {
      //   return this.$store.state.dogs
      // }
    },
    methods: {
      ...mapActions(['getDogs'])
    },
    created() {
      this.getDogs();
    }
  }

</script>