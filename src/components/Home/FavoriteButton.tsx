import { SetState } from "immer/dist/internal";
import React, { Dispatch, Fragment, SetStateAction, SyntheticEvent } from "react";
import { Button, Icon } from "semantic-ui-react";

interface IProps {
    favorite:boolean
    favoriteCount:number
    setFavorite:Dispatch<SetStateAction<boolean>>,
}

export const FavoriteButton=({favorite,favoriteCount,setFavorite}:IProps)=>{

    const handleFavorite=(event: SyntheticEvent, data: object)=>{
        
    }

    return (
        <Fragment>
          <Button size="tiny" icon >
            <Icon name={favorite?'heart outline':'heart'} />
            {favorite ? "Unfavorite" : "Favorite"}&nbsp; {favoriteCount}
          </Button>
        </Fragment>
      );
}