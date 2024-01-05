import './App.css'

// ant
import { GithubOutlined  ,TwitterOutlined , LinkedinOutlined} from '@ant-design/icons';


function App() {
  return (<div>

{/* header */}
<header className='flex justify-around'>
<img src="src/assets/logo 1.svg" alt="" />

<div className='flex justify-around p-[2%] w-[60%]'>
<ul className='flex justify-around items-center text-[#666666] font-bold w-[60%] '>
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
</div>
</div>
</header>


{/* section1 */}
<section className='flex justify-around mt-[8%]'>
  {/* left */}
  <div className='font-bold text-[50px]'>
    <h1 className='text-[#42446E]'>HI 👋</h1>
    <h1 className='text-[#42446E]'>My name is</h1>
    <h1 className='text-[#13B0F5]'>Muhammadullo</h1>
     <h1 className='text-[#42446E]'>I build things for web</h1>
  </div>
  {/* right */}
  <div>
    <img src="src/assets/w.avif" alt="" className='w-[400px] h-[400px] rounded-full border-purple-800 border-solid border-[5px]' />
  </div>
</section>


{/* section2 */}
<section className='flex justify-around mt-[4%]'>
  {/* left */}
  <div className='border-solid  w-[40%]'>
    <h1 className='text-[#42446E] text-[50px] font-bold'>About Me</h1>
    <p className='text-[#666666] font-mono text-[20px]'>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
    <h1 className='text-[#42446E] text-[50px] font-bold mt-[8%]'>Education</h1>
    <p className='border-b-4 text-[#666666] font-mono text-[20px]'>Bachelor in Electronics & Communication</p>
  </div>
  {/* right */}
  <div className='border-solid  w-[30%]'>
    <h1 className='text-[#42446E] text-[50px] font-bold'>Work Experience</h1>
    <h1 className='text-[#666666] font-mono text-[20px]'>Junior Web Developer</h1>
    <p  className=' mb-3 border-b-4  text-[#666666] font-mono text-[20px]'>Dr. Rajkumar’s Learning App</p>
    <h1 className='text-[#666666] font-mono text-[20px]'>Web Development Intern</h1>
    <p  className='mb-3 border-b-4 text-[#666666] font-mono text-[20px]'>How Startup Framewor</p>
    <h1 className='text-[#666666] font-mono text-[20px]'>SEO / SEM Specialist</h1>
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
  <div className='flex mb-[6%] mt-[8%]'>
    <img className='p-[2%]' src="src/assets/vscode-icons_file-type-html.svg" alt="" />
    <img className='p-[2%]' src="src/assets/vscode-icons_file-type-css.svg" alt="" />
    <img className='p-[2%]' src="src/assets/vscode-icons_file-type-js-official.svg" alt="" />
    <img className='p-[2%]' src="src/assets/logos_react.svg" alt="" />
    <img className='p-[2%]' src="src/assets/Vector.svg" alt="" />
    <img className='p-[2%]' src="src/assets/logos_bootstrap.svg" alt="" />
  </div>
  {/* row2 */}
  <div className='flex'>
    <img className='p-[2%]' src="src/assets/vscode-icons_file-type-tailwind.svg" alt="" />
    <img className='p-[2%]' src="src/assets/logos_sass.svg" alt="" />
    <img className='p-[2%]' src="src/assets/logos_git-icon.svg" alt="" />
    <img className='p-[2%]' src="src/assets/cib_greensock.svg" alt="" />
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


</section>


</div>)
}

export default App
