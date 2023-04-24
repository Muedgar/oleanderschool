import React, {useEffect, useState} from 'react'

function GetHistory() {
    let [data,setData] = useState([])
    let check = "true"
    useEffect(() => {
        async function getData() {
            await fetch("http://localhost:3003/backend/api/notaloneinfo").then(d=>d.json()).then(d => {
                setData([
                        [d[0]['notAlone']['yearOne'],d[0]['notAlone']['yearOneDescription']],
                        [d[0]['notAlone']['yearTwo'],d[0]['notAlone']['yearTwoDescription']],
                        [d[0]['notAlone']['yearThree'],d[0]['notAlone']['yearThreeDescription']],
                        [d[0]['notAlone']['yearFour'],d[0]['notAlone']['yearFourDescription']],
                        [d[0]['notAlone']['yearFive'],d[0]['notAlone']['yearFiveDescription']],
                        [d[0]['notAlone']['yearSize'],d[0]['notAlone']['yearSizeDescription']]
                ])
            }).catch(e => new Error(e))
        }
        if(check==="true") {
            getData()
        }
    },[check])
  return (
        <ul>
        {data.map((d,index)=> {
            if(d[0]) {
                return(
                    <li key={index}>{Number(d[0])}: {d[1]}</li>
                )
            }
           return <li key={index} style={{display: 'none'}}></li>
        })}
        </ul>
  )
}

export default GetHistory