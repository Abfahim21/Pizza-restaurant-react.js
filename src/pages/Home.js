import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import BannerImage from '../assets/pizza.jpeg'

function Home() {
  return (
    <div>
        <div className="home" style={{backgroundImage : `url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>Pizza Bangladesh</h1>
                <p>Make Everyday Cheesy and Amazing with our Pizzas</p>
                <Link to='menu'>
                <button>Order Now</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home