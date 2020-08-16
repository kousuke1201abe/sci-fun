import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Caveat');
@import url(https://fonts.googleapis.com/earlyaccess/notosansjp.css);
  ${reset}
  body {
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 1.5;
    details {
      padding: 20px;
      p {
        padding: 5px;
      }
      a {
        color: black;
      }
      width: 100%;
      background: #f5f5f5;
      border-radius: 5px;
      position: relative;
      .summary-title {
        user-select: none;
      }
      &:hover {
        cursor: pointer;
      }
      summary {
        text-align: center;
        font-size: 20px;
      }
    }
    blockquote {
      margin-top: 15px;
      margin-bottom: 15px;
      margin-left: 10px;
      padding: 15px;
      border-left: 3px solid #ccc;
    }
    strong {
      font-weight: bold;
    }
    em {
      font-style: italic;
    }
    hr {
      height: 1px;
      background: #2b2523;
      border: none;
      margin-bottom: 30px;
      margin-top: 10px;
    }
    a {
      color: #7f1184;
    }
  }
`
const GlobalCSS = () => {
  return <Global />
}

export default GlobalCSS
