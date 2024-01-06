import React from 'react'
import { GithubOutlined  ,TwitterOutlined , LinkedinOutlined} from '@ant-design/icons';

const Card1 = ({img, title, txt}) => {
  return (<div className='w-[20%] shadow-xl'>
<div><img src={img} alt="" /></div>
<h1>{title}</h1>
<p>{txt}</p>
<div>
    <h1>Tech stack :</h1>
    <p>HTML , JavaScript, SASS, React</p>
</div>

<div>
    <h1>Live Preview</h1>
    <div>
    <GithubOutlined />
    </div>
    
</div>
</div>)
}

export default Card1