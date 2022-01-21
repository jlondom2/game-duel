import React, {useState} from 'react';

import useApi from '../hooks/useApi'


const GetNews = () => {

  
 const { loading, data } = useApi('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=33670a8619134e64bae86e09a7d9d57c')
 



console.log(data);

  if(loading) return <h1>Loading</h1>

  return <div>
    <h1 className='text-center'>Data fetched successfully.</h1>

    {/* {data?.map(value=>(<div>{value.title}</div>))} */}

   
   
  </div>

  }
  
  export default GetNews