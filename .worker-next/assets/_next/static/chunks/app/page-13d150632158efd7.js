(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931,664,193],{3907:function(e,t,o){Promise.resolve().then(o.bind(o,4880)),Promise.resolve().then(o.t.bind(o,5878,23)),Promise.resolve().then(o.t.bind(o,2972,23))},4880:function(e,t,o){"use strict";var l=o(7437),n=o(2265),r=o(9376);t.default=()=>{let[e,t]=(0,n.useState)(""),[o,s]=(0,n.useState)("All"),u=(0,r.useRouter)();return(0,l.jsxs)("form",{onSubmit:t=>{if(t.preventDefault(),""===e&&"All"===o)u.push("/properties");else{let t="?location=".concat(e,"&propertyType=").concat(o);u.push("/properties/search-results".concat(t))}},className:"mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center",children:[(0,l.jsxs)("div",{className:"w-full md:w-3/5 md:pr-2 mb-4 md:mb-0",children:[(0,l.jsx)("label",{htmlFor:"location",className:"sr-only",children:"Location"}),(0,l.jsx)("input",{type:"text",id:"location",placeholder:"Enter Keywords or Location",className:"w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500",value:e,onChange:e=>t(e.target.value)})]}),(0,l.jsxs)("div",{className:"w-full md:w-2/5 md:pl-2",children:[(0,l.jsx)("label",{htmlFor:"property-type",className:"sr-only",children:"Property Type"}),(0,l.jsxs)("select",{id:"property-type",className:"w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500",value:o,onChange:e=>s(e.target.value),children:[(0,l.jsx)("option",{value:"All",children:"All"}),(0,l.jsx)("option",{value:"Apartment",children:"Apartment"}),(0,l.jsx)("option",{value:"Studio",children:"Studio"}),(0,l.jsx)("option",{value:"Condo",children:"Condo"}),(0,l.jsx)("option",{value:"House",children:"House"}),(0,l.jsx)("option",{value:"Cabin Or Cottage",children:"Cabin or Cottage"}),(0,l.jsx)("option",{value:"Loft",children:"Loft"}),(0,l.jsx)("option",{value:"Room",children:"Room"}),(0,l.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,l.jsx)("button",{type:"submit",className:"md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500",children:"Search"})]})}},9376:function(e,t,o){"use strict";var l=o(5475);o.o(l,"usePathname")&&o.d(t,{usePathname:function(){return l.usePathname}}),o.o(l,"useRouter")&&o.d(t,{useRouter:function(){return l.useRouter}})}},function(e){e.O(0,[972,878,971,117,744],function(){return e(e.s=3907)}),_N_E=e.O()}]);