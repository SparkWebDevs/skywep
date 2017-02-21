<?php
		
		//DEVELOPMENT SERVER
		$db['serverName'] = 'skywepserver.database.windows.net';
		$db['user']		  = 'skywepadmin';
		$db['pwd']		  = 'Engproj$park';
		$db['name']		  = 'skywepdb';

        try {
                $connectionInfo = array('UID'=>$db['user'], 'PWD'=>$db['pwd'], 'Database'=>$db['name']);
                $conn = sqlsrv_connect( $db['serverName'], $connectionInfo);
        }catch (Exception $e){
            echo "Connection could not be established.<br/>";
            die(var_dump($e));
        }
         
        
        function submitToolingRequest($newToolingRequest){
            global $conn;
            $newToolingInfo = json_decode($newToolingRequest);
            
            try{
                $insertNewToolingRequestQuery = "INSERT INTO NewToolingRequests VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);";
        		$params = array($newToolingInfo->PgmMngr, $newToolingInfo->ProdNum, $newToolingInfo->Cust, $newToolingInfo->ProdEng,
                                $newToolingInfo->PckSiz,$newToolingInfo->FstBldDate,$newToolingInfo->SbmDate,$newToolingInfo->SngCkie,$newToolingInfo->WrePntShd
                                ,$newToolingInfo->ConShd,$newToolingInfo->Fltrs,$newToolingInfo->PckAsmb,$newToolingInfo->Strip);
        		$dataset = sqlsrv_query($conn, $insertNewToolingRequestQuery, $params);
		
        		if(sqlsrv_rows_affected($dataset) == FALSE){
        			echo "no";
    			}else{
        			echo sqlsrv_rows_affected($dataset);
    			}

                }catch (Exception $err) {
                    echo "no";  
                }
            
        }
        
?>