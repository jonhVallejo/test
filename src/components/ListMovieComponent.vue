<template>
    <ul class="flex flex-row w-full h-20">
        <li v-for="movie in data.films" :key="movie">
            <movie-component :source="movie"></movie-component>
        </li>
    </ul>
</template>
<script>
import MovieComponent from '@/components/MovieComponent.vue'
import axios from 'axios'
export default {
    components: {
        MovieComponent
    },
    data () {
        return {
            data: {}
        }
    },
    mounted() {
        this.fetch()
    },
    methods: {
        update() {
            this.fetch()
        },
        fetch() {
            axios.get(`https://swapi.dev/api/people/1`)
            .then((response) => {
                this.data = response.data
            })
        }
    }
}
</script>