const playlist = require('../Models/playlist')
async function createPlaylist(params) {
  try {
    const pl = await new playlist(params)
    await pl.save()
    const list = pl;
    const result = await playlist.find({ _id: list._id })
      .populate({
        path: 'user',
        select: { _id: 1, email: 1 },
      })
      .populate({
        path: 'song',
        select: { _id: 1, name: 1, url: 1, artist: 1, image: 1, album: 1 },
      }).populate({
        path: 'artist',
        select: { _id: 1, name: 1, image: 1 },
      })
    return result
  } catch (error) {
    console.log(error)
  }
}

async function updatePlaylist(id, params) {
  try {
    const models = await playlist.findByIdAndUpdate(id, params, { new: true })

    return models
  } catch (error) {
    console.log(error);
  }
}
async function deletePlaylist(_id) {
  try {
    console.log("id can xoa");
    console.log(_id);
    const removed = await playlist.findByIdAndDelete(_id)
    return removed;
  } catch (error) {
    console.log(error);
  }
}
async function getAllPlaylist() {
  try {
    const list = await playlist.find({})
      .populate({
        path: 'user',
        select: { _id: 1, email: 1 }
      })
      .populate({
        path: 'song',
        select: { _id: 1, name: 1, url: 1, artist: 1, image: 1, album: 1 },
      }).populate({
        path: 'artist',
        select: { _id: 1, name: 1, image: 1 },
      })
    return list
  } catch (error) {
    console.log(error)
  }
}
async function getPlaylistByUser(id) {
  try {
    const list = await playlist.find({ user: id })
      .populate({
        path: 'user',
        select: { _id: 1, email: 1 },
      })
      .populate({
        path: 'song',
        select: { _id: 1, name: 1, url: 1, artist: 1, image: 1, album: 1 },
      }).populate({
        path: 'artist',
        select: { _id: 1, name: 1, image: 1 },
      })
    return list
  } catch (error) {
    console.log(error)
  }
}
async function getPlaylistById(id) {
  try {
    const list = await playlist.findById({ _id: id })
      .populate({
        path: 'user',
        select: { _id: 1, email: 1 },
      })
      .populate({
        path: 'song',
        select: { _id: 1, name: 1, url: 1, artist: 1, image: 1, album: 1 },
      }).populate({
        path: 'artist',
        select: { _id: 1, name: 1, image: 1 },
      })
    return list
  } catch (error) {
    console.log(error)
  }
}
async function addSongToPlaylist(id, params) {

  try {
    const added = playlist.findByIdAndUpdate(
      { _id: id },
      {
        $addToSet: { song: params.song }
      }
    );

    return added;
  } catch (error) {
    console.log(error);
  }
}
async function removeSongFromPlaylist(id, params) {

  try {
    const removed = playlist.findByIdAndUpdate(
      { _id: id },
      { $pullAll: { song: [params.song] } }
    );
    return removed;
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
  getAllPlaylist,
  getPlaylistByUser,
  getPlaylistById,
  addSongToPlaylist,
  removeSongFromPlaylist
}