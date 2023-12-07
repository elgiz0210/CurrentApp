import React, { useEffect, useState } from 'react'
import './hero.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [DataHero, setDataHero] = useState([])
    const navigate = useNavigate() 
    async function getHero() {
        const response = await axios.get('https://thronesapi.com/api/v2/Characters')
        
        setDataHero(response.data)
    }
    useEffect(() => {
      getHero()
    }, [])

    const details = (id) => {
        navigate(`/hero/${id}`)
    }

  return (
    <div>
        {DataHero.map((item,idx) => {
            return (
                <div
                key={idx} 
                className='item-list' 
                onClick={() => details(item.id)}
                >
                    {item.fullName}
                </div>
            )
        })}
    </div>
  )
}

export default Hero