import React from 'react'
import Jumbotron from '../shared/components/Jumbotron'
import SectionHeader from '../shared/components/SectionHeader'
import TopProducts from '../components/TopProducts'
const Dashboard = () => {
    return (
        <>
            <Jumbotron/>
            <SectionHeader title="Our Top Products" route="/products"/>
            <TopProducts />
        </>
    )
}

export default Dashboard
