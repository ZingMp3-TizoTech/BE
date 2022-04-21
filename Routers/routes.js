const express = require("express");
const router = express.Router()
const ControllerRole = require('../Controllers/role')
const ControllerUser = require('../Controllers/user')
const ControllerPlaylist = require('../Controllers/playlist')
const ControllerGenre = require('../Controllers/genre')
const ControllerArtist = require('../Controllers/artist');
const ControllerAlbum = require('../Controllers/album')
const ControllerSong = require('../Controllers/songs')
const { required } = require("nodemon/lib/config")
const authenToken = require("../middleware/auth");



//ROLE
router.post("/role",function(req,res){
    authenToken, ControllerRole.createRole
} )
router.delete("/api/role/:id",function(req,res){
    authenToken, ControllerRole.deleteRole
})
//USER
router.post("/signup", ControllerUser.Signup)
router.post("/login", ControllerUser.login)
router.put("/change-password",ControllerUser.changePassword)
router.get("/users", ControllerUser.getAllUser)
router.delete("/user/:id", function(req,res){
    authenToken, ControllerUser.deleteUser
})
//PLAYLIST
router.post("/playlist", ControllerPlaylist.createPlaylist)
router.put("/playlist/:id", ControllerPlaylist.updatePlaylist)
router.delete("/playlist/:id", ControllerPlaylist.deletePlaylist)
router.get("/playlists", ControllerPlaylist.getAllPlaylist)
router.get("/playlist/:id", ControllerPlaylist.getPlaylistByIdUser)
//GENRE
router.post("/genre",function(req,res){
    authenToken, ControllerGenre.createGenre
})
//Artist
router.post("/artist",function(req,res){
    authenToken, ControllerArtist.createArtist
})

//Album
router.post("/album", function(req,res){
    authenToken, ControllerAlbum.createAlbum
})
router.get("/albums",ControllerAlbum.getAllAlbum)
router.put("/album/:id", function(req,res){
    authenToken, ControllerAlbum.updateAlbum
})
//Song
router.post("/song/", function(req,res){
    authenToken, ControllerSong.createSong
})
router.get("/songs", function(req,res){
    ControllerSong.getAllSong
})
router.delete("/song/:id", function(req,res){
    authenToken, ControllerSong.deleteSong
})
router.put("/song/:id", function(req,res){
    authenToken, ControllerSong.updateSong
})

module.exports = router;