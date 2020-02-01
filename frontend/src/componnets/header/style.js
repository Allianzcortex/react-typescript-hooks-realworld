import styled from "styled-components";

export const HeaderNavBar = styled.div`
display:flex;
    justify-content: space-between;
    background-color: white;
    position: fixed;
    top:0px;
    width: 100%;
    height: 45px;
    vertical-align: middle;
     line-height: 45px;
      /* border:1px solid blue; */
    left:0px;
    
    // TODO 再看 styled components 里类选择器的套用方法
    a {
    color:#556;
    text-decoration: none;
    font-size: 20px;
    font-weight:500;
    margin-left: 250px;
    }
`

export const HeaderRightNavBar=styled.div`
    display:flex;
    justify-content: space-around;
    margin-right: 200px;
    
    a {
     color:#556;
    text-decoration: none;
    /* border:1px solid blue; */
    margin-left:5px;
    margin-right:5px;
    font-weight: 350;
    }
`
