import React,{useState} from 'react'

import './life.css'
import ProductPreview from '../productpreview/ProductPreview'
import TITLE from './title'
import DESCRIPTION from './description'


function LIFE(props) {
  let [expand, setExpand] = useState(false)
  return (
    <div className={expand?'src_apps_lifeatschool_lifeatschool_life':'src_apps_lifeatschool_lifeatschool_life heightClass'}>
      
        <TITLE title={props.title} summary={props.summary} author={props.author} dt={props.dt} />
        <ProductPreview images={props.images} />
        <DESCRIPTION description={props.description} />
        <div>
          {expand?<button className='controlHeight' onClick={e=>setExpand(!expand)}>View Less</button>:<button className='controlHeight' onClick={e=>setExpand(!expand)}>View More</button>}
        </div>
    </div>
  )
}

export default LIFE