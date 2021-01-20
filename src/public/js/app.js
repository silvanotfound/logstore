$('#new-log-modal').keypress(function(event){
    if(event.keyCode == 13){
        $('#new-log-modal').modal('toggle');
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

function clearinput() {
    $('#new-log').on("click", function () {
        $('#LogId').val('');
        $('#LogText').val('');
    })
}
