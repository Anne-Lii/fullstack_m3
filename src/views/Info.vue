<template>
    <div class="background">
        <div class="wrapper">
            <h1>Tankar om Vue</h1>
            <div class="content_container">
                
                <section>
                    <h2>Vad har gått bra?</h2>
                    <p>
                        Nu har jag testat att jobba i Vue en liten stund och det har varit väldigt trevligt. 
                        Jag gillar att man har HTML, CSS och Javascript i samma fil. 
                        För mig är det enkelt att hitta då. Det var också lättare att hålla koll på vad man har 
                        stylat och inte så man inte råkar lägga styling på samma sak två gånger och de slår ut varandra.
                        <br><br>
                        Det var ok att hitta i dokumentationen på deras sida och teori delen i Moodle gav bra info.
                        
                    </p>
                </section>

                <section>
                    <h2>Utmaningar</h2>
                    <p>
                        Det tog lite tid att förstå hur man bäst strukturerar projekt med Vue Router och komponenter.
                        Även att få till props och emits var lite klurigt. Fick ta lite extra hjälp från en youtube tutorial.
                    </p>
                </section>
            </div>       
        </div>
    </div>
</template>

<style scoped>
    .background {
        width: 100%;
        margin: 0;
        padding: 0;
        background-image: url('@/assets/butterfly-fish-3454404_1920.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 100vh;
    }
    .wrapper {
        width: 90%;
        max-width: 600px;
        margin: 20px auto;
        padding: 50px; 
        font-size: 18PX;
        line-height: 1.4em;    
        background-color: rgba(235, 245, 250, 0.8); 
        border-radius: 5px;        
    }

</style>