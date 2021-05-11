<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="success">
    <div class = "left-margin">
        <b-navbar-brand to='/'>Aditya Harshvardhan</b-navbar-brand>
    </div>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
              <b-nav-item to='/Resume'><span class='left-margin'/>Resume</b-nav-item>
              <b-nav-item to='/Projects'><span class='left-margin'/>Projects</b-nav-item>
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
