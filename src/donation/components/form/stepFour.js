import React, {useState, useEffect, useRef} from "react";

function StepFour() {
  let [files, setFiles] = useState([])
  // document
  function handleClickUploadImage() {
    
    
    widgetRef.current.open()
}
  const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: process.env.REACT_APP_CLOUD_NAME,
            uploadPreset: process.env.REACT_APP_UPLOAD_PRESET
        }, function(error, result) {
            if(!error && result && result.event === "success") {
             
             localStorage.setItem(`fileupload_${result.info.public_id}`,JSON.stringify([result.info.original_filename, result.info.secure_url, result.info.public_id]))
                // setFiles([...files, [result.info.original_filename, result.info.secure_url, result.info.public_id]]);
                document.getElementById("getStudentFiles").click()
            }
        })
    },[])
    return(
        <>
   <div className="stepTitle">
     <h1>Supporting Documents</h1>
     <p style={{marginTop: '20px'}}>Please don't upload more than 5 files. Only the first five files will be accepted.</p>
   </div>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
    marginBottom: '30px'
  }}>
  <button onMouseOver={e => {
    e.target.style.boxShadow = '5px 5px black'
  }}  onMouseLeave={e => {
    e.target.style.boxShadow = '10px 10px black'
  }} style={{
    width: 'fit-content',
    padding: '20px',
    boxShadow: '10px 10px black',
    backgroundColor: 'greenyellow'
   }} onClick={e => {
    handleClickUploadImage();
   }}>Upload Student School Report Card For Recent Year or Term</button>
   
   <button onMouseOver={e => {
    e.target.style.boxShadow = '5px 5px black'
  }}  onMouseLeave={e => {
    e.target.style.boxShadow = '10px 10px black'
  }} style={{
    width: 'fit-content',
    padding: '20px',
    boxShadow: '10px 10px black',
    backgroundColor: 'greenyellow',
    marginTop: '15px'
   }} onClick={e => {
      localStorage.clear()
      document.getElementById("getStudentFiles").click()
    }}>Clear Files</button>
   {files.length>0?
    <>
      {files.map((file,k) => (
        <h1  style={{
          width: 'fit-content',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
          marginBottom: '10px',
          padding: '5px',
          fontSize: '15px',
          backgroundColor: 'lightgreen',
          color: 'black',
          
        }} key={k}>{file[0]}</h1>
      ))}
    </>:
    <></> 
  }

    </div>
    <button style={{display: "none"}} id="getStudentFiles" onClick={e => {
      let data = []
      let localKeys = Object.keys(localStorage)
      for(let i=0;i<localKeys.length;i++) {
        let itemArray = localKeys[i].split('_')
        if(itemArray[0]==='fileupload') {
           let item = JSON.parse(localStorage.getItem(localKeys[i]))
          if(data.length<5) {
            data.push(item);
          }
        }
      }
      setFiles(data)
    }}>Get files</button>
    
  </>
    )
}

export default StepFour;