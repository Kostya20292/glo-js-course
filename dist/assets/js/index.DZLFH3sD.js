(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f=s=>{const c=document.getElementById("timer-hours"),i=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let e;const t=()=>{const d=new Date(s).getTime(),l=new Date().getTime(),r=(d-l)/1e3,a=Math.floor(r/3600),u=Math.floor(r/60%60),m=Math.floor(r%60);return{timeRemaining:r,hours:a,minutes:u,seconds:m}},n=()=>{const{timeRemaining:d,hours:l,minutes:r,seconds:a}=t();c.textContent=l<10?`0${l}`:l,i.textContent=r<10?`0${r}`:r,o.textContent=a<10?`0${a}`:a,d<0&&(clearInterval(e),c.textContent="00",i.textContent="00",o.textContent="00")};n(),e=setInterval(n,1e3)},g=()=>{const s=new Date,i=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"][s.getDay()],o=s.getHours(),t=(new Date("31 december 2025").getTime()-s.getTime())/1e3;let n;o>=0&&o<6?n="Доброй ночи":o>=6&&o<12?n="Доброе утро":o>=12&&o<18?n="Добрый день":n="Добрый вечер",console.log(n),console.log(`Сегодня: ${i}`),console.log(`Текущее время: ${s.toLocaleTimeString("en")}`),console.log(`До нового года осталось ${Math.floor(t/3600/24)} дня`)};f("22 january 2025");g();
