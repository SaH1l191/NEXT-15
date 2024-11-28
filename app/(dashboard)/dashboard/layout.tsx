import React from 'react'

const DashboardLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
        <h1>Dashboard Layout Title</h1>
        {children}
    </div>
  )
}

export default DashboardLayout
