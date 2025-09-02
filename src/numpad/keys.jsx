import { useState } from "react";
import './style/keys.css'

function Keys({ input, groupName, onClick }) {

  return (
    <div className={groupName} onClick={() => onClick(input)}>
      {input}
    </div>
  )

}

export default Keys