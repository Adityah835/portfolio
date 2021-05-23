<template>
    <section>
        <div class = "top-margin-2">
            <div class = "container">
                <div class = "row">
                    <h5> About This Portal </h5>
                </div>
                <div class = "row">
                    <p> This portal was made possible by the following: </p>
                </div>
                <div class = "row">
                    <div class="card animation1" style="width: 18rem;">
                        <img class="card-img-top" src = '../assets/images/vuejs.png' alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Vue.js</h5>
                            <p class="card-text">
                               A JavaScript framework (like Angular, React) for UI developent (launched in 2015).
                            </p>
                        </div>
                    </div>
                    <div class="card animation1" style="width: 18rem;">
                        <img class="card-img-top" src = '../assets/images/html.png' alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">HTML</h5>
                            <p class="card-text">
                               Used in displaying things on this portal.
                            </p>
                        </div>
                    </div>
                    <div class="card animation1" style="width: 18rem;">
                        <img class="card-img-top" src = '../assets/images/css.png' alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">CSS</h5>
                            <p class="card-text">
                               Everything pretty, including colors, themes and page transitions on this portal.
                            </p>
                        </div>
                    </div>
                    <div class="card animation1" style="width: 18rem;">
                        <img class="card-img-top" src = '../assets/images/js.png' alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">JavaScript</h5>
                            <p class="card-text">
                               All the different pages connected through a router JavaScript file (utilizing VueRouter).
                            </p>
                        </div>
                    </div>
                    <div class="card animation1" style="width: 18rem;">
                        <img class="card-img-top" src = '../assets/images/bootstrap.png' alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Bootstrap</h5>
                            <p class="card-text">
                               A CSS framework for responsive and mobile-friendly web development.
                            </p>
                        </div>
                    </div>
                </div>
                <div class = "row">
                    <p class = "padding">Note - All the above names are Trademarks of their respective owners</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    @import '../assets/css/global.css';
    .card{
        margin-top:2%;
        margin-left: 6%;
        padding: 2%;
        background-color: rgb(116, 116, 116);
    }
    .animation1{
        animation-name: slideLeft;
        animation-duration: 1s;
    }
    .padding{
        padding: 2%;
    }
</style>