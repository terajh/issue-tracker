import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button{
        background: inherit ; 
        border:none; 
        box-shadow:none; 
        border-radius:0; 
        padding:0; 
        overflow:visible; 
        cursor:pointer
    }
    textarea {
        border: 0px;
        &::-webkit-scrollbar {
            width: 4px;
            background: rgba(255, 255, 255, 0.3);
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: "#007AFF";
        }
        &::-webkit-scrollbar-track {
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 10px;
            box-shadow: inset 0px 0px 5px white;
        }
        :focus-within,
        :focus {
            border: 0px;
            outline: 0px;
        }
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    @keyframes fade-in {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
        }
    }
    @keyframes fade-out {
        from {
        opacity: 1;
        }
        to {
        opacity: 0;
        }
    }
`;

export default GlobalStyles;
