import React from 'react'
import { Title } from '@/components/ui/Title'

const Order = () => {
  return (
    <div>
        <form className="lg:p-8 flex-1 lg:mt-0 mt-5" >
      <Title addclass="text-[40px]">Order</Title>
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full txt-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6" >ID</th>
              <th scope="col" className="py-3 px-6" >ADRESS</th>
              <th scope="col" className="py-3 px-6" >DATE</th>
              <th scope="col" className="py-3 px-6" >TOTAL</th>
              <th scope="col" className="py-3 px-6" >STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all ">
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
               
                <span>53635247</span>
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <span>Sakarya</span>
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">04-04-2023</td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">preparing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
    </div>
  )
}

export default Order