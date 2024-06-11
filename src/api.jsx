import { useState , useEffect } from "react";

const URL = "https://graph.microsoft.com/v1.0/sites/bd4a7481-2193-4fda-be6b-75f2998d4e89/lists/3a56612a-bbe8-4a46-9c83-59668e4f48da/items?$expand=fields";


function api() {

    useEffect(() => {
        const fetchdata = async () =>{
            const apiresult = await fetch (URL)
            apiresult.json().then(json => {
                console.log(json);
            })
        }
        fetchdata();
    },[])
    
}




