import React, { useState } from 'react'
import './Home.css'
import JSONDATA from './BoxesBegining.json';
import { Link } from 'react-router-dom';

function Home() {
    const [input, setinput] = useState('');
    return (
        <div>
            <header id='header-home'>
                <h1>Wellcome</h1>
            </header>
            <div className="searchbar">
                <input type="text" placeholder='Search...' onChange={e => { setinput(e.target.value) }} />
            </div>
            <div className="cards">
                {JSONDATA.filter(val => {
                    if (input === '') {
                        return val
                    } else if (val.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                    return <div className="Container">  <div key={val.id} id={val.name} className='link-to'><Link style={{ textDecoration: 'none', color: 'white' }} to={val.name.split(' ').join('-')} > <img src={val.icon}
                        width="100%" /> <h1>{val.name}</h1> </Link> </div> </div>
                })}
            </div>

        </div>
    )
}

export default Home
