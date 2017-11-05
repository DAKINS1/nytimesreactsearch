import axios from "axios";


export default {
BASEURL: "https://api.nytimes.com/svc/search/v2/articlesearch.json?=",
APIKEY: "c5c1ecbe762e4f2cb1a91a745504db00",
DefaultSearchTerm: "art",
    defaultSearch: function() {
        let queryString = `${this.BASEURL}${this.DefaultSearchTerm}&page=2&sort=oldest&api-key=${this.APIKEY}`
        console.log(queryString);
        return axios.get(queryString)
    },
    searchArticles: function (search) {
        let queryString = `${this.BASEURL}${search}&page=2&sort=oldest&api-key=${this.APIKEY}`
        console.log(queryString);
        return axios.get(queryString)
    },
    searchDates: function (search) {
        let queryString = `${this.BASEURL}${search.term}&facet_field=day_of_week&begin_date=${search.startDate}0101&end_date=${search.endDate}1101&api-key=${this.APIKEY}`
        console.log(queryString);
        return axios.get(queryString)
  }
}