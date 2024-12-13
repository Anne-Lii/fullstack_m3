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
    .fish-detail {
        border: 1px solid #ddd;
        padding: 15px;
        margin: 20px auto;
        border-radius: 8px;
        background-color: #f9f9f9;
        text-align: center;
    }
    button {
        padding: 10px 15px;
        background-color: #0073e6;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background-color: #005bb5;
    }
</style>
  