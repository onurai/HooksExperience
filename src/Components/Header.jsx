import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='row align-item-center'>
                <div className='col-lg-2 col-3 left'>
                    <Link to='/'>CODE.AZ</Link>
                </div>
                <div className='col-lg-10 col-9 right text-end'>
                    <Link to='/'>Home</Link>
                    <Link to='/add'>Add Student</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header