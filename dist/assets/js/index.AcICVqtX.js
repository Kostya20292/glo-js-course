(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();let c=function(){console.log("Крот")},l=function(){console.log("овце,")},s=function(){console.log("жирафу,")},u=function(){console.log("зайке")},f=function(){console.log("голубые")},d=function(){console.log("сшил")},p=function(){console.log("фуфайки")},a=function(){s()},m=function(){a(),setTimeout(()=>{d()},1e3)},g=function(){setTimeout(()=>{m(),u()},250),l()};setTimeout(()=>{f(),setTimeout(()=>{p()},750)},500);c();g();
