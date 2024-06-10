import React from 'react'
import { ProvinceBtn } from '../../components'
import { location } from '../../ultils/constain'

const Provice = () => {
    return (
        <div className='pt-40 flex flex-col gap-7 items-center w-1020 ' >
            <span className='font-semibold text-2xl'>Các điểm đến thu hút nhất Việt Nam</span>
            <div className='flex items-center gap-5 justify-center '>
                {location.map(item => {
                    return (
                        <ProvinceBtn key={item.id} image={item.image} name={item.name} />
                    )
                })}
            </div>
        </div>
    )
}

export default Provice
