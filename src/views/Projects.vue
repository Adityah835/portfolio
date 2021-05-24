<template>
    <section>
        <div class = "top-margin-2">
            <div class = "container">
                <div class = "row">
                    <h5> My Top Projects </h5>
                </div>
                <div class = "row">
                    <div class="card animation1" style="width: 18rem;">
                        <img class="card-img-top" src = '../assets/images/car.png' alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Jackrabbit Rent-A-Car</h5>
                            <p class="card-text">
                                A Vue.js + Google Firebase project to simulate a car rental agency's website. 
                                This project's main components include acccount creation, car reservation, and 
                                inventory management.
                            </p>
                            <a href="https://github.com/Adityah835/jackrabbit-rent-a-car" class="btn btn-success">Go to Github Repository</a>
                        </div>
                    </div>
                    <div class="card animation2" style="width: 18rem;">
                        <img class="card-img-top" src = '../assets/images/java.png' alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Java Compiler</h5>
                            <p class="card-text">
                                This .NET Framework (C#) Console Project is a mini compiler that simulates 
                                basic Java statements and give output like a real compiler.
                            </p>
                            <a href="https://github.com/Adityah835/JavaCompiler" class="btn btn-success">Go to Github Repository</a>
                        </div>
                    </div>
                    <div class="card animation3" style="width: 18rem;">
                        <img class="image card-img-top" src = '../assets/images/portfolio.jpg' alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Portfolio</h5>
                            <p class="card-text">
                                Yes, this portal itself is one of my top projects. This project is a Vue.js + Bootstrap project 
                                to showcase my UI development skills till date.
                            </p>
                            <a href="https://github.com/Adityah835/portfolio" class="btn btn-success">Go to Github Repository</a>
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
        background-color: rgb(66, 66, 66);
        border: 0;
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
