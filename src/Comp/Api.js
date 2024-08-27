import axios from 'axios';

const API_KEY = 'AIzaSyBrVVg8SZbqouU8VlYZzrb6vWaWBLtCsqY';
const searchQuery = 'programming tutorials';

axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${API_KEY}`)
  .then(response => {
    console.log(response.data.items);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
