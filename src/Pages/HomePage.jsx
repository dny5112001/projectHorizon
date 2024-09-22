import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Section from '../Components/Section/Section'
import Heroelement from '../Components/Heroelement/Heroelement'
import Customization from '../Components/Customization/Customization'
import Ourpartners from '../Components/Ourpartners/Ourpartners'
import Renderhomeitem from '../Components/renderhomeitem/Renderhomeitem'
import NewsLetter from '../Components/Newsletter/Newsletter'
import Footer from '../Components/Footer/Footer'

const HomePage = () => {
  return (
    <div className='homepage'>
        <Section />
        <Heroelement />
        <Customization />
        <Ourpartners />
        <Renderhomeitem />
        <NewsLetter />
    </div>
  )
}

export default HomePage