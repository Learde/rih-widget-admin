import{_ as x,o,c as l,a as r,t as A,b as s,u as e,s as R,$ as q,z,q as p,x as F,f as P,A as O,F as f,k as S,B as U,w as k,h as j,d as y,R as T,p as G,e as H}from"./index-pjyOXBHH.js";import{B as J,I as K,a as Q}from"./BaseSearchInput-X0JD09zj.js";import{I as W}from"./IconLocation-FEiwpJk6.js";import{I as X}from"./IconDelete-fxLnuIFP.js";import{I as Y}from"./IconEdit-qv0dnMgV.js";import{B as Z}from"./BaseDeleteModal-bERhwHxJ.js";const ee={class:"heading"},te={class:"actions"},ae={__name:"PointCard",props:{point:{type:Object,required:!0},isLoading:{type:Boolean,default:!1}},emits:["edit","delete"],setup(n){return(t,i)=>(o(),l("div",{class:R(["point-card",{loading:n.isLoading}])},[r("span",ee,A(n.point.title),1),r("div",te,[s(e(Y),{class:"edit",onClick:i[0]||(i[0]=m=>t.$emit("edit"))}),s(e(X),{class:"delete",onClick:i[1]||(i[1]=m=>t.$emit("delete"))})])],2))}},$=x(ae,[["__scopeId","data-v-03a32d82"]]),D=n=>(G("data-v-889a68fe"),n=n(),H(),n),se={class:"points-page"},oe={class:"points-list"},ne={key:0,class:"no-points mt-small"},le=D(()=>r("span",{class:"no-points-text"}," Ничего не найдено ",-1)),ie={key:1,class:"no-points"},ce=D(()=>r("span",{class:"no-points-text"}," Нет добавленных пунктов проката ",-1)),de={__name:"PointsPage",setup(n){const t=q(),i=z(),m=p(12),v=p(1),g=p(""),u=F(g,400),C=P(()=>Math.ceil(t.meta.total/m.value)),E=P(()=>t.isManyLoading||t.listData.length>0),I=P(()=>!u.value||u.value.trim().length===0),L=function(c){v.value=c};let V="";const B=function(){V!==u.value&&(v.value=1),V=u.value,t.fetchMany({search:u.value,perPage:m.value,page:v.value})};O(B);const h=p(!1),_=p(null),w=function(c){h.value=!0,_.value=c},M=async function(){await t.deleteOne(_.value),B()},b=function(c){i.push({name:"EditPoint",params:{id:c}})};return(c,d)=>(o(),l(f,null,[r("div",se,[E.value||!I.value?(o(),l(f,{key:0},[s(e(J),{modelValue:g.value,"onUpdate:modelValue":d[0]||(d[0]=a=>g.value=a),class:"search-input"},null,8,["modelValue"]),r("div",oe,[e(t).isManyLoading?(o(),l(f,{key:1},S(12,a=>s(e($),{point:{},key:a,"is-loading":""})),64)):(o(!0),l(f,{key:0},S(e(t).listData,a=>(o(),j(e($),{point:a,key:a.id,onDelete:N=>w(a.id),onEdit:N=>b(a.id)},null,8,["point","onDelete","onEdit"]))),128))]),e(t).listData.length===0&&!I.value?(o(),l("div",ne,[s(e(K),{class:"no-points-icon"}),le])):U("",!0),s(e(Q),{class:"paginate","page-count":C.value,"click-handler":L,"model-value":v.value,"prev-text":"<","next-text":">"},null,8,["page-count","model-value"])],64)):(o(),l("div",ie,[s(e(W),{class:"no-points-icon"}),ce,s(e(T),{class:"add-point",to:{name:"AddPoint"}},{default:k(()=>[y(" Добавить пункт проката ")]),_:1})]))]),s(e(Z),{modelValue:h.value,"onUpdate:modelValue":d[1]||(d[1]=a=>h.value=a),onAccept:M,onClose:d[2]||(d[2]=a=>_.value=null)},{title:k(()=>[y(" Удаление пункта ")]),description:k(()=>[y(" Вы уверены, что хотите удалить этот пункт проката? ")]),_:1},8,["modelValue"])],64))}},ge=x(de,[["__scopeId","data-v-889a68fe"]]);export{ge as default};