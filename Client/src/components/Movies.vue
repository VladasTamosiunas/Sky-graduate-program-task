<template>
  <div>
      <div class="SliderElement">
      <div v-for="(slider, index) in sliders" :key="index">
        <span class="is-capitalized name">{{slider.moods[0]}}</span>
        <range-slider
          class="slider1"
          min="1"
          max="3"
          step="1"
          @change="sliderChanged(index, $event)">
        </range-slider>
        <span class="is-capitalized name">{{slider.moods[1]}}</span>
      </div>
      </div>
      <div class="movieContainer">
        <div class="secondMovieContainer" v-for="movie in movies.slice(0,5)" :key="movie.id"  >
          <a class="box movie image is-140x140" :href="movie.link">
            <img class="imagePlace" :src="movie.image">
            <a class="sticker" :style="{ 'background-color': movie.color || 'blue'}">
              {{ movie.mood }}
            </a>
          </a>
          <a class="box movieName is-centered">
            <div>{{ movie.name }}</div>
          </a>
        </div>
      </div>
    </div>
</template>
<script>
import RangeSlider from 'vue-range-slider';
import axios from 'axios';
import 'vue-range-slider/dist/vue-range-slider.css';
import 'vue-material-design-icons/styles.css';


export default {
  name: 'Movies',
  data() {
    return {
      sliders: [
        {
          moods: ['agitated', 'calm'],
          value: 2,
        },
        {
          moods: ['happy', 'sad'],
          value: 2,

        },
        {
          moods: ['tired', 'wide awake'],
          value: 2,

        },
        {
          moods: ['scared', 'fearless'],
          value: 2,

        },
      ],
      limitationList: 4,
      movies: [
      ],
      styleObject: [{
        background: 'red',
        fontSize: '13px',
      },
      ],
    };
  },
  methods: {
    loadMovies() {
      const moods = this.sliders
        .filter(slider => slider.value !== 2)
        .map(slider => (slider.value < 2 ? slider.moods[0] : slider.moods[1]));
      if (moods.length === 0) {
        this.movies = [];
        return;
      }
      window.console.log('Fetching for moods', moods);
      axios.get(`http://localhost:3030/movies?moods=${moods.join(',')}`)
        .then((response) => {
          this.movies = response.data;
        });
    },
    sliderChanged(index, value) {
      this.sliders[index].value = value;
      this.loadMovies();
    },
  },
  components: {
    RangeSlider,
  },
};
</script>

<style scoped>
  .slider1 {
    width: 55%;
  }

  .name {
    width: 100px;
    display: inline-block;
  }

  .movieContainer{
    padding-top: 20px;
    margin-left: 2px;
    display: flex;
    justify-content: center;
  }
  .secondMovieContainer{
    position: relative;
    margin-right:10px;
  }
  .movie{
    float:left;
    border: 1px solid #000580;
    width: 140px;
    height: 160px;
    margin-bottom: 2px;
  }
  .movieName{
    clear:both;
    font-size: 13px;
    text-align: center;
    width: 140px;
    height: 40px;
    padding: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .imagePlace{
    margin-top: -15px;
    background: lightgrey;
  }
  .sticker{
    position:absolute;
    transform: rotate(45deg);
    border: 0px solid pink;
    margin-bottom: 127px;
    font-size: 10px;
    width: 85px;
    left: 73px;
    right: 0;
    bottom: 0;

  }


h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
