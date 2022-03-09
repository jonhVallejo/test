<template>
    <div class="border rounded-md shadow-xl h-40 max-h-40 w-auto my-1 hover:cursor-pointer hover:scale-105">
        <div class="px-4 pt-4 bg-black text-yellow-400 place-content-center">
            <div class="w-2/3" >
 
                 <h1 class="font-bold text-2xl">
                    {{ data.title }}
                </h1>
                <h2 class="font-semibold">{{ data.director }}</h2>
            </div>
            <button class="text-white h-10" @click="change">Buscar</button>
        </div>
        <div class="py-4 bg-gray-900">
            <h3 class="text-justify font-sans px-4 pb-4 text-white">
                {{data.opening_crawl}}
            </h3>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { charactersStore } from '@/stores/characters'

export default {
    props: {
        source: String
    },
    setup(){
        const characters = charactersStore()

        return {
            characters
        }
    },
    data () {
        return {
            data: {}
        }
    },
    mounted() {
        axios.get(this.source)
        .then((response) => {
            this.data = response.data
        })
    },
    methods: {
        change() {
            console.log(this.characters.items)
            this.characters.add(this.data.characters)
        }   
    }
}
</script>