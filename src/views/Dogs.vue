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

          <router-link :to="`/pets/dog/${dog.id}`">
            <b-button  variant="primary"
            @click="petProfile(dog)"
            >
              Go somewhere
            </b-button>
          </router-link>
        </b-card>
      </b-col>
    </b-row>
  

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
      }
    },
    created() {
      this.getDogs();
    }
  }

</script>