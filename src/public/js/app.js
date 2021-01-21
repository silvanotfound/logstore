
function validateFields(id) {

    if ($('#LogId').val().length != 0 && $('#LogText').val().length != 0) {
        $('#new-log-modal').modal('toggle')
    }else{
        if (!$('#LogId').val().length != 0) {
            $("#messagefieldOccurrences").text('*').fadeIn();
        }else if(!$('#LogText').val().length != 0){
            $("#messagefieldContent").text('*').fadeIn();
        }
    }
} 

function removeRowTable() {
    $('#table-log').on("click", "#deleteLogButton", function(params) {        

        let dataTable = {
            id: $(this).closest("tr").find('.idRow').text(),
            content: $(this).closest("tr").find('.contentRow').text(),
            occurrences: $(this).closest("tr").find('.occurrenceRow').text()
        }

        let data = JSON.stringify(dataTable);
    
        console.log(data);
        
        $.ajax({
            url: 'http://localhost:8080/logstore-0.0.1-SNAPSHOT/log',
            type: 'DELETE',            
            data: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
           
            success: function(result) {
                console.log(result);
            },
            error: function(result){
                console.log(result);
            }
        });        
        reloadBody();        
    });    
}

function clearinput() {
    $('#new-log').on("click", function () {
        $('#LogId').val('');
        $('#LogText').val('');
    })
}

function reloadBody(){
    setTimeout(function(){ 
        location.reload(); 
    },2000);  
}

$('#buttomSubmit').on('click', function(){
    validateFields();
});

$('#LogId').keypress(function(event){
    if(event.keyCode == 13){
        validateFields();
    }
});

$('#LogText').keypress(function(event){
    if(event.keyCode == 13){
        validateFields();
    }
});

$(document).ready(function(){
    $("#search").on("keyup", function() {
      let value = $(this).val().toLowerCase();
      $("#table-log tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
});

$('#new-log-modal').on('hidden.bs.modal', function () {
    reloadBody();      
});