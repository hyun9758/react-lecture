import { createElement as h } from "./lib/EUID.js";

const appElement = h(
    'div', 
    {
        id: 'app'
    }, 
    h(
        'h1', 
        {}, 
        '안녕!', 
        h('br'), 
        '리액트.'
    )
);

console.log(appElement);