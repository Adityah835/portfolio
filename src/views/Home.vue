<template>
    <section>
        <div class = "top-margin">
            <h2 class = "typing-effect"> Hello World!</h2>
            <hr/>
        </div>
        <div class = "container">
            <div class = "row">
                <div class = "col-sm-3 col-md-4">
                    <img class = "image" src = '../assets/images/profile.jpg'/>
                </div>
                <div class = "col-sm-9 col-md-6">
                    <h5> My name is Aditya and I am a Software Developer. </h5>
                    <p> I am currently located in Brookings, South Dakota currently pursuing
                        my Masters Degree in Computer Science (Thesis Pending). I already have
                        my Bachelors Degree in Computer Science from South Dakota State University. 
                    </p>
                    <p>
                        From the beginning of my professional career, I have been involved in several aspects of Software Development
                        process (Agile model). I started career as a Software QA Student (8 months), then moved to the User
                        Interface Automation Student (1 year), and finally moved as a Software Developer Student (4 months).
                    </p>
                    <p>
                        While most my experience has been in Software Development, I also have some exposure to Python programming and 
                        Deep Learning. Currently pursuing my thesis on improving the existing Deep Learning Neural Network Architechture.
                    </p>
                    <a href= "https://www.linkedin.com/in/aditya-harshvardhan-a5163a157/">
                        <img src="../assets/images/linkedin.jpg" class="small-image"/>
                    </a>
                    <a href = "https://github.com/Adityah835">
                        <img src="../assets/images/github.jpg" class="small-image"/>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    @import '../assets/css/global.css';
    p, button {
        animation: fadeInAnimation ease 6s;
    }
    h5, img{
        animation: fadeInAnimation ease 4s;
    }
</style>
