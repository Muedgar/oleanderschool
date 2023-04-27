import React, {useEffect, useState} from 'react'

function GetSummary() {
    let [data,setData] = useState()
    let check = "true"
    useEffect(() => {
        async function getData() {
            await fetch("https://www.backend.oleanderschool.com/backend/api/notaloneinfo").then(d=>d.json()).then(d => {
                console.log(d)
                setData(d[0]['notAlone'])
            }).catch(e => new Error(e))
        }
        if(check==="true") {
            getData()
        }
    },[check])
  return (
    <>
    {data?
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        {data['summary']?
         <div style={{display: 'block'}}>
         <h2>Summary:</h2>
         <p>{data['summary']}</p>
     </div>
        :
        <div style={{display: 'none'}}></div>
        }
       
       {data['yearOne'] && data['yearOneDescription']?
         <div style={{display: 'block'}}>
         <h2>{data['yearOne']}:</h2>
         <p>{data['yearOneDescription']}</p>
     </div>
        :
        <div style={{display: 'none'}}></div>
        }

{data['yearTwo'] && data['yearTwoDescription']?
         <div style={{display: 'block'}}>
         <h2>{data['yearTwo']}:</h2>
         <p>{data['yearTwoDescription']}</p>
     </div>
        :
        <div style={{display: 'none'}}></div>
        }


{data['yearThree'] && data['yearThreeDescription']?
         <div style={{display: 'block'}}>
         <h2>{data['yearThree']}:</h2>
         <p>{data['yearThreeDescription']}</p>
     </div>
        :
        <div style={{display: 'none'}}></div>
        }


{data['yearFour'] && data['yearFourDescription']?
         <div style={{display: 'block'}}>
         <h2>{data['yearFour']}:</h2>
         <p>{data['yearFourDescription']}</p>
     </div>
        :
        <div style={{display: 'none'}}></div>
        }


{data['yearFive'] && data['yearFiveDescription']?
         <div style={{display: 'block'}}>
         <h2>{data['yearFive']}:</h2>
         <p>{data['yearFiveDescription']}</p>
     </div>
        :
        <div style={{display: 'none'}}></div>
        }
{data['yearSix'] && data['yearSixDescription']?
         <div style={{display: 'block'}}>
         <h2>{data['yearSix']}:</h2>
         <p>{data['yearSixDescription']}</p>
     </div>
        :
        <div style={{display: 'none'}}></div>
        }
    </div>:
    <>
    <p>Loading information ...</p>
    </>}
    </>
  )
}

export default GetSummary