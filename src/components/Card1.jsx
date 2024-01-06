import React from 'react'

const Card1 = ({img, title}) => {
  return (<div className='w-[40%] shadow-xl'>
<div><img src={img} alt="" /></div>
<h1>{title}</h1>
</div>)
}

export default Card1