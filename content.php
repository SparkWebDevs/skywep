<link rel="stylesheet" href="https://cdn.datatables.net/colreorder/1.3.2/css/colReorder.dataTables.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.13/js/dataTables.bootstrap.min.js"></script>
<script type="text/javascript" language="javascript" src="https://cdn.datatables.net/colreorder/1.3.2/js/dataTables.colReorder.min.js"></script>



<h3 class="section-title">Filters</h3>
<?php
include 'filtersToolbar.php';
?>

<div class="datagrid-options-cont">
<!--    <div class="grid-search">
        <input type="text"><button class="search-btn btn"><span class="glyphicon glyphicon-search"></span></button>
    </div>-->
        <div class="new-req-cont">
        <span>Create New Request For:</span>
        <button class="request-btn btn">Tooling</button>
        <button class="request-btn btn">Shipping Container</button>
        <button class="request-btn btn">Package Record</button>
    </div>
    
    <div class="grid-view">
            <input type="radio" name="view"> <span>General</span>
            <input type="radio" name="view"> <span>Engineering</span>
            <input type="radio" name="view"> <span>General</span>
            <input type="checkbox"> <span>Show Pending With</span>
            <input type="checkbox"> <span>Other</span> 
    </div>
    
    <table id="data-grid" class="table table-striped table-bordered table-grid" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>Request #</th>
                <th>Originator</th>
                <th>Package Size</th>
                <th>Product</th>
                <th>Submited</th>
                <th>Status</th>
                <th>Customer</th>
                <th>1st Build</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody id="grid-content">
        </tbody>
    </table>
    

</div>
<?php
//include 'dataGrid/dataGrid.php';
?>


