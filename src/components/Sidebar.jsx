import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { GiBeachBall } from "react-icons/gi";
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const {activeMenu,setActiveMenu,currentColor}=useStateContext();
  // const activeMenu=true;
  const activeLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-gray-500';
  const normalLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-black-200  dark:hover:text-black hover:bg-light-gray m-2 bg-white';
  
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
      {activeMenu && (<>
        <div className="flex justify-between items-center">
          <Link to="/" onClick={()=>setActiveMenu(false)} className="items-center gap-3 ml-3 flex mt-4 text-xl font-extrabold tracking-tighter dark:text-white text-slate-900">
            <GiBeachBall /><span>Dribble</span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button type="button" onClick={() => setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} className="text-xl rounded-full p-3 hover:bg-light ray mt-4 block md:hidden">
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className="mt-10">
          {links.map((items) => (
            <div key={items.title}>
              <p className="text-gray-400 m-3 mt-4 uppercase">{items.title}</p>
              {items.links.map((Link)=>(
                <NavLink to={`/${Link.name}`} key={Link.name} onClick={()=>{}} 
                // style={(isActive)=>({backgroundColor:isActive ? currentColor  : ' '})}
                className={({isActive})=> isActive ? activeLink : normalLink}>
                  {Link.icon}
                  <span className="capitalize">{Link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar