(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{0:function(e,t){e.exports=React},16:function(e,t){e.exports=ReactDOM},42:function(e,t,a){e.exports=a(89)},73:function(e,t,a){},74:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(16),l=a.n(c),r=a(8),o=a(9),i=a(11),m=a(10),d=a(23),u=a.n(d),h={space:"0f39zonxf59w",accessToken:"E_OO1EHOom1QXC3eVOgRPanD5iGanz4fQB1lv5_hpEg"},p=function(e){return s.a.createElement("div",{className:"counter"},e.count," Associates Total")},E=a(3),g=a(33),y=a.n(g),f=(a(73),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n.search=n.search.bind(Object(E.a)(n)),n}return Object(o.a)(a,[{key:"search",value:function(){var e=[];this.props.results&&(e=this.props.results.map((function(e,t){var a="";"object"===typeof e?void 0!==e.name.middle?a+="".concat(e.name.first," ").concat(e.name.middle," ").concat(e.name.last):a+="".concat(e.name.first," ").concat(e.name.last):a+=e;var n=[];for(var c in e.years){var l=void 0;"AB"!==(l=e.years[c]).slice(0,2)&&"BS"!==l.slice(0,2)?n.push(" ".concat(l.slice(0,-4)," '").concat(l.substr(l.length-2))):n.push(" '".concat(l.substring(5)))}return s.a.createElement("div",{key:t},"".concat(a," ").concat(n.join(", ")))})),this.props.value.includes(" ")?this.setState({results:this.props.value}):this.setState({results:e}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("button",{onClick:this.search},"SEARCH"),s.a.createElement("div",{className:"resultsContainer"},this.state.results))}}]),a}(s.a.Component)),v=(a(74),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={value:"",suggestions:[],searchResults:[]},n.escapeRegexCharacters=n.escapeRegexCharacters.bind(Object(E.a)(n)),n.getSuggestions=n.getSuggestions.bind(Object(E.a)(n)),n.getSuggestionValue=n.getSuggestionValue.bind(Object(E.a)(n)),n.renderSuggestion=n.renderSuggestion.bind(Object(E.a)(n)),n.onChange=n.onChange.bind(Object(E.a)(n)),n.onSuggestionsFetchRequested=n.onSuggestionsFetchRequested.bind(Object(E.a)(n)),n.onSuggestionsClearRequested=n.onSuggestionsClearRequested.bind(Object(E.a)(n)),n}return Object(o.a)(a,[{key:"escapeRegexCharacters",value:function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}},{key:"getSuggestions",value:function(e){var t=this,a=this.escapeRegexCharacters(e.trim());if(""===a)return[];var n=new RegExp("\\b"+a,"i");return this.props.names.filter((function(e){return n.test(t.getSuggestionValue(e))}))}},{key:"getSuggestionValue",value:function(e){var t=e.entryTitle,a=[];for(var n in e.years){var s=void 0;"AB"!==(s=e.years[n]).slice(0,2)&&"BS"!==s.slice(0,2)?a.push(" ".concat(s.slice(0,-4)," '").concat(s.substr(s.length-2))):a.push(" '".concat(s.substring(5)))}var c=[];return c.push("".concat(t," ").concat(a)),this.setState({searchResults:c}),"".concat(t," ").concat(a," ")}},{key:"renderSuggestion",value:function(e){var t=e.entryTitle,a=[];for(var n in e.years){var c=void 0;"AB"!==(c=e.years[n]).slice(0,2)&&"BS"!==c.slice(0,2)?a.push(" ".concat(c.slice(0,-4)," '").concat(c.substr(c.length-2))):a.push(" '".concat(c.substring(5)))}return s.a.createElement("div",null,"".concat(t," ").concat(a," "))}},{key:"onChange",value:function(e,t){var a=t.newValue;this.setState({value:a})}},{key:"onSuggestionsFetchRequested",value:function(e){var t=e.value;this.setState({suggestions:this.getSuggestions(t),searchResults:this.getSuggestions(t)})}},{key:"onSuggestionsClearRequested",value:function(){this.setState({suggestions:[]})}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.suggestions,n={placeholder:"Search for a Name",value:t,onChange:this.onChange};return s.a.createElement("div",null,s.a.createElement(f,{className:"searchResults",results:this.state.searchResults,value:this.state.value}),s.a.createElement(y.a,{suggestions:a,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion,inputProps:n}))}}]),a}(s.a.Component)),k=a(93),b=a(92),A=a(34),N=a.n(A),S=(a(81),function(e){return s.a.createElement("div",{className:"newMembersToggle"},s.a.createElement("input",{type:"checkbox",name:"newMembers",value:"true",onChange:e.handleChange}),s.a.createElement("p",null,"View Only New Members"))}),O=(a(82),function(e){return s.a.createElement("div",null,e.names.map((function(t,a){var n=[];for(var c in t.years){var l=void 0;"AB"!==(l=t.years[c]).slice(0,2)&&"BS"!==l.slice(0,2)?n.push("".concat(l.slice(0,-4)," '").concat(l.substr(l.length-2))):n.push("'".concat(l.substring(5)))}return t.yearAdded===e.recentlyAdded?s.a.createElement("div",{key:a},s.a.createElement("b",null,s.a.createElement("div",{className:"name"},"".concat(t.entryTitle)),s.a.createElement("div",{className:"degrees"},"".concat(n.join(", "))))):s.a.createElement("div",{key:a},s.a.createElement("div",{className:"name"},"".concat(t.entryTitle)),s.a.createElement("div",{className:"degrees"},"".concat(n.join(", "))))})))}),j=(a(83),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={checked:!0},n.sortNames=n.sortNames.bind(Object(E.a)(n)),n.handleChange=n.handleChange.bind(Object(E.a)(n)),n}return Object(o.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.sortNames(this.props.names);var e=Math.max.apply(Math,this.props.names.map((function(e){return e.yearAdded?e.yearAdded:0})));this.setState({recentlyAdded:e})}},{key:"sortNames",value:function(e){var t=[],a=[],n=[],s=[],c=[],l=[],r=[],o=[],i=[],m=[],d=[],u=[],h=[],p=[],E=[],g=[],y=[],f=[],v=[],k=[],b=[],A=[],S=[],O=[],j=[],C=[];N()(e).asc([function(e){return e.name.last},function(e){return e.name.first},function(e){return e.name.middle}]).forEach((function(e){"A"===e.name.last[0]&&t.push(e),"B"===e.name.last[0]&&a.push(e),"C"===e.name.last[0]&&n.push(e),"D"===e.name.last[0]&&s.push(e),"E"===e.name.last[0]&&c.push(e),"F"===e.name.last[0]&&l.push(e),"G"===e.name.last[0]&&r.push(e),"H"===e.name.last[0]&&o.push(e),"I"===e.name.last[0]&&i.push(e),"J"===e.name.last[0]&&m.push(e),"K"===e.name.last[0]&&d.push(e),"L"===e.name.last[0]&&u.push(e),"M"===e.name.last[0]&&h.push(e),"N"===e.name.last[0]&&p.push(e),"O"===e.name.last[0]&&E.push(e),"P"===e.name.last[0]&&g.push(e),"Q"===e.name.last[0]&&y.push(e),"R"===e.name.last[0]&&f.push(e),"S"===e.name.last[0]&&v.push(e),"T"===e.name.last[0]&&k.push(e),"U"===e.name.last[0]&&b.push(e),"V"===e.name.last[0]&&A.push(e),"W"===e.name.last[0]&&S.push(e),"X"===e.name.last[0]&&O.push(e),"Y"===e.name.last[0]&&j.push(e),"Z"===e.name.last[0]&&C.push(e)})),this.setState({a:t,b:a,c:n,d:s,e:c,f:l,g:r,h:o,i:i,j:m,k:d,l:u,m:h,n:p,o:E,p:g,q:y,r:f,s:v,t:k,u:b,v:A,w:S,x:O,y:j,z:C})}},{key:"handleChange",value:function(){var e=this;if(this.setState({checked:!this.state.checked}),this.state.checked){var t=[];this.props.names.forEach((function(a){a.yearAdded===e.state.recentlyAdded&&t.push(a)})),this.sortNames(t)}else this.sortNames(this.props.names)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(S,{handleChange:this.handleChange}),s.a.createElement(k.a,{defaultActiveKey:"a-b"},s.a.createElement(b.a,{eventKey:"a-b",title:"A-B"},s.a.createElement("h5",null,"A"),s.a.createElement(O,{names:this.state.a,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top"),s.a.createElement("h5",null,"B"),s.a.createElement(O,{names:this.state.b,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top")),s.a.createElement(b.a,{className:"tab",eventKey:"c-d",title:"C-D"},s.a.createElement("h5",null,"C"),s.a.createElement(O,{names:this.state.c,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top"),s.a.createElement("h5",null,"D"),s.a.createElement(O,{names:this.state.d,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top")),s.a.createElement(b.a,{eventKey:"e-f",title:"E-F"},s.a.createElement("h5",null,"E"),s.a.createElement(O,{names:this.state.e,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top"),s.a.createElement("h5",null,"F"),s.a.createElement(O,{names:this.state.f,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top")),s.a.createElement(b.a,{eventKey:"g-h",title:"G-H"},s.a.createElement("h5",null,"G"),s.a.createElement(O,{names:this.state.g,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top"),s.a.createElement("h5",null,"H"),s.a.createElement(O,{names:this.state.h,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top")),s.a.createElement(b.a,{eventKey:"i-j",title:"I-J"},s.a.createElement("h5",null,"I"),s.a.createElement(O,{names:this.state.i,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top"),s.a.createElement("h5",null,"J"),s.a.createElement(O,{names:this.state.j,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top")),s.a.createElement(b.a,{eventKey:"k-l",title:"K-L"},s.a.createElement("h5",null,"K"),s.a.createElement(O,{names:this.state.k,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top"),s.a.createElement("h5",null,"L"),s.a.createElement(O,{names:this.state.l,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top")),s.a.createElement(b.a,{eventKey:"m-n",title:"M-N"},s.a.createElement("h5",null,"M"),s.a.createElement(O,{names:this.state.m,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top"),s.a.createElement("h5",null,"N"),s.a.createElement(O,{names:this.state.n,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top")),s.a.createElement(b.a,{eventKey:"o-p",title:"O-P"},s.a.createElement("h5",null,"O"),s.a.createElement(O,{names:this.state.o,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top"),s.a.createElement("h5",null,"P"),s.a.createElement(O,{names:this.state.p,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top")),s.a.createElement(b.a,{eventKey:"q-r",title:"Q-R"},s.a.createElement("h5",null,"Q"),s.a.createElement(O,{names:this.state.q,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top"),s.a.createElement("h5",null,"R"),s.a.createElement(O,{names:this.state.r,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top")),s.a.createElement(b.a,{eventKey:"s-t",title:"S-T"},s.a.createElement("h5",null,"S"),s.a.createElement(O,{names:this.state.s,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top"),s.a.createElement("h5",null,"T"),s.a.createElement(O,{names:this.state.t,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top")),s.a.createElement(b.a,{eventKey:"u-v",title:"U-V"},s.a.createElement("h5",null,"U"),s.a.createElement(O,{names:this.state.u,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top"),s.a.createElement("h5",null,"V"),s.a.createElement(O,{names:this.state.v,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top")),s.a.createElement(b.a,{eventKey:"w-z",title:"W-Z"},s.a.createElement("h5",null,"W"),s.a.createElement(O,{names:this.state.w,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top"),s.a.createElement("h5",null,"X"),s.a.createElement(O,{names:this.state.x,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top"),s.a.createElement("h5",null,"Y"),s.a.createElement(O,{names:this.state.y,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top"),s.a.createElement("h5",null,"Z"),s.a.createElement(O,{names:this.state.z,recentlyAdded:this.state.recentlyAdded}),s.a.createElement("a",{className:"topLink",href:"#top"},"back to top"))))}}]),a}(s.a.Component)),C=(a(88),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=[];u.a.get("https://cdn.contentful.com/spaces/".concat(h.space,"/entries?access_token=").concat(h.accessToken,"&limit=1000&order=sys.id")).then((function(a){a.data.items.forEach((function(e){t.push(e.fields)})),e.setState({names:t,total:a.data.total});for(var n=Math.ceil(a.data.total/1e3),s=0,c=0;c<n;c++)s+=1e3,u.a.get("https://cdn.contentful.com/spaces/".concat(h.space,"/entries?access_token=").concat(h.accessToken,"&limit=1000&skip=").concat(s,"&order=sys.id")).then((function(t){var a=[];t.data.items.forEach((function(e){a.push(e.fields)}));var n=e.state.names.concat(a);e.setState({names:n})}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return s.a.createElement("main",null,s.a.createElement("header",null,s.a.createElement("div",{name:"top"}),s.a.createElement(p,{className:"counter",count:this.state.names?this.state.names.length:0}),s.a.createElement(v,{className:"search",names:this.state.names})),this.state.names&&this.state.names.length===this.state.total&&s.a.createElement(j,{names:this.state.names}))}}]),a}(s.a.Component));l.a.render(s.a.createElement(C,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a94cd670.chunk.js.map