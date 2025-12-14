import{j as t}from"./iframe-1gR20Abz.js";import{c as i}from"./compiler-runtime-DZKiWjeA.js";import"./preload-helper-PPVm8Dsz.js";const r={1:"4px",2:"8px",3:"12px",4:"16px",6:"24px",8:"32px"},m={title:"Foundations/Spacing"},s=()=>{const e=i.c(2);let n;e[0]===Symbol.for("react.memo_cache_sentinel")?(n=Object.keys(r),e[0]=n):n=e[0];const c=n;let a;return e[1]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",flexDirection:"column"},children:c.map(p)}),e[1]=a):a=e[1],a};s.__docgenInfo={description:"",methods:[],displayName:"Scale"};function p(e){return t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsxs("div",{children:["space-",e]}),t.jsx("div",{style:{width:`var(--space-${e})`,height:`var(--space-${e})`,background:"#ddd"}})]},e)}s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const spacingKeys = Object.keys(spacing);
  return <div style={{
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    flexDirection: "column"
  }}>
            {spacingKeys.map(s => <div key={s} style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
                    <div>space-{s}</div>

                    <div style={{
        width: \`var(--space-\${s})\`,
        height: \`var(--space-\${s})\`,
        background: "#ddd"
      }} />
                </div>)}
        </div>;
}`,...s.parameters?.docs?.source}}};const x=["Scale"];export{s as Scale,x as __namedExportsOrder,m as default};
