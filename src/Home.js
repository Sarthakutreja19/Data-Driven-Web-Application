import React, { useState } from 'react';
import './App.css';
import Papa from 'papaparse';
import TableWithPagination from './Table';
 
function Home() {
    const [data,setData]=useState(null);
    function handleChange(e){
      Papa.parse(e.target.files[0],{
        header:true,
        skipEmptyLines:true,
        complete:function(result){
          setData(result.data);
        }
      })
    }
      
  return (!data?
  (<div className="App">
        <div className="input-div">
            <label id="upload-label" htmlFor="file-input">Upload</label>
            <input id="file-input" type="file" name="file" accept=".csv" onChange={handleChange}/>
        </div>
    </div>):<TableWithPagination data={data}/>
  )
}

export default Home;
