import React, { Dispatch, Fragment, MouseEventHandler, SyntheticEvent, useState } from "react";
import { useHistory } from "react-router";
import { Menu, Segment } from "semantic-ui-react";
import "./style.css";

interface IData {
    name:string,
    [key:string]:string;
}


export const Header =()=>{

    const [activeItem,setActiveItem] = useState<string>("")
    const history = useHistory()

    const handleItemClick=(event:SyntheticEvent,data:object)=>{
        const tabName = (data as IData).name
        setActiveItem(tabName)

        switch(tabName) {
            case 'Home':
                history.push('/')
                break;
            case 'Sign in':
                history.push('/login')
                break;
            case 'Sign up':
                history.push('/register')
                break;
        }

    }

    return (
        <Fragment>
          <Segment inverted>
            <Menu inverted pointing secondary>
              <Menu.Item
                name="Conduit"
                active={activeItem === 'home'}
                onClick={handleItemClick}
              />
              <Menu.Menu position="right">
                <Menu.Item
                  name="Home"
                  active={activeItem === 'Home'}
                  onClick={handleItemClick}
                />
                <Menu.Item
                  name="Sign in"
                  active={activeItem === 'Sign in'}
                  onClick={handleItemClick}
                />
                <Menu.Item
                name="Sign up"
                active={activeItem === 'Sign up'}
                  onClick={handleItemClick}
                />
              </Menu.Menu>
            </Menu>
          </Segment>
        </Fragment>
      );
    }
