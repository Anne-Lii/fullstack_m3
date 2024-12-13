<template>
    <div class="fish-detail">
        <h2>{{ fish.commonName }}</h2>
        <p><strong>Latinskt namn:</strong> {{ fish.latinName }}</p>
        <p><strong>Saltvatten:</strong> {{ fish.isSaltwater ? "Ja" : "Nej" }}</p>
        <p><strong>Utrotningshotad:</strong> {{ fish.endangeredLevel }}</p>

        <button @click="$emit('close')">Stäng</button>
    </div>
</template>
  
<script>
    export default {
        name: "FishDetail",
        props: {
        fish: {
            type: Object,
            required: true,
        },
        },
    };
</script>
  
<style scoped>
    
</style>
  