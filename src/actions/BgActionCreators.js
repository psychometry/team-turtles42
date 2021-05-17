import {createApi} from 'unsplash-js';
import backgrounds from '../background.json';
export const SET_BACKGROUND = 'SET_BACKGROUND',
SET_UPDATE_TIME='SET_UPDATE_TIME',
SET_OPTION='SET_OPTION',
SET_BG_LIST='SET_BG_LIST';

const {VITE_ACCESS_KEY} = import.meta.env;

const unsplash = createApi(
  {
    accessKey: VITE_ACCESS_KEY
  }
)

export function setBackground(url){
  // console.log('fired');
  return {type:SET_BACKGROUND,url};
}
export function selectBackground(bgList, index){
  return function(dispatch){
    const url=bgList[index].src;
    dispatch(setBackground(url));
  }
}
export function setBackgroundList(json){
  return {type:SET_BG_LIST,json}
}
export function fetchBackground(){
  return function(dispatch){
    unsplash.photos.getRandom({collections:[611358], count:6})
    .then(response => {
      if(response.errors){
        throw new Error('Responded with a status code outside the 2xx range, and the response body is not recognisable.');
      }
      console.log(response);
      const backgrounds=response.response.map(
        img=>{
          return {
            src:img.urls.regular,
            url:img.links.html,
            thumb:img.urls.thumb,
            user:{
              username:img.user.username,
              name:img.user.name,
              link:img.user.links.html+"?utm_source=ReactDash&utm_medium=referral&utm_campaign=api-credit",
          }
        }
      });
      dispatch(setBackgroundList(backgrounds));
    }).catch(
      err=>{
        console.log(err);
        dispatch(setOption('local'));
        dispatch(fetchBackgroundLocal());
      }
    );
  }
}
export function fetchBackgroundLocal(){
  return function(dispatch){
    const background=backgrounds.backgrounds.map(
      bg=>{
        return {
          ...bg,
          src:'/img/'+bg.src}
      }
    )
    dispatch(setBackgroundList(background));
  }
}
export function setOption(option){
  return {type:SET_OPTION,option}
}
export function update(time){
  return {type:SET_UPDATE_TIME,time}
}
