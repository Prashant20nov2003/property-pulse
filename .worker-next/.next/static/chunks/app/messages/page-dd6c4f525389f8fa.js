(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[750],{3943:function(e,t,s){Promise.resolve().then(s.bind(s,8726))},8726:function(e,t,s){"use strict";s.d(t,{default:function(){return o}});var n=s(7437),r=s(2265),a=s(7409);s(3079);var c=s(2119),l=(0,c.$)("1ef81fcc34f610f969097770a48d804124c5f7ca"),d=(0,c.$)("4735d14899686559796dc92456fafcb2506e4cfc"),i=s(3557),o=e=>{let{message:t}=e,[s,c]=(0,r.useState)(t.read),[o,u]=(0,r.useState)(!1),{setUnreadCount:h}=(0,i.b)(),x=async()=>{let e=await l(t._id);c(e),h(t=>e?t-1:t+1),a.Am.success("Marked as ".concat(e?"read":"new"))},f=async()=>{await d(t._id),u(!0),h(e=>s?e:e-1),a.Am.success("Message Deleted")};return o?(0,n.jsx)("p",{children:"Deleted message"}):(0,n.jsxs)("div",{className:"relative bg-white p-4 rounded-md shadow-md border border-gray-200",children:[!s&&(0,n.jsx)("div",{className:"absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-md",children:"New"}),(0,n.jsxs)("h2",{className:"text-xl mb-4",children:[(0,n.jsx)("span",{className:"font-bold",children:"Property Inquiry:"})," ",t.property.name]}),(0,n.jsx)("p",{className:"text-gray-700",children:t.body}),(0,n.jsxs)("ul",{className:"mt-4",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Reply Email:"})," ",(0,n.jsx)("a",{href:"mailto:".concat(t.email),className:"text-blue-500",children:t.email})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Reply Phone:"})," ",(0,n.jsx)("a",{href:"tel:".concat(t.phone),className:"text-blue-500",children:t.phone})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Received:"})," ",new Date(t.createdAt).toLocaleString()]})]}),(0,n.jsx)("button",{onClick:x,className:"mt-4 mr-3 ".concat(s?"bg-gray-300":"bg-blue-500 text-white"," py-1 px-3 rounded-md"),children:s?"Mark As New":"Mark As Read"}),(0,n.jsx)("button",{onClick:f,className:"mt-4 bg-red-500 text-white py-1 px-3 rounded-md",children:"Delete"})]})}},3557:function(e,t,s){"use strict";s.d(t,{GlobalProvider:function(){return d},b:function(){return i}});var n=s(7437);s(3079);var r=(0,s(2119).$)("7d656f77a71f85c3755865bfd21dd6c0f5727553"),a=s(605),c=s(2265);let l=(0,c.createContext)();function d(e){let{children:t}=e,[s,d]=(0,c.useState)(0),{data:i}=(0,a.useSession)();return(0,c.useEffect)(()=>{i&&i.user&&r().then(e=>{e.count&&d(e.count)})},[r,i]),(0,n.jsx)(l.Provider,{value:{unreadCount:s,setUnreadCount:d},children:t})}function i(){return(0,c.useContext)(l)}}},function(e){e.O(0,[352,605,971,117,744],function(){return e(e.s=3943)}),_N_E=e.O()}]);