import{u as D,B as R,a as T,b as $,r as b}from"./BaseInput-DlL1WrLb.js";import{T as k,a4 as q,L as w,g as E,U as L,P as S,A as v,k as p,q as _,a3 as h,o as C,c as F,a as I,b as r,w as u,u as a,F as M,f,x as U}from"./index-iYkTLCFw.js";import{B as A}from"./BaseFormGroup-oGxs-sNh.js";const H={__name:"CategoryAddPage",setup(P){const g=k(),i=q(),V=w(),B=E(),d=L(),s=S({title:""}),l=v(!1),o=D({formData:{title:{required:b}}},{formData:s}),c=p(()=>!o.value.formData.title.$error),y=p(()=>o.value.formData.title.$errors),N=function(){o.value.formData.title.$touch()},n=v("pending");return _(()=>{i.addEventListener("ready",async()=>{if(!await o.value.$validate()){l.value=!0;return}n.value="loading",await V.addOne({title:s.title,children:[],discounts:[],prices:[]}),n.value="success",setTimeout(()=>{const e={};d.query.backRouteName&&(e.noReset=!0),B.push({name:d.query.backRouteName||"Categories",query:e})},1500)})}),h(()=>{i.clearEventListeners("ready")}),(x,e)=>(C(),F(M,null,[I("div",null,[r(a(A),{"is-error":!c.value},{label:u(()=>[f(" Название категории * ")]),content:u(()=>[r(a(R),{placeholder:"Введите название","is-error":!c.value,modelValue:s.title,"onUpdate:modelValue":e[0]||(e[0]=t=>s.title=t),onInput:N},null,8,["is-error","modelValue"])]),"error-text":u(()=>{var t,m;return[f(U(a(g).validationMessages[(m=(t=y.value)==null?void 0:t.at(0))==null?void 0:m.$validator]),1)]}),_:1},8,["is-error"])]),r(a(T),{state:n.value},null,8,["state"]),r(a($),{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t),type:"error"},null,8,["modelValue"])],64))}};export{H as default};
