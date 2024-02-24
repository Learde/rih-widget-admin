import{J as te,K as ae,_ as $,o as r,c as y,a as c,m as C,L as K,r as E,y as w,e as V,u as t,G as O,n as x,x as X,F as I,j as D,p as P,d as L,M as oe,w as v,f as b,b as m,i as M,N as R,O as ne,P as le,Q as se,t as G,B as T,S as Z,I as re,q as ie,T as de,z as ce,U as ue,D as me,k as ee,g as pe,V as ve,W as fe,l as ye}from"./index-CtEuYAy1.js";import{I as ge}from"./IconCategory-XdIJTWqb.js";import{I as F,B as U}from"./BaseSelectMenu-BDEXyPuZ.js";import{I as he}from"./IconPrice-B5ANKND1.js";import{I as ke}from"./IconLocation-CVcs_xn-.js";import{B as be}from"./BaseBadge-D9zsiUM_.js";import{B as Ie}from"./BaseButton-Dt1kSBWi.js";import{u as Se,r as q,B as z,a as Ve,b as $e}from"./BaseInput-SKxtzVrf.js";import{I as _e}from"./IconDelete-C-E87YfA.js";import{B as A}from"./BaseFormGroup-CQZnYBTp.js";const De=async function(a){var l;const s=(await te({url:"https://media.rentinhand.ru/upload/public",method:"post",data:a,withCredentials:!1})).data;return ae((l=s==null?void 0:s.array)==null?void 0:l[0])},Be={name:"TablerPhoto"},Ce={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},we=c("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[c("path",{d:"M15 8h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6z"}),c("path",{d:"m3 16l5-5c.928-.893 2.072-.893 3 0l5 5"}),c("path",{d:"m14 14l1-1c.928-.893 2.072-.893 3 0l3 3"})],-1),Ne=[we];function xe(a,s,l,e,i,u){return r(),y("svg",Ce,Ne)}const Pe=$(Be,[["render",xe]]),Le=a=>(P("data-v-259de1d7"),a=a(),L(),a),Oe=Le(()=>c("hr",{class:"category-delim"},null,-1)),Ae={__name:"SelectCategoryItem",props:{category:{type:Object,required:!0},hasBorder:{type:Boolean,default:!0},level:{type:Number,default:0},activeId:{type:[Number,String],default:null},isParentActive:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},emits:["click"],setup(a){const s=a,l=C(()=>K.isArray(s.category.children)&&s.category.children.length>0),e=C(()=>s.isParentActive||s.activeId===s.category.id),i=C(()=>`${s.level*30}px`);return(u,d)=>{const f=E("SelectCategoryItem",!0);return r(),y(I,null,[c("div",{class:x(["category-item",{loading:a.isLoading}]),style:X({marginLeft:i.value}),onClick:d[0]||(d[0]=o=>u.$emit("click",a.category))},[c("h3",null,w(a.category.title),1),e.value?(r(),V(t(F),{key:0,class:"icon-check"})):O("",!0)],6),Oe,l.value?(r(!0),y(I,{key:0},D(a.category.children,o=>(r(),V(f,{key:o.id,category:o,level:a.level+1,"active-id":a.activeId,"is-parent-active":e.value,onClick:d[1]||(d[1]=n=>u.$emit("click",n))},null,8,["category","level","active-id","is-parent-active"]))),128)):O("",!0)],64)}}},H=$(Ae,[["__scopeId","data-v-259de1d7"]]),Te=a=>(P("data-v-263c6140"),a=a(),L(),a),Ee={class:"select-category-content"},Me={key:1,class:"no-categories"},Re=Te(()=>c("span",{class:"no-categories-text"}," Нет добавленных категорий ",-1)),Fe={__name:"SelectCategory",props:{isError:{type:Boolean,default:!1},modelValue:{type:Object,default:null},backRouteName:{type:String,default:"AddInventory"}},emits:["update:modelValue","fetched"],setup(a,{emit:s}){const l=s,e=oe(),i=async function(){e.hasUnloadedOptions&&(await e.fetchMany({perPage:999,page:1,search:""}),await R(),l("fetched"))},u=function(d,f){l("update:modelValue",d),f()};return(d,f)=>{var n;const o=E("RouterLink");return r(),V(t(U),{"modal-title":"Категория инвентаря",placeholder:"Не выбрана","is-error":a.isError,value:(n=a.modelValue)==null?void 0:n.title,"add-route-name":"AddCategory","back-route-name":a.backRouteName,onOpen:i},{label:v(()=>[b(" Категория ")]),"modal-content":v(({closeModal:p})=>[c("div",Ee,[!t(e).isManyLoading&&t(e).listData.length>0?(r(!0),y(I,{key:0},D(t(e).listData,(g,_)=>{var k;return r(),V(H,{key:g.id,category:g,"has-border":_!==t(e).listData.length-1,"active-id":(k=a.modelValue)==null?void 0:k.id,onClick:S=>u(S,p)},null,8,["category","has-border","active-id","onClick"])}),128)):!t(e).isManyLoading&&t(e).listData.length===0?(r(),y("div",Me,[m(t(ge),{class:"no-categories-icon"}),Re,m(o,{class:"add-category",to:{name:"AddCategory"}},{default:v(()=>[b(" Добавить категорию ")]),_:1})])):(r(),y(I,{key:2},D(8,g=>m(H,{key:g,category:{},"has-border":g!==8,"is-loading":""},null,8,["has-border"])),64))])]),"error-text":v(()=>[M(d.$slots,"error-text",{},void 0,!0)]),_:3},8,["is-error","value","back-route-name"])}}},Ue=$(Fe,[["__scopeId","data-v-263c6140"]]),je=a=>(P("data-v-9b48fbdf"),a=a(),L(),a),qe=je(()=>c("hr",{class:"inventory-price-delim"},null,-1)),ze={__name:"SelectInventoryPriceItem",props:{inventoryPrice:{type:Object,required:!0},hasBorder:{type:Boolean,default:!0},level:{type:Number,default:0},isActive:{type:Boolean,defulat:!1},isLoading:{type:Boolean,default:!1}},emits:["click"],setup(a){return(s,l)=>(r(),y(I,null,[c("div",{class:x(["inventory-price-item",{loading:a.isLoading}]),onClick:l[0]||(l[0]=e=>s.$emit("click",a.inventoryPrice))},[c("h3",null,w(a.inventoryPrice.title),1),a.isActive?(r(),V(t(F),{key:0,class:"icon-check"})):O("",!0)],2),qe],64))}},J=$(ze,[["__scopeId","data-v-9b48fbdf"]]),Ke=a=>(P("data-v-42ae4e2a"),a=a(),L(),a),Ge={class:"select-inventory-price-content"},He={key:1,class:"no-inventory-prices"},Je=Ke(()=>c("span",{class:"no-inventory-prices-text"}," Нет добавленных тарифов ",-1)),Qe={__name:"SelectInventoryPrice",props:{isError:{type:Boolean,default:!1},modelValue:{type:Object,default:null},backRouteName:{type:String,default:"AddInventory"}},emits:["update:modelValue","opened","fetched","selected"],setup(a,{emit:s}){const l=s,e=ne(),i=async function(){e.hasUnloadedOptions&&(await e.fetchMany({perPage:999,page:1,search:""}),await R(),l("fetched"))},u=function(d,f){l("update:modelValue",d),l("selected",d),f()};return(d,f)=>{var n;const o=E("RouterLink");return r(),V(t(U),{"modal-title":"Тарифы","is-error":a.isError,value:(n=a.modelValue)==null?void 0:n.title,"add-route-name":"AddInventoryPrice","back-route-name":a.backRouteName,onOpen:i,onOpened:f[0]||(f[0]=p=>l("opened"))},{label:v(()=>[b(" Тариф * ")]),"modal-content":v(({closeModal:p})=>[c("div",Ge,[!t(e).isManyLoading&&t(e).listData.length>0?(r(!0),y(I,{key:0},D(t(e).listData,(g,_)=>{var k;return r(),V(J,{key:g.id,"inventory-price":g,"has-border":_!==t(e).listData.length-1,"is-active":g.id===((k=a.modelValue)==null?void 0:k.id),onClick:S=>u(S,p)},null,8,["inventory-price","has-border","is-active","onClick"])}),128)):!t(e).isManyLoading&&t(e).listData.length===0?(r(),y("div",He,[m(t(he),{class:"no-inventory-prices-icon"}),Je,m(o,{class:"add-inventory-price",to:{name:"AddInventoryPrice",query:{backRouteName:"AddInventory"}}},{default:v(()=>[b(" Добавить тариф ")]),_:1})])):(r(),y(I,{key:2},D(8,g=>m(J,{key:g,"inventory-price":{},"has-border":g!==8,"is-loading":""},null,8,["has-border"])),64))])]),"error-text":v(()=>[M(d.$slots,"error-text",{},void 0,!0)]),_:3},8,["is-error","value","back-route-name"])}}},We=$(Qe,[["__scopeId","data-v-42ae4e2a"]]),Ye=a=>(P("data-v-5bcb63d4"),a=a(),L(),a),Xe=Ye(()=>c("hr",{class:"point-price-delim"},null,-1)),Ze={__name:"SelectPointItem",props:{point:{type:Object,required:!0},hasBorder:{type:Boolean,default:!0},level:{type:Number,default:0},isActive:{type:Boolean,defulat:!1},isLoading:{type:Boolean,default:!1}},emits:["click"],setup(a){return(s,l)=>(r(),y(I,null,[c("div",{class:x(["point-item",{loading:a.isLoading}]),onClick:l[0]||(l[0]=e=>s.$emit("click",a.point))},[c("h3",null,w(a.point.title),1),a.isActive?(r(),V(t(F),{key:0,class:"icon-check"})):O("",!0)],2),Xe],64))}},Q=$(Ze,[["__scopeId","data-v-5bcb63d4"]]),et=a=>(P("data-v-2886e1a1"),a=a(),L(),a),tt={class:"select-point-content"},at={key:1,class:"no-points"},ot=et(()=>c("span",{class:"no-points-text"}," Нет добавленных точек проката ",-1)),nt={__name:"SelectPoint",props:{isError:{type:Boolean,default:!1},modelValue:{type:Object,default:null},backRouteName:{type:String,default:"AddInventory"}},emits:["update:modelValue","fetched"],setup(a,{emit:s}){const l=s,e=le(),i=async function(){e.hasUnloadedOptions&&(await e.fetchMany({perPage:999,page:1,search:""}),await R(),l("fetched"))},u=function(d,f){l("update:modelValue",d),f()};return(d,f)=>{var n;const o=E("RouterLink");return r(),V(t(U),{"modal-title":"Пункты проката","is-error":a.isError,value:(n=a.modelValue)==null?void 0:n.title,"add-route-name":"AddPoint","back-route-name":a.backRouteName,onOpen:i},{label:v(()=>[b(" Пункт проката ")]),"modal-content":v(({closeModal:p})=>[c("div",tt,[!t(e).isManyLoading&&t(e).listData.length>0?(r(!0),y(I,{key:0},D(t(e).listData,(g,_)=>{var k;return r(),V(Q,{key:g.id,point:g,"has-border":_!==t(e).listData.length-1,"is-active":g.id===((k=a.modelValue)==null?void 0:k.id),onClick:S=>u(S,p)},null,8,["point","has-border","is-active","onClick"])}),128)):!t(e).isManyLoading&&t(e).listData.length===0?(r(),y("div",at,[m(t(ke),{class:"no-points-icon"}),ot,m(o,{class:"add-point",to:{name:"AddPoint",query:{backRouteName:"AddInventory"}}},{default:v(()=>[b(" Добавить точку проката ")]),_:1})])):(r(),y(I,{key:2},D(8,g=>m(Q,{key:g,point:{},"has-border":g!==8,"is-loading":""},null,8,["has-border"])),64))])]),"error-text":v(()=>[M(d.$slots,"error-text",{},void 0,!0)]),_:3},8,["is-error","value","back-route-name"])}}},lt=$(nt,[["__scopeId","data-v-2886e1a1"]]),W={FREE:"Инвентарь доступен для аренды",BROKEN:"Инвентарь недоступен для аренды",RENT:"Инвентарь сейчас находится в аренде",BOOKED:"На инвентарь имеются аренды в будущем времени",default:"Пользовательский статус инвентаря"},st={key:0,class:"select-state-delim"},rt={__name:"SelectInventoryStateItem",props:{state:{type:Object,required:!0},description:{type:String,default:""},hasBorder:{type:Boolean,default:!0},isActive:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},setup(a){return(s,l)=>(r(),y(I,null,[c("div",{class:"select-state-badge-wrapper",onClick:l[0]||(l[0]=e=>s.$emit("click"))},[m(t(be),{class:x(["select-state-badge",{loading:a.isLoading}]),color:a.state.color,size:"md","padding-x":"8px"},{default:v(()=>[b(w(a.state.title),1)]),_:1},8,["class","color"])]),c("div",{class:x(["select-state-description-wrapper",{mr:a.isActive}]),onClick:l[1]||(l[1]=e=>s.$emit("click"))},[c("span",{class:x(["select-state-description",{loading:a.isLoading}])},w(a.description),3),a.isActive?(r(),V(t(F),{key:0,class:"select-state-check"})):O("",!0)],2),a.hasBorder?(r(),y("hr",st)):O("",!0)],64))}},Y=$(rt,[["__scopeId","data-v-dd5330e8"]]),it={class:"select-state-content"},dt={__name:"SelectInventoryState",props:{isError:{type:Boolean,default:!1},modelValue:{type:Object,default:null}},emits:["update:modelValue","opened","fetched","selected"],setup(a,{emit:s}){const l=s,e=se(),i=async function(){e.hasUnloadedOptions&&(await e.fetchMany({perPage:999,page:1,search:""}),await R(),l("fetched"))},u=function(d,f){l("update:modelValue",d),l("selected"),f()};return(d,f)=>{var o;return r(),V(t(U),{"modal-title":"Статус инвентаря","is-error":a.isError,value:(o=a.modelValue)==null?void 0:o.title,onOpen:i,onOpened:f[0]||(f[0]=n=>l("opened"))},{label:v(()=>[b(" Статус * ")]),"modal-content":v(({closeModal:n})=>[c("div",it,[t(e).isManyLoading?(r(),y(I,{key:1},D(4,p=>m(Y,{key:p,state:{},"has-border":p!==4,"is-loading":""},null,8,["has-border"])),64)):(r(!0),y(I,{key:0},D(t(e).listData,(p,g)=>{var _;return r(),V(Y,{key:p.id,state:p,description:t(W)[p.stateConst]??t(W).default,"has-border":g!==t(e).listData.length-1,"is-active":p.id===((_=a.modelValue)==null?void 0:_.id),onClick:k=>u(p,n)},null,8,["state","description","has-border","is-active","onClick"])}),128))])]),"error-text":v(()=>[M(d.$slots,"error-text",{},void 0,!0)]),_:3},8,["is-error","value"])}}},ct=$(dt,[["__scopeId","data-v-f86763ce"]]),ut=a=>(P("data-v-b04c8928"),a=a(),L(),a),mt={class:"image-select-wrapper"},pt={class:"image-selected-img-wrapper"},vt={class:"image-selected-actions"},ft=ut(()=>c("label",{class:"label"},"Добавить изображение",-1)),yt={__name:"BaseImageSelect",props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(a,{emit:s}){const i=G(a,"modelValue",s),u=T(null);let d=0;const f=[{title:"Фото или другой медиафайл",id:4},{title:"Аватар, обложка",id:70}],o=function(){u.value.click()},n=function(){return i.value.some(k=>k.dictId===70)},p=async function(k){const S=new FormData;S.append("file",k.target.files[0]);const h=Z({id:++d,isLoading:!0,src:null,resourceId:null,dictId:null,orderId:0});h.dictId=n()?4:70,K.isArray(i.value)?i.value.push(h):i.value=[h];const N=await De(S);h.id=N.id,h.resourceId=N.resourceId,h.src=N.src,h.isLoading=!1},g=async function(k){if(Number(k.dictId)===70){const S=i.value.find(h=>h.dictId===70&&h.id!==k.id);S.dictId=4}},_=function(k){i.value=i.value.filter(S=>S.id!==k.id)};return(k,S)=>(r(),y("div",mt,[(r(!0),y(I,null,D(t(i),h=>(r(),y("div",{class:x(["image-selected",{loading:h.isLoading}]),key:h.id},[c("div",pt,[c("div",{style:X({backgroundImage:"url(https://media.rentinhand.ru/"+h.src+")"}),class:"image-selected-img"},null,4)]),m(t(St),{class:"image-selected-type",options:f,modelValue:h.dictId,"onUpdate:modelValue":N=>h.dictId=N,onSelect:N=>g(h),disabled:h.isLoading},null,8,["modelValue","onUpdate:modelValue","onSelect","disabled"]),c("div",vt,[m(t(_e),{class:"image-selected-delete",onClick:N=>_(h)},null,8,["onClick"])])],2))),128)),c("div",{class:"image-select",onClick:o},[m(t(Pe),{class:"icon"}),ft]),c("input",{type:"file",ref_key:"fileDialog",ref:u,accept:"image/*",onChange:p},null,544)]))}},gt=$(yt,[["__scopeId","data-v-b04c8928"]]),ht={class:"base-select-wrapper"},kt=["value","disabled"],bt=["value"],It={__name:"BaseSelect",props:{options:{type:Array,default:()=>[]},label:{type:String,default:"title"},modelValue:{type:null,default:null},reduce:{type:Function,default:Number},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:s}){const l=a,e=s,i=G(l,"modelValue",e),u=d=>{const f=l.reduce(d.target.value);e("update:modelValue",f),e("select",f)};return(d,f)=>(r(),y("div",ht,[c("select",{value:t(i),disabled:a.disabled,class:"base-select",onChange:u},[(r(!0),y(I,null,D(a.options,(o,n)=>(r(),y("option",{key:o.id??o.key??n,value:o.id??o.value},w((o==null?void 0:o[a.label])??o),9,bt))),128))],40,kt),m(t(re),{class:"select-icon"})]))}},St=$(It,[["__scopeId","data-v-3665e6c6"]]),Vt={class:"wrapper"},$t=["placeholder"],_t={__name:"BaseTextarea",props:{placeholder:{type:String,default:""},modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(a,{emit:s}){const i=G(a,"modelValue",s);return(u,d)=>(r(),y("div",Vt,[ie(c("textarea",{class:"input",placeholder:a.placeholder,"onUpdate:modelValue":d[0]||(d[0]=f=>ce(i)?i.value=f:null)},null,8,$t),[[de,t(i)]])]))}},Dt=$(_t,[["__scopeId","data-v-ee21efb9"]]),Bt={title:"",article:"",inventoryNumber:"",description:"",state:null,category:null,price:null,point:null,media:[]},Ct=ue("inventoryForm",()=>{const a=me(),s=ee(),l=pe();let e=Z(K.clone(Bt));const i=T("pending"),u=T(null),d=T(!1),o=Se({formData:{title:{required:q},state:{required:q},price:{required:q}}},{formData:e}),n=C(()=>!o.value.formData.title.$error),p=C(()=>!o.value.formData.price.$error),g=C(()=>!o.value.formData.state.$error),_=C(()=>o.value.formData.title.$errors),k=C(()=>o.value.formData.price.$errors),S=C(()=>o.value.formData.state.$errors),h=function(){e.title="",e.article="",e.inventoryNumber="",e.description="",e.state=null,e.category=null,e.price=null,e.point=null,e.media=[],i.value="pending",u.value=null,o.value.$reset()};return{save:async function(){if(!await o.value.$validate()){d.value=!0;return}i.value="loading",u.value?await a.editOne(u.value,{id:u.value,...e}):await a.addOne(e),i.value="success",setTimeout(()=>{i.value="pending",h(),l.push({name:"Inventories"})},1500)},handleTitleInput:function(){o.value.formData.title.$touch(),s.isActive()&&(n.value?s.debouncedEnableNextButton():s.debouncedDisableNextButton())},formData:e,state:i,isNotificationShown:d,v$:o,isTitleValid:n,isPriceValid:p,isStateValid:g,titleErrors:_,priceErrors:k,stateErrors:S,fillFormData:async function(j){i.value="loading";const B=await a.getOne(j);e.title=B.title,e.article=B.article,e.inventoryNumber=B.inventoryNumber,e.description=B.description,e.state=B.state,e.category=B.category,e.price=B.price,e.point=B.point,e.media=B.media,u.value=j,i.value="pending"},$reset:h}}),wt={class:"wrapper"},Nt={class:"wrapper main-fields"},xt={__name:"InventoryAddPage",props:{id:{type:[String,Number],default:null}},setup(a){const s=a,l=ve(),e=Ct(),i=fe(),u=ee(),d=function(){u.moveToSeventhStep(),u.moveToThirteenthStep()};return ye(()=>{i.query.noReset||(e.$reset(),s.id&&e.fillFormData(s.id)),u.moveNext()}),(f,o)=>(r(),y(I,null,[c("div",wt,[c("div",Nt,[m(t(A),{"is-error":!t(e).isTitleValid},{label:v(()=>[b(" Название инвентаря * ")]),content:v(()=>[m(t(z),{placeholder:"Введите название","is-error":!t(e).isTitleValid,modelValue:t(e).formData.title,"onUpdate:modelValue":o[0]||(o[0]=n=>t(e).formData.title=n),onInput:t(e).handleTitleInput},null,8,["is-error","modelValue","onInput"])]),"error-text":v(()=>{var n,p;return[b(w(t(l).validationMessages[(p=(n=t(e).titleErrors)==null?void 0:n.at(0))==null?void 0:p.$validator]),1)]}),_:1},8,["is-error"]),m(t(A),null,{label:v(()=>[b(" Артикул ")]),content:v(()=>[m(t(z),{placeholder:"Введите артикул",modelValue:t(e).formData.article,"onUpdate:modelValue":o[1]||(o[1]=n=>t(e).formData.article=n)},null,8,["modelValue"])]),_:1}),m(t(A),null,{label:v(()=>[b(" Инвентарный номер ")]),content:v(()=>[m(t(z),{placeholder:"Введите номер",modelValue:t(e).formData.inventoryNumber,"onUpdate:modelValue":o[2]||(o[2]=n=>t(e).formData.inventoryNumber=n)},null,8,["modelValue"])]),_:1}),m(t(A),null,{label:v(()=>[b(" Описание ")]),content:v(()=>[m(t(Dt),{placeholder:"Введите описание",modelValue:t(e).formData.description,"onUpdate:modelValue":o[3]||(o[3]=n=>t(e).formData.description=n)},null,8,["modelValue"])]),_:1})]),m(t(ct),{class:"inventory-state-select",modelValue:t(e).formData.state,"onUpdate:modelValue":o[4]||(o[4]=n=>t(e).formData.state=n),onOpened:t(u).moveToFifthStep,onFetched:t(u).refresh,onSelected:t(u).moveToSixthStep,"is-error":!t(e).isStateValid},{"error-text":v(()=>{var n,p;return[b(w(t(l).validationMessages[(p=(n=t(e).stateErrors)==null?void 0:n.at(0))==null?void 0:p.$validator]),1)]}),_:1},8,["modelValue","onOpened","onFetched","onSelected","is-error"]),m(t(Ue),{modelValue:t(e).formData.category,"onUpdate:modelValue":o[5]||(o[5]=n=>t(e).formData.category=n)},null,8,["modelValue"]),m(t(We),{class:"inventory-price-select",modelValue:t(e).formData.price,"onUpdate:modelValue":o[6]||(o[6]=n=>t(e).formData.price=n),onOpened:d,onFetched:t(u).refresh,onSelected:t(u).moveToFourteenthStep,"is-error":!t(e).isPriceValid},{"error-text":v(()=>{var n,p;return[b(w(t(l).validationMessages[(p=(n=t(e).priceErrors)==null?void 0:n.at(0))==null?void 0:p.$validator]),1)]}),_:1},8,["modelValue","onFetched","onSelected","is-error"]),m(t(lt),{modelValue:t(e).formData.point,"onUpdate:modelValue":o[7]||(o[7]=n=>t(e).formData.point=n)},null,8,["modelValue"]),m(t(gt),{id:"inventory-image-select",modelValue:t(e).formData.media,"onUpdate:modelValue":o[8]||(o[8]=n=>t(e).formData.media=n)},null,8,["modelValue"]),m(t(Ie),{id:"save-inventory",onClick:t(e).save},{default:v(()=>[b("Сохранить")]),_:1},8,["onClick"])]),m(t(Ve),{state:t(e).state},null,8,["state"]),m(t($e),{modelValue:t(e).isNotificationShown,"onUpdate:modelValue":o[9]||(o[9]=n=>t(e).isNotificationShown=n),type:"error"},null,8,["modelValue"])],64))}},zt=$(xt,[["__scopeId","data-v-9c135df4"]]);export{zt as default};
