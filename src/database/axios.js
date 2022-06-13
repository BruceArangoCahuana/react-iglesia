import axios from "axios";



const Axios = axios.create({
   baseUrl : "https://apipruebacaleb.herokuapp.com"
})

export default Axios