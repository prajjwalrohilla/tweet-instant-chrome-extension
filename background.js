context=["selection","link","image","page"];


for(i=0;i<context.length;i++){

	var cont=context[i];
	var titlenew= "Twitter this!"+cont+"!";

chrome.contextMenus.create({
    title: titlenew,
    id:cont,
    contexts:[cont],
    onclick: tweetit
});


}

function tweetit(text ,tab) {
    //alert(text.selectionText);
switch(text.menuItemId){

	case 'selection':
chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(text.selectionText),type:"panel"});
break;

case 'link':
chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(text.linkUrl) ,type:"panel"});
break;

case 'image':
chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(text.srcUrl),type:"panel" });
break;

case 'page':
chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url="+(text.pageUrl) ,type:"panel"});
break;



}


}﻿