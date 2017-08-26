import Unsplash, { toJson } from 'unsplash-js';
import backgrounds from '../background.json';
export const SET_BACKGROUND = 'SET_BACKGROUND',
FETCH_BACKGROUND='FETCH_BACKGROUND',
FETCH_BACKGROUND_SUCCESS='FETCH_BACKGROUND_SUCCESS',
FETCH_BACKGROUND_FAILURE='FETCH_BACKGROUND_FAILURE';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_APP_ID,
  secret: process.env.REACT_APP_UNSPLASH_APP_SECRET,
  callbackUrl: process.env.REACT_APP_UNSPLASH_CALLBACK_URL
})
export function setBackground(url){
  return {type:SET_BACKGROUND,url};
}
export function fetchBackgroundSuccess(url){
  return function(dispatch){
    dispatch(setBackground(url));
  }
}
export function fetchBackgroundFailure(){
  return function(dispatch){
    const bgList=backgrounds.backgrounds;
    const rand=Math.floor(Math.random()*(bgList.length));
    dispatch(setBackground(process.env.PUBLIC_URL+'./img/'+bgList[rand].filename));
  }
}
export function fetchBackground(){
  return function(dispatch){
    unsplash.photos.getRandomPhoto()
    .then(toJson)
    .then(json => {
      dispatch(fetchBackgroundSuccess(json.urls.regular));
    }).catch(
      err=>{
        console.log('error');
        console.log(err);
        dispatch(fetchBackgroundFailure());
      }
    );
  }
}
