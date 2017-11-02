import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "api-key=c5c1ecbe762e4f2cb1a91a745504db00";

export default {
    getSearchArticles: function(query) {
        return axios.get(BASEURL + APIKEY + "&q=" + query);
    }
};