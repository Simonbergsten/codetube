window.cteditor=function(n){var o={};function a(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}return a.m=n,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,n){var o,a,i;a=[t,n(1),n(2),n(3),n(4)],void 0===(i="function"==typeof(o=function(e,t,n,l,u){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){var t={el:e.el||".ct-editor",basicButtons:e.basicButtons||[{id:1,name:"undo",icon:'<i class="fa fa-undo"></i>'},{id:2,name:"redo",icon:'<i class="fa fa-repeat"></i>'},{id:3,name:"bold",icon:'<i class="fa fa-bold"></i>'},{id:4,name:"italic",icon:'<i class="fa fa-italic"></i>'},{id:5,name:"underline",icon:'<i class="fa fa-underline"></i>'},{id:6,name:"strikeThrough",icon:'<i class="fa fa-strikethrough"></i>'},{id:7,name:"superscript",icon:'<i class="fa fa-superscript"></i>'},{id:8,name:"subscript",icon:'<i class="fa fa-subscript"></i>'},{id:9,name:"insertOrderedList",icon:'<i class="fa fa-list-ol"></i>'},{id:10,name:"insertUnorderedList",icon:'<i class="fa fa-list-ul"></i>'},{id:11,name:"justifyLeft",icon:'<i class="fa fa-align-left"></i>'},{id:12,name:"justifyCenter",icon:'<i class="fa fa-align-center"></i>'},{id:13,name:"justifyRight",icon:'<i class="fa fa-align-right"></i>'},{id:14,name:"justifyFull",icon:'<i class="fa fa-align-justify"></i>'}],classButtons:e.classButtons||"btn btn-secondary btn-sm mr-1",buttonDropdowns:e.buttonDropdowns||[{id:1,name:"heading",icon:'<i class="fa fa-header"></i>',title:"Heading",items:[{value:"H1",text:"<h1>Heading 1</h1>"},{value:"H2",text:"<h2>Heading 2</h2>"},{value:"H3",text:"<h3>Heading 3</h3>"},{value:"H4",text:"<h4>Heading 4</h4>"},{value:"H5",text:"<h5>Heading 5</h5>"},{value:"H6",text:"<h6>Heading 6</h6>"}]},{id:2,name:"fontName",icon:'<i class="fa fa-font"></i>',title:"Font",items:[{value:"arial",text:'<span style="font-family: arial">Arial</span>'},{value:"comic sans ms",text:'<span style="font-family: comic sans ms">Comic Sans MS</span>'},{value:"impact",text:'<span style="font-family: impact">Impact</span>'},{value:"ubuntu",text:'<span style="font-family: ubuntu">Ubuntu</span>'},{value:"verdana",text:'<span style="font-family: verdana">Verdana</span>'},{value:"times",text:'<span style="font-family: times">Times New Roman</span>'},{value:"tahoma",text:'<span style="font-family: tahoma">Tahoma</span>'},{value:"helvetica",text:'<span style="font-family: helvetica">Helvetica</span>'}]},{id:3,name:"fontSize",icon:'<i class="fa fa-text-height"></i>',title:"Size",items:[{value:"1",text:'<span style="font-size: 10px">10px</span>'},{value:"2",text:'<span style="font-size: 13px">13px</span>'},{value:"3",text:'<span style="font-size: 16px">16px</span>'},{value:"4",text:'<span style="font-size: 18px">18px</span>'},{value:"5",text:'<span style="font-size: 24px">24px</span>'},{value:"6",text:'<span style="font-size: 32px">32px</span>'},{value:"7",text:'<span style="font-size: 48px">48px</span>'}]}],classDropdowns:e.classDropdowns||"btn-group btn-group-sm mr-1",classDropdownItems:e.classDropdownItems||{button:"dropdown-toggle",menu:"dropdown-menu",item:"dropdown-item",all:"btn btn-secondary"},viewButtons:e.viewButtons||[{id:1,name:"text",icon:'<i class="fa fa-pencil-square-o"></i>'},{id:2,name:"html",icon:'<i class="fa fa-code"></i>'}]};return new i(t)},n=o(n),l=o(l),u=o(u);var i=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e.el,this.basicButtons=e.basicButtons,this.classButtons=e.classButtons,this.viewButtons=e.viewButtons,this.buttonDropdowns=e.buttonDropdowns,this.classDropdowns=e.classDropdowns,this.classDropdownItems=e.classDropdownItems,this.init()}return e=t,(n=[{key:"init",value:function(){var e=document.querySelector(this.el),t=document.createElement("div");t.classList.add("ct-editor");var n=document.createElement("div");n.classList.add("ct-editor-toolbar");var o=document.createElement("div");o.classList.add("ct-editor-toolbar-left");var a=document.createElement("div");a.classList.add("ct-editor-toolbar-right"),n.appendChild(o),n.appendChild(a),t.appendChild(n);var i=document.createElement("div");i.classList.add("ct-editor-content"),i.contentEditable="true",i.innerHTML=e.value,t.appendChild(i),e.parentNode.replaceChild(t,e),l.toolDropdown(o,this.buttonDropdowns,this.classDropdowns,this.classDropdownItems);var s=o.querySelectorAll(".ct-dropdown");u.actionDropdown(s,this.classDropdownItems),l.toolButton(o,this.basicButtons,this.classButtons),l.toolButton(a,this.viewButtons,this.classButtons);var r=o.querySelectorAll("button");u.actionButton(r,!1,!1);var c=a.querySelectorAll("button");u.viewContent(c,i,e),u.keyboardShortcut(i)}}])&&a(e.prototype,n),o&&a(e,o),t;var e,n,o}()})?o.apply(t,a):o)||(e.exports=i)},function(e,t,n){},function(e,t,n){var o,a,i;a=[t],void 0===(i="function"==typeof(o=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.saveSelection=function(){if(window.getSelection){if(sel=window.getSelection(),sel.getRangeAt&&sel.rangeCount)return sel.getRangeAt(0)}else if(document.selection&&document.selection.createRange)return document.selection.createRange();return null},e.restoreSelection=function(e){e&&(window.getSelection?(sel=window.getSelection(),sel.removeAllRanges(),sel.addRange(e)):document.selection&&e.select&&e.select())},e.restoreIESelection=function(e){e&&(window.getSelection?(sel=window.getSelection(),sel.removeAllRanges(),sel.addRange(e)):document.selection&&e.select&&e.select())},e.insertTextAtSelection=function(e){var t,n;if(window.getSelection){if((t=window.getSelection()).getRangeAt&&t.rangeCount){(n=t.getRangeAt(0)).deleteContents();var o=document.createTextNode(e);n.insertNode(o),t.removeAllRanges(),(n=n.cloneRange()).selectNode(o),n.collapse(!1),t.addRange(n)}}else document.selection&&document.selection.createRange&&((n=document.selection.createRange()).pasteHTML(e),n.select())}})?o.apply(t,a):o)||(e.exports=i)},function(e,t,n){var o,a,i;a=[t],void 0===(i="function"==typeof(o=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toolButton=function(n,e,o){e.forEach(function(e){var t=document.createElement("button");t.setAttribute("type","button"),t.setAttribute("class",o),t.setAttribute("data-button",e.name),t.classList.add("ct-"+e.name),t.innerHTML=e.icon,n.appendChild(t)})},e.toolDropdown=function(a,e,i,s){e.forEach(function(n){var e=document.createElement("div");e.setAttribute("class",i),e.classList.add("ct-dropdown");var t=document.createElement("button");t.setAttribute("type","button"),t.setAttribute("class",s.all),t.classList.add(s.button),t.innerHTML=n.icon+' <span class="ct-dropdown-text">'+n.title+"</span>",e.appendChild(t);var o=document.createElement("div");o.classList.add(s.menu),e.appendChild(o),n.items.forEach(function(e){var t=document.createElement("button");t.setAttribute("type","button"),t.classList.add(s.item),t.setAttribute("data-dropdown",n.name),t.setAttribute("data-value",e.value),t.innerHTML=e.text,o.appendChild(t)}),a.appendChild(e)})}})?o.apply(t,a):o)||(e.exports=i)},function(e,t,n){var o,a,i;a=[t],void 0===(i="function"==typeof(o=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.actionButton=function(e,n,o){Array.prototype.forEach.call(e,function(t){t.onclick=function(e){e.preventDefault(),document.execCommand(t.getAttribute("data-button"),n,o)}})},e.actionDropdown=function(e,s){Array.prototype.forEach.call(e,function(i){i.onclick=function(e){e.preventDefault();var t=i.querySelector("."+s.button),n=i.querySelector("."+s.menu),o=t.querySelector(".ct-dropdown-text"),a=n.querySelectorAll("."+s.item);i.onclick=function(e){e.preventDefault(),n.classList.toggle("show")},Array.prototype.forEach.call(a,function(n){n.onclick=function(){var e=n.getAttribute("data-dropdown"),t=n.getAttribute("data-value");document.execCommand(e,!1,t),o.innerText=n.innerText}})}})},e.viewContent=function(e,a,i){Array.prototype.forEach.call(e,function(o){o.onclick=function(e){if(e.preventDefault(),"html"==o.getAttribute("data-button")){var t=a.innerHTML;i.value=t,a.parentNode.replaceChild(i,a),i.style.backgroundColor="#ffffff",i.style.color="#333333",i.style.border="none"}else{var n=i.value;a.innerHTML=n,i.parentNode.replaceChild(a,i)}}})},e.keyboardShortcut=function(e){e.addEventListener("keypress",function(e){e.preventDefault(),"Enter"==e.key?document.execCommand("insertParagraph"):"Backspace"==e.key?document.execCommand("delete"):"Delete"==e.key?document.execCommand("forwardDelete"):e.ctrlKey&&"b"==e.key?document.execCommand("bold"):e.ctrlKey&&"i"==e.key?document.execCommand("italic"):e.ctrlKey&&"u"==e.key?document.execCommand("underline"):e.ctrlKey&&"m"==e.key?document.execCommand("removeFormat"):e.ctrlKey&&"l"==e.key?document.execCommand("justifyLeft"):e.ctrlKey&&"e"==e.key?document.execCommand("justifyCenter"):e.ctrlKey&&"r"==e.key?document.execCommand("justifyRight"):e.ctrlKey&&"j"==e.key&&document.execCommand("justifyFull")})}})?o.apply(t,a):o)||(e.exports=i)}]).default;