(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[753],{3895:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/server",function(){return s(6260)}])},6260:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return server}});var r=s(5893),i=s(2046),l=s(5154),t=s(741),c=s(7294),o=s(5216),x=s(7564),d=s(3997),j=s(9236),a=s(50),h=s(8623),m=s(5117),u=s(7645),f=s(3485),v=s(8818),ExitServer=function(e){let{modalOpen:n,setModalOpen:s}=e;return(0,r.jsxs)(f.u,{opened:n,onClose:()=>s(!1),title:(0,r.jsx)("b",{children:"Danger zone!"}),centered:!0,children:["Are you sure you want to exit the server? All active nimplants will be killed.",(0,r.jsx)(v.T,{h:"xl"}),(0,r.jsx)(d.z,{onClick:()=>{s(!1),(0,i.XP)()},leftIcon:(0,r.jsx)(l.Z1A,{}),sx:{width:"100%"},children:"Yes, kill kill kill!"})]})},p=s(6586),components_InfoCardListServer=function(){let[e,n]=(0,c.useState)(!1),{serverInfo:s,serverInfoLoading:t,serverInfoError:o}=(0,i.L6)();return(0,r.jsxs)(x.K,{ml:"xl",mr:40,mt:"xl",spacing:"xs",children:[(0,r.jsx)(ExitServer,{modalOpen:e,setModalOpen:n}),(0,r.jsx)(d.z,{mb:"sm",onClick:()=>n(!0),leftIcon:(0,r.jsx)(l.Z1A,{}),sx:{maxWidth:"200px"},children:"Kill server"}),(0,r.jsx)(j.D,{order:2,children:"Connection Information"}),(0,r.jsxs)(a.r,{columns:2,gutter:"lg",children:[(0,r.jsx)(a.r.Col,{xs:2,md:1,children:(0,r.jsx)(p.Z,{icon:(0,r.jsx)(l.Els,{size:"1.5em"}),content:(0,r.jsx)(h.O,{visible:!s,children:(0,r.jsxs)(m.x,{children:["Connected to Server "," ",(0,r.jsx)(u.y,{children:s&&s.name})," ","at"," ",(0,r.jsx)(u.y,{children:s&&"http://".concat(s.config.managementIp,":").concat(s.config.managementPort)})]})})})}),(0,r.jsx)(a.r.Col,{xs:2,md:1,children:(0,r.jsx)(p.Z,{icon:(0,r.jsx)(l.F1m,{size:"1.5em"}),content:(0,r.jsx)(h.O,{visible:!s,children:(0,r.jsxs)(m.x,{children:["Listener running at ",(0,r.jsx)(u.y,{children:s&&(0,i.ZS)(s)})]})})})})]}),(0,r.jsx)(j.D,{order:2,pt:20,children:"Nimplant Profile"}),(0,r.jsxs)(a.r,{columns:2,gutter:"lg",children:[(0,r.jsx)(a.r.Col,{xs:2,md:1,children:(0,r.jsx)(p.Z,{icon:(0,r.jsx)(l.qyc,{size:"1.5em"}),content:(0,r.jsx)(h.O,{visible:!s,children:(0,r.jsxs)(m.x,{children:["Nimplants sleep for "," ",(0,r.jsx)(u.y,{children:s&&"".concat(s.config.sleepTime)})," ","seconds (",(0,r.jsxs)(u.y,{children:[s&&"".concat(s.config.sleepJitter),"%"]})," ","jitter) by default. Kill date is"," ",(0,r.jsx)(u.y,{children:s&&"".concat(s.config.killDate)})]})})})}),(0,r.jsx)(a.r.Col,{xs:2,md:1,children:(0,r.jsx)(p.Z,{icon:(0,r.jsx)(l.FrP,{size:"1.5em"}),content:(0,r.jsx)(h.O,{visible:!s,children:(0,r.jsxs)(m.x,{children:["Default Nimplant user agent: ",(0,r.jsx)(u.y,{children:s&&"".concat(s.config.userAgent)})]})})})})]})]})},g=s(730),server=()=>{let{serverConsole:e,serverConsoleLoading:n,serverConsoleError:s}=(0,i.r5)();return(0,c.useEffect)(()=>{s?(0,i.or)():e&&(0,i.Xe)()}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z,{title:"Server Info",icon:(0,r.jsx)(l.Els,{size:"2em"}),noBorder:!0}),(0,r.jsxs)(t.m,{defaultValue:"serverinfo",children:[(0,r.jsxs)(t.m.List,{mx:-25,grow:!0,children:[(0,r.jsx)(t.m.Tab,{value:"serverinfo",icon:(0,r.jsx)(l.DAO,{}),children:"Information"}),(0,r.jsx)(t.m.Tab,{value:"serverconsole",icon:(0,r.jsx)(l.fF,{}),children:"Console"})]}),(0,r.jsx)(t.m.Panel,{value:"serverinfo",children:(0,r.jsx)(components_InfoCardListServer,{})}),(0,r.jsx)(t.m.Panel,{value:"serverconsole",children:(0,r.jsx)(o.Z,{consoleData:e})})]})]})}}},function(e){e.O(0,[968,379,287,359,774,888,179],function(){return e(e.s=3895)}),_N_E=e.O()}]);