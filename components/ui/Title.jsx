import React from 'react'

export const Title = ({children, addclass}) => {
  return (
    <div className={`${addclass} font-dancing font-bold`}>{children}</div>
  )
}
