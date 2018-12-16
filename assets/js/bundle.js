!function(a,b){"function"==typeof define&&define.amd?define(b):a.VMasker=b()}(this,function(){var a="9",b="A",c="S",d=[8,9,16,17,18,36,37,38,39,40,91,92,93],e=function(a){for(var b=0,c=d.length;c>b;b++)if(a==d[b])return!1;return!0},f=function(a){return a=a||{},a={precision:a.hasOwnProperty("precision")?a.precision:2,separator:a.separator||",",delimiter:a.delimiter||".",unit:a.unit&&a.unit.replace(/[\s]/g,"")+" "||"",suffixUnit:a.suffixUnit&&" "+a.suffixUnit.replace(/[\s]/g,"")||"",zeroCents:a.zeroCents,lastOutput:a.lastOutput},a.moneyPrecision=a.zeroCents?0:a.precision,a},g=function(a){this.elements=a};g.prototype.unbindElementToMask=function(){for(var a=0,b=this.elements.length;b>a;a++)this.elements[a].lastOutput="",this.elements[a].onkeyup=!1,this.elements[a].onkeydown=!1,this.elements[a].value.length&&(this.elements[a].value=this.elements[a].value.replace(/\D/g,""))},g.prototype.bindElementToMask=function(a){for(var b=this,c=function(c){c=c||window.event;var d=c.target||c.srcElement;e(c.keyCode)&&setTimeout(function(){b.opts.lastOutput=d.lastOutput,d.value=h[a](d.value,b.opts),d.lastOutput=d.value,d.setSelectionRange&&b.opts.suffixUnit&&d.setSelectionRange(d.value.length,d.value.length-b.opts.suffixUnit.length)},0)},d=0,f=this.elements.length;f>d;d++)this.elements[d].lastOutput="",this.elements[d].onkeyup=c,this.elements[d].value.length&&(this.elements[d].value=h[a](this.elements[d].value,this.opts))},g.prototype.maskMoney=function(a){this.opts=f(a),this.bindElementToMask("toMoney")},g.prototype.maskNumber=function(){this.opts={},this.bindElementToMask("toNumber")},g.prototype.maskPattern=function(a){this.opts={pattern:a},this.bindElementToMask("toPattern")},g.prototype.unMask=function(){this.unbindElementToMask()};var h=function(a){if(!a)throw new Error("VanillaMasker: There is no element to bind.");var b="length"in a?a.length?a:[]:[a];return new g(b)};return h.toMoney=function(a,b){if(b=f(b),b.zeroCents){b.lastOutput=b.lastOutput||"";var c="("+b.separator+"[0]{0,"+b.precision+"})",d=new RegExp(c,"g"),e=a.toString().replace(/[\D]/g,"").length||0,g=b.lastOutput.toString().replace(/[\D]/g,"").length||0;a=a.toString().replace(d,""),g>e&&(a=a.slice(0,a.length-1))}var h=a.toString().replace(/[\D]/g,""),i=new RegExp("^(0|\\"+b.delimiter+")"),j=new RegExp("(\\"+b.separator+")$"),k=h.substr(0,h.length-b.moneyPrecision),l=k.substr(0,k.length%3),m=new Array(b.precision+1).join("0");k=k.substr(k.length%3,k.length);for(var n=0,o=k.length;o>n;n++)n%3===0&&(l+=b.delimiter),l+=k[n];if(l=l.replace(i,""),l=l.length?l:"0",!b.zeroCents){var p=h.length-b.precision,q=h.substr(p,b.precision),r=q.length,s=b.precision>r?b.precision:r;m=(m+q).slice(-s)}var t=b.unit+l+b.separator+m+b.suffixUnit;return t.replace(j,"")},h.toPattern=function(d,e){var f,g="object"==typeof e?e.pattern:e,h=g.replace(/\W/g,""),i=g.split(""),j=d.toString().replace(/\W/g,""),k=j.replace(/\W/g,""),l=0,m=i.length;for(f=0;m>f;f++){if(l>=j.length){if(h.length==k.length)return i.join("");break}i[f]===a&&j[l].match(/[0-9]/)||i[f]===b&&j[l].match(/[a-zA-Z]/)||i[f]===c&&j[l].match(/[0-9a-zA-Z]/)?i[f]=j[l++]:(i[f]===a||i[f]===b||i[f]===c)&&(i=i.slice(0,f))}return i.join("").substr(0,f)},h.toNumber=function(a){return a.toString().replace(/(?!^-)[^0-9]/g,"")},h});

(function(e){"use strict";var t=e.document;var n=[];var r=[];var i=false;var s=null;var o=function(e){try{e.apply(this,r)}catch(t){if(s!==null){s.call(this,t)}}};var u=function(){var e;i=true;for(e=0;e<n.length;e=e+1){o(n[e])}n=[]};var a=function(){if(e.addEventListener){t.addEventListener("DOMContentLoaded",function(){u()},false)}else{var n=function(){if(!t.uniqueID&&t.expando){return}var r=t.createElement("document:ready");try{r.doScroll("left");u()}catch(i){e.setTimeout(n,10)}};t.onreadystatechange=function(){if(t.readyState==="complete"){t.onreadystatechange=null;u()}};n()}};var f=function(e){return f.on(e)};f.on=function(e){if(i){o(e)}else{n[n.length]=e}return this};f.params=function(e){r=e;return this};f.error=function(e){s=e;return this};a();e.domReady=f})(window)

!function(s){"use strict";function e(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}function n(s,e){var n=t(s,e)?c:a;n(s,e)}var t,a,c;"classList"in document.documentElement?(t=function(s,e){return s.classList.contains(e)},a=function(s,e){s.classList.add(e)},c=function(s,e){s.classList.remove(e)}):(t=function(s,n){return e(n).test(s.className)},a=function(s,e){t(s,e)||(s.className=s.className+" "+e)},c=function(s,n){s.className=s.className.replace(e(n)," ")});var o={hasClass:t,addClass:a,removeClass:c,toggleClass:n,has:t,add:a,remove:c,toggle:n};"function"==typeof define&&define.amd?define(o):"object"==typeof exports?module.exports=o:s.classie=o}(window);


domReady(function () {
    const w = window, d = document, u = 'https://docs.google.com/forms/d/e/1FAIpQLSenV1Qc7FeuMM6SVWtY_hSaKIMjekfwZLyQI8o7X4gnDier1w/formResponse', f = d.querySelector("#feedback"), i = d.querySelector("#ifix"), p = d.querySelector('#form-info'); f.action = u;
    var s = !1, pt = p.textContent; 

	setTimeout(function() { 
		classie.toggle(f, 'active'); 
	}, 4000);

	[].forEach.call(d.querySelectorAll('.side button[type=button]'), function(btn) {
  		btn.addEventListener("click", function(event) {
  			classie.toggle(f, 'active');
  		});
	});

    f.addEventListener("submit", function(event) {
	    event.preventDefault(); s = !0;
	    f.submit();
	});

	i.addEventListener("load", function(event) {
		if(s) {
			f.reset(); s = !1;
			p.style.background = '#0b7b8e';
			p.textContent = 'Сообщение отправлено';
			setTimeout(function() { 
				p.textContent = pt;
				p.style.background = 'none'; 
			}, 5000);
		}
	});

	VMasker(d.querySelector("input[type=tel]")).maskPattern("(999) 999-99-99");
});
