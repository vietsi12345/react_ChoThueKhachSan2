import React from 'react'
import icons from '../ultils/icon'
import { Link } from 'react-router-dom'
import { formatVietNameseToSring } from '../ultils/common/formatVietNameseToSring'
import { formatMonneyVietNam } from '../ultils/common/formatMonneyVietNam'

const { IoLocation, FaStar } = icons

const ItemHome = ({ city, name, price, image, id, star }) => {
    return (
        <Link
            to={`/chi-tiet/${formatVietNameseToSring(name)}/${id}`}
            className='flex flex-col gap-1 cursor-pointer'
        >
            <img src={`data:image/png;base64,${image}`}
                className='w-[245px] h-[200px] object-cover shadow-xl rounded-md'
            />
            <span className='font-semibold w-[245px]'>{name}</span>
            <div className='flex items-center gap-1'>
                {(() => {
                    let stars = [];
                    for (let i = 1; i <= star; i++) {
                        stars.push(<FaStar color='green' key={i} size={15} />);
                    }
                    return stars;
                })()}
                <IoLocation className="text-blue-400" />
                <span className='text-blue-400 text-sm'>{city}</span>
            </div>
            <span className='text-sm text-gray-600'>Giá mỗi đêm chưa gồm thuế và phí</span>
            <span className='text-red-600 font-medium'>{formatMonneyVietNam(price)} </span>
        </Link>
    )
}

export default ItemHome
