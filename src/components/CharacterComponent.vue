<template>
    <div class="border rounded-md shadow-xl h-40 max-h-40 w-auto my-1 pt-50 space-x-4">
        <h1 class="text-white">{{data.name}}</h1>
    </div>
</template>
<script>
import axios from 'axios'
import { charactersStore } from '@/stores/characters'
export default {
    props: {
        source: String
    },
    data () {
        return {
            data: {}
        }
    },
    setup(){
        const characters = charactersStore()

        return {
            characters
        }
    },
    mounted() {
        axios.get(this.source)
        .then((response) => {
            this.data = response.data
            console.log(this.data)
        })
    },
    methods: {

        change() {
            console.log('incrementando')
        }   
    }
}
</script>