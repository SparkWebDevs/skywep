var currentData;
$(document).ready(function() {
    getAllRequests();
    setDateInputs();
    
    $('#newToolingBtn').click(function(){
        showToolingModal();
        });
});

    function setTableProperties(){
         $('#data-grid').dataTable( {
        colReorder: true,
        "pageLength":10
        } );
         
        currentData = $('#data-grid').DataTable();
    }

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
            tableDataHTML += "<td>"+data[x].SbmDate.date.slice(0,10)+"</td>";
            tableDataHTML += "<td>"+data[x].Status+"</td>";
            tableDataHTML += "<td>"+data[x].Cust+"</td>";
            tableDataHTML += "<td>"+data[x].FstBldDate.date.slice(0,10)+"</td>";
            tableDataHTML += "<td>New Tooling</td>";
            tableDataHTML += "<td><span class='glyphicon glyphicon-pencil' onclick='editRequest("+data[x].IdReq+")'></span></td>";
            tableDataHTML += "</tr>";
        } 
       
        if(currentData){
            currentData.destroy();
             document.getElementById("grid-content").innerHTML = tableDataHTML;
             setTableProperties();
        }else{
            document.getElementById("grid-content").innerHTML = tableDataHTML;
             setTableProperties();
        }
    }


    function editRequest(id){
        
        $.ajax({
                type: "POST",
                url: 'masterInterface.php',
                data: {func: "AJAXgetToolingRequest", arg1:id},
                success: function(data) {
                     if(data === "no"){
                    	console.log("Error al recibir new tooling request");
                     } else {
                            console.log(data);
                            fillToolingEdit(data);
                        }
                }
            });
        
    }
    
    function fillToolingEdit(data){
        var JSONData = JSON.parse(data);
        console.log(JSONData);
            
            $("#toolingProgramManagerE > option").each(function(i) {
                if(JSONData.PgmMngr == this.value){
                    document.getElementById("toolingProgramManagerE").selectedIndex = i;
                }
            });
            

            document.getElementById("toolingProductNumberE").value = JSONData.ProdNum;
            
            $("#toolingCustomerE > option").each(function(i) {
                if(JSONData.Cust == this.value){
                    document.getElementById("toolingCustomerE").selectedIndex = i;
                }
            });
            
            $("#toolingProductEngineerE > option").each(function(i) {
                if(JSONData.ProdEng == this.value){
                    document.getElementById("toolingProductEngineerE").selectedIndex = i;
                }
            });
            
            var packSizeValues = JSONData.PckSiz.split("X");
            

            document.getElementById("packageD1E").value = packSizeValues[0];
            document.getElementById("packageD2E").value = packSizeValues[1];
            document.getElementById("packageD3E").value = packSizeValues[2];
            
                flatpickr("#firstBuildDateE").clear();
            
                flatpickr("#firstBuildDateE", {
                    wrap: true,
                    clickOpens: false
                });
                
            document.getElementById("firstBuildDateInputE").value = JSONData.FstBldDate.date.slice(0,10);
            
            document.getElementById("toolingSingleCookieE").selectedIndex = JSONData.SngCkie+1;
            document.getElementById("toolingWirePaintShieldE").selectedIndex = JSONData.WrePntShd+1;
            document.getElementById("toolingConformalShieldE").selectedIndex = JSONData.ConShd+1;
            document.getElementById("toolingFiltersE").selectedIndex = JSONData.Fltrs+1;
            
            document.getElementById("toolingPackageAssemblyE").value = JSONData.PckAsmb;
            document.getElementById("toolingStripE").value = JSONData.Strip;
            
            showToolingModalEdit();
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
     clearNewToolingForm();
    }
    
    
        function showToolingModalEdit() {
    $(".new-tooling-modal-background-E").css({"visibility" : "visible"});
    $(".new-tooling-modal-background-E").animate({"top" : "0%"});
    }

    function closeToolingModalEdit(){
     $(".new-tooling-modal-background-E").animate({"top" : "100%"});
     //$(".sign-up-background").css({"visibility" : "hidden"});
     clearNewToolingFormEdit();
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
                            getAllRequests();
                        }
                }
            });
        }
    }
    
    function updateNewToolingRequest(){
            if(!validateToolingUpdateForm()){
                //DO STUFF
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
    
    function validateToolingUpdateForm(){
          var error = false;
        
        //inputs validation
         if ($("#toolingProgramManagerE").val()  == -1){
      			$("#toolingProgramManagerE").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingProgramManagerE").css({"border": "1px solid #A6A6A6"});
  				}
        
        if ($("#toolingProductNumberE").val()  == ""){
      			$("#toolingProductNumberE").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingProductNumberE").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#toolingCustomerE").val()  == -1){
      			$("#toolingCustomerE").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingCustomerE").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#toolingProductEngineerE").val()  == -1){
      			$("#toolingProductEngineerE").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingProductEngineerE").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#packageD1E").val()  == ""){
      			$("#packageD1E").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#packageD1E").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#packageD2E").val()  == ""){
      			$("#packageD2E").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#packageD2E").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#packageD3E").val()  == ""){
      			$("#packageD3E").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#packageD3E").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#firstBuildDateE input").val()  == ""){
      			$("#firstBuildDateE input").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#firstBuildDateE input").css({"border": "1px solid #A6A6A6"});
  				}
                
        //OPTIONS VALIDATIOn
        
        if ($("#toolingSingleCookieE").val()  == -1){
      			$("#toolingSingleCookieE").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingSingleCookieE").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#toolingWirePaintShieldE").val()  == -1){
      			$("#toolingWirePaintShieldE").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingWirePaintShieldE").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#toolingConformalShieldE").val()  == -1){
      			$("#toolingConformalShieldE").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingConformalShieldE").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#toolingFiltersE").val()  == -1){
      			$("#toolingFiltersE").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingFiltersE").css({"border": "1px solid #A6A6A6"});
  				}
                
        //DRAWINGS VALIDATION
        
        if ($("#toolingPackageAssemblyE").val()  == ""){
      			$("#toolingPackageAssemblyE").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingPackageAssemblyE").css({"border": "1px solid #A6A6A6"});
  				}
                
        if ($("#toolingStripE").val()  == ""){
      			$("#toolingStripE").css({"border": "2px solid #CD0612"});
      			error = true;
  			}else{
                    $("#toolingStripE").css({"border": "1px solid #A6A6A6"});
  				}
                
                
        return error;
    }
    
    function clearNewToolingForm(){
            document.getElementById("toolingProgramManager").selectedIndex = 0;
            document.getElementById("toolingProductNumber").value = "";
            document.getElementById("toolingCustomer").selectedIndex = 0;
            document.getElementById("toolingProductEngineer").selectedIndex = 0;
            document.getElementById("packageD1").value = "";
            document.getElementById("packageD2").value = "";
            document.getElementById("packageD3").value = "";
            flatpickr("#firstBuildDate").clear();
                flatpickr("#firstBuildDate", {
                    wrap: true,
                    clickOpens: false
                });
            document.getElementById("toolingSingleCookie").selectedIndex = 0;
            document.getElementById("toolingWirePaintShield").selectedIndex = 0;
            document.getElementById("toolingConformalShield").selectedIndex = 0;
            document.getElementById("toolingFilters").selectedIndex = 0;
            document.getElementById("toolingPackageAssembly").value = "";
            document.getElementById("toolingStrip").value = "";
    
    }
    

    function clearNewToolingFormEdit(){
            document.getElementById("toolingProgramManagerE").selectedIndex = 0;
            document.getElementById("toolingProductNumberE").value = "";
            document.getElementById("toolingCustomerE").selectedIndex = 0;
            document.getElementById("toolingProductEngineerE").selectedIndex = 0;
            document.getElementById("packageD1E").value = "";
            document.getElementById("packageD2E").value = "";
            document.getElementById("packageD3E").value = "";
            flatpickr("#firstBuildDateE").clear();
                flatpickr("#firstBuildDateE", {
                    wrap: true,
                    clickOpens: false
                });
            document.getElementById("toolingSingleCookieE").selectedIndex = 0;
            document.getElementById("toolingWirePaintShieldE").selectedIndex = 0;
            document.getElementById("toolingConformalShieldE").selectedIndex = 0;
            document.getElementById("toolingFiltersE").selectedIndex = 0;
            document.getElementById("toolingPackageAssemblyE").value = "";
            document.getElementById("toolingStripE").value = "";
    
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