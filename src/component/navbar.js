import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <div className="bg-slate-900  text-white leading-[6rem] text-3xl text-center    ">
            <i className="mr-5">
                <FontAwesomeIcon icon={faSackDollar} />
            </i>
            Spotify
        </div>
    )
}

export default Navbar
