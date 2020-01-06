<template>
  <div class="home">

    <div id="header">
       <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
      >
        <b-carousel-slide
          :img-src="CatImgUrl"
        >  
          <h3 class="title">毛孩兒寵物認養平台</h3>
            <div class="subtitle">
              <p>請以領養代替購買。</p>
              <p>本平台提供送養者與領養者安全管道，領養者需同意本平台的規章，及配合本平台探訪，保障寵物安全。</p>
              <p>讓我們一起關懷動物，珍惜生命，給牠一個溫暖的家！</p>
            </div>
          <b-button @click="show=true, resetForm()" 
            size="lg"
            class="foster-btn"
          >
            我要送養
          </b-button>
          
        </b-carousel-slide>
        <b-carousel-slide
          :img-src="DogImgUrl"
        >
          <h3 class="title">毛孩兒寵物認養平台</h3>
            <div class="subtitle">
              <p>請以領養代替購買。</p>
              <p>本平台提供送養者與領養者安全管道，領養者需同意本平台的規章，及配合本平台探訪，保障寵物安全。</p>
              <p>讓我們一起關懷動物，珍惜生命，給牠一個溫暖的家！</p>
            </div>
          <b-button @click="show=true, resetForm()" 
            size="lg"
            class="foster-btn"
          >
            我要送養
          </b-button>
        </b-carousel-slide>
      </b-carousel>
      <div class="overlay"></div>
    </div>

    <div id="content">
      <h3 class="s-title">等待領養</h3>
      <b-container>
         <b-row>
          <b-col xl="3"
            class="newest"
            v-for="(dog, index) in dogs.slice(0, 4)" 
            :key="index"
          >
            <div class="new-pet">
               <router-link :to="`/pets/dog/${dog.id}`">
              <b-img fluid
                :src="dog.imgUrl==null? 'https://i.imgur.com/MxUK6xs.jpg':dog.imgUrl" 
                @click="petProfile(dog)" 
              >
              </b-img>
            </router-link>   
            </div>            
            <p>Dog</p>
            <p class="name"><b>{{ dog.name }}</b></p>
          </b-col>
        </b-row> 
         <b-row>
          <b-col xl="3"
            class="newest"
            v-for="(cat, index) in cats.slice(0, 4)" 
            :key="index"
          >
            <div class="new-pet">
              <router-link :to="`/pets/cat/${cat.id}`">
              <b-img fluid
                :src="cat.imgUrl==null? 'https://i.imgur.com/MxUK6xs.jpg':cat.imgUrl" 
                @click="petProfile(cat)" 
              >
              </b-img>
            </router-link>    
            </div>         
            <p>Cat</p>
            <p class="name"><b>{{ cat.name }}</b></p>
          </b-col>
        </b-row> 
      </b-container>

    </div>

      <b-modal
        v-model="show"
        title="送養寵物"
        size="lg" 
        :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant"
        :body-bg-variant="bodyBgVariant"
        :body-text-variant="bodyTextVariant"
        :footer-bg-variant="footerBgVariant"
        :footer-text-variant="footerTextVariant"
      >
        <b-container fluid>
          <div class="foster-form" v-if="toggleForm">
            <b-row>
              <b-col xl="6">
                <label for="animal-species">請選擇寵物類別：</label>
              </b-col>
               <b-col xl="6">
                <b-form-group  id="animal-species">
                  <b-form-radio-group  v-model="species" >
                    <b-form-radio value="dogs">狗兒</b-form-radio>
                    <b-form-radio value="cats">貓咪</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-form-group>
              <b-form-input 
                v-model="tempPet.imgUrl"
                placeholder="圖片網址" 
              >
              </b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                  v-model="tempPet.name" 
                  placeholder="寵物名字"
                ></b-form-input>
            </b-form-group>
            <b-row>  
              <b-col xl="6">
                <b-form-group>
                  <b-form-input 
                    placeholder="品種" 
                    v-model="tempPet.breed"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col xl="6">
                <b-row>
                  <b-col xl="4">
                    <label for="animal-gender">性別：</label>
                  </b-col>
                  <b-col xl="8">
                    <b-form-group id="animal-gender">
                      <b-form-radio-group v-model="tempPet.gender" >
                        <b-form-radio value="公">公</b-form-radio>
                        <b-form-radio value="母">母</b-form-radio>
                      </b-form-radio-group>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row>  
              <b-col xl="6">
                <b-form-group>
                  <b-form-input 
                    placeholder="年齡"
                    v-model="tempPet.age"
                  >
                  </b-form-input>
                </b-form-group>
              </b-col>
              <b-col xl="6">
                <b-form-group>
                  <b-form-input 
                    placeholder="顏色"
                    v-model="tempPet.color"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>  
              <b-col xl="6">
                <b-form-group>
                  <b-form-select v-model="tempPet.size" class="mb-3">
                    <option value="null" disabled>請選擇體型</option>
                    <option value="迷你型">迷你型</option>
                    <option value="小型">小型</option>
                    <option value="中型">中型</option>
                    <option value="大型">大型</option>        
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col xl="6">
                <b-form-group>
                  <b-form-input 
                  placeholder="所在地"
                  v-model="tempPet.location"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-form-group>
              <b-form-textarea
                id="textarea"
                placeholder="寵物簡介"
                v-model="tempPet.description"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
            <b-form-group>
               <b-form-checkbox
                :state="checkState"
                v-model="state"
               >
                我已閱讀並同意本平台規章條款。（必勾選）
                </b-form-checkbox>
            </b-form-group>
          </div>
        </b-container>

        <template v-slot:modal-footer>
          <div class="w-100">
            <b-button
              variant="success"
              class="float-right"
              @click="addPet()"
            >
              確認
            </b-button>
             <b-button
              variant="outline-secondary"
              class="float-right mr-2"
              @click="show=false"
            >
              取消
            </b-button>  
          </div>
        </template>
      </b-modal>
  
  </div>
</template>

<script>
// @ is an alias to /src
import headerImgDog from "../assets/index-header.jpg";
import headerImgCat from "../assets/index-header002.jpg";

import { mapState, mapActions } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      DogImgUrl: headerImgDog,
      CatImgUrl: headerImgCat,
      tempPet:{
      },
      species: '',
      uploadSuccess: false,
      toggleForm: true,
      show: false,
      state: false,
      headerBgVariant: 'dark',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'light',
      footerTextVariant: 'dark',
    } 
  },
  computed: {
    ...mapState(['dogs', 'cats']),
    checkState () {
      return this.state == true ? true : false
    },
    
  },
  methods: {
    ...mapActions(['getDogs', 'getCats']),
    petProfile(pet) {
      this.$store.dispatch('petProfile', pet)
    },
    resetForm() {
      this.species = 'dogs';
      this.tempPet = {};
      this.tempPet.gender="公";
      this.tempPet.size="null";
    },
    addPet() {
      const api = `http://localhost:3000/${this.species}`;
      const vm = this;
      this.axios.post(api, vm.tempPet ).then((response) => {
          vm.show=false;
          console.log(response.data)
          this.getDogs();
          this.getCats();
      }); 
    },
  },
  created() {
      this.getDogs();
      this.getCats();
  }
 
}
</script>

<style lang="less" scoped>

.carousel {
  .carousel-item {
    height: 600px;
  }
  img {
    object-fit: cover;
    object-position: center;
    width:100%;
    height:100%;
  }
}

.title {
  position: relative;
  line-height: 3;
  animation: moveup;
  animation-duration: 2s; 
}

.subtitle, .foster-btn {
  position: relative;
  opacity: 0;
  animation: moveup;
  animation-duration: 2s; 
  animation-delay: .3s;
  animation-fill-mode:forwards;
}

@keyframes moveup {
  from {
    top: 20px;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
}

.foster-btn {
  margin-top: 30px;
  margin-bottom: 50px;
  background: rgba(0,0,0,.3);
  border-color: white;
  border-radius: 0;
  transition: .3s;
  &:hover {
    background: rgba(0,0,0,.8);
  }    
}

.s-title {
  line-height: 3;
}

.newest {
  padding: 0;
  
  &:nth-child(2n) {
    margin-top: 50px;
  }
  .new-pet {
    height: 350px;
  }
  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    transition: filter .5s;
    &:hover {
      filter: brightness(1.15);
    }
  }

  p {
    color: #929292;
  };
}

</style>
