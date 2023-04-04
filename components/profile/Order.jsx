import React from 'react'
import { Title } from '@/components/ui/Title'

const Order = () => {
  return (
    <div>
        <form className="lg:p-8 flex-1 lg:mt-0 mt-5" >
      <Title addclass="text-[40px]">Order</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        
      </div>
      <button className="btn-primary mt-4" type="submit">Update</button>
    </form>
    </div>
  )
}

export default Order