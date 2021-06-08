import React, {
  Dispatch,
  Fragment,
  MouseEventHandler,
  SyntheticEvent,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Icon, Menu, Segment } from "semantic-ui-react";
import { AppState } from "../../redux/store";
import "./style.css";

interface IData {
  name: string;
  [key: string]: string;
}

export const Header = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const history = useHistory();
  const { isAuthenticated, user } = useSelector(
    (state: AppState) => state.auth
  );

  const handleItemClick = (event: SyntheticEvent, data: object) => {
    const tabName = (data as IData).name;
    setActiveItem(tabName);

    switch (tabName) {
      // TODO may use a map to connect tabName and router so no need for 
      // many cases
      case "Home":
        history.push("/");
        break;
      case "Sign in":
        history.push("/login");
        break;
      case "Sign up":
        history.push("/register");
        break;
    }
  };

  return (
    <Fragment>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name="Conduit"
            active={activeItem === "home"}
            onClick={handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="Home"
              active={activeItem === "Home"}
              onClick={handleItemClick}
            />
            {!isAuthenticated ? (
              <Fragment>
                <Menu.Item
                  name="Edit"
                  className="item-icon"
                  active={activeItem === "Edit"}
                  onClick={handleItemClick}
                >
                  <Icon name="write square" />
                  New Article
                </Menu.Item>

                <Menu.Item
                  name="Setting"
                  className="item-icon"
                  active={activeItem === "Setting"}
                  onClick={handleItemClick}
                >
                  <Icon name="setting" />
                  Settings
                </Menu.Item>

                <Menu.Item
                disabled
                  name="User"
                  className="item-icon"
                  active={activeItem === "User"}
                  onClick={handleItemClick}
                >
                  <Icon name="user" />
                  User&nbsp;{user?.username}
                </Menu.Item>
              </Fragment>
            ) : (
              <Fragment>
                <Menu.Item
                  name="Sign in"
                  active={activeItem === "Sign in"}
                  onClick={handleItemClick}
                />
                <Menu.Item
                  name="Sign up"
                  active={activeItem === "Sign up"}
                  onClick={handleItemClick}
                />
              </Fragment>
            )}
          </Menu.Menu>
        </Menu>
      </Segment>
    </Fragment>
  );
};
