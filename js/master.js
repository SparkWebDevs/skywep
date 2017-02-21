var currentData;
$(document).ready(function() {
    getAllRequests();
        
    $('#data-grid').dataTable( {
        colReorder: true,
        "pageLength":30
    } );
    
    currentData = $('#data-grid').DataTable();
    setDateInputs();
    
    $('#newToolingBtn').click(function(){
        showToolingModal();
        });
});

    function getAllRequests(){
                $.ajax({
                type: "POST",
                url: 'masterInterface.php',
                data: {func: "AJAXgetNewToolingRequests"},
                success: function(data) {
                     if(data === "no"){
                    	console.log("Error al recibir new tooling request");
                     } else {
                            console.log(data);
                            fillDataGrid(data);
                        }
                }
            });
    }

    function fillDataGrid(Data){
        var data = JSON.parse(Data);
        console.log(data);
        var tableDataHTML = "";
        for(var x=0;x<data.length;x++){
            tableDataHTML += "<tr>";
            tableDataHTML += "<td>"+data[x].IdReq+"</td>";
            tableDataHTML += "<td>"+data[x].PgmMngr+"</td>";
            tableDataHTML += "<td>"+data[x].PckSiz+"</td>";
            tableDataHTML += "<td>"+data[x].ProdNum+"</td>";
            tableDataHTML += "<td>"+data[x].SbmDate+"</td>";
            tableDataHTML += "<td>"+data[x].Status+"</td>";
            tableDataHTML += "<td>"+data[x].Cust+"</td>";
            tableDataHTML += "<td>"+data[x].FstBldDate+"</td>";
            tableDataHTML += "<td>New Tooling</td>";
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
    
    function lookUp(){
        //Create a full query of the data per columns
    }
    
    function removeFilters(){
        currentData.search('').columns('').search('').draw();
        document.getElementById("inbox-f").selectedIndex = 0;
        document.getElementById("status-f").selectedIndex = 0;
        document.getElementById("pending-f").selectedIndex = 0;
        document.getElementById("request-type-f").selectedIndex = 0;
        document.getElementById("customer-f").selectedIndex = 0;
        
        document.getElementById("request-f").value = "";
        document.getElementById("requester-f").value = "";
        
        flatpickr("#submittedAfter").clear();
        flatpickr("#submittedBefore").clear();
        flatpickr("#buildAfter").clear();
        flatpickr("#buildBefore").clear();
        
        setDateInputs();
    }
    
    function setDateInputs(){
            flatpickr("#submittedAfter", {
        wrap: true,
        clickOpens: false
    });
    
    flatpickr("#submittedBefore", {
        wrap: true,
        clickOpens: false
    });
    
    flatpickr("#buildAfter", {
        wrap: true,
        clickOpens: false
    });
    
    flatpickr("#buildBefore", {
        wrap: true,
        clickOpens: false
    });
    }
    
    
    //MODALS CONTROLING
    function showToolingModal() {
    $(".new-tooling-modal-background").css({"visibility" : "visible"});
    $(".new-tooling-modal-background").animate({"top" : "0%"});
    }

    function closeToolingModal(){
     $(".new-tooling-modal-background").animate({"top" : "100%"});
     //$(".sign-up-background").css({"visibility" : "hidden"}); 
    }
    
    
    function submitNewToolingRequest(){
        if(!validateNewToolingForm()){
            //insert the new record on the  new tooling requests table
            //get all the values
            var toolingRequest = {};
            toolingRequest["PgmMngr"] = document.getElementById("toolingProgramManager").value;
            toolingRequest["ProdNum"] = document.getElementById("toolingProductNumber").value;
            toolingRequest["Cust"] = document.getElementById("toolingCustomer").value;
            toolingRequest["ProdEng"] = document.getElementById("toolingProductEngineer").value;
            toolingRequest["PckSiz"] = document.getElementById("packageD1").value + "X" + document.getElementById("packageD2").value +"X"+ document.getElementById("packageD3").value;
            toolingRequest["FstBldDate"] = document.getElementById("firstBuildDateInput").value;
            toolingRequest["SbmDate"] = getCurrentDate();
            toolingRequest["SngCkie"] = document.getElementById("toolingSingleCookie").value;
            toolingRequest["WrePntShd"] = document.getElementById("toolingWirePaintShield").value;
            toolingRequest["ConShd"] = document.getElementById("toolingConformalShield").value;
            toolingRequest["Fltrs"] = document.getElementById("toolingFilters").value;
            toolingRequest["PckAsmb"] = document.getElementById("toolingPackageAssembly").value;
            toolingRequest["Strip"] = document.getElementById("toolingStrip").value;
            
            var JSONtoolingRequest = JSON.stringify(toolingRequest);
            console.log(JSONtoolingRequest);
                $.ajax({
                type: "POST",
                url: 'masterInterface.php',
                data: {func: "AJAXsubmitToolingRequest", arg1:JSONtoolingRequest},
                success: function(data) {
                     if(data === "no"){
                    	console.log("Error al insertar new tooling request");
                     } else {
                            console.log(data);
                            closeToolingModal();
                        }
                }
            });
        }
    }
    
    //New Tooling Processing
    function validateNewToolingForm(){
        
        var error = false;
        
        //inputs validation
         if ($("#toolingProgramManager").val()  == -1){
      			$("#toolingProgramManager").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingProgramManager").css({"border": "1px solid #A6A6A6"});
  				}
        
        if ($("#toolingProductNumber").val()  == ""){
      			$("#toolingProductNumber").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingProductNumber").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#toolingCustomer").val()  == -1){
      			$("#toolingCustomer").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingCustomer").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#toolingProductEngineer").val()  == -1){
      			$("#toolingProductEngineer").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingProductEngineer").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#packageD1").val()  == ""){
      			$("#packageD1").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#packageD1").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#packageD2").val()  == ""){
      			$("#packageD2").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#packageD2").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#packageD3").val()  == ""){
      			$("#packageD3").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#packageD3").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#firstBuildDate input").val()  == ""){
      			$("#firstBuildDate input").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#firstBuildDate input").css({"border": "1px solid #A6A6A6"});
  				}
                
        //OPTIONS VALIDATIOn
        
        if ($("#toolingSingleCookie").val()  == -1){
      			$("#toolingSingleCookie").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingSingleCookie").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#toolingWirePaintShield").val()  == -1){
      			$("#toolingWirePaintShield").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingWirePaintShield").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#toolingConformalShield").val()  == -1){
      			$("#toolingConformalShield").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingConformalShield").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#toolingFilters").val()  == -1){
      			$("#toolingFilters").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingFilters").css({"border": "1px solid #A6A6A6"});
  				}
                
        //DRAWINGS VALIDATION
        
        if ($("#toolingPackageAssembly").val()  == ""){
      			$("#toolingPackageAssembly").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingPackageAssembly").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#toolingStrip").val()  == ""){
      			$("#toolingStrip").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingStrip").css({"border": "1px solid #A6A6A6"});
  				}
                
                
        return error;
    }
    
    
    function getCurrentDate(){
        
        var today = new Date();
        var dd; 
        var mm; 
        var yyyy;        
        dd = today.getDate();
        mm = today.getMonth()+1; //January is 0!
        yyyy = today.getFullYear();

        
            if(dd<10) {
            dd='0'+dd;
            } 

            if(mm<10) {
            mm='0'+mm;
            } 
            today = yyyy+'-'+mm+'-'+dd;
            return today;

}