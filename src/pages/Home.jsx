import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import OurBrand from '../components/OurBrand'
import TopStation from '../components/TopStation'

const Home = () => {
    return (
        <div>
            <Header />
            <OurBrand />
            {/* <TopStation /> */}
            <TopStation />
            <Banner />
        </div>
    )
}

export default Home
