import React from 'react'
import parse from 'html-react-parser';

const ShowPage = ({content}) => {
    if(content === "<p></p>"){
      content = ""
    }
  return (
    <>
      <div className='p-3 mb-2 mt-4 ' style={content  ? {backgroundColor:"#CCD3CA"} : {}}>
        {console.log(content)}
        {content?parse(content):""}
      </div>
    </>
  )
}

export default ShowPage
