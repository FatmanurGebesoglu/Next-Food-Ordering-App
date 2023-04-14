import MenuWrapper from '@/components/product/MenuWrapper'
import React from 'react'
import axios from 'axios'

const index = ({categoryList}) => {
  return (
    <div className="pt-10">
      <MenuWrapper categoryList={categoryList} />
    </div>
  )
}

export default index

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  return {
    props: {
      categoryList: res.data ? res.data : [] ,
    },
  };
};