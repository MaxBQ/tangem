import{j as n}from"./jsx-runtime-AgcCsxC8.js";import{B as b,T as h,g as C,a as I}from"./index--yjljmoT.js";import{r as t}from"./index-XiNr8FW2.js";import{c as N}from"./classNames-39fFjHzx.js";import"./index-oLeb_y7U.js";import"./index-SNy9D_CV.js";import"./_commonjsHelpers-5-cIlDoe.js";const u=o=>{const[m,l]=t.useState(null),r=t.useRef(null);return t.useEffect(()=>{var a;return o.current&&(r.current=new IntersectionObserver(s=>{l(s[0].isIntersecting)}),(a=r.current)==null||a.observe(o.current)),()=>{var s;(s=r.current)==null||s.disconnect(),r.current=null}},[o]),{isVisible:m}};try{u.displayName="useObserver",u.__docgenInfo={description:"",displayName:"useObserver",props:{}}}catch{}const O="_bannerFixed_1dkc0_1",k="_show_1dkc0_15",T={bannerFixed:O,show:k},d=o=>{const{children:m}=o,[l,r]=t.useState(!1),[a,s]=t.useState(!1),p=t.useRef(null),c=t.useRef(),{isVisible:e}=u(p),f=localStorage.getItem("bannerBottom"),x=t.useMemo(()=>f,[f]),_=t.useCallback(()=>{e||s(!e),e&&r(!e),c.current=setTimeout(()=>{e||r(!e)},50),c.current=setTimeout(()=>{e&&s(!e)},700)},[e]),F=t.useCallback(()=>{r(!1),c.current=setTimeout(()=>{localStorage.setItem("bannerBottom","false"),s(!1)},700)},[]);return t.useEffect(()=>(e!==null&&!x&&_(),()=>{clearTimeout(c.current)}),[e,_,x]),n.jsxs(n.Fragment,{children:[n.jsx(b,{theme:h.TOP,ref:p,image:C,bannerNameText:"Black Friday",bannerNameTextSecondary:"24-27 Nov",discountText:"10%OFF",firstPromoCodeText:"Use code",promoCodeText:"10FRIDAY",lastPromoCodeText:"at checkout"}),m,a&&n.jsx("div",{className:N(T.bannerFixed,{[T.show]:l},[]),children:n.jsx(b,{theme:h.BOTTOM,image:I,bannerNameText:"Black Friday",discountText:"10%OFF",firstPromoCodeText:"Use code",promoCodeText:"10FRIDAY",lastPromoCodeText:"at checkout",onClosedBanner:F})})]})};try{d.displayName="BannerWatcher",d.__docgenInfo={description:"",displayName:"BannerWatcher",props:{}}}catch{}const W={title:"Widgets/BannerWatcher",component:d},i={args:{}};var B,g,y;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {}
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const M=["Primary"];export{i as Primary,M as __namedExportsOrder,W as default};