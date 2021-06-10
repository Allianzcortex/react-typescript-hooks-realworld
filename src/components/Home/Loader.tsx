import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Dimmer, Loader as SemanticLoader } from "semantic-ui-react";
import { AppState } from "../../redux/store";

export const Loader = () => {

  const { isLoading, messageContent } = useSelector(
    (state: AppState) => state.loader
  );

  if (!isLoading) {
    return (
      <Dimmer active>
        <SemanticLoader size="medium">
          trying to {`${messageContent}`} ......
        </SemanticLoader>
      </Dimmer>
    );
  }

  return <Fragment></Fragment>;
};
