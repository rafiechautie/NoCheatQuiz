import PropTypes from 'prop-types'

const InputField = ({ register, name, type = 'text', placeholder, className}) => {

    console.log(className, "<<< ni adalah classname")

    return(
        <input 
            {...register(name)}
            type={type}
            placeholder={placeholder}
            className={`${className} mt-2 p-2 w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50`}
        />
    )
}

InputField.propTypes = {
    register: PropTypes.func.isRequired, // register is a function provided by react-hook-form
    name: PropTypes.string.isRequired, // name is a string and required for identifying the form element
    type: PropTypes.string, // type is optional, default to 'text' if not provided
    placeholder: PropTypes.string, // placeholder is optional
    className: PropTypes.string  // className is optional for styling purposes
}

export default InputField;