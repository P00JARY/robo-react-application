import React, {useEffect, useState} from 'react'
import { roborts } from './DB';

import CardList from '../Componnents/CardList.js';
import SearchBox from '../Componnents/SearchBox.js';
import Scroll from '../Componnents/Scroll.js';
import './App.css';


export default function App()  {


    const [robo, setrobo] = useState({
        roborts: [] ,
        searchField: ""
    })


    const onChangeSearch = (event) => {
        console.log(event.target.value);
        const filteredRobots = roborts.filter(robot => {
            return robot.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setrobo(prevState => ({ ...prevState, roborts: filteredRobots, searchField: event.target.value }))
        console.log(robo.roborts);
    }

    useEffect(() => {
        alert('Welcome to Robo-friends :) ')
        return () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(users => setrobo({roborts: users}))
        }
    }, []);


    return (
        <div className='tc'>
            <h1>Robo Friends</h1>
            <SearchBox setValue={onChangeSearch} />
            <Scroll>
                <CardList roborts={robo.roborts} />
            </Scroll>

        </div>
    )
}
