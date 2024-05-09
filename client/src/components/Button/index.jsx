import PropTypes from 'prop-types';

const Button = ( {children, className, type = 'submit'}) => {
    return(
        <button type={type}  className={`${className} mt-4 w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string
}

export default Button