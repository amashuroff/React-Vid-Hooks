import axios from 'axios';


const KEY = "AIzaSyBeYuvolaA0-2NNuLK4UalRMjO9XFFQNHw";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});