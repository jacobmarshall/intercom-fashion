!function(o){"function"==typeof define&&define.amd?define([],o):"undefined"!=typeof module&&module.exports?module.exports=o():window.IntercomFashion=o()}(function(){function o(n,e,r){n()?e():setTimeout(function(){o(n,e,r)},r)}function n(n,e){o(function(){return window.Intercom&&window.Intercom.booted},function(){n(window.Intercom)},e||100)}function e(n){o(function(){return!!document.querySelector(".intercom-app-launcher-enabled")},n,100)}function r(o,n){var e=new XMLHttpRequest;e.addEventListener("readystatechange",function(){4===e.readyState&&(200===e.status?t(e.responseText,n):console.warn("Unable to load custom stylesheet from "+o+" (http status: "+e.status+")"))}),e.open("GET",o,!0),e.send()}function t(o,n){b[n?"unshift":"push"](o),a()}function c(o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(f[n]=o[n]);a()}function i(){function o(o,n){e+=o.replace(",",",\n")+" {"+n+"\n}\n"}function n(o){var n="";for(var e in o)o.hasOwnProperty(e)&&o[e]&&(n+="\n\t"+e+": "+o[e]+";");return n}var e="";return f.tooltip&&o(s+" .intercom-comment-tooltip",n({"background-color":f.tooltip.background,color:f.tooltip.color,"border-radius":f.tooltip.rounded?"10px":null})),f.conversation&&f.conversation.background&&o(s+" .intercom-conversation-background-app-color",n({"background-color":f.conversation.background,opacity:1})),f.modal&&f.modal.background&&o(s+" .intercom-modal-overlay",n({"background-color":f.modal.background})),f.launcherButton&&(f.launcherButton.icon&&o(s+" .intercom-launcher-open-icon",n({"background-image":"url("+f.launcherButton.icon+")"})),f.launcherButton.background&&o(s+" .intercom-launcher",n({"background-color":f.launcherButton.background,"background-size":"contain"}))),f.header&&(f.header.background&&o(s+" .intercom-conversations-header,"+s+" .intercom-conversation-body-profile",n({"background-color":f.header.background})),f.header.color&&o(s+" .intercom-conversations-header *,"+s+" .intercom-conversation-body-profile *",n({color:f.header.color}))),f.newConversation&&o(s+" .intercom-conversations-new-conversation-button",n({"background-color":f.newConversation.background,color:f.newConversation.color})),f.userBubble&&o(s+" .intercom-comment-container-user .intercom-comment",n({"background-color":f.userBubble.background,color:f.userBubble.color,"border-radius":f.userBubble.rounded?"30px":null})),f.adminBubble&&o(s+" .intercom-comment-container-admin .intercom-comment",n({"background-color":f.adminBubble.background,color:f.adminBubble.color,"border-radius":f.adminBubble.rounded?"30px":null})),"enableEmoji"in f&&!f.enableEmoji&&o(s+" .intercom-composer-emoji-button",n({display:"none"})),e}function a(){d(document,i()),d(document.querySelector(".intercom-messenger-frame > iframe"),u()),d(document.querySelector(".intercom-launcher-frame"),u())}function u(){return b.join("\n")+"\n"+i()}function d(o,n){if(o){var e=o.contentDocument||o,r=e.getElementById("intercom-fashion-stylesheet");r||(r=e.createElement("style"),r.id="intercom-fashion-stylesheet",e.head.appendChild(r));var t=e.getElementById("intercom-stylesheet");t&&t.parentElement.insertBefore(r,t.nextSibling),r.innerHTML="/* Intercom Fashion (http://github.com/PageProofCom/IntercomFashion) */\n"+n}}function l(o){o("onShow",function(){setTimeout(a)})}function m(){n(l),e(a)}var s="#intercom-container",b=[],f={};return{load:r,style:t,config:c,init:m}});