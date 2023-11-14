import React from "react";

const HomePage =() =>{
    return(
        <div>
             <h2>выберите страницу</h2>
             <a href="/weather"><input type="button" value='прогноз погоды'/></a>
             <a href="/current"><input type="button" value='валюта'/></a>
        </div>
    )
}
export default HomePage