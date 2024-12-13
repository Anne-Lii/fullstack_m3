<script>
    import FishDetail from "../components/FishDetail.vue";

    export default {
        components: {
            FishDetail,
        },
        data() {
            return {
            fishData: [], // Array för API-data
            loading: true, // Indikator för laddning
            selectedFish: null, // Håller vald fisk
            newFish: {
                commonName: "",
                latinName: "",
                isSaltwater: true,
                endangeredLevel: 1,
            },
            };
        },

        mounted() {
            this.fetchFishData();
        },

        methods: {
            async fetchFishData() {
            try {
                const response = await fetch("https://moment-2-backend-ramverk-anne-lii.onrender.com/fish");
                const data = await response.json();
                this.fishData = data;
            } catch (error) {
                console.error("Fel vid hämtning av data:", error);
            } finally {
                this.loading = false;
            }
            },
            async addFish() {
            try {
                const response = await fetch("https://moment-2-backend-ramverk-anne-lii.onrender.com/fish", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.newFish),
                });
                if (!response.ok) {
                throw new Error("Kunde inte lägga till fisk");
                }
                this.fetchFishData();
                this.newFish = {
                commonName: "",
                latinName: "",
                isSaltwater: true,
                endangeredLevel: 1,
                };
            } catch (error) {
                console.error("Fel vid tillägg av fisk:", error);
            }
            },
            async deleteFish(_id) {
            try {
                await fetch(`https://moment-2-backend-ramverk-anne-lii.onrender.com/fish/${_id}`, {
                method: "DELETE",
                });
                this.fetchFishData();
            } catch (error) {
                console.error("Fel vid borttagning av fisk:", error);
            }
            },
            selectFish(fish) {
            this.selectedFish = fish; // Sätt vald fisk
            },
        },
    };
</script>



<template>
    <div class="wrapper">
      <h1>Fiskar</h1>
      <div class="form_container">
        <h2>Lägg till ny fisk</h2>
        <form @submit.prevent="addFish">
          <div>
            <label for="commonName">Namn:</label>
            <input id="commonName" v-model="newFish.commonName" placeholder="Namn" required />
          </div>
          <div>
            <label for="latinName">Latinskt namn:</label>
            <input id="latinName" v-model="newFish.latinName" placeholder="Latinskt namn" required />
          </div>
          <div>
            <label for="isSaltwater">Saltvatten:</label>
            <select id="isSaltwater" v-model="newFish.isSaltwater">
              <option :value="true">Ja</option>
              <option :value="false">Nej</option>
            </select>
          </div>
          <div>
            <label for="endangeredLevel">Utrotningshotad:</label>
            <select id="endangeredLevel" v-model="newFish.endangeredLevel">
              <option value="1">1 - Ja</option>
              <option value="2">2 - Medel</option>
              <option value="3">3 - Nej</option>
            </select>
          </div>
          <button type="submit">+ Lägg till fisk</button>
        </form>
      </div>
  
      <div v-if="loading">Laddar data...</div>
      
      <div v-else>
        <div v-for="fish in fishData" :key="fish._id" class="fish-item">
          <h3>{{ fish.commonName }}</h3>
          <p><strong>Latinskt namn:</strong> {{ fish.latinName }}</p>
          <p><strong>Saltvatten:</strong> {{ fish.isSaltwater ? "Ja" : "Nej" }}</p>
          <p><strong>Utrotningshotad (1-3):</strong> {{ fish.endangeredLevel }}</p>
  
          <button @click="selectFish(fish)">Visa detaljer</button>
          <button @click="deleteFish(fish._id)">Ta bort X</button>
        </div>
      </div>
  
      <!-- FishDetail visas när selectedFish är satt -->
      <FishDetail v-if="selectedFish" :fish="selectedFish" @close="selectedFish = null" />
    </div>
  </template>
  
  
<style scoped>
    .wrapper {
        width: 90%;
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;        
    }
 
    .form_container {
        padding: 20px;
        border: 1px solid grey;
        border-radius: 5px;

    }
    .fish-item {
        padding: 5px 0;
        margin-bottom: 10px;
        border-bottom: 1px solid grey;
    }
    .fish-item p{
        margin: 5px;
       
    }
    form div {
        margin-bottom: 10px;
    }
    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    input,
    select {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
    }
    select {
        width: 100px;
    }
    button {
        background-color: rgb(141, 204, 253);
        color: black;
        border: none;
        padding: 10px 15px;
        margin: 10px;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 5px 5px 5px grey;
        
    }
    button:hover {
        background-color: rgb(92, 184, 255);
        box-shadow: 2px 2px 2px grey;;
    }
</style>