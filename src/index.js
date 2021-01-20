const { log } = require('console');
const EXPRESS = require('express');
const interface = require('./scripts/interface');
const {$,jQuery} = require('jQuery');

const APP = EXPRESS();
const PORT = 3000;

APP.set('view engine', 'ejs');
APP.use(EXPRESS.static('public'));

APP.get("/", function(req,res){      

    let responseLog = interface.getLog();
    let rowtable = [];
    responseLog.then(function (response) {        
                
        for (let index = 0; index < 10; index++) {            
            rowtable.push({id:response.data[index].id, content:response.data[index].content, occurrences:response.data[index].occurrences});            
        }

        console.log(rowtable);
        res.render("index", {rowtable:rowtable});
      })
      .catch(function (error) {
        console.log(error);
      });
});

APP.listen(PORT,function(erro){
    console.log(`Servidor rodando na porta ${PORT}`);
})