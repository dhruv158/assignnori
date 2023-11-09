import React, { useCallback, useState } from 'react';
import axios from "axios";

import Ga from './Gas';

import St from './St';

const Home = () => {
  const [input, setInput] = useState('flower');
  const [results, setResults] = useState('');
  let po;
  const apiKey = process.env.REACT_APP_orr;
  
  const onSearch = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&per_page=24&format=json&nojsoncallback=1`).then(responseData => {
      
    setResults(responseData.data.photos.photo)}
    ).catch(err => {
      // Error Handling here
      console.log('Error fetching and parsing data', err)}
      )
		  
    
    };

    

  const onInputChange = ev => {
    setInput(ev.target.value);
    
    
 };
 const s=()=>{
  if (results && results.length > 0){
    return (<div>{results.map(pic=><St url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} title={pic.title} />)}</div>);
      
    }}
 
 
  const renderResults = () => {
    if (results&& results.length === 0) {
      return <div>No results</div>;
    }
    
    
   
    if (results && results.length > 0){
    return (<div>{results.map(pic=><Ga url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} title={pic.title} />)}</div>);
      
    }}

   

console.log(results);
  return(
    <div>
      <input
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
     
        value={input}
      />
     
       
{onSearch()};
<ul>{s()}
  </ul>
     
        <button type="button" onClick={onSearch}>
          Search
        </button>
        
        <ul>
        {
            renderResults()
        }</ul>
      
      
    </div>
  );
};

export default Home;
