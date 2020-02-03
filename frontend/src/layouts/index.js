import styled from "styled-components";

export const MainContentWrapper=styled.div`
/* background-color: white; */
    position: relative;
    box-sizing: border-box;
    /* top:50px 设置 relative 相对
    fixed 刚好可以显示出来，navbar 的
    height 是 45px */
    top:50px; 
    /* 下面的 80% width 也很有用 */
    width:91%;
    /* // 下面这一行没什么用，是让文字居中 */
    /* text-align: center;  */
    /* TODO 下面这里参考实现水平居中方式，用左右
    两遍设置 margin-lef/right : auto
    https://segmentfault.com/a/1190000003110179 */
    /* margin:20px auto; */

    display:grid;
    grid-template-columns: 2fr 1fr;
`

export const LeftBarWrapper=styled.div`
 background-color:white;
    margin:20px;
    display:flex;
    flex-direction:column;
    border-radius: 3px;
`

export const RightBarWrapper=styled.div`
background-color:white;
    margin-top:20px;
    margin-right:30px;
    width:70%;
    /* 让 tag 自动排列就好 */
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(30px, 1fr));
    gap:5px;
`


