import { useState, useEffect } from 'react'

import { MdWbSunny, MdNightlightRound } from "react-icons/md"
import { IoMenu, IoClose } from "react-icons/io5"
import useDarkMode from '../hooks/useDarkMode'

const Navbar = ({ isDesktop }) => {
    const [ showMenu, setShowMenu ] = useState(false)
    const [ isDark, setIsDark ] = useDarkMode()
    

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleSetMode = () => {
        setIsDark(!isDark)
    }

    return (
        <nav className="h-[80px] flex items-center relative dark:text-white text-black">
            <div className="flex items-center gap-20 max-sm:gap-2">
                <h1 className="text-[30px] font-bold ml-10 max-sm:text-[20px] max-sm:ml-4">NerdCard</h1>

                {isDark ? 
                    <MdWbSunny size='30px' color='yellow' onClick={handleSetMode} className='hover:cursor-pointer' />
                    :
                    <MdNightlightRound size='30px' color='yellow' onClick={handleSetMode} className='hover:cursor-pointer' />    
                }
            </div>

            {isDesktop ? 
                <ul className="flex items-center ml-auto gap-10">
                    <li className="font-semibold">Features</li>
                    <li className="font-semibold">Menu</li>
                    <li className="font-semibold">Our Story</li>
                    <li className="font-semibold ml-20 mr-8">Contact</li>
               </ul> 
               :
               (showMenu ?
                    <>
                        <IoClose size='30px' className="ml-auto mr-2 hover:cursor-pointer" onClick={handleShowMenu} />
                        <ul className="absolute right-[40px] top-[80%] py-2 rounded-md text-center bg-white text-black w-[40%] shadow-md">
                            <li className="font-semibold py-1">Features</li>
                            <li className="font-semibold py-1">Menu</li>
                            <li className="font-semibold py-1">Our Story</li>
                            <li className="font-semibold py-1">Contact</li>
                        </ul>
                    </> 
                    :
                    <IoMenu size='30px' className="ml-auto mr-2 hover:cursor-pointer" onClick={handleShowMenu} />
                )
                
            }
        </nav>
    )
}

export default Navbar