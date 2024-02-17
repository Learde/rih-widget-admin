import{_ as h,o as l,c as v,a as m,f as _,D as j,E as L,t as k,h as g,u as e,B as S,s as b,n as G,F as f,k as V,p as B,e as D,G as H,w as i,d as y,b as c,r as M,H as J,J as Y,i as Q,g as W,K as X,l as Z,L as ee,y as te,z as ae,M as oe,q as T,N as re,O as se,j as ne}from"./index-fKPgX005.js";import{I as le}from"./IconCategory-_NnlCxXd.js";import{I as N,B as O}from"./BaseSelectMenu-P21DBXHF.js";import{I as ie}from"./IconPrice-FHexPgAI.js";import{B as ce}from"./BaseBadge-QdX8jjh3.js";import{B as de}from"./BaseButton-XQJzuSPn.js";import{u as ue,r as E,B as x,a as me}from"./BaseInput-9pf6eSRP.js";import{B as C}from"./BaseFormGroup-57tQ-1P9.js";const pe={name:"TablerPhoto"},ve={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},ye=m("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[m("path",{d:"M15 8h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6z"}),m("path",{d:"m3 16l5-5c.928-.893 2.072-.893 3 0l5 5"}),m("path",{d:"m14 14l1-1c.928-.893 2.072-.893 3 0l3 3"})],-1),fe=[ye];function ge(t,r,s,a,d,p){return l(),v("svg",ve,fe)}const he=h(pe,[["render",ge]]),_e=t=>(B("data-v-259de1d7"),t=t(),D(),t),$e=_e(()=>m("hr",{class:"category-delim"},null,-1)),Ie={__name:"SelectCategoryItem",props:{category:{type:Object,required:!0},hasBorder:{type:Boolean,default:!0},level:{type:Number,default:0},activeId:{type:[Number,String],default:null},isParentActive:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},emits:["click"],setup(t){const r=t,s=_(()=>j.isArray(r.category.children)&&r.category.children.length>0),a=_(()=>r.isParentActive||r.activeId===r.category.id),d=_(()=>`${r.level*30}px`);return(p,o)=>{const n=L("SelectCategoryItem",!0);return l(),v(f,null,[m("div",{class:b(["category-item",{loading:t.isLoading}]),style:G({marginLeft:d.value}),onClick:o[0]||(o[0]=u=>p.$emit("click",t.category))},[m("h3",null,k(t.category.title),1),a.value?(l(),g(e(N),{key:0,class:"icon-check"})):S("",!0)],6),$e,s.value?(l(!0),v(f,{key:0},V(t.category.children,u=>(l(),g(n,{key:u.id,category:u,level:t.level+1,"active-id":t.activeId,"is-parent-active":a.value,onClick:o[1]||(o[1]=$=>p.$emit("click",$))},null,8,["category","level","active-id","is-parent-active"]))),128)):S("",!0)],64)}}},A=h(Ie,[["__scopeId","data-v-259de1d7"]]),ke=t=>(B("data-v-95c18537"),t=t(),D(),t),Ve={class:"select-category-content"},be={key:1,class:"no-categories"},Se=ke(()=>m("span",{class:"no-categories-text"}," Нет добавленных категорий ",-1)),Be={__name:"SelectCategory",props:{isError:{type:Boolean,default:!1},modelValue:{type:Object,default:null}},emits:["update:modelValue"],setup(t){const r=H(),s=function(){r.hasUnloadedOptions&&r.fetchMany({perPage:999,page:1,search:""})};return(a,d)=>{const p=L("RouterLink");return l(),g(e(O),{"modal-title":"Категория инвентаря","is-error":t.isError,onOpen:s},{label:i(()=>[y(" Категория ")]),"modal-content":i(()=>[m("div",Ve,[!e(r).isManyLoading&&e(r).listData.length>0?(l(!0),v(f,{key:0},V(e(r).listData,(o,n)=>{var u;return l(),g(A,{key:o.id,category:o,"has-border":n!==e(r).listData.length-1,"active-id":(u=t.modelValue)==null?void 0:u.id,onClick:d[0]||(d[0]=$=>a.$emit("update:modelValue",$))},null,8,["category","has-border","active-id"])}),128)):!e(r).isManyLoading&&e(r).listData.length===0?(l(),v("div",be,[c(e(le),{class:"no-categories-icon"}),Se,c(p,{class:"add-category",to:{name:"AddCategory",query:{backRouteName:"AddInventory"}}},{default:i(()=>[y(" Добавить категорию ")]),_:1})])):(l(),v(f,{key:2},V(8,o=>c(A,{key:o,category:{},"has-border":o!==8,"is-loading":""},null,8,["has-border"])),64))])]),"error-text":i(()=>[M(a.$slots,"error-text",{},void 0,!0)]),_:3},8,["is-error"])}}},De=h(Be,[["__scopeId","data-v-95c18537"]]),Ce=t=>(B("data-v-9b48fbdf"),t=t(),D(),t),we=Ce(()=>m("hr",{class:"inventory-price-delim"},null,-1)),Ee={__name:"SelectInventoryPriceItem",props:{inventoryPrice:{type:Object,required:!0},hasBorder:{type:Boolean,default:!0},level:{type:Number,default:0},isActive:{type:Boolean,defulat:!1},isLoading:{type:Boolean,default:!1}},emits:["click"],setup(t){return(r,s)=>(l(),v(f,null,[m("div",{class:b(["inventory-price-item",{loading:t.isLoading}]),onClick:s[0]||(s[0]=a=>r.$emit("click",t.inventoryPrice))},[m("h3",null,k(t.inventoryPrice.title),1),t.isActive?(l(),g(e(N),{key:0,class:"icon-check"})):S("",!0)],2),we],64))}},R=h(Ee,[["__scopeId","data-v-9b48fbdf"]]),xe=t=>(B("data-v-878674f8"),t=t(),D(),t),Le={class:"select-inventory-price-content"},Me={key:1,class:"no-inventory-prices"},Ne=xe(()=>m("span",{class:"no-inventory-prices-text"}," Нет добавленных тарифов ",-1)),Oe={__name:"SelectInventoryPrice",props:{isError:{type:Boolean,default:!1},modelValue:{type:Object,default:null}},emits:["update:modelValue"],setup(t){const r=J(),s=function(){r.hasUnloadedOptions&&r.fetchMany({perPage:999,page:1,search:""})};return(a,d)=>{const p=L("RouterLink");return l(),g(e(O),{"modal-title":"Тарифы","is-error":t.isError,onOpen:s},{label:i(()=>[y(" Тариф * ")]),"modal-content":i(()=>[m("div",Le,[!e(r).isManyLoading&&e(r).listData.length>0?(l(!0),v(f,{key:0},V(e(r).listData,(o,n)=>{var u;return l(),g(R,{key:o.id,"inventory-price":o,"has-border":n!==e(r).listData.length-1,"is-active":o.id===((u=t.modelValue)==null?void 0:u.id),onClick:d[0]||(d[0]=$=>a.$emit("update:modelValue",$))},null,8,["inventory-price","has-border","is-active"])}),128)):!e(r).isManyLoading&&e(r).listData.length===0?(l(),v("div",Me,[c(e(ie),{class:"no-inventory-prices-icon"}),Ne,c(p,{class:"add-inventory-price",to:{name:"AddInventoryPrice",query:{backRouteName:"AddInventory"}}},{default:i(()=>[y(" Добавить тариф ")]),_:1})])):(l(),v(f,{key:2},V(8,o=>c(R,{key:o,"inventory-price":{},"has-border":o!==8,"is-loading":""},null,8,["has-border"])),64))])]),"error-text":i(()=>[M(a.$slots,"error-text",{},void 0,!0)]),_:3},8,["is-error"])}}},Pe=h(Oe,[["__scopeId","data-v-878674f8"]]),Te={key:0,class:"select-state-delim"},Ae={__name:"SelectInventoryStateItem",props:{state:{type:Object,required:!0},description:{type:String,default:""},hasBorder:{type:Boolean,default:!0},isActive:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},setup(t){return(r,s)=>(l(),v(f,null,[m("div",{class:"select-state-badge-wrapper",onClick:s[0]||(s[0]=a=>r.$emit("click"))},[c(e(ce),{class:b(["select-state-badge",{loading:t.isLoading}]),color:t.state.color,size:"md","padding-x":"8px"},{default:i(()=>[y(k(t.state.title),1)]),_:1},8,["class","color"])]),m("div",{class:b(["select-state-description-wrapper",{mr:t.isActive}]),onClick:s[1]||(s[1]=a=>r.$emit("click"))},[m("span",{class:b(["select-state-description",{loading:t.isLoading}])},k(t.description),3),t.isActive?(l(),g(e(N),{key:0,class:"select-state-check"})):S("",!0)],2),t.hasBorder?(l(),v("hr",Te)):S("",!0)],64))}},F=h(Ae,[["__scopeId","data-v-dd5330e8"]]),U={FREE:"Инвентарь доступен для аренды",BROKEN:"Инвентарь недоступен для аренды",RENT:"Инвентарь сейчас находится в аренде",BOOKED:"На инвентарь имеются аренды в будущем времени",default:"Пользовательский статус инвентаря"},Re={class:"select-state-content"},Fe={__name:"SelectInventoryState",props:{isError:{type:Boolean,default:!1},modelValue:{type:Object,default:null}},emits:["update:modelValue"],setup(t){const r=Y(),s=function(){r.hasUnloadedOptions&&r.fetchMany({perPage:999,page:1,search:""})};return(a,d)=>(l(),g(e(O),{"modal-title":"Статус инвентаря","is-error":t.isError,onOpen:s},{label:i(()=>[y(" Статус * ")]),"modal-content":i(()=>[m("div",Re,[e(r).isManyLoading?(l(),v(f,{key:1},V(4,p=>c(F,{key:p,state:{},"has-border":p!==4,"is-loading":""},null,8,["has-border"])),64)):(l(!0),v(f,{key:0},V(e(r).listData,(p,o)=>{var n;return l(),g(F,{key:p.id,state:p,description:e(U)[p.stateConst]??e(U).default,"has-border":o!==e(r).listData.length-1,"is-active":p.id===((n=t.modelValue)==null?void 0:n.id),onClick:u=>a.$emit("update:modelValue",p)},null,8,["state","description","has-border","is-active","onClick"])}),128))])]),"error-text":i(()=>[M(a.$slots,"error-text",{},void 0,!0)]),_:3},8,["is-error"]))}},Ue=h(Fe,[["__scopeId","data-v-f995448b"]]),je=t=>(B("data-v-39b7091f"),t=t(),D(),t),qe={class:"image-select"},ze=je(()=>m("label",{class:"label"},"Добавить изображение",-1)),Ke={__name:"BaseImageSelect",setup(t){return(r,s)=>(l(),v("div",qe,[c(e(he),{class:"icon"}),ze]))}},Ge=h(Ke,[["__scopeId","data-v-39b7091f"]]),He={class:"wrapper"},Je=["placeholder"],Ye={__name:"BaseTextarea",props:{placeholder:{type:String,default:""},modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(t,{emit:r}){const d=Q(t,"modelValue",r);return(p,o)=>(l(),v("div",He,[W(m("textarea",{class:"input",placeholder:t.placeholder,"onUpdate:modelValue":o[0]||(o[0]=n=>Z(d)?d.value=n:null)},null,8,Je),[[X,e(d)]])]))}},Qe=h(Ye,[["__scopeId","data-v-ee21efb9"]]),We={title:"",article:"",inventoryNumber:"",description:"",state:null,category:null,price:null},Xe=ee("inventoryForm",()=>{const t=te(),r=ae();let s=oe(j.clone(We));const a=T("pending"),d=T(null),o=ue({formData:{title:{required:E},state:{required:E},price:{required:E}}},{formData:s}),n=_(()=>!o.value.formData.title.$error),u=_(()=>!o.value.formData.price.$error),$=_(()=>!o.value.formData.state.$error),q=_(()=>o.value.formData.title.$errors),z=_(()=>o.value.formData.price.$errors),K=_(()=>o.value.formData.state.$errors),P=function(){s.title="",s.article="",s.inventoryNumber="",s.description="",s.state=null,s.category=null,s.price=null,a.value="pending",d.value=null,o.value.$reset()};return{save:async function(){await o.value.$validate()&&(a.value="loading",d.value?await t.editOne(d.value,{id:d.value,...s}):await t.addOne(s),a.value="success",setTimeout(()=>{a.value="pending",P(),r.push({name:"Inventories"})},1500))},handleTitleInput:function(){o.value.formData.title.$touch()},formData:s,state:a,v$:o,isTitleValid:n,isPriceValid:u,isStateValid:$,titleErrors:q,priceErrors:z,stateErrors:K,fillFormData:async function(w){const I=await t.getOne(w);s.title=I.title,s.article=I.article,s.inventoryNumber=I.inventoryNumber,s.description=I.description,s.state=I.state,s.category=I.category,s.price=I.price,d.value=w},$reset:P}}),Ze={class:"wrapper"},et={__name:"InventoryAddPage",props:{id:{type:[String,Number],default:null}},setup(t){const r=t,s=re(),a=Xe(),d=se();return ne(()=>{d.query.noReset||(a.$reset(),r.id&&a.fillFormData(r.id))}),(p,o)=>(l(),v(f,null,[m("div",Ze,[c(e(C),{"is-error":!e(a).isTitleValid},{label:i(()=>[y(" Название инвентаря * ")]),content:i(()=>[c(e(x),{placeholder:"Введите название","is-error":!e(a).isTitleValid,modelValue:e(a).formData.title,"onUpdate:modelValue":o[0]||(o[0]=n=>e(a).formData.title=n),onInput:e(a).handleTitleInput},null,8,["is-error","modelValue","onInput"])]),"error-text":i(()=>{var n,u;return[y(k(e(s).validationMessages[(u=(n=e(a).titleErrors)==null?void 0:n.at(0))==null?void 0:u.$validator]),1)]}),_:1},8,["is-error"]),c(e(C),null,{label:i(()=>[y(" Артикул ")]),content:i(()=>[c(e(x),{placeholder:"Введите артикул",modelValue:e(a).formData.article,"onUpdate:modelValue":o[1]||(o[1]=n=>e(a).formData.article=n)},null,8,["modelValue"])]),_:1}),c(e(C),null,{label:i(()=>[y(" Инвентарный номер ")]),content:i(()=>[c(e(x),{placeholder:"Введите номер",modelValue:e(a).formData.inventoryNumber,"onUpdate:modelValue":o[2]||(o[2]=n=>e(a).formData.inventoryNumber=n)},null,8,["modelValue"])]),_:1}),c(e(C),null,{label:i(()=>[y(" Описание ")]),content:i(()=>[c(e(Qe),{placeholder:"Введите описание",modelValue:e(a).formData.description,"onUpdate:modelValue":o[3]||(o[3]=n=>e(a).formData.description=n)},null,8,["modelValue"])]),_:1}),c(e(Ue),{modelValue:e(a).formData.state,"onUpdate:modelValue":o[4]||(o[4]=n=>e(a).formData.state=n),"is-error":!e(a).isStateValid},{"error-text":i(()=>{var n,u;return[y(k(e(s).validationMessages[(u=(n=e(a).stateErrors)==null?void 0:n.at(0))==null?void 0:u.$validator]),1)]}),_:1},8,["modelValue","is-error"]),c(e(De),{modelValue:e(a).formData.category,"onUpdate:modelValue":o[5]||(o[5]=n=>e(a).formData.category=n)},null,8,["modelValue"]),c(e(Pe),{modelValue:e(a).formData.price,"onUpdate:modelValue":o[6]||(o[6]=n=>e(a).formData.price=n),"is-error":!e(a).isPriceValid},{"error-text":i(()=>{var n,u;return[y(k(e(s).validationMessages[(u=(n=e(a).priceErrors)==null?void 0:n.at(0))==null?void 0:u.$validator]),1)]}),_:1},8,["modelValue","is-error"]),c(e(Ge)),c(e(de),{onClick:e(a).save},{default:i(()=>[y("Сохранить")]),_:1},8,["onClick"])]),c(e(me),{state:e(a).state},null,8,["state"])],64))}},mt=h(et,[["__scopeId","data-v-b5cb1925"]]);export{mt as default};