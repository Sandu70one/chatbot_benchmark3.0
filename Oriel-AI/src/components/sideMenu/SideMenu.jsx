import React from 'react'
import './SideMenu.css'
import { Table2, Search, SquarePlus } from 'lucide-react'

function SideMenu() {
  return (
    <div className="sideMenu py-4 px-6 flex flex-col rounded-2xl gap-4">
        <div className="menu-head pb-4 flex justify-between items-center">
            <div className="toggle p-2 rounded-full">
                <Table2 size={20}/>
            </div>
            <div className="options flex gap-4">
            <Search size={20} className='cursor-pointer'/>
            <SquarePlus size={20} className='cursor-pointer'/>
            </div>
        </div>
        <div className="profile pb-6 justify-between gap-8 items-center flex">
            <div className="account flex justify-between gap-2 items-center">
                <div className="profie-pic">
                    <img src="/src/assets/profilePic.png" className='w-11' alt="naleeka's profile picture" />
                </div>
                <div className="details flex flex-col gap-0">
                    <div className="name font-medium">Naleeka Kumarasinghe</div>
                    <div className="email text-sm">knaleeka843@gmail.com</div>
                </div>
            </div>
            <div className="plan py-2 px-3 capitalize text-xs font-medium rounded-lg">free</div>
        </div>
        <div className="chat-head">c</div>
    </div>
  )
}

export default SideMenu