import{c as f,j as e}from"./style-c07b68db.js";import"./index-76fb7be0.js";import{G as x,a as z,b as j,c as b}from"./index.esm-2af592d9.js";import"./_commonjsHelpers-de833af9.js";const h="_banner_lzd0d_1",v="_titleIconWrapper_lzd0d_6",A="_description_lzd0d_11",q="_title_lzd0d_6",I="_icon_lzd0d_21",L="_neutral_lzd0d_28",N="_error_lzd0d_41",y="_singleLine_lzd0d_44",C="_warning_lzd0d_58",w="_success_lzd0d_71",s={banner:h,titleIconWrapper:v,description:A,title:q,icon:I,neutral:L,error:N,singleLine:y,warning:C,success:w};function B(r){return x({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}}]})(r)}const F={neutral:e.jsx(B,{}),success:e.jsx(z,{}),error:e.jsx(j,{}),warning:e.jsx(b,{})};function o({type:r="neutral",title:_,description:a}){const g=f(s.banner,s[r],a?null:s.singleLine);return e.jsxs("div",{className:g,children:[e.jsxs("div",{className:s.titleIconWrapper,children:[e.jsx("span",{className:s.icon,children:F[r]}),e.jsx("div",{className:s.title,children:_})]}),a&&e.jsx("div",{className:s.description,children:a})]})}o.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{type:{defaultValue:{value:'"neutral"',computed:!1},required:!1}}};o.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{type:{defaultValue:{value:'"neutral"',computed:!1},required:!1}}};const E={component:o},t={args:{type:"neutral",title:"Title"},argTypes:{type:{control:"radio",options:["neutral","success","error","warning"]}}},n={...t},i={...t,args:{...t.args,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."}};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...baseArgs
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,p,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...baseArgs,
  args: {
    ...baseArgs.args,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
  }
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const G=["Singleline","MultiLine"];export{i as MultiLine,n as Singleline,G as __namedExportsOrder,E as default};
//# sourceMappingURL=Banner.stories-a78b8a8b.js.map