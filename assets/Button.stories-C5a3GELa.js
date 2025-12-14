import{j as z}from"./iframe-1gR20Abz.js";import{c as x}from"./compiler-runtime-DZKiWjeA.js";import"./preload-helper-PPVm8Dsz.js";const E=["primary","secondary","danger"],I=["sm","md","lg"];function S(D){const e=x.c(10),{variant:v,size:b,disabled:h,children:d,type:B,onClick:c}=D,l=v===void 0?"primary":v,u=b===void 0?"md":b,r=h===void 0?!1:h,m=B===void 0?"button":B;if(!E.includes(l))throw new Error(`Invalid Button variant: ${l}`);if(!I.includes(u))throw new Error(`Invalid Button size: ${u}`);const p=`ds-button--${l}`,f=`ds-button--${u}`,y=r&&"ds-button--disabled";let a;e[0]!==p||e[1]!==f||e[2]!==y?(a=["ds-button",p,f,y].filter(Boolean),e[0]=p,e[1]=f,e[2]=y,e[3]=a):a=e[3];const g=a.join(" ");let t;return e[4]!==d||e[5]!==g||e[6]!==r||e[7]!==c||e[8]!==m?(t=z.jsx("button",{type:m,className:g,disabled:r,onClick:c,children:d}),e[4]=d,e[5]=g,e[6]=r,e[7]=c,e[8]=m,e[9]=t):t=e[9],t}S.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const j={title:"Components/Button",component:S,argTypes:{variant:{control:"select",options:["primary","secondary","danger"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},s={args:{children:"Primary Button",variant:"primary",size:"md"}},n={args:{children:"Secondary Button",variant:"secondary"}},o={args:{children:"Delete",variant:"danger"}},i={args:{children:"Disabled",disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'danger'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};const q=["Primary","Secondary","Danger","Disabled"];export{o as Danger,i as Disabled,s as Primary,n as Secondary,q as __namedExportsOrder,j as default};
