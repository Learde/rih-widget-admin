import{_ as x,o,c as l,a as r,x as A,b as s,u as e,n as R,N as j,g as F,A as p,B as O,k as P,D as U,F as g,j as D,E as q,w as k,e as z,f as y,R as T,p as G,d as H}from"./index-436tC9rP.js";import{B as J,I as K,a as Q}from"./BaseSearchInput-CCZNEJVN.js";import{I as W}from"./IconLocation-cjhqrWpE.js";import{I as X}from"./IconDelete-DwjwV3ks.js";import{I as Y}from"./IconEdit-B9fWQRWJ.js";import{B as Z}from"./BaseDeleteModal-xrcPYuyQ.js";const ee={class:"heading"},te={class:"actions"},ae={__name:"PointCard",props:{point:{type:Object,required:!0},isLoading:{type:Boolean,default:!1}},emits:["edit","delete"],setup(n){return(t,i)=>(o(),l("div",{class:R(["point-card",{loading:n.isLoading}])},[r("span",ee,A(n.point.title),1),r("div",te,[s(e(Y),{class:"edit",onClick:i[0]||(i[0]=m=>t.$emit("edit"))}),s(e(X),{class:"delete",onClick:i[1]||(i[1]=m=>t.$emit("delete"))})])],2))}},S=x(ae,[["__scopeId","data-v-03a32d82"]]),$=n=>(G("data-v-889a68fe"),n=n(),H(),n),se={class:"points-page"},oe={class:"points-list"},ne={key:0,class:"no-points mt-small"},le=$(()=>r("span",{class:"no-points-text"}," Ничего не найдено ",-1)),ie={key:1,class:"no-points"},ce=$(()=>r("span",{class:"no-points-text"}," Нет добавленных пунктов проката ",-1)),de={__name:"PointsPage",setup(n){const t=j(),i=F(),m=p(12),v=p(1),f=p(""),u=O(f,400),E=P(()=>Math.ceil(t.meta.total/m.value)),C=P(()=>t.isManyLoading||t.listData.length>0),I=P(()=>!u.value||u.value.trim().length===0),L=function(c){v.value=c};let V="";const B=function(){V!==u.value&&(v.value=1),V=u.value,t.fetchMany({search:u.value,perPage:m.value,page:v.value})};U(B);const _=p(!1),h=p(null),w=function(c){_.value=!0,h.value=c},M=async function(){await t.deleteOne(h.value),B()},N=function(c){i.push({name:"EditPoint",params:{id:c}})};return(c,d)=>(o(),l(g,null,[r("div",se,[C.value||!I.value?(o(),l(g,{key:0},[s(e(J),{modelValue:f.value,"onUpdate:modelValue":d[0]||(d[0]=a=>f.value=a),class:"search-input"},null,8,["modelValue"]),r("div",oe,[e(t).isManyLoading?(o(),l(g,{key:1},D(12,a=>s(e(S),{point:{},key:a,"is-loading":""})),64)):(o(!0),l(g,{key:0},D(e(t).listData,a=>(o(),z(e(S),{point:a,key:a.id,onDelete:b=>w(a.id),onEdit:b=>N(a.id)},null,8,["point","onDelete","onEdit"]))),128))]),e(t).listData.length===0&&!I.value?(o(),l("div",ne,[s(e(K),{class:"no-points-icon"}),le])):q("",!0),s(e(Q),{class:"paginate","page-count":E.value,"click-handler":L,"model-value":v.value,"prev-text":"<","next-text":">"},null,8,["page-count","model-value"])],64)):(o(),l("div",ie,[s(e(W),{class:"no-points-icon"}),ce,s(e(T),{class:"add-point",to:{name:"AddPoint"}},{default:k(()=>[y(" Добавить пункт проката ")]),_:1})]))]),s(e(Z),{modelValue:_.value,"onUpdate:modelValue":d[1]||(d[1]=a=>_.value=a),onAccept:M,onClose:d[2]||(d[2]=a=>h.value=null)},{title:k(()=>[y(" Удаление пункта ")]),description:k(()=>[y(" Вы уверены, что хотите удалить этот пункт проката? ")]),_:1},8,["modelValue"])],64))}},fe=x(de,[["__scopeId","data-v-889a68fe"]]);export{fe as default};