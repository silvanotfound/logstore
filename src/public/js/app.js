function validateFields() {
    return $('#LogId').val().length != 0 && $('#LogText').val().length != 0 ? true:false;
} 

$('#LogId').keypress(function(event){
    if(event.keyCode == 13){
        if (validateFields()) {
            $('#new-log-modal').modal('toggle');    
        }else{
            $("#messagefieldOccurrences").text('*').fadeIn();
            event.preventDefault();
        }
    }
});

$('#LogText').keypress(function(event){
    if(event.keyCode == 13){
        if (validateFields()) {
            $('#new-log-modal').modal('toggle');                 
        }else{
            $("#messagefieldContent").text('*').fadeIn();         
            event.preventDefault();
        }
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

function removeRowTable() {
    $('#table-log').on("click", "#deleteLogButton", function(params) {
        
        console.log(params);
        $(this).closest("tr").remove();             
    });    
}

$('#new-log-modal').on('hidden.bs.modal', function () {
    setTimeout(function(){ 
        location.reload(); 
    },2000);    
    
});

function clearinput() {
    $('#new-log').on("click", function () {
        $('#LogId').val('');
        $('#LogText').val('');
    })
}
