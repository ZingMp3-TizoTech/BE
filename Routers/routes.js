const express = require("express");
const router = express.Router()
const ControllerRole = require('../Controllers/role')
const ControllerUser = require('../Controllers/user')
const ControllerPlaylist = require('../Controllers/playlist')
const ControllerGenre = require('../Controllers/genre')
const ControllerArtist = require('../Controllers/artist');
const ControllerAlbum= require('../Controllers/album')
const ControllerSong= require('../Controllers/songs')
const { required } = require("nodemon/lib/config")
const authenToken= require("../middleware/auth")
const Auth = require("../utils/authorization")

//ROLE
router.post("/createRole", ControllerRole.createRole)
//USER
router.post("/signup", ControllerUser.Signup)
router.post("/login", ControllerUser.login)
router.get("/get-all-user",ControllerUser.getAllUser)
router.delete("/deleteUserById/:id",authenToken,ControllerUser.deleteUser)
//PLAYLIST
router.post("/createPlaylist",ControllerPlaylist.createPlaylist)
//GENRE
router.post("/createGenre",ControllerGenre.createGenre)
//Artist
router.post("/createArtist",ControllerArtist.createArtist)
//Album
router.post("/createAlbum",ControllerAlbum.createAlbum)
router.get("/get-all-album",ControllerAlbum.getAllAlbum)
router.put("/updateAlbum/:id",ControllerAlbum.updateAlbum)
//Song
router.post("/createSong/",ControllerSong.createSong)
router.get("/get-all-song",ControllerSong.getAllSong)



module.exports = router;