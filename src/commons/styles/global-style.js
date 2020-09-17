import {createGlobalStyle} from 'styled-components'
import CovidBG from './../../assets/images/bg.jpg'

const globalStyle = createGlobalStyle`

*{
    outline: none;
    box-sizing:border-box;
}

body{
    line-height: normal;
    width:100%;
    height: 100%;
    background: url(${CovidBG});
    background-size: cover;
    background-position: center center;

}

html{
    width:100%;
    min-height: 100%;
    display: flex;
    padding:0;
    margin:0;
}

#root{
    width:100%;
    height: 100%;
}

`

export default globalStyle