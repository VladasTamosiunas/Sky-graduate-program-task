const express = require('express');
const fs = require('fs');
const path = require('path');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const movieJsonFile = path.join(__dirname, 'data.json');

const DOMParser = require('xmldom').DOMParser;

const app = express();
app.use(fileUpload());
app.use(cors());

//Parse Xml document , and return values which going to be putted to json file.
function parseXmlMovies (xmlString) {
  const doc = new DOMParser().parseFromString(xmlString);
  const movieList = Array.from(doc.getElementsByTagName('movie'))
      .map(movieNode => {
        return {
          id: movieNode.getElementsByTagName('id')[0].textContent,
          name: movieNode.getElementsByTagName('name')[0].textContent,
          mood: movieNode.getElementsByTagName('mood')[0].textContent,
          image: movieNode.getElementsByTagName('image')[0].textContent,
          link: movieNode.getElementsByTagName('link')[0].textContent,
          color: movieNode.getElementsByTagName('color')[0].textContent,
        };
      });
  return movieList;
}
// Parse returned values to json file.
function writeMovies(movieList){
  const jsonStringed = JSON.stringify(movieList);
  fs.writeFileSync(movieJsonFile, jsonStringed);
}

function readMovies() {
    const jsonString = fs.readFileSync(movieJsonFile);
    return JSON.parse(jsonString);
}
//Filter movies by mood
function getMoviesByMood(moods) {
    const movies = readMovies();
    const matched = movies.filter(movie => moods.includes(movie.mood));
    return matched;
}

app.use('/images', express.static(path.join(__dirname, 'images')));

app.post('/upload', (req, res) => {
    const movies = parseXmlMovies(req.files.movies.data.toString());
    writeMovies(movies);
    res.json({ message: 'success' });
});
app.get('/movies', (req, res) => {
    const moodList = req.query.moods;
    if (moodList) {
        const moods = moodList.split(',');
        const movies = getMoviesByMood(moods);
        res.json(movies);
    } else {
        return [];
    }
});

app.listen(3030, () => {
    console.log('Server listening on port 3030');
});
