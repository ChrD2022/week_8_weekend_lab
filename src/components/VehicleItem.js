import React from 'react'

const VehicleItem = ({vehicle}) => {
    return (
    <div>
        <li>{vehicle.model}</li>
    </div>
    )
}

export default VehicleItem