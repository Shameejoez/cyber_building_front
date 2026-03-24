import Sun from '../../../public/images/icons/sun.svg?react'
import Burger from '../../../public/images/icons/burger.svg?react'
import Bell from '../../../public/images/icons/bell.svg?react'
import Closed from '../../../public/images/icons/buttons/closedBtn.svg?react'
import { useState } from 'react'
import { Accordion } from '../Accordion/Accordion'
type HeaderProps = {
    
}

export const Header = ({}: HeaderProps) => {

    const [isUserMenu, setUserMenu] = useState(false)
    const [isMainNav, setMainNav] = useState(false)

    const onClickUseUserMenu = () => setUserMenu(!isUserMenu)
    const onClickUseMainNav = () => setMainNav(!isMainNav)

    
    return (
        <header className="realtive w-full pl-64 mx-auto text-base flex justify-around items-center h-20 pt-10">
            {/* НАВИГАЦИЯ */}
                    <div className= {`absolute w-64 z-10 flex h-full left-0 top-0 transition-transform px-5 duration-300 ease-in-out shadow-lg bg-white
                        ${isMainNav ? 'translate-x-0' : '-translate-x-full'}`}>
                               <nav className="flex items-center  flex-col w-full h-full  pt-50">
                                <Accordion/>
                               </nav>
                               <button className={`absolute -right-20 top-4 z-20 pt-7.5  ${isMainNav ? 'right-2' : '-right-20'}`}
                                       onClick={() => onClickUseMainNav()}>
                                    <span className='visually-hidden'>Кнопка меню</span>
                                    {
                                        isMainNav ?
                                        <Closed className="w-7 h-7"/> :
                                        <Burger className="w-7 h-7"/>
                                    }
                                    
                               </button>
                    </div>
                    <div className=''>
                        <p className="greeting_user">Привет, Username</p>
                    </div>
                        {/* Поиск */}
                <form className="bg-[#f4f4f4] flex rounded-lg p-1 " role="search">
                    <input className ={`flex-1 focus:outline-none focus:ring-1 rounded-lg `} type="search " placeholder='search' />
                </form>
                        {/*  меню юзера */} 
                <div className="menu_btn_grp flex gap-2.5">
                    {/* Смена стиля сайта */}
                    <label className="radio-">
                        <input  className="peer sr-only" type="checkbox"/>
                        <div className="">
                            <Sun className="w-7 h-7"/>
                        </div>
                    </label>
                    {/* Уведомления */}
                    <button className=''>
                         <span className='visually-hidden'>Кнопка уведомления</span>
                         <Bell className="w-7 h-7"/>
                    </button>
                    {/* Аккордион меню юзера */}
                    <div className="relative group">  
                        <button className='flex items-center gap-2' 
                                onClick={() => onClickUseUserMenu()}>
                            <img className="w-10 h-10 bg-amber-950 rounded-full row-span-2" src="" alt="" />
                            <span>Имя</span>
                        </button>
                        <ul className=
                        {`absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-1 ${isUserMenu === false && 'hidden'}`} >
                            <li><a href="" className='block px-4 py-2 hover:bg-gray-100'>Настройки профиля</a></li>
                            <li><a href="" className='block px-4 py-2 hover:bg-gray-100'>Выйти из профиля</a></li>
                        </ul>
                    </div>
                </div>
        </header>
    )
}
