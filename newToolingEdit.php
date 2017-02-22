<div class="new-tooling-form">
    <div class="form-header">
        <label>Create Request for New Tooling</label> <span class="glyphicon glyphicon-remove" onclick="closeToolingModal();"></span>
    </div>
    
    <div class="new-tooling-form-cont">
    
    
    <div class="form-row">
        <span>Program Manager*</span>
        <select id="toolingProgramManagerE">
            <option value="-1">Select</option>
            <option value="Marc Andreessen">Marc Andreessen</option>
            <option value="Eiji Aonuma">Eiji Aonuma</option>
            <option value="Ben Jacobs">Ben Jacobs</option>
        </select>
    </div>
    
    <div class="form-row">
        <span>Product Number*</span>
        <input type="text" placeholder="Product Number" class="product-no-input" id="toolingProductNumberE">
        <button class="btn btn-primary lookup-product" id="lookup-product-no"><span class="glyphicon glyphicon-search btn-icon"></span></button>
    </div>
    
    <div class="form-row">
        <span>Customer*</span>
        <select id="toolingCustomerE">
            <option value="-1">Select</option>
            <option value="Samsung">Samsung</option>
            <option value="Google">Google</option>
            <option value="Nintendo">Nintendo</option>
        </select>
    </div>
    
    <div class="form-row">
        <span>Prod. Engineer*</span>
        <select id="toolingProductEngineerE">
            <option value="-1">Select</option>
            <option value="Susaina Singh">Susaina Singh</option>
            <option value="John Sanders">John Sanders</option>
            <option value="Gustav Foreman">Gustav Foreman</option>
        </select>
    </div>
    
    <div class="form-row">
        <span>Package Size*</span>
        <input type="number" class="package-size-input" id="packageD1E">   <span class="size-hint">X</span>  <input type="number" class="package-size-input" id="packageD2E">   <span class="size-hint">X</span>  <input type="number" class="package-size-input" id="packageD3E">
    </div>
    
    <div class="form-row">
        <span>1st Build Date*</span>
        <div class="date-picker-cont">
             <p id="firstBuildDateE">
                <input  id="firstBuildDateInput"  placeholder="Pick" data-input>
                <a class="input-button" data-toggle><span class="glyphicon glyphicon-calendar"></span></a>
            </p>
        </div>
        
    </div>
    <label>Options</label>
    <div class="new-tooling-options">
        <div class="tooling-option-row">
            <span>Single Cookie</span>
            <select id="toolingSingleCookieE">
                <option value="-1">N/A</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
        </div>
        
        <div class="tooling-option-row">
            <span>Wire-Paint Shield</span>
            <select id="toolingWirePaintShieldE"> 
                <option value="-1">N/A</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
        </div>
        
        <div class="tooling-option-row">
            <span>Conformal Shield</span>
            <select id="toolingConformalShieldE">
                <option value="-1">N/A</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
        </div>
        
        <div class="tooling-option-row">
            <span>Filters</span>
            <select id="toolingFiltersE">
                <option value="-1">N/A</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
        </div>
    </div>
    <label>Drawings</label>
    <div class="new-tooling-draws">
        <div class="tooling-draws-row">
            <span>Package Assembly</span>
            <input type="text" class="tooling-draw-input" id="toolingPackageAssemblyE">
            <button class="btn btn-primary"><span class="glyphicon glyphicon-search btn-iconr"></span></button>
        </div>
        
        <div class="tooling-draws-row">
            <span>Strip</span>
            <input type="text" class="tooling-draw-input" id="toolingStripE">
            <button class="btn btn-primary"><span class="glyphicon glyphicon-search btn-icon"></span></button>
        </div> 
    </div>
    
    <div class="form-footer">
        <button class="btn btn-danger" onclick="closeToolingModalEdit();">Discard  <span class="glyphicon glyphicon-trash"></span></button>
        <button class="btn btn-primary" onclick="updateToolingRequest();">Update  <span class="glyphicon glyphicon-share"></span></button>
    </div>
    
    </div>
</div>

<script>
    flatpickr("#firstBuildDateE", {
        wrap: true,
        clickOpens: false
    });
</script>