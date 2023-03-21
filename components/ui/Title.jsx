import React from 'react'

export const Title = ({children, addclass}) => {
  return (
    <div className={`${addclass}`}>{children}</div>
  )
}
