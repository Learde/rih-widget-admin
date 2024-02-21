import{_ as x,o as s,c as r,a as d,x as A,b as a,u as e,n as R,M as j,g as F,A as v,B as O,k as h,D as U,F as y,j as D,E as q,w as I,e as z,f as P,R as T,p as G,d as H}from"./index-436tC9rP.js";import{I as J}from"./IconPrice-Mj4hHvY8.js";import{B as K,I as Q,a as W}from"./BaseSearchInput-CCZNEJVN.js";import{I as X}from"./IconDelete-DwjwV3ks.js";import{I as Y}from"./IconEdit-B9fWQRWJ.js";import{B as Z}from"./BaseDeleteModal-xrcPYuyQ.js";const ee={class:"heading"},te={class:"actions"},ne={__name:"InventoryPriceCard",props:{inventoryPrice:{type:Object,required:!0},isLoading:{type:Boolean,default:!1}},emits:["edit","delete"],setup(o){return(t,i)=>(s(),r("div",{class:R(["inventory-price-card",{loading:o.isLoading}])},[d("span",ee,A(o.inventoryPrice.title),1),d("div",te,[a(e(Y),{class:"edit",onClick:i[0]||(i[0]=p=>t.$emit("edit"))}),a(e(X),{class:"delete",onClick:i[1]||(i[1]=p=>t.$emit("delete"))})])],2))}},S=x(ne,[["__scopeId","data-v-b840af68"]]),$=o=>(G("data-v-ff35f968"),o=o(),H(),o),ae={class:"inventory-prices-page"},se={class:"inventory-prices-list"},oe={key:0,class:"no-inventory-prices mt-small"},re=$(()=>d("span",{class:"no-inventory-prices-text"}," Ничего не найдено ",-1)),ie={key:1,class:"no-inventory-prices"},le=$(()=>d("span",{class:"no-inventory-prices-text"}," Нет добавленных тарифов ",-1)),ce={__name:"InventoryPricesPage",setup(o){const t=j(),i=F(),p=v(12),m=v(1),f=v(""),u=O(f,400),E=h(()=>Math.ceil(t.meta.total/p.value)),C=h(()=>t.isManyLoading||t.listData.length>0),k=h(()=>!u.value||u.value.trim().length===0),M=function(l){m.value=l};let V="";const B=function(){V!==u.value&&(m.value=1),V=u.value,t.fetchMany({search:u.value,perPage:p.value,page:m.value})};U(B);const g=v(!1),_=v(null),w=function(l){g.value=!0,_.value=l},L=async function(){await t.deleteOne(_.value),B()},b=function(l){i.push({name:"EditInventoryPrice",params:{id:l}})};return(l,c)=>(s(),r(y,null,[d("div",ae,[C.value||!k.value?(s(),r(y,{key:0},[a(e(K),{modelValue:f.value,"onUpdate:modelValue":c[0]||(c[0]=n=>f.value=n),class:"search-input"},null,8,["modelValue"]),d("div",se,[e(t).isManyLoading?(s(),r(y,{key:1},D(12,n=>a(e(S),{"inventory-price":{},key:n,"is-loading":""})),64)):(s(!0),r(y,{key:0},D(e(t).listData,n=>(s(),z(e(S),{"inventory-price":n,key:n.id,onDelete:N=>w(n.id),onEdit:N=>b(n.id)},null,8,["inventory-price","onDelete","onEdit"]))),128))]),e(t).listData.length===0&&!k.value?(s(),r("div",oe,[a(e(Q),{class:"no-inventory-prices-icon"}),re])):q("",!0),a(e(W),{class:"paginate","page-count":E.value,"click-handler":M,"model-value":m.value,"prev-text":"<","next-text":">"},null,8,["page-count","model-value"])],64)):(s(),r("div",ie,[a(e(J),{class:"no-inventory-prices-icon"}),le,a(e(T),{class:"add-inventory-price",to:{name:"AddInventoryPrice"}},{default:I(()=>[P(" Добавить тариф ")]),_:1})]))]),a(e(Z),{modelValue:g.value,"onUpdate:modelValue":c[1]||(c[1]=n=>g.value=n),onAccept:L,onClose:c[2]||(c[2]=n=>_.value=null)},{title:I(()=>[P(" Удаление тарифа ")]),description:I(()=>[P(" Вы уверены, что хотите удалить этот тариф? ")]),_:1},8,["modelValue"])],64))}},fe=x(ce,[["__scopeId","data-v-ff35f968"]]);export{fe as default};