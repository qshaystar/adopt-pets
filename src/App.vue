<template>
  <div id="app">
    <b-nav>
      <b-nav-item active>
        <router-link to="/">認養平台</router-link> 
      </b-nav-item>
      <b-nav-item>
        <router-link to="/dogs">認養狗兒</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/cats">認養貓咪</router-link> 
      </b-nav-item> 
    </b-nav>
    
    <router-view/>

    <footer>
      <b-container>
        <hr>
        <p>Adopt Pets - vue practice project.</p>
      </b-container>
    </footer>
  
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  padding: 0;
  list-style-type: none;
}

.nav {
  position: fixed;
  width: 100%;
  justify-content: center;
  border-bottom: .1px solid #b5b5b5;
  background-color: #333;
  z-index:2;

  a {
    color: white;
  }
}

.header {
  padding: 200px 0;
  text-align: left;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; 
  
  h2 {
    color: white;
    font-weight: normal;
    letter-spacing: 10px;
  }
}

.content {
  padding: 100px 0;
}

.pet-card {
    border-radius: 0;
    transition: box-shadow .3s;
    &:hover {
      -webkit-box-shadow: 0 1.2rem 1rem rgba(0, 0, 0, 0.175) !important;
      box-shadow: 0 1.2rem 1rem rgba(0, 0, 0, 0.175) !important;
  }

  .card-header {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    color: white;
  }
} 
</style>
