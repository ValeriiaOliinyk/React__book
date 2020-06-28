(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={label:"ContactForm_label__2s0Po",input:"ContactForm_input__k823l",form:"ContactForm_form__1OtEc",button:"ContactForm_button__1EfJx"}},10:function(t,e,n){t.exports={input:"Filter_input__1WtUL"}},14:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"}]')},15:function(t,e,n){t.exports={container:"Container_container__2Bbc9"}},18:function(t,e,n){t.exports=n(35)},2:function(t,e,n){t.exports={list:"ContactList_list__3f6t9",item:"ContactList_item__1wLGE",button:"ContactList_button__1g61n",text:"ContactList_text__3-ItB"}},34:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),l=n(17),i=n(4),u=n(5),s=n(7),m=n(6),b=n(13),p=n.n(b),f=n(14),d=n(15),h=n.n(d),_=function(t){var e=t.children;return r.a.createElement("div",{className:h.a.container},e)},v=n(8),E=n.n(v),C=n(9),g=n.n(C),y=function(t){var e=t.children,n=t.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:g.a.title},n),r.a.createElement("div",{className:g.a.box},e))};y.protoTypes={children:E.a.node.isRequired,title:E.a.string.isRequired};var x=y,N=n(10),S=n.n(N),O=function(t){var e=t.value,n=t.onChange;return r.a.createElement("label",{className:S.a.label},"Find contacts by name",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:e,onChange:n,className:S.a.input,placeholder:"Type name... "}))},j=n(16),k=n(1),w=n.n(k),F=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:t.props.name,number:t.props.number},t.updateContacts=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(j.a)({},a,r))},t.reset=function(){t.setState({name:"",number:""})},t.handleSubmit=function(e){var n=t.state,a=n.number,r=n.name;e.preventDefault(),t.props.onSubmit(r,a),t.reset()},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:w.a.form},r.a.createElement("label",null,"Name ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:e,name:"name",onChange:this.updateContacts,className:w.a.input,placeholder:"Type name... "})),r.a.createElement("label",{className:w.a.label},"Number ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:n,name:"number",onChange:this.updateContacts,className:w.a.input,placeholder:"Type number... "})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:w.a.button},"Add contact"))}}]),n}(a.Component);F.defaultProps={name:"",number:""};var L=F,J=n(2),T=n.n(J),D=function(t){var e=t.contacts,n=t.onDeleteContact;return r.a.createElement("ul",{className:T.a.list},e.map((function(t){var e=t.name,a=t.number,c=t.id;return r.a.createElement("li",{key:c,className:T.a.item},r.a.createElement("p",{className:T.a.text},e,": ",a),r.a.createElement("button",{onClick:function(){return n(c)},className:T.a.button},"Delete"))})))},P=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:f,filter:""},t.addContact=function(e,n){var a=t.state.contacts,r={id:p.a.generate(),name:e,number:n},c=a.some((function(t){return t.name===r.name}));c&&alert("".concat(r.name," is already in contacts")),c||t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(l.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVissiableContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLocaleLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVissiableContacts();return r.a.createElement(_,null,r.a.createElement(x,{title:"Phonebook"},r.a.createElement(L,{onSubmit:this.addContact})),r.a.createElement(x,{title:"Contacts"},e.length>=2&&r.a.createElement(O,{value:n,onChange:this.changeFilter}),r.a.createElement(D,{contacts:a,onDeleteContact:this.deleteContact})))}}]),n}(a.Component);P.defaultProps={filter:"",contacts:[]};var A=P;n(33),n(34);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))},9:function(t,e,n){t.exports={title:"Section_title__2w5Oc",box:"Section_box__2W1J5"}}},[[18,1,2]]]);
//# sourceMappingURL=main.61d1a9bf.chunk.js.map