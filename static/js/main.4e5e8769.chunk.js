(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(e,t,n){e.exports={label:"ContactForm_label__2s0Po",input:"ContactForm_input__k823l",form:"ContactForm_form__1OtEc",button:"ContactForm_button__1EfJx"}},10:function(e,t,n){e.exports={input:"Filter_input__1WtUL"}},14:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"}]')},15:function(e,t,n){e.exports={container:"Container_container__2Bbc9"}},17:function(e,t,n){e.exports=n(34)},2:function(e,t,n){e.exports={list:"ContactList_list__3f6t9",item:"ContactList_item__1wLGE",button:"ContactList_button__1g61n",text:"ContactList_text__3-ItB"}},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),l=n(16),i=n(4),u=n(5),s=n(7),m=n(6),p=n(13),b=n.n(p),f=n(14),d=n(15),h=n.n(d),_=function(e){var t=e.children;return r.a.createElement("div",{className:h.a.container},t)},v=n(8),E=n.n(v),g=n(9),y=n.n(g),C=function(e){var t=e.children,n=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:y.a.title},n),r.a.createElement("div",{className:y.a.box},t))};C.protoTypes={children:E.a.node.isRequired,title:E.a.string.isRequired};var N=C,x=n(10),T=n.n(x),S=function(e){var t=e.value,n=e.onChange;return r.a.createElement("label",{className:T.a.label},"Find contacts by name",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:t,onChange:n,className:T.a.input,placeholder:"Type name... "}))},O=n(1),k=n.n(O),w=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:e.props.name,number:e.props.number},e.updateTodos=function(t){e.setState({name:t.currentTarget.value})},e.updateNumbers=function(t){e.setState({number:t.currentTarget.value})},e.reset=function(){e.setState({name:"",number:""})},e.handleSubmit=function(t){var n=e.state,a=n.number,r=n.name;t.preventDefault(),e.props.onSubmit(r,a),e.reset()},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:k.a.form},r.a.createElement("label",null,"Name ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:t,onChange:this.updateTodos,className:k.a.input,placeholder:"Type name... "})),r.a.createElement("label",{className:k.a.label},"Number ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:n,onChange:this.updateNumbers,className:k.a.input,placeholder:"Type number... "})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:k.a.button},"Add contact"))}}]),n}(a.Component);w.defaultProps={name:"",number:""};var j=w,F=n(2),L=n.n(F),J=function(e){var t=e.array,n=e.onDeleteTodo;return r.a.createElement("ul",{className:L.a.list},t.map((function(e){var t=e.name,a=e.number,o=e.id;return r.a.createElement("li",{key:o,className:L.a.item},r.a.createElement("p",{className:L.a.text},t,": ",a),r.a.createElement("button",{onClick:function(){return n(o)},className:L.a.button},"Delete"))})))},D=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:f,filter:e.props.filter},e.addTodo=function(t,n){var a=e.state.contacts,r={id:b.a.generate(),name:t,number:n},o="";a.forEach((function(e){e.name===r.name&&(o=e.name,alert("".concat(e.name," is already in contacts")))})),o||e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(l.a)(t))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVissiableTodos=function(){var t=e.state,n=t.contacts,a=t.filter.toLocaleLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e.deleteTodo=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.getVissiableTodos();return r.a.createElement(_,null,r.a.createElement(N,{title:"Phonebook"},r.a.createElement(j,{onSubmit:this.addTodo})),r.a.createElement(N,{title:"Contacts"},t.length>=2&&r.a.createElement(S,{value:n,onChange:this.changeFilter}),r.a.createElement(J,{array:a,onDeleteTodo:this.deleteTodo})))}}]),n}(a.Component);D.defaultProps={filter:"",contacts:[]};var P=D;n(32),n(33);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))},9:function(e,t,n){e.exports={title:"Section_title__2w5Oc",box:"Section_box__2W1J5"}}},[[17,1,2]]]);
//# sourceMappingURL=main.4e5e8769.chunk.js.map