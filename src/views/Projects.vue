<template>
    <section>
        <div class = "top-margin-2">
            <div class = "container">
                <div class = "row">
                    <div class="card animation1" style="width: 18rem;">
                        <img class="card-img-top" src = '../assets/images/linkedin.jpg' alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                Some quick example text to build 
                                on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card animation2" style="width: 18rem;">
                        <img class="card-img-top" src = '../assets/images/linkedin.jpg' alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                Some quick example text to build 
                                on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card animation3" style="width: 18rem;">
                        <img class="card-img-top" src = '../assets/images/linkedin.jpg' alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                Some quick example text to build 
                                on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
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
        animation-name: slideUp;
        animation-duration: 1s;
    }
    .animation2{
        animation-name: slideUp;
        animation-duration: 1.5s;
    }
    .animation3{
        animation-name: slideUp;
        animation-duration: 2s;
    }
</style>
