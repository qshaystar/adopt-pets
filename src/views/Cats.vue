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
              <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body>
                <div class="pet-title">{{cat.name}}</div> 
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
      ...mapActions(['getCats'])
      // getCats() {
      //   const api = 'http://localhost:3000/cats';
      //   const vm = this;
      //   this.axios.get(api).then((response) => {
      //     vm.cats = response.data;
      //   }); 
      // },
    },
    created() {
      this.getCats();
    }
  }

</script>