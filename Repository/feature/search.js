const album = require('../../Models/album')
const playlist = require('../../Models/playlist')
const song = require('../../Models/songs')
const artist = require('../../Models/artist')
async function searchInAlbum(key) {
  function titleCase(str) { 
    str = str.replace(/ +/g,' ');
       var arr = str.split(' ');
      for(i = 0; i < arr.length; i++) 
      {
         if(arr[i].length > 1) 
      {
            arr[i] = arr[i].toLowerCase();
            arr1 = arr[i].split('');
           arr1[0] = arr1[0].toUpperCase();
           arr[i] =arr1.join('');
       } 
      else 
         { 
         arr[i] = arr[i].toUpperCase();
         }
      }
     return str =arr.join(' ');
  }
const keyword =titleCase(key).trim();
    try {
      const searchAlbum = await album.find(                 
            {
              "$or":[
                {name:{$regex:keyword}}
              ]})  
      const searchSong = await song.find(                 
                {
                  "$or":[
                    {name:{$regex:keyword}}
                  ]})
       const searchArtist = await artist.find(                 
                    {
                      "$or":[
                        {name:{$regex:keyword}}
                      ]}) 
           
      return {searchAlbum,searchSong,searchArtist}
    } catch (error) {
      console.log(error)
    }
  }
module.exports = {
  searchInAlbum
}