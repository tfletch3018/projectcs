import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=dd568445";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
