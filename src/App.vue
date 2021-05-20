<template>
  <section>
    <div id = "app">
      <Navbar></Navbar>
      <router-view/>
    </div>
  </section>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

<style>
  html,
  body,
  section,
  #app{
    background-color: rgb(66, 66, 66);
    color: #fff; 
    min-height: 100%;
    font-family:inherit;
  }
</style>