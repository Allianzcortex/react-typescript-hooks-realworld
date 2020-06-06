import React, {FC, Fragment, useState} from "react"
import {Menu} from "semantic-ui-react";
import "./admin.css"

// TODO
// use /menulist/change value/color
// as props
export const MenuSelector: FC<{}> = () => {
    const [activeItem,setActiveItem]=useState<string>("All");
    const menuList=['All','Public','Draft']
    return (
        <Fragment>
            <Menu color="green" size="small">
                {menuList.map(item=>(
                    <Menu.Item
                        name='item'
                        active={activeItem === item}
                        onClick={()=>setActiveItem(item)}
                    >
                        {item}
                    </Menu.Item>
                ))}
            </Menu>
        </Fragment>
    )
}
