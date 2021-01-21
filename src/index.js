const { log } = require('console');
const EXPRESS = require('express');
const interface = require('./scripts/interface');
const BODY_PARSER = require('body-parser');
const APP = EXPRESS();
const PORT = 3000;

APP.set('view engine', 'ejs');
APP.use(EXPRESS.static('public'));
APP.use(BODY_PARSER.urlencoded({extended:false}));
APP.use(BODY_PARSER.json());

APP.get("/", function(req,res){      

    let responseLog = interface.getLog();
    let rowtable = [];
    let ordernadLis;
    let totalPage;
    let page;
    responseLog.then(function (response) {        
                
        for (let index = 0; index < response.data.length; index++) {            
            rowtable.push({id:response.data[index].id, content:response.data[index].content, occurrences:response.data[index].occurrences});            
        }

        ordernadLis = rowtable.sort(function(rowOccurrence1, rowOccurrence2){
            return rowOccurrence2.occurrences - rowOccurrence1.occurrences;
        })
        
        totalPage = (Math.round(response.data.length / 1000));
        
        res.render("index", {
            rowtable:ordernadLis,
            totalPage:totalPage
        });
      })
      .catch(function (error) {
        console.log(error);
      });
});


APP.post("/savelog", (req, res) =>{
   let formData = {
    occurrences:req.body.occurrences,
    content:req.body.log
   }

   if (req.body.occurrences.length != 0 && req.body.log.length != 0) {    
        interface.postLog(formData);    
    }

});

APP.listen(PORT,function(erro){
    console.log(`Servidor rodando na porta ${PORT}`);
})