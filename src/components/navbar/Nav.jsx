import React from 'react'
import Search  from './searchbar/Search'
import Sidenav from './sidenav/Sidenav'
import './nav.css'

const Nav = () => {
  return (
    <div className='nav'>
        <div className='container'>
            <div className='nav_brand'>
                <h2>TaskShare</h2>
            </div>
            <Search/>
            <Sidenav/>
        </div>
    </div>
  )
}

export default Nav