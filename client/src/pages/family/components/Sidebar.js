import React from 'react'
import '../family.css'
import {SidebarData} from './SidebarData'
function Sidebar() {
    return (
        <div className="side-bar">
            <ul className="side-bar-list">
                {SidebarData.map((val,key)=>{
                    return <li 
                        key={key}
                        className = "row-item"
                        onClick={()=>{window.location.pathname = val.link}}
                        id={window.location.pathname===val.link ? "row-active" : ""}
                    >
                        <div className="blank-space">{" "}</div>
                        <div>{val.title}</div>
                    </li> 
                })}
            </ul>
        </div>
    )
}

export default Sidebar;
