import * as constants from "../actions/constants";

export const videosReducers = (state = [], action) => {
switch (action.type) { 
case constants.FETCH_VIDEOS_SUCCESS:
return action.videos;
default:
return state;
}
};
