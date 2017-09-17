export const SHOWIMAGEINFO='SHOWIMAGEINFO', CLOSEIMAGEINFO='CLOSEIMAGEINFO', SETIMAGE='SETIMAGE' ;

export function showImageInfo(){
  return {type:SHOWIMAGEINFO}
}
export function closeImageInfo(){
  return {type:CLOSEIMAGEINFO}
}
export function setImage(img){
  return {type:SETIMAGE,img}
}
