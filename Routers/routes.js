const express = require("express");
const router = express.Router()
const ControllerRole = require('../Controllers/role')
const ControllerUser = require('../Controllers/user')
const ControllerPlaylist = require('../Controllers/playlist')
const ControllerGenre = require('../Controllers/genre')
const ControllerArtist = require('../Controllers/artist');
const ControllerAlbum = require('../Controllers/album')
const ControllerSong = require('../Controllers/songs')
const ControllerSearch = require('../Controllers/search')
const {authenToken} = require("../middleware/auth");

//ROLE
router.post("/role/create",authenToken, ControllerRole.createRole)
router.delete("/role/:id", authenToken, ControllerRole.deleteRole )
//USER
router.post("/signup", ControllerUser.Signup)
router.post("/login", ControllerUser.login)
router.put("/change-password", ControllerUser.changePassword)
router.get("/users", ControllerUser.getAllUser)
router.get("/user/", ControllerUser.getUserByID)
router.delete("/user/:id", authenToken, ControllerUser.deleteUser)
router.put("/user/like", ControllerUser.addSongToLiked )
router.put("/user/unlike", ControllerUser.removeSongFromLiked)
//PLAYLIST
router.post("/playlist", ControllerPlaylist.createPlaylist)
router.put("/playlist/:id", ControllerPlaylist.updatePlaylist)
router.delete("/playlist/:id", ControllerPlaylist.deletePlaylist)
router.get("/playlists", ControllerPlaylist.getAllPlaylist)
router.get("/playlist",ControllerPlaylist.getPlaylistByUser)
router.get("/playlist/:id",ControllerPlaylist.getPlaylistById)
router.put("/playlist/add/:id", ControllerPlaylist.addSongToPlaylist )
router.put("/playlist/remove/:id", ControllerPlaylist.removeSongFromPlaylist )
 //Genre
router.post("/genre", authenToken, ControllerGenre.createGenre)
router.get("/genres", ControllerGenre.getAllGenre)
router.delete("/genre/:id",authenToken, ControllerGenre.deleteGenre)
router.put("/genre/:id",authenToken, ControllerGenre.updateGenre )
//Artist
router.post("/artist",authenToken,ControllerArtist.createArtist)
router.get("/artists",ControllerArtist.getAllArtist)
router.put("/artist/:id",ControllerArtist.updateArtist)
 //Album
router.post("/album/", authenToken, ControllerAlbum.createAlbum )
router.get("/albums", ControllerAlbum.getAllAlbum)
router.get("/album/:id", ControllerAlbum.getAlbumByID)
router.put("/album/:id",authenToken, ControllerAlbum.updateAlbum)
router.delete("/album/:id",authenToken, ControllerAlbum.deleteAlbum)
router.put("/album/add/:id", ControllerAlbum.addSongToAlbum )
router.put("/album/remove/:id", ControllerAlbum.removeSongFromAlbum )
//Song
router.post("/song/",  authenToken, ControllerSong.createSong )
router.get("/songs", ControllerSong.getAllSong)
router.delete("/song/:id",)
router.put("/song/:id", authenToken, ControllerSong.updateSong)
router.put("/song/like/:id", ControllerSong.updateRateAndListen)
router.get("/songs/filter/artist/:id",ControllerSong.getSongsByArtist)
//Search
router.post("/search",ControllerSearch.searchInAlbum)


module.exports = router;