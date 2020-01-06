<template>
  <div class="cats">
    <div class="header">
      <b-container>
        <h2>認養可人貓咪</h2>
      </b-container>  
    </div>

    <div class="content">
      <b-container>
        <b-row>
          <b-col cols="12" md="6" xl="3"
            class="mb-3"
            v-for="(cat, index) in cats" :key="index"
          >
            <b-card
              no-body
              class="mb-2 shadow-sm pet-card"
            >
              <b-card-img :src="cat.imgUrl==null? 'https://i.imgur.com/MxUK6xs.jpg':cat.imgUrl" 
                img-alt="cat" top
              >
              </b-card-img>
              <b-card-header header-bg-variant="primary">
                <h4 class="mb-0">{{cat.name}}</h4>
              </b-card-header>
          
              <b-card-body>
                <b-card-text>
                  <ul class="mt-3">
                    <li><b>品種：</b>{{cat.breed}}</li>
                    <li><b>性別：</b>{{cat.gender}}</li>
                    <li><b>年齡：</b>{{cat.age}}</li>
                  </ul>  
                </b-card-text>

                <router-link :to="`/pets/cat/${cat.id}`">
                  <b-button variant="outline-dark"
                  rounded="0"
                  @click="petProfile(cat)"
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
      ...mapState(['cats']),
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

<style lang="less" scoped>
 .header {
    text-align: right;
    background-position: bottom;
    background-image: -webkit-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../assets/cat-header.jpg);
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../assets/cat-header.jpg);
    background-image: -moz-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../assets/cat-header.jpg);
    background-image: -o-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../assets/cat-header.jpg);
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../assets/cat-header.jpg);
  }

</style>