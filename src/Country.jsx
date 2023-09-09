
import { useEffect, useState } from 'react';
import './Country.css'
const Country = ({country}) => {

    // destructuring the object of api

    const [visited, setVisited] = useState(false)

    const handleClick = () =>{
        setVisited(true)
    }

    const {name, flags, region, capital, population} = country
    return (
        <div className="country">
            <h3>country Name : {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p> Region: {region}  </p>
            <p>Capital City : {capital} </p>
            <p>Populaton of the country: {population} </p>
            <button onClick={handleClick} className="btn">visit</button>
            {visited && 'i have already visited'}

            {/*ternary operator  visited? 'i have already visited' : 'i want to go' */}
        </div>
    );
};

export default Country;