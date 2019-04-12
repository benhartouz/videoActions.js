import axios from 'axios';
import * as constants from './constants';

const apiUrl = 'http://localhost:2000/videooS';


export const fetchVideosSuccess = (videos) => {
return {
type: constants.FETCH_VIDEOS_SUCCESS ,
videos
}
};


export const fetchVideos = () => {
return (dispatch) => {
return axios.get(apiUrl)
.then(response => {
    console.log(response);
dispatch(fetchVideosSuccess (response.data))
})
.catch(error => {
throw(error);
});
};
};

