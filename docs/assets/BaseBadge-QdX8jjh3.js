import{_ as p,f as s,P as c,o as g,c as u,r as b,s as f,n as y}from"./index-fKPgX005.js";const m={__name:"BaseBadge",props:{variant:{type:String,validator(t){return["primary","gray","red","accent","none"].includes(t)},default:"gray"},size:{type:String,validator(t){return["sm","md","lg"].includes(t)},default:"sm"},type:{type:String,validator(t){return["rounded","circle"].includes(t)},default:"rounded"},noWrap:{type:Boolean,default:!1},paddingY:{type:String,default:null},paddingX:{type:String,default:null},color:{type:String,default:null},link:{type:String,default:"javascript:void(0)"},block:{type:Boolean,default:!1}},setup(t){const e=t,r=s(()=>{const a=`base-badge--${e.variant}`,n=`base-badge--${e.size}`,l=`base-badge--${e.type}`,i="base-badge--no-wrap",d=[];return e.variant&&d.push(a),e.size&&d.push(n),e.type&&d.push(l),e.noWrap&&d.push(i),e.block&&d.push("base-badge--block"),d}),o=s(()=>{const a={};return e.color&&(a.borderColor=e.color,a.backgroundColor=c(.85,e.color)),e.paddingY&&(a.paddingTop=e.paddingY,a.paddingBottom=e.paddingY),e.paddingX&&(a.paddingLeft=e.paddingX,a.paddingRight=e.paddingX),a});return(a,n)=>(g(),u("div",{class:f(["base-badge",r.value]),style:y(o.value)},[b(a.$slots,"default",{},void 0,!0)],6))}},S=p(m,[["__scopeId","data-v-f0e32975"]]);export{S as B};
