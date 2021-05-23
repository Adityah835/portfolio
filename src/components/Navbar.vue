<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="success" fixed = "top">
    <div class = "left-margin">
        <b-navbar-brand to='/'>Aditya Harshvardhan</b-navbar-brand>
    </div>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
              <b-nav-item to='/Projects' class="margin">Projects</b-nav-item>
              <b-nav-item to='/About-This-Portal' class="margin">About This Portal</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style scoped>
    @import '../assets/css/global.css';
</style>
