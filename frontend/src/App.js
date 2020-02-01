import React, {useEffect, Fragment, memo, useMemo} from 'react';
import {GlobalStyle} from "./style";
import {useState} from 'react'
import {renderRoutes} from "react-router-config";
import {BrowserRouter,Switch} from "react-router-dom"

import Header from "./componnets/header";
import SplitLine from "./componnets/split-line";
import {routes} from './routes/index.js'

// import TodoItems from "./componnets/todoItem";

function App() {
    return (
        <Fragment>
            <GlobalStyle></GlobalStyle>
            <BrowserRouter>
                {/*<Switch>*/}
                {renderRoutes(routes)}
                {/*<Header/>*/}
                {/*</Switch>*/}
            </BrowserRouter>
        </Fragment>
    )
}

// const Child=(props)=>{
//   // {coumt}=props;
//   console.log('--child is called--')
//   return (
//       <div>child component </div>
//   )
// }
//
// Child.props= {
// }
//
// const ChildMemo=memo(Child)

// function App() {
//   const [count,setCount]=useState(0);
//
//   const countMemo=useMemo(()=>(count),[])
//   useEffect(()=>{
//     document.title=`you clicked ${count} times`
//   })
//
//   return (
//       <Fragment>
//       <div>
//         <p> you clicked {count} times</p>
//         <button onClick={()=>{setCount(count+1)}}>
//         click me
//         </button>
//       </div>
//         {/*<Child/>*/}
//         <ChildMemo count={countMemo} />
//       </Fragment>
//   )

// return (
//     <Fragment>
//     <Header/>
//     <TodoItems/>
//     </Fragment>
// )

// }

export default App;
