<template>
  <div>
    <b-container class="pet-info">
      <b-row>
        <b-col md="6">
          <b-img thumbnail fluid alt="pet"
            :src="pet.imgUrl==null? 'https://i.imgur.com/MxUK6xs.jpg':pet.imgUrl" 
          ></b-img>
        </b-col>
         <b-col md="6">
           <h3 class="info-title">關於{{ pet.name }}</h3>
           <b-row class="bordered"> 
             <b-col cols="6"><b>性別：</b>{{ pet.gender }}</b-col>
             <b-col cols="6"><b>年齡：</b>{{ pet.age }}</b-col>
           </b-row>
            <b-row class="bordered">
             <b-col cols="6"><b>品種：</b>{{ pet.breed }}</b-col>
             <b-col cols="6"><b>顏色：</b>{{ pet.color }}</b-col>
           </b-row>
            <b-row class="bordered">
             <b-col cols="6"><b>體型：</b>{{ pet.size }}</b-col>
             <b-col cols="6"><b>所在地：</b>{{ pet.location }}</b-col>
           </b-row>
           <div class="intro">
            <p><b>{{ pet.name }}的簡單介紹</b></p>
            <p>{{ pet.info }}</p>
           </div>    
        </b-col>
      </b-row>
      <b-card bg-variant="dark" 
        text-variant="white"
        title="我想要領養"
      >
        <b-card-text>
          請確認務必看完領養規章，做決定前請三思，寵物是會陪伴你一輩子的家人。
          如果你已經確定，歡迎來填寫申請吧！
        </b-card-text>
        <b-button href="#" variant="light" rounded="0">申請領養</b-button>
      </b-card>
    </b-container>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState(['pet'])
  },
  methods: {
  }
}

</script>

<style lang="less" scoped>
  .pet-info {
    padding: 100px 0;
    text-align: left;
    color:#222;
  }

  .info-title {
    border-bottom: 3px solid #ccc;
    letter-spacing: 2px;
    color: gray;
  }

  .bordered {
    margin: 0 15px;
    border-bottom: 1px solid #d4d4d4;
    padding: 10px 0;
  }

  .intro {
    margin: 10px 15px 0 15px;
  }

  .card {
    margin-top: 50px;
    text-align: center;
  }

</style>