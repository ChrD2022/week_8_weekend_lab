import React from 'react'
import VehicleItem from './VehicleItem'

const VehicleList = ({vehicles}) => {

const vehicleItems = vehicles.map((vehicle, index) => {
    return <VehicleItem vehicle={vehicle} key={index}/>
})

    return (
    <div>
        <ul className='list'>{vehicleItems}</ul>
    </div>
    )
}

export default VehicleList