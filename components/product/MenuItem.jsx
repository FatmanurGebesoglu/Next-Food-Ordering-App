import Image from 'next/image'
import React from 'react'

const MenuItem=()=> {
  return (
    <div>
        <div className="relative w-40 h-40 z-50">
            <Image src="/images/pizza.png" alt="" layout='fill'/>
        </div>
        <div>

        </div>
    </div>
  )
}

export default MenuItem