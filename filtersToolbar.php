<div class="filter-toolbar">
    <div class="filter-toolbar-cont">
        <div class="filters-cont">
            <div class="first-filters-row">
                <div class="filter-option-cont">
                    <label>My Inbox</label><br>
                        <select class="dropdown">
                            <option value="-1">Select</option>
                            <option value="1">Engineering</option>
                            <option value="2">All</option>
                        </select>
                </div>
                
                <div class="filter-option-cont">
                    <label>Request #</label><br>
                        <input type="text" placeholder="Number of Request"/>
                </div>
                
                 <div class="filter-option-cont">
                    <label>Status</label><br>
                        <select class="dropdown">
                            <option value="-1">Select</option>
                            <option value="1">Approved</option>
                            <option value="2">Waiting</option>
                            <option value="3">Rejected</option>
                        </select>
                </div>
                 
                 <div class="filter-option-cont">
                    <label>Pending With</label><br>
                        <select class="dropdown">
                            <option value="-1">Select</option>
                            <option value="1">Anabel Aleman</option>
                            <option value="2">Erick Bravo</option>
                            <option value="3">Hugo Gomez</option>
                        </select>
                </div>
                 
                 <div class="filter-option-cont">
                    <label>Request Type</label><br>
                        <select class="dropdown">
                            <option value="-1">Select</option>
                            <option value="1">Shipping Container</option>
                            <option value="2">Tooling</option>
                            <option value="3">Package Record</option>
                        </select>
                </div>
            </div>
            <br>
            <div class="second-filters-row">
                <div class="filter-option-cont">
                    <label>Requester</label><br>
                        <input type="text" placeholder="Requester Name"/>
                </div>
                
                 <div class="filter-option-cont">
                    <label>Customer</label><br>
                        <select class="dropdown">
                            <option value="-1">Select</option>
                            <option value="1">Nintendo</option>
                            <option value="2">Google</option>
                            <option value="3">Samsung</option>
                        </select>
                </div>
            </div>
            
                <div class="filter-controls">
                    <button class="filter-btn btn">Filter</button>
                    <button class="filter-btn btn">Reset</button>
                </div>
        </div>
        
        <div class="dates-cont">
            <div class="submited-cont">
                <label>Submited After</label>
                <p id="submittedAfter">
                    <input id="submittedAfterDate" placeholder="Pick" data-input>
                    <a class="input-button" data-toggle><span class="glyphicon glyphicon-calendar"></span></a>
                </p>
                <label>Submited Before</label>
                <p id="submittedBefore">
                    <input  id="submittedBeforeDate"  placeholder="Pick" data-input>
                    <a class="input-button" data-toggle><span class="glyphicon glyphicon-calendar"></span></a>
                </p>
            </div>
            
            <div class="build-date-cont">
                <label>1st Build After</label>
                 <p id="buildAfter">
                    <input  id="buildAfterDate"  placeholder="Pick" data-input>
                        <a class="input-button" data-toggle><span class="glyphicon glyphicon-calendar"></span></a>
                        <!--<a class="input-button" data-clear><span class="glyphicon glyphicon-remove"></span></a>-->
                </p>
                <label>1st Build Before</label>
                <p id="buildBefore">
                    <input  id="buildBeforeDate"  placeholder="Pick" data-input>
                    <a class="input-button" data-toggle><span class="glyphicon glyphicon-calendar"></span></a>
                </p>
            </div>
           
                 
        </div>
    </div>
    
    <script>
    
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
</script>
    

</div>