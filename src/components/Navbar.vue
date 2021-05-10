<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class = "left-margin">
        <b-navbar-brand href="#">Aditya Harshvardhan</b-navbar-brand>
    </div>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <div class = "left-margin">
            <b-nav-item href="#">Resume</b-nav-item>
            <b-nav-item href="#">Projects</b-nav-item>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style scoped>
    .left-margin{
        margin-left: 3%;
    }
</style>