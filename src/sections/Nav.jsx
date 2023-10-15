import { logo } from "../assets/images/index.js";
import Dropdown from "../components/Dropdown.jsx";
import { navLinks } from "../constants/index.js";

const Nav = () => {
  return (
<header className="py-8 w-full">
  <nav className="flex flex-row justify-between padding-x items-center">
        <a href="/">
          <img 
          src={logo} 
          alt="logo"
          height={40}
          width={50} />
        </a>
        <ul className=" flex justify-center items-center gap-8 max-lg:hidden">
          {navLinks.map((items)=>(
            <li key={items.label}>
              <a href={items.href}
              className='font-inter leading-normal text-lg text-slate-gray hover:text-red-400'
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div id="hamburger" className="hidden max-lg:block">
          <Dropdown />
        </div>
  </nav>
</header>
  )
}

export default Nav