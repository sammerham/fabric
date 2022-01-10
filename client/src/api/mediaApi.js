import axios from "axios";
const URL = 'http://localhost:3001/';
// const URL = 'https://mediabackend.herokuapp.com/';


/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 */

class MediaApi {

  // get list of media records from DB;
  static async getAllMedia() {
    const res = await axios.get(`${URL}media`);
    return res.data;
  };

  // get list of all media with matrix search keyword
  static async getAllMatrixMedia() {
    const res = await axios.get(`${URL}media/matrix`);
    return res.data;
  };

  // get list of all media with matrixrevolutions search keyword
  static async getAllMatrixrevolutionsMedia() {
    const res = await axios.get(`${URL}media/matrixrevolutions`);
    return res.data;
  };

  // get list of all media with matrixreloaded search keyword
  static async getAllMatrixreloadedMedia() {
    const res = await axios.get(`${URL}media/matrixreloaded`);
    return res.data;
  };
}

export default MediaApi;