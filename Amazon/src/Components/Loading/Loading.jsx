import React from 'react'
import {ClipLoader} from 'react-spinners'

function Loading() {
  return (
    <div style={{display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 height:"50vh",
    }}>
      <ClipLoader />
    </div>
  )
}

export default Loading
