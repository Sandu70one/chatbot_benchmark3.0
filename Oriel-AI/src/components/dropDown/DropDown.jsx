import React from 'react'
import './DropDown.css'
import { ChevronDown } from 'lucide-react'

function DropDown() {
  return (
    <div className="dropdwon-menu">
        <div className="dropdown-head px-4 pr-2 py-1.5 rounded-xl cursor-pointer flex items-center justify-between">
            <div className="text text-lg mr-6 font-medium">Oriel</div>
            <div className="down"><ChevronDown size={18} strokeWidth={3} /></div>
        </div>
        <div className="dropdown-body"></div>
    </div>
  )
}

export default DropDown