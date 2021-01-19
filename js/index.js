const deleteButton = '<button id="deleteLogButton" class="btn btn-danger" onclick="removeRowTable()">Deletar</button>';

$('#new-log-modal').keypress(function(event){
    if(event.keyCode == 13){
        $('#new-log-modal').modal('toggle');
    }
 });

function addNewRow(id,content,occurrences) {
    return `<tr>
                <th scope="row">${id}</th>
                <td >${content}</td>
                <td >${occurrences}</td>
                <td>${deleteButton}</td>
            </tr>`
}

function removeRowTable() {
    $('#table-log').on("click", "#deleteLogButton", function(params) {
        $(this).closest("tr").remove();             
    });    
}

function clearinput() {
    $('#new-log').on("click", function () {
        $('#LogId').val('');
        $('#LogText').val('');
    })
}

function loadTable() {
    console.log("OK");
    $.get("http://localhost:8080/logstore-0.0.1-SNAPSHOT/log", function(res){
    

    for (let index = 0; index < 10; index++) {    
        console.log(res[index]);
        
        $('#table-log tbody').append(addNewRow(res[index].id, res[index].content, res[index].occurrences));    
    }

    });
    
}

loadTable();