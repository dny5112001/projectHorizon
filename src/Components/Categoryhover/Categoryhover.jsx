import React from 'react'
import sample1 from '../Assets/Glass Tile.jpg'
import './Category.css'

const Categoryhover = () => {
  return (
    <div className='hover'>
        <ul>
            <li>
                <img src={sample1} alt="" />
                <p>Tiles</p>
            </li>

            <li>
                <img src={sample1} alt="" />
                <p>Tiles</p>
            </li>

            <li>
                <img src={sample1} alt="" />
                <p>Tiles</p>
            </li>

            <li>
                <img src={sample1} alt="" />
                <p>Tiles</p>
            </li>
            <li>
                <img src={sample1} alt="" />
                <p>Tiles</p>
            </li>
            <li>
                <img src={sample1} alt="" />
                <p>Tiles</p>
            </li>
        </ul>
    </div>
  )
}

export default Categoryhover