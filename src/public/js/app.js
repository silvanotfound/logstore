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

function removeRowTable() {
    $('#table-log').on("click", "#deleteLogButton", function(params) {
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
