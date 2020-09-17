import axios from 'axios'

const instance = axios.create({
   baseURL:   "https://coronavirus-19-api.herokuapp.com/countries/"
 });

const apis ={
    getCountry:(country) => instance.get(country)
}

export default apis