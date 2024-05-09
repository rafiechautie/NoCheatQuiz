import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

const Form = ( { defaultValues, children, onSubmit, className }) => {
    const methods = useForm({ defaultValues });
    const { handleSubmit } = methods; 

    return(
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
        {React.Children.map(children, child => {
            return child.props.name 
            ? React.createElement(child.type, {
                ...child.props, // Menyebar props yang ada
                register: methods.register, // Menambahkan register dari methods
                key: child.props.name // Menetapkan key
            })
            : child;
        })}
    </form>
    )
}

Form.propTypes = {
    defaultValues: PropTypes.object, // Object yang berisi nilai default untuk form fields
    children: PropTypes.node.isRequired, // React node, dapat berisi satu atau lebih children
    onSubmit: PropTypes.func.isRequired, // Fungsi yang akan dipanggil ketika form disubmit
    className: PropTypes.string  // String untuk class CSS yang akan diterapkan pada form
}

export default Form;