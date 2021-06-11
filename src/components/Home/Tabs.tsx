import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  SyntheticEvent,
} from "react";
import { Tab } from "semantic-ui-react";
import _ from "lodash";
import "./style.css";

interface IProps {
  tabs: object;
  setCurrentTab: Dispatch<SetStateAction<string>>;
}

interface ITabChangeEvent {
  activeIndex: string;
  [key: string]: string;
}

export const Tabs = ({ tabs, setCurrentTab }: IProps) => {
  const handleTabChange = (event: SyntheticEvent, data: object) => {
      // TODO destruct activeIndex in data directly
    const { activeIndex } = data as ITabChangeEvent;
    setCurrentTab(Object.keys(tabs)[Number(activeIndex)]);
  };

  const pan1 = Object.entries(tabs).map(([key, value]) => {
    return {
      menuItem: value,
      render: () => <Tab.Pane attached={false}></Tab.Pane>,
    };
  });

  return (
    <Fragment>
      <div className="tab-container">
        <Tab
          onTabChange={handleTabChange}
          menu={{ secondary: true, pointing: true }}
          panes={pan1}
        />
      </div>
    </Fragment>
  );
};
