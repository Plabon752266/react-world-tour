
import './Country.css'
const Country = ({country}) => {

    // destructuring the object of api

    const {name, flags, region, capital, population} = country
    return (
        <div className="country">
            <h3>country Name : {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p> Region: {region}  </p>
            <p>Capital City : {capital} </p>
            <p>Populaton of the country: {population} </p>
        </div>
    );
};

export default Country;