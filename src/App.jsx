import Switcher from './components/Switcher'


import './App.css'

// ant
import { GithubOutlined  ,TwitterOutlined , LinkedinOutlined} from '@ant-design/icons';
import Card1 from './components/Card1';


function App() {
  return (<div className='dark:bg-[black] dark:text-[white]'>

{/* header */}
<header className='flex justify-around '>
<img src="src/assets/logo 1.svg" alt="" />

<div className='flex justify-around p-[2%] md:w-[60%]'>
<ul className='flex justify-around items-center text-[#666666] font-bold md:w-[60%] md:inline-flex mob:hidden'>
  <li className='text-[16px]'>Home</li>
  <li className='text-[16px]'>About</li>
  <li className='text-[16px]'>Tech Stack</li>
  <li className='text-[16px]'>Projects</li>
  <li className='text-[16px]'>Contact</li>
</ul>

{/* icons */}
<div className='flex justify-around items-center w-[30%] text-[40px]'>
<GithubOutlined />
<TwitterOutlined  />
<LinkedinOutlined />
<Switcher />
</div>
</div>
</header>


{/* section1 */}
<section className='md:flex justify-around mt-[8%]'>
  {/* left */}
  <div className='font-bold text-[50px]'>
    <h1 className='text-[#42446E]'>HI 👋</h1>
    <h1 className='text-[#42446E]'>My name is</h1>
    <h1 className='text-[#13B0F5]'>Muhammadullo</h1>
     <h1 className='text-[#42446E]'>I build things for web</h1>
  </div>
  {/* right */}
  <div className='logo '>
    <img className='w-[350px] h-[450px]' src="src/assets/p0.jpg" alt="" />
  </div>
</section>


{/* section2 */}
<section className='md:flex justify-around mt-[4%]'>
  {/* left */}
  <div className='border-solid  md:w-[40%]'>
    <h1 className='text-[#42446E] text-[50px] font-bold'>About Me</h1>
    <p className='text-[#666666] font-mono text-[20px]'>I’m Nastulloev Muhammadullo, a frontend developer at Softclub. I’m
proficient in React, JavaScript, CSS, Tailwind, and SASS. I create
efficient, user-friendly web applications and solve problems with a
positive attitude. I remain calm under pressure and focus on
delivering high-quality work. I’m fluent in several languages,
enhancing my ability to communicate in diverse teams. I’m not just
a programmer, but a bridge between cultures, a problem solver, and
a dedicated professional. My journey is a testament to dedication,
passion, and continuous learning.
</p>
    <h1 className='text-[#42446E] text-[50px] font-bold mt-[8%]'>Education</h1>
    <p className='border-b-4 text-[#666666] font-mono text-[20px]'>SoftClub</p>
    <p className='border-b-4 text-[#666666] font-mono text-[20px]'>TGPU</p>
  </div>
  {/* right */}
  <div className='border-solid  md:w-[30%]'>
    <h1 className='text-[#42446E] text-[50px] font-bold'>Work Experience</h1>
    <h1 className='text-[#666666] font-mono text-[20px]'>Junior Web Developer</h1>
    <p  className=' mb-3 border-b-4  text-[#666666] font-mono text-[20px]'>HTML & CSS 1 month</p>
    <h1 className='text-[#666666] font-mono text-[20px]'>JavaScript</h1>
    <p  className='mb-3 border-b-4 text-[#666666] font-mono text-[20px]'>How Startup Framework</p>
    <h1 className='text-[#666666] font-mono text-[20px]'>GIt / GItHub</h1>
    <p  className='text-[#666666] font-mono text-[20px]'>HAAPS</p>
 <p></p>
  </div>
</section>



{/* section stack */}
<section className='mt-[4%]'>
{/* title */}
<div className='flex flex-col justify-center items-center'>
<h1 className='text-[#42446E] text-[50px] font-bold'>My Tech Stack</h1>
<p className='mb-3 text-[#666666] font-mono text-[20px]'> Technologies I’ve been working with recently</p>
</div>


{/* stack */}
<div className='flex justify-center'>
  <div>
  {/* row1 */}
  <div className='md:flex  mb-[6%] mt-[8%]'>
    <img className='p-[2%]' src="src/assets/vscode-icons_file-type-html.svg" alt="" />
    <img className='p-[2%]' src="src/assets/vscode-icons_file-type-css.svg" alt="" />
    <img className='p-[2%]' src="src/assets/vscode-icons_file-type-js-official.svg" alt="" />
    <img className='p-[2%]' src="src/assets/logos_react.svg" alt="" />
    <img className='p-[2%]' src="src/assets/Vector.svg" alt="" />
    </div>
  {/* row2 */}
  <div className='md:flex'>
    <img className='p-[2%]' src="src/assets/vscode-icons_file-type-tailwind.svg" alt="" />
    <img className='p-[2%]' src="src/assets/logos_sass.svg" alt="" />
    <img className='p-[2%]' src="src/assets/logos_git-icon.svg" alt="" />
    <img className='w-[150px] h-[150px]   p-[2%]' src="src/assets/p.svg" alt="" />
    <img className='p-[2%]' src="src/assets/vscode-icons_file-type-vscode.svg" alt="" />
    <img className='p-[2%]' src="src/assets/akar-icons_github-fill.svg" alt="" />
  </div>
  </div>
</div>
</section>


{/* section_project */}
<section>
{/* title */}
<div className='flex flex-col justify-center items-center'>
<h1 className='text-[#42446E] text-[50px] font-bold'>Projects</h1>
<p className='mb-3 text-[#666666] font-mono text-[20px]'> Things I’ve built so far</p>
</div>

{/* component */}
<div>
{/* row1 */}
<div className='md:flex  justify-evenly'>
<Card1 img={"src/assets/Rectangle 4.png"} title={"Project Tile goes here"} txt={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}></Card1>
<Card1 img={"src/assets/Rectangle 6.svg"} title={"Project Tile goes here"} txt={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}></Card1>
<Card1 img={"src/assets/Rectangle 8.svg"} title={"Project Tile goes here"} txt={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}></Card1>
</div>

{/* row2 */}
<div className='md:flex justify-evenly mt-[4%]'>
<Card1 img={"src/assets/Rectangle 12.svg"} title={"Project Tile goes here"} txt={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}></Card1>
<Card1 img={"src/assets/Rectangle 13.svg"} title={"Project Tile goes here"} txt={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}></Card1>
<Card1 img={"src/assets/Rectangle 14.svg"} title={"Project Tile goes here"} txt={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}></Card1>
</div>

</div>
</section>


{/* section */}
<section className='flex justify-between m-[5%]'>
{/* left */}
<div>
  <img src="src/assets/logo 1 (1).svg" alt="" />
</div>

{/* right */}
<div className='md:flex w-[50%]   justify-between items-center'>
  <div className='md:flex'>
    <h1 className='text-[#42446E] font-mono text-[20px] mr-[8%]'>+992927305451</h1>
    <p className='text-[#42446E] font-mono md:text-[20px]'>mnastulloev@gmail.com</p>
  </div>
<div className='text-[40px]'>
<GithubOutlined   className='m-[10px]'/>
<TwitterOutlined  className='m-[10px]'/>
<LinkedinOutlined className='m-[10px]'/>  
</div>
</div>



</section>

{/* footer */}
<footer className='mt-[5%] pb-[4%]'>
  <hr className='h-[2px] bg-[#0000008b] mb-[4%]' />
<div className='flex justify-center md:block mob:hidden'>
<ul className='flex justify-around items-center text-[#666666] font-bold w-[60%] '>
  <li className='text-[16px]'>Home</li>
  <li className='text-[16px]'>About</li>
  <li className='text-[16px]'>Tech Stack</li>
  <li className='text-[16px]'>Projects</li>
  <li className='text-[16px]'>Contact</li>
</ul>
</div>
</footer>


</div>)
}

export default App

