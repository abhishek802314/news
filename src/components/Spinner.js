import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Spinner1 = () => {

    return (
        <div className='text-center' >
            <Spinner animation="border" role="status">
                <span className="visually-hidden my-3">Loading...</span>
            </Spinner>
        </div>
    )

}
export default Spinner1