import React from 'react'
import NavBar from './programs/components/navbar/navbar'

function ErrorPage() {
  return (
    <>
    <NavBar />
    <div style={{margin: '150px auto', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <h1>Page Does Not Exist</h1>
    </div>
    </>
  )
}

export default ErrorPage