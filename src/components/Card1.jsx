import React from 'react'
import { GithubOutlined  ,TwitterOutlined , LinkedinOutlined} from '@ant-design/icons';

const Card1 = ({img, title, txt}) => {
  return (<div className='w-[25%] shadow-xl'>
<div><img src={img} alt="" /></div>
<h1 className='text-[20px] font-bold text-center m-[2%]'>{title}</h1>
<p className='m-[4%]'>{txt}</p>
<div className='flex justify-center'>
    <h1 className='text-[#42446E] font-bold'>Tech stack :</h1>
    <p className='text-[#42446E] font-mono'>HTML , JavaScript, SASS, React</p>
</div>

    <div className='flex justify-between m-[2%]'>
    <h1 className='font-medium decoration-solid-[2px]'>Live Preview</h1>
    <div className='flex items-center'>
    <GithubOutlined />
    <p className=''>View Code</p>
    </div>
    
</div>
</div>)
}

export default Card1



