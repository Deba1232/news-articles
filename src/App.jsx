import { useState,useEffect } from 'react'
import axios from 'axios'

import NewsCard from './components/NewsCard/NewsCard';

import './App.css'

function getNews(){
  
  let promise = new Promise((resolve,reject)=>{
    axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed').then((res)=>{
    return resolve(res.data);
  });
  })

   return promise;

}

function App() {
  useEffect(()=>{
    getNews().then((data)=>{
    setData(data);
    setDataReceived(true);
  }); 
  },[]);

  let [data,setData] = useState(null);

  let [dataReceived,setDataReceived] = useState(false);

  let [darkMode,setDarkMode] = useState(true);

  return (
    <div className={
      darkMode?
      'app dark-mode'
      : 'app'
    }>
      <button onClick={()=>setDarkMode(prev=>!prev)}>
        {
          darkMode?'🌞':'🌚'
        }
        </button>

      {
        dataReceived?
        data.map((item)=>{
          return <NewsCard
            key = {item.id} 
            item = {item} />
        })
        : null
      }
    </div>
  );
}

export default App
