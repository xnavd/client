import React from 'react'

const Container = (props) => {
  return <selection className={props.class1}>
    <div className="container-xxl">
        {props.children}
    </div>
  </selection>
}

export default Container