import PropTypes from "prop-types"
import ReactCountryFlag from "react-country-flag"
import { getCountry } from 'iso-3166-1-alpha-2'

const Card = ({ children, materialId, name, secondaryName, country}) => {
  return (
    <div className='flex flex-col items-start gap-18 px-6 py-6 w-full bg-white rounded-2xl shadow-md' key={materialId}>
      <div className='flex flex-col w-full justify-between items-start gap-12'>
        <div className='flex flex-col item-start gap-1'>
          <div className='flex flex-row justify-center items-center gap-4'>
            <h1 className='font-serif text-3xl'>{name}</h1>
            {country && (
              <div className='flex flex-row justify-center items-center px-2 py-1 bg-gray-100 text-xs font-medium rounded-full gap-1'>
                <ReactCountryFlag countryCode={country} />
                {getCountry(country.toUpperCase())}
              </div>
            )}
          </div>
          <p className='italic text-gray-400'>{secondaryName}</p>
        </div>
        {children}
      </div>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  materialId: PropTypes.string.isRequired,
  name: PropTypes.string,
  secondaryName: PropTypes.string,
  country: PropTypes.string,
  cas: PropTypes.string,
  ec: PropTypes.string,
  fema: PropTypes.string,
  synonyms: PropTypes.arrayOf(PropTypes.string),
};

export default Card