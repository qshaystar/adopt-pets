<template>
  <div>
    <h1>pets</h1>
    <!-- {{ $route.params.species }}
    {{ $route.params.id }} --> 
    {{ pet.name }}
    {{ pet.age }}
    {{ pet.breed}}
    {{ pet.location }}
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
    // pet() {
    //   const animal = this.$route.params.species;
    //   return animal
    // }

  }
}

</script>
