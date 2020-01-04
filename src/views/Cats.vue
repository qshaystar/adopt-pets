<template>
  <div class="cats">
    <h1>Cats</h1>
    <b-row>
      <b-col cols="12" md="6" xl="4"
      class="mb-5" 
      v-for="(cat, index) in cats" :key="index"
      >
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="cat.imgUrl" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body>
                <router-link :to="`/pets/cat/${cat.id}`">
                <div class="pet-title" @click="petProfile(cat)">{{cat.name}}</div> 
                </router-link>
                <b-card-text>
                  <ul class="mt-3">
                    <li>品種：{{cat.breed}}</li>
                    <li>性別：{{cat.gender}}</li>
                    <li>年齡：{{cat.age}}</li>
                  </ul>  
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
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
      ...mapState(['cats'])
    },
    methods: {
      ...mapActions(['getCats']),
      petProfile(pet) {
        this.$store.dispatch('petProfile', pet)
      }
    },
    created() {
      this.getCats();
    }
  }

</script>