import{u as R,B as $,a as b,b as q,r as w}from"./BaseInput-nVZfDFq2.js";import{N as x,Z as E,G as S,z as T,O as _,M as h,q as v,f as p,j as k,Y as C,o as L,c as M,a as F,b as r,w as u,u as a,F as I,d as f,t as G}from"./index-pjyOXBHH.js";import{B as O}from"./BaseFormGroup-Kj1VUKRp.js";const Y={__name:"CategoryAddPage",setup(U){const V=x(),i=E(),g=S(),B=T(),d=_(),s=h({title:""}),l=v(!1),o=R({formData:{title:{required:w}}},{formData:s}),c=p(()=>!o.value.formData.title.$error),y=p(()=>o.value.formData.title.$errors),N=function(){o.value.formData.title.$touch()},n=v("pending");return k(()=>{i.addEventListener("ready",async()=>{if(!await o.value.$validate()){l.value=!0;return}n.value="loading",await g.addOne({title:s.title,children:[],discounts:[],prices:[]}),n.value="success",setTimeout(()=>{const e={};d.query.backRouteName&&(e.noReset=!0),B.push({name:d.query.backRouteName||"Categories",query:e})},1500)})}),C(()=>{i.clearEventListeners("ready")}),(D,e)=>(L(),M(I,null,[F("div",null,[r(a(O),{"is-error":!c.value},{label:u(()=>[f(" Название категории * ")]),content:u(()=>[r(a($),{placeholder:"Введите название","is-error":!c.value,modelValue:s.title,"onUpdate:modelValue":e[0]||(e[0]=t=>s.title=t),onInput:N},null,8,["is-error","modelValue"])]),"error-text":u(()=>{var t,m;return[f(G(a(V).validationMessages[(m=(t=y.value)==null?void 0:t.at(0))==null?void 0:m.$validator]),1)]}),_:1},8,["is-error"])]),r(a(b),{state:n.value},null,8,["state"]),r(a(q),{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t),type:"error"},null,8,["modelValue"])],64))}};export{Y as default};
