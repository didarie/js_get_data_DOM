var e=document.querySelectorAll(".population"),t=document.querySelector(".total-population"),n=document.querySelector(".average-population"),r=Array.from(e).map(function(e){return e.textContent}).map(function(e){return parseInt(e.replace(/,/g,""))}),o=r.reduce(function(e,t){return e+t},0),u=o/r.length;t.innerHTML=o.toLocaleString(),n.innerHTML=u.toLocaleString();
//# sourceMappingURL=index.2a40f692.js.map