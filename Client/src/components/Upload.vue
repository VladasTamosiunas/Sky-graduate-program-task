<template>
<div>
    <article class="message is-primary is-centered">
      <div class="message-header">
        <p>Announcment</p>
      </div>
      <div class="message-body">
        There you are in content <strong>upload</strong> section, so you can
        updated your movie library. Just select
        the XML file you want to upload and immediately the database will be updated.
        </div>
    </article>
  <div class="field">
    <div class="file is-centered is-boxed is-success has-name">
      <label class="file-label">
        <input class="file-input" @change="uploadMovies" type="file" name="file">
        <span class="file-cta">
        <span class="file-icon">
          <i class="fa fa-cloud-upload"></i>
        </span>
        <span class="file-label">
        Upload file
        </span>
      </span>
      </label>
    </div>
  </div>
</div>


</template>

<script>
import axios from 'axios';
import 'vue-material-design-icons/styles.css';

export default {
  name: 'app',
  data() {
    return {
      imageSrc: 'http://nahmdong.com/vitalhill/img/default.png',
      files: [],
    };
  },
  methods: {
    uploadMovies(e) {
      const files = e.target.files;
      if (!files[0]) {
        return;
      }
      const data = new FormData();
      data.append('movies', files[0]);

      axios.post('http://localhost:3030/upload', data)
        .then((response) => {
          window.console.log(response);
        });
    },
  },
};
</script>

<style>
  body {
    margin: 0;
  }

  .navbar-text a {
    color: white;
  }
</style>
