import React, { Dispatch, Fragment, SetStateAction, SyntheticEvent, useEffect, useState } from "react";
import { Label, SemanticCOLORS } from "semantic-ui-react";
import './style.css'

interface IProps {
  tags: string[];
  setCurretTag: (event:any,data:any)=>void
}

export const TagList = ({ tags,setCurretTag }: IProps) => {

  const colors = [
    "red","orange","yellow","olive",
    "green","blue","purplepink","brown","grey"
  ]

  return (
    <Fragment>
      {
        tags.map(tag=>{
          return (<Label key={tag} as="a" color={'grey'} horizontal 
          onClick={setCurretTag}>
          {tag}
        </Label>)
        })
      }

    </Fragment>
  );
};
