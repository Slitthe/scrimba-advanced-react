import{j as m,c as q}from"./style-c07b68db.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const y="_badge_gqm1p_1",f="_gray_gqm1p_5",b="_red_gqm1p_10",x="_yellow_gqm1p_15",A="_green_gqm1p_20",B="_blue_gqm1p_25",N="_indigo_gqm1p_30",k="_purple_gqm1p_35",v="_pink_gqm1p_40",w="_rounded_gqm1p_45",a={badge:y,gray:f,red:b,yellow:x,green:A,blue:B,indigo:N,purple:k,pink:v,rounded:w};function o({children:c,type:i="square",color:l=""}){let _=[a.badge,i==="pill"?a.rounded:null,l?a[l]:null];return m.jsx("span",{className:q(_),children:c})}o.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{type:{defaultValue:{value:'"square"',computed:!1},required:!1},color:{defaultValue:{value:'""',computed:!1},required:!1}}};o.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{type:{defaultValue:{value:'"square"',computed:!1},required:!1},color:{defaultValue:{value:'""',computed:!1},required:!1}}};const j={component:o},s={args:{children:"Badge",color:"gray"},argTypes:{color:{control:"radio",options:["gray","red","yellow","green","blue","indigo","purple","pink"]},type:{control:"radio",options:["square","pill"]}}},e={...s,args:{...s.args,type:"square"}},r={...s,args:{...s.args,type:"pill"}};var n,p,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...baseArgs,
  args: {
    ...baseArgs.args,
    type: "square"
  }
}`,...(t=(p=e.parameters)==null?void 0:p.docs)==null?void 0:t.source}}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...baseArgs,
  args: {
    ...baseArgs.args,
    type: "pill"
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const E=["Square","Pill"];export{r as Pill,e as Square,E as __namedExportsOrder,j as default};
//# sourceMappingURL=Badge.stories-ce25a370.js.map
