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
const authenToken = require("../middleware/auth")


//ROLE
router.post("/createRole", authenToken, ControllerRole.createRole)
//USER
router.post("/signup", ControllerUser.Signup)
router.post("/login", ControllerUser.login)
router.get("/get-all-user", ControllerUser.getAllUser)
router.delete("/deleteUserById/:id", authenToken, ControllerUser.deleteUser)
//PLAYLIST
router.post("/createPlaylist", ControllerPlaylist.createPlaylist)
router.put("/updatePlaylist/:id", ControllerPlaylist.updatePlaylist)
router.delete("/deletePlaylist/:id", ControllerPlaylist.deletePlaylist)
router.get("/get-all-playlist", ControllerPlaylist.getAllPlaylist)
router.get("/playlist/:id", ControllerPlaylist.getPlaylistByIdUser)
//GENRE
router.post("/createGenre", authenToken, ControllerGenre.createGenre)
//Artist
router.post("/createArtist", authenToken, ControllerArtist.createArtist)

//Album
router.post("/createAlbum", authenToken, ControllerAlbum.createAlbum)
router.get("/get-all-album", ControllerAlbum.getAllAlbum)
router.put("/updateAlbum/:id", authenToken, ControllerAlbum.updateAlbum)
//Song
router.post("/createSong/", authenToken, ControllerSong.createSong)
router.get("/get-all-song", ControllerSong.getAllSong)
router.delete("/deleteSong/:id", authenToken, ControllerSong.deleteSong)
router.put("/updateSong/:id", authenToken, ControllerSong.updateSong)

module.exports = router;