
import './Country.css'
const Country = ({country}) => {
    const {name, flags, region} = country
    return (
        <div className="country">
            <h3>country Name : {name?.common}</h3>
            
            <img src={flags?.png} alt="" />
            <p> Region: {region}  </p>
        </div>
    );
};

export default Country;