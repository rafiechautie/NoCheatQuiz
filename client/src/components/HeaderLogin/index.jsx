import PropTypes from 'prop-types'
import authenticationLogo from '../../../public/authentication.jpg'
import { Link } from "react-router-dom"

const HeaderLogin = ({ heading, paragraph, linkName, linkUrl='#' }) => {
    return(
        <div className='mb-10'>
            <div className='flex justify-center'>
                <img alt="" className='h-25 w-25' src={authenticationLogo}/>
            </div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                {heading}
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
                {paragraph}{' '}
                <Link to={linkUrl} className='font-medium text-purple-600 hover:text-purple-500'>
                {linkName}
            </Link>
            </p>
            
        </div>
    )
}

HeaderLogin.propTypes = {
    heading: PropTypes.string,
    paragraph: PropTypes.string,
    linkName: PropTypes.string,
    linkUrl: PropTypes.string
}

export default HeaderLogin