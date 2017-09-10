import Unsplash, { toJson } from 'unsplash-js';
import backgrounds from '../background.json';
export const SET_BACKGROUND = 'SET_BACKGROUND',
SET_UPDATE_TIME='SET_UPDATE_TIME',
SET_OPTION='SET_OPTION',
SET_BG_LIST='SET_BG_LIST';


const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_APP_ID,
  secret: process.env.REACT_APP_UNSPLASH_APP_SECRET,
  callbackUrl: process.env.REACT_APP_UNSPLASH_CALLBACK_URL
})
export function setBackground(url){
  console.log('fired');
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
  console.log('here');
  return function(dispatch){
    unsplash.photos.getRandomPhoto({collections:[611358],count:6})
    .then(toJson)
    .then(json => {
      const backgrounds=[];
      json.forEach(
        (pic)=>{
          const bg={
            src:pic.urls.regular,
            url:pic.links.html,
            thumb:pic.urls.thumb,
            user:{
              username:pic.user.username,
              name:pic.user.name,
              link:pic.user.links.self+"?utm_source=ReactDash&utm_medium=referral&utm_campaign=api-credit",
            }
          }
          backgrounds.push(bg);
        }
      );
      dispatch(setBackgroundList(backgrounds));
    }).catch(
      err=>{
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
        return {...bg,src:process.env.PUBLIC_URL+'./img/'+bg.src}
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
