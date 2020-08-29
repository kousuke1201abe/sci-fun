import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,500,700&display=swap')
  ${reset}
  body {
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    details {
      text-decoration: none;
      padding: 20px;
      p {
        padding-top: 15px;
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
        border: none;
        text-align: left;
        font-size: 20px;
      }
      summary:focus {
        outline: none;
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
      color: #cf74a2;
    }
  }
`
const GlobalCSS = () => {
  return <Global />
}

export default GlobalCSS
