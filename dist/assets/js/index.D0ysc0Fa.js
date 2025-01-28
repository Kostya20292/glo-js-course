(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=async()=>await(await fetch("dbHeroes.json")).json(),d=s=>s.replace(/([A-Z])/g," $1").replace(/^./,o=>o.toUpperCase()),c=s=>{const o=document.getElementById("cardsContainer");o.innerHTML="",s.forEach(r=>{const n=Object.keys(r).filter(e=>e!=="photo").map(e=>`<p><strong>${d(e)}:</strong> ${e==="movies"?r[e].join(", "):r[e]}</p>`);o.insertAdjacentHTML("beforeend",`
        <div class="card">
          <img src="${r.photo}" alt="${r.name}" />
          <div class="card-content">
            <h2>${r.name}</h2>
            ${n.join("")}
          </div>
        </div>
      `)})},l=async()=>{const s=document.getElementById("movieFilter"),o=await a();let r=new Set;c(o),o.forEach(n=>{var e;(e=n.movies)==null||e.forEach(t=>{r.add(t)})}),r.forEach(n=>{const e=document.createElement("option");e.value=n,e.textContent=n,s.append(e)}),s.addEventListener("input",()=>{const n=o.filter(e=>{var t;return(t=e.movies)==null?void 0:t.includes(s.value)});c(n)})};l();
