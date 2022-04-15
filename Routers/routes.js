const express = require("express");
const router = express.Router()
const Student = require("../Models/models");
const ClassOfIt = require("../Models/class");
const ControllerStudents = require('../Controllers/students')
const ControllerAccounts = require('../Controllers/account')
const ControllerClass = require('../Controllers/class')
const ControllerRole = require('../Controllers/role')
const ControllerUser = require('../Controllers/user')
const ControllerPlaylist = require('../Controllers/playlist')
const ControllerGenre = require('../Controllers/genre')
const ControllerArtist = require('../Controllers/artist');
const ControllerAlbum= require('../Controllers/album')
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
//STUDENTS
router.post("/add-student", ControllerStudents.createStudent);
router.put("/update-student/:id", ControllerStudents.updateStudent);

//CLASS
router.post("/add-class", ControllerClass.createClass);
router.get("/all-class", async (request, response) => {

  const Aclass = await ClassOfIt.find({})
    .populate({
      path: 'student',
      select: { name: 1, faculty: 1, _id: 1 },
    });
  try {
    response.send(Aclass);
  } catch (error) {
    response.status(500).send(error);
  }
});




router.get('/student-by-name/', async (request, response) => {
  const name_student = request.body.name;
  console.log(name_student);
  const users = await Student.find({ name: name_student });
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.delete('/delete-student/:id', async (request, response) => {
  // const id = request.body.id
  const users = await Student.findByIdAndDelete(request.params.id);
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});



module.exports = router;