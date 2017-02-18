$(document).ready(function() {
    fillDataGrid();
        
    $('#data-grid').DataTable( {
        colReorder: true,
        "pageLength":30
    } );
    

});



    function fillDataGrid(){
        var tableDataHTML = "";
        for(var x=0;x<100;x++){
            tableDataHTML += "<tr>";
            tableDataHTML += "<td>"+getRndNumber(20000,30000)+"</td>";
            tableDataHTML += "<td>Javier Martinez</td>";
            tableDataHTML += "<td>3.0 X 4.0 X 1.9</td>";
            tableDataHTML += "<td>SKY-"+getRndNumber(6000,6500)+"</td>";
            tableDataHTML += "<td>10/20/2017</td>";
            tableDataHTML += "<td>Pending Approval</td>";
            tableDataHTML += "<td>SparkTechs</td>";
            tableDataHTML += "<td>10/20/2017</td>";
            tableDataHTML += "<td>Shipping Container</td>";
            tableDataHTML += "</tr>";
        } 
        document.getElementById("grid-content").innerHTML = tableDataHTML;
    }


    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    function getRndNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }