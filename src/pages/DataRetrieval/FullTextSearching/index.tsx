import axios from '@/utils/http';
import React, { useEffect, useState } from 'react';


const FullTextSearching = () => {

    useEffect(()=>{
        axios.get("/project").then(res => {
            console.log(res);
          }).catch(error => {
            console.log(error);
          })
    },[])
    
    return (
        <div>
            <h1>Full Text Searching</h1>
            <p>Full text search is a feature that allows you to search for specific words or phrases within a document. It is often used in document management systems and information retrieval systems.</p>
            <p>To perform a full text search, you simply enter the words or phrases you want to search for, and the system will return all the documents that contain those words or phrases.</p>    
        </div>
    )       
}

export default FullTextSearching