import{r as a,c,t as u,o as p}from"./runtime-core.esm-bundler.5a06699d.js";const l=(e,r)=>{const o=e.__vccOpts||e;for(const[t,n]of r)o[t]=n;return o},i={__name:"MysteryButton",props:["text"],setup(e,{expose:r}){r();const o=e;let t=a(!0);function n(){t.value=!1}const s={get show(){return t},set show(_){t=_},props:o,hideButton:n,ref:a};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},d={key:1,class:"px-3 py-2 mt-4"};function f(e,r,o,t,n,s){return t.show?(p(),c("button",{key:0,class:"bg-orange-500 rounded-xl px-3 py-2 mt-4 hover:bg-indigo-400",onClick:t.hideButton}," ¡Clícame para revelar! ")):(p(),c("p",d,u(t.props.text),1))}const h=l(i,[["render",f]]);export{h as default};