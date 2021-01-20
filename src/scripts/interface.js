const AXIOS = require('axios');

module.exports = {
    getLog: async function(){
        return await AXIOS.get('http://localhost:8080/logstore-0.0.1-SNAPSHOT/log')        
    }
}