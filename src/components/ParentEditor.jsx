import React,{useState} from 'react'
import Editor from './Editor'
import ShowPage from './ShowPage'

const ParentEditor = () => {
    const [htmlValue,setHTMLValue] = useState("")
    const getChildValue = (html) => {
        setHTMLValue(html)
    }
  return (
    <div>
      <Editor getValue={getChildValue}/>
      <ShowPage content={htmlValue}/>
    </div>
  )
}

export default ParentEditor
