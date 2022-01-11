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
  
  static async getMedia(str) {
    const res = await axios.get(`${URL}media/${str}`);
    return res.data;
  };
}

export default MediaApi;