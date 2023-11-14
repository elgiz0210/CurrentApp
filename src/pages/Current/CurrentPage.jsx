import React, { useEffect, useState } from "react";  
import axios from 'axios';
import './CurrentPage.css';

const CurrentPage =() =>{  

        const token = 'm7dXf1ScnrCLswLp29e12XDTSg29Cb61cpWOZCeq4161c3b1'
        const [data,setData] = useState([])
        const [isLoading,setIsLoading] = useState(false)

        const getCurrent = async() => {
            setIsLoading(true)
            try {
                const response = await axios.get('https://data.fx.kg/api/v1/current',{
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                  
                })
                  let filteredData = response.data
                  filteredData = filteredData.filter(item => item.id < 16)
                setData(filteredData)
            } catch (e) {
                console.log(e);
            }finally{
                setIsLoading(false)
            }
        }

        useEffect(() => {
            getCurrent()
        },[])

    return(  
        <div className="container">  
        <div className="search">
        
        <a href="/"><input type="button" value='на главную страницу'/></a>
              
             <h3>курс доллара</h3>
             <h3>курс доллара</h3>
             </div>
             {isLoading ?
             <div>loading...</div>
             :
             <div>
                {data.map((item,idx) => {
                    return (
                        <div key={idx}>
                            
                                <div className="current-wrap">
                                    
                                
                                    <div><h5>Название банков </h5>{item.title}</div>
                                    <div>доллары{item.rates[0].buy_usd}</div>
                                    <div>рубли{item.rates[0].buy_rub}</div>
                                    <div>евро{item.rates[0].buy_eur}</div>
                                    
                                </div>
                            
                        </div>
                    )
                })}
             </div>
            }
        </div>  
    )  
}  
export default CurrentPage