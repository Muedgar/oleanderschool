import React, {useEffect, useState} from 'react'

function GetSummary() {
    let [data,setData] = useState()
    let check = "true"
    useEffect(() => {
        async function getData() {
            await fetch("http://localhost:3003/backend/api/notaloneinfo").then(d=>d.json()).then(d => {
                setData(d[0]['notAlone']['summary'])
            }).catch(e => new Error(e))
        }
        if(check==="true") {
            getData()
        }
    },[check])
  return (
    <div>
    <p>{data}</p>
    </div>
  )
}

export default GetSummary