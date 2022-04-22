const express = require("express");
const router = express.Router()
const ControllerRole = require('../Controllers/role')
const ControllerUser = require('../Controllers/user')
const ControllerPlaylist = require('../Controllers/playlist')
const ControllerGenre = require('../Controllers/genre')
const ControllerArtist = require('../Controllers/artist');
const ControllerAlbum = require('../Controllers/album')
const ControllerSong = require('../Controllers/songs')
const {authenToken} = require("../middleware/auth");


// const authenToken = async (req, res, next) => {
//   const token = await req.header('Authorization').replace('Bearer ', '')
//   if (!token) res.status(401).send({ error: 'Not authorized to access this resource' })
//   const data = jwt.verify(token, process.env.JWT_KEY)
//   console.log(data);
//   try {
//     console.log(data);
//     let id = data._id
//     const rl = await RepositoryRole.findById({ _id: data.role })
//     if (rl.name == "Admin") {
//       next()
//     }
//     else {
//       res.status(401).send({ message: 'Not authorized to access this resource' })
//     }
//     return id;

//   } catch (error) {
//     console.log(error);
//   }
// };



//ROLE
router.post("/role/create",authenToken, ControllerRole.createRole)
router.delete("/role/:id", authenToken, ControllerRole.deleteRole )
//USER
router.post("/signup", ControllerUser.Signup)
router.post("/login", ControllerUser.login)
router.put("/change-password", ControllerUser.changePassword)
router.get("/users", ControllerUser.getAllUser)
router.delete("/user/:id", authenToken, ControllerUser.deleteUser)
//PLAYLIST
router.post("/playlist", ControllerPlaylist.createPlaylist)
router.put("/playlist/:id", ControllerPlaylist.updatePlaylist)
router.delete("/playlist/:id", ControllerPlaylist.deletePlaylist)
router.get("/playlists", ControllerPlaylist.getAllPlaylist)
router.get("/playlist/:id", ControllerPlaylist.getPlaylistByIdUser)
// //GENRE
router.post("/genre", authenToken, ControllerGenre.createGenre )
  //Artist
router.post("/artist",authenToken,ControllerArtist.createArtist)

// //Album
router.post("/album/", authenToken, ControllerAlbum.createAlbum )
router.get("/albums", ControllerAlbum.getAllAlbum)
router.put("/album/:id",authenToken, ControllerAlbum.updateAlbum )
router.delete("/album/:id",authenToken, ControllerAlbum.deleteAlbum)
//Song
router.post("/song/",  authenToken, ControllerSong.createSong )
router.get("/songs", ControllerSong.getAllSong)
router.delete("/song/:id",)
router.put("/song/:id", authenToken, ControllerSong.updateSong )

module.exports = router;