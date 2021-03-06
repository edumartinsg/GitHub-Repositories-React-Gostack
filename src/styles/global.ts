import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
*{
  margin: 0px;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body{
  background: #F0F0F5 url(${githubBackground}) no-repeat 50% top;
  -webkit-font-smothing : antialiased;
}

body, input button{
  font-family: Roboto, sans-serif
}

#root{
  max-width: 960px;
  margin:0 auto;
  padding: 40px, 20px
}

button{
  cursor: pointer;
}
`;
