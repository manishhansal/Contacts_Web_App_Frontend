import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loader = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"95vh"}}>
      <ClimbingBoxLoader color='#2eaea7' size='20px'/>
    </div>
  )
}

export default Loader;
