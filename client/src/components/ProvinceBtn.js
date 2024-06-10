import React, { memo } from 'react'

const ProvinceBtn = ({ name, image }) => {
    return (
        <div className='shadow-md rounded-bl-md rounded-br-md text-blue-700 cursor-pointer hover:text-orange-600'>
            <img src={image}
                alt={name}
                className='w-[345px] h-[345px] object-cover rounded-tl-md rounded-tr-md'
            />
            <div className='py-2 font-medium text-center'>{name}</div>
        </div>
    )
}

export default memo(ProvinceBtn)
