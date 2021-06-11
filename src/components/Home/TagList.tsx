import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { Label, SemanticCOLORS } from "semantic-ui-react";
import "./style.css";

interface IProps {
  tags: string[];
  currentTag: string | undefined;
  setCurretTag: (event: any, data: any) => void;
}

export const TagList = ({ tags, currentTag, setCurretTag }: IProps) => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "blue",
    "purplepink",
    "brown",
    "grey",
  ];

  // const getBackgroundColor = (tag: string) => {
  //   console.log(tag+" : "+currentTag)
  //   return tag == currentTag ? "black" : "";
  // };

  return (
    <Fragment>
      {tags.map((tag) => {
        return (
          <Label
            key={tag}
            as="a"
            color={tag === currentTag ? "black" : "grey"}
            horizontal
            onClick={setCurretTag}
          >
            {tag}
          </Label>
        );
      })}
    </Fragment>
  );
};
