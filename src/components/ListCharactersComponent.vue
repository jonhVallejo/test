<template>
    <ul class="flex flex-row w-full h-20">
        <li v-for="c in characters.Items" :key="c">
            <character-component :source="c"></character-component>
        </li>
    </ul>
</template>
<script>
import { charactersStore } from '@/stores/characters'
import CharacterComponent from '@/components/CharacterComponent.vue'

export default {
    components: {
        CharacterComponent
    },
    setup(){
        const characters = charactersStore()

        return {
            characters
        }
    }
}
</script>