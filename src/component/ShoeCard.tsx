import React from 'react'

function ShoeCard({ imgUrl, changeBigShoeImage, bigShoeimage }) {
    const handleClick = () => {
        if (bigShoeimage !== imgUrl.bigShoe) {
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
    return (
        <div
            className={`border-2 
                rounded-xl ${bigShoeimage === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'}
                cusror-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className='flex justify-center items-center bg-card bg-center bg-cover 
            sm:w-40 sm:h-40 rounded-xl max-sm:p-4
            '>
                <img src={imgUrl.thumbnail} />
            </div>
        </div >
    )
}

export default ShoeCard