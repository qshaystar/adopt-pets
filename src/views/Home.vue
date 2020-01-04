<template>
  <div class="home">
    <h1>home Waiting for construction...</h1>

    <div>
      <b-button @click="show=true, resetForm()" variant="primary">我要送養</b-button>

      <b-modal
        v-model="show"
        title="送養寵物"
        :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant"
        :body-bg-variant="bodyBgVariant"
        :body-text-variant="bodyTextVariant"
        :footer-bg-variant="footerBgVariant"
        :footer-text-variant="footerTextVariant"
      >
        <b-container fluid>
          <div class="foster-form" v-if="toggleForm">
             <b-form-group label="請選擇寵物類別："  name="radio-sub-component">
              <b-form-radio-group  v-model="species" name="radio-sub-component">
                <b-form-radio value="dogs">狗兒</b-form-radio>
                <b-form-radio value="cats">貓兒</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
            <b-form-group>
              <b-form-input placeholder="圖片網址" ></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="customFile">或 上傳圖片
                <i class="fas fa-spinner fa-spin"></i>
              </label>
              <input type="file" id="customFile" class="form-control"
                ref="files" @change="uploadFile">
              <!-- <b-form-file
                placeholder="未選擇檔案"
                @change="uploadFile" 
                ref="files"
                type="file"
              > -->
              </b-form-file>
            </b-form-group>
            <b-form-group>
                <b-form-input
                  v-model="tempPet.name" 
                  placeholder="名字"
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
                <b-form-group>
                  <b-form-input 
                    placeholder="性別"
                    v-model="tempPet.gender"
                  ></b-form-input>
                </b-form-group>
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
                  <b-form-input 
                    placeholder="體型"
                    v-model="tempPet.size"
                  ></b-form-input>
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
                placeholder="性格描述"
                v-model="tempPet.description"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
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

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      tempPet:{},
      species: '',
      uploadSuccess: false,
      toggleForm: true,
      show: false,
      headerBgVariant: 'dark',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'light',
      footerTextVariant: 'dark'
    } 
  },
  methods: {
    resetForm() {
      this.species = 'dogs';
      this.tempPet = {};
    },
    addPet() {
      const api = `http://localhost:3000/${this.species}`;
      const vm = this;
      this.axios.post(api, vm.tempPet ).then((response) => {
          vm.show=false;
          console.log(response.data)
      }); 
    },
    uploadFile() {
      console.log(this);
      const vm = this;
      const uploadedFile = this.$refs.files.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = 'https://vue-course-api.hexschool.io/api/zcsasay/admin/upload';
      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        consoele.log(response.data)
      })
    },
  },
 
}
</script>

<style lang="less">

ul {
  padding: 0;
  list-style-type: none;
}
</style>
