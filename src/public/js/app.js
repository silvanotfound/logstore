$('#new-log-modal').keypress(function(event){
    if(event.keyCode == 13){
        $('#new-log-modal').modal('toggle');
    }
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
