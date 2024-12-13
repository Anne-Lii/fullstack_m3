<script>
export default {
  data() {
    return {
      fishData: [], //Array för datan från APIet
      loading: true, //visar att data laddas
    };
  },
  mounted() {
    this.fetchFishData(); //hämta data när komponenten mountas
  },

  //metod för att hämta data
  methods: {
    async fetchFishData() {
      try {
        const response = await fetch('https://moment-2-backend-ramverk-anne-lii.onrender.com/fish');
        const data = await response.json(); //gör om till json
        this.fishData = data;
      } catch (error) {
        console.error('Fel vid hämtning av data:', error);
        } finally {
            this.loading = false; //Avslutar laddning
        }
    },

    //för att radera en fisk
    async deleteFish(_id) {
      try {
        await fetch(`https://moment-2-backend-ramverk-anne-lii.onrender.com/fish/${_id}`, {
          method: 'DELETE',
        });
        this.fetchFishData(); // Uppdatera listan efter radering
      } catch (error) {
        console.error('Fel vid borttagning av fisk:', error);
      }
    },
  },
};
</script>


<template>
    <div class="wrapper">
      <h1>Fiskar</h1>
      <div v-if="loading">Laddar data...</div>
      <div v-else>
        <div v-for="fish in fishData" :key="fish._id" class="fish-item">
          <h3>{{ fish.commonName }}</h3>
          <p><strong>Latinskt namn:</strong> {{ fish.latinName }}</p>
          <p><strong>Saltvatten:</strong> {{ fish.isSaltwater ? 'Ja' : 'Nej' }}</p>
          <p><strong>Utrotningshotad:</strong> {{ fish.endangeredLevel }}/3</p>
          <button @click="deleteFish(fish._id)">Ta bort</button>
        </div>
      </div>
    </div>
</template>
  