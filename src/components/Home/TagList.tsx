import React, { Dispatch, Fragment, SetStateAction, SyntheticEvent, useEffect, useState } from "react";
import { Label } from "semantic-ui-react";
import './style.css'

interface IProps {
  tags: string[];
  setCurretTag:Dispatch<SetStateAction<string | undefined>>
}

export const TagList = ({ tags,setCurretTag }: IProps) => {

  const handleTagClick=(event: SyntheticEvent, data: object)=>{
    console.log(data)
    setCurretTag((data as any).children)
  }

  return (
    <Fragment>
      {
        tags.map(tag=>{
          return (<Label as="a" color="red" horizontal onClick={handleTagClick}>
          {tag}
        </Label>)
        })
      }

    </Fragment>
  );
};
