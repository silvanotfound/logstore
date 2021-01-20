const AXIOS = require('axios');

module.exports = {
    getLog: async function(){
        return await AXIOS.get('http://localhost:8080/logstore-0.0.1-SNAPSHOT/log')        
    },
    postLog: async function(data){
        return await AXIOS.post('http://localhost:8080/logstore-0.0.1-SNAPSHOT/log', {
            occurrences:data.occurrences,
            content:data.content,
          })
          .then(function (response) {
            console.log("posted");
          }).catch(function(error){
            console.log(error);      
          })
    }
}