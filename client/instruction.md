React 和 TypeScript 结合起来竟然是这么用：

const App:React.FC<{message:string}>=({message})=>{
    <div>{message}</div>
}

// 关于 react hooks 使用

Hooks are supported in @types/react

1. useState: 

有的可以用到类型推理：
const [val, toggle] = React.useState(false); // `val` is inferred to be a boolean, `toggle` only takes booleans

有的不可以，这个时候就需要显式指定：

const [user, setUser] = React.useState<IUser | null>(null);

使用 useRef 则是：

const ref1 = useRef<HTMLElement>(null!);
const ref2 = useRef<HTMLElement | null>(null);

使用 useEffect 时，和 js 一样：

When using useEffect, take care not to return anything other than a function or undefined,

custom hooks 和 class componnet 就没必要看

看起来 react.FC 会 break 掉 defaultProps

---

使用 interface 还是 type ?

interfaces 和 types 在 ts 里是不同的，但 react 可以使用相同的办法来
处理这些值。建议是：

Always use interface for public API's definition when authoring a library or 3rd party ambient type definitions.
Consider using type for your React Component Props and State, because it is more constrained.

Types are useful for union types (e.g. type MyType = TypeA | TypeB) whereas Interfaces are better for declaring dictionary shapes and then implementing or extending them.

---

下面就是用 props 一个很典型的例子：

type Props = {
  label: string;
  count: number;
  onIncrement: () => void;
};

export const FCCounter: React.FC<Props> = props => {
  const { label, count, onIncrement } = props;

  const handleIncrement = () => {
    onIncrement();
  };

  return (
    <div>
      <span>
        {label}: {count}
      </span>
      <button type="button" onClick={handleIncrement}>
        {`Increment`}
      </button>
    </div>
  );
};

下面是用 spread operator 来动态扩展：

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export const FCSpreadAttributes: React.FC<Props> = props => {
  const { children, ...restProps } = props;

  return <div {...restProps}>{children}</div>;
};

使用时如下：

 <SFCSpreadAttributes
    className={'classy'}
    style={{ backgroundColor: 'lightcyan' }}
  >
    {`I'll spread every property you give me!`}
  </SFCSpreadAttributes>
  
 ---
 
 一个用 React Hooks 例子：
 
 type Props = { initialCount: number };
 
 export default function Counter({initialCount}: Props) {
   const [count, setCount] = React.useState(initialCount);
   return (
     <>
       Count: {count}
       <button onClick={() => setCount(initialCount)}>Reset</button>
       <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
       <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
     </>
   );
 }
 
 ---
 
  typesafe-actions +immer.js 还是比较好：
  不用学 redux-toolkit ?
  具体使用如下：
  
  import { action } from 'typesafe-actions';
  
  import { ADD, INCREMENT } from './constants';
  
  /* SIMPLE API */
  
  export const increment = () => action(INCREMENT);
  export const add = (amount: number) => action(ADD, amount);
  
  /* ADVANCED API */
  
  // More flexible allowing to create complex actions more easily
  // use can use "action-creator" instance in place of "type constant"
  // e.g. case getType(increment): return action.payload;
  // This will allow to completely eliminate need for "constants" in your application, more info here:
  // https://github.com/piotrwitek/typesafe-actions#constants
  
  import { createAction } from 'typesafe-actions';
  import { Todo } from '../todos/models';
  
  export const emptyAction = createAction(INCREMENT)<void>();
  export const payloadAction = createAction(ADD)<number>();
  export const payloadMetaAction = createAction(ADD)<number, string>();
  
  export const payloadCreatorAction = createAction(
    'TOGGLE_TODO',
    (todo: Todo) => todo.id
  )<string>();
  
  // 使用时
  
  import store from '../../store';
  import { countersActions as counter } from '../counters';
  
  // store.dispatch(counter.increment(1)); // Error: Expected 0 arguments, but got 1.
  store.dispatch(counter.increment()); // OK
  
  // store.dispatch(counter.add()); // Error: Expected 1 arguments, but got 0.
  store.dispatch(counter.add(1)); // OK
  
  ---
  
  关于  combineReducers : 
  
  https://github.com/piotrwitek/react-redux-typescript-guide#typing-reducer
  
  感觉和纯 js 实现还挺类似
  
  ---
  
  typesafe-actions 有学习成本，我自己就暂时不用了
  
  这个链接里有最详细的讨论 ts + redux-thunk 使用：https://github.com/reduxjs/redux-thunk/issues/213
  这个是 StackOverflow 上的一个问题：https://stackoverflow.com/questions/56872370/redux-thunk-with-typescript
  
  这个是 js 里 redux-thunk 使用：https://github.com/frontend9/fe9-library/issues/214
  以及 digital ocean 教程：https://www.digitalocean.com/community/tutorials/redux-redux-thunk
  
  那么这个链接相对就是比较靠谱：https://segmentfault.com/a/1190000020958726#item-3-6
  把 js 的使用方式用 ts 重新写一遍，计划用这个作为教程来试一下
  
  官网里推荐的也是用 thunk-action : https://redux.js.org/recipes/usage-with-typescript#usage-with-redux-thunk
  
  ---
  
  - 要使用 semantic ui ，需要在 index.html 里加上下面这句话来显示 style
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
  - 安装 router 依赖
  
  npm i @types/react-router-dom  react-router react-router-dom

-  遇到一个 error : 
react router usehistory cannot read property 'history' of undefined

原因是不能在最顶层使用 useHistory，必须在 subComponent 里用
https://github.com/ReactTraining/react-router/issues/6939
https://stackoverflow.com/questions/58220995/cannot-read-property-history-of-undefined-usehistory-hook-of-react-router-5

---

semantic-ui 与 react-router 兼容

使用 as={} 这是最好的答案：

https://stackoverflow.com/questions/42081142/semantic-ui-react-how-to-use-link-components-in-menu-list-elements

---

semantic ui modal 要展示出来，需要设置
defaultOpen={true}

---

typescript 最新好像有一个 bug :

在 index.ts 文件里用 export * from ... 的时候会报错，是 ts 最新版的一个
regresssion bug 
https://github.com/typescript-eslint/typescript-eslint/issues/1746

---

localstorage getItem json

https://stackoverflow.com/questions/46915002/argument-of-type-string-null-is-not-assignable-to-parameter-of-type-string

---

如何使用 semantic ui react 来上传文件

https://codepen.io/apijay/pen/vJzwdK

---

react semantic ui 的一个 dash board

https://github.com/AlbionaHoti/react_admin_dashboard/tree/master/src
https://albionahoti.github.io/react_admin_dashboard/userManagement

以后有机会用这个 UI 来重构

---

setNotification 循环依赖，
自己 test 的 null 和子组件的 null 有重复定义的情况发生
https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/ 这是一篇很好的教程
以及这篇：使用 useEffect+setout 来执行：https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks

---

遇到问题：ts object is possibly null or udnefined

参考：https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined 

有两种解法：

一是用：const objectX = object as string 强制转换
二是用："!" 来做 assertion

// Error, some.expr may be null or undefined
let x = some.expr.thing;
// OK
let y = some.expr!.thing;

---

restful api : 

https://restfulapi.net/http-methods/#patch

部分更新应该用 patch

---

package.json 里 proxy 使用：

其实就取决于 axios 时是绝对路径"/foo" 还是相对路径 "foo"
前者很好，后者发出的 request url 会取决于当前浏览器的 url，好奇葩

参考：https://create-react-app.dev/docs/proxying-api-requests-in-development/

---



  

