import React from 'react';

import { useFetchData } from "../hooks/useFetchData";


const NewsContent= ({data}) => {

  console.log(data);
  
	return(
	//Un ejemplo de como mostrar los datos
		<div>
{/*            
           {data.map((element) => (
         		 <p key={element.id}>{element.name}</p>
        	))} */}

       

        </div>
         	
	)
  

  }
  
  export default NewsContent

