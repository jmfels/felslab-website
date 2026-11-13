/* =========================================================
   FELS LAB — SITE ENGINE
   You don't need to edit this file. All content is in data.js
   ========================================================= */
(function(){
  function esc(s){return (s==null?"":String(s));}
  function el(id){return document.getElementById(id);}
  /* Joins a split email {user, domain} into user@domain so the full
     address never appears as plain text in data.js (keeps spam
     scrapers from pattern-matching it). Still accepts a plain string. */
  function addr(e){
    if(!e) return "";
    if(typeof e === "string") return e;
    return esc(e.user) + "@" + esc(e.domain);
  }

  try{
    var D = window.LAB_DATA;
    if(!D) throw new Error("data.js did not load");
    var U = D.ui || {};
    var NAV = U.nav || {};
    var EMAIL = addr(D.email);
    var mailto = 'mailto:' + EMAIL;
    var page = document.body.getAttribute('data-page') || '';
    var EXT = ' target="_blank" rel="noopener noreferrer"';

    /* ---------- shared: nav + footer ---------- */
    var PAGES = [
      {id:'welcome',      label:NAV.welcome      || 'Welcome',      href:'index.html'},
      {id:'research',     label:NAV.research     || 'Research',     href:'research.html'},
      {id:'publications', label:NAV.publications || 'Publications', href:'publications.html'},
      {id:'people',       label:NAV.people       || 'People',       href:'people.html'},
      {id:'join',         label:NAV.join         || 'Join',         href:'join.html'},
      {id:'contact',      label:NAV.contact      || 'Contact',      href:'contact.html'}
    ];
    var logo = '<svg class="logo" width="35" height="32" viewBox="0 0 151.69 138.49" aria-hidden="true"><path fill="currentColor" d="M77.44,30.52l34.17,19.73v39.45l-34.17,19.73-34.17-19.73v-39.45l18.73-10.81,7.93-4.58L77.44,30.52H77.44ZM77.44,18.97q-10.22,5.9-20.44,11.8-11.86,6.85-23.73,13.7v51l44.17,25.5,44.17-25.5v-51L77.44,18.97H77.44Z"/> <g> <path fill="#fff" d="M34.1,46.17c-5.87-1.42-8.56-3.96-9.93-6.07-1.92-2.95-1.48-5.45-3.87-8.28-2.18-2.59-5.22-3.65-7.45-4.14"/> <path fill="currentColor" d="M33.4,49.09c-5.2-1.65-10.76-5.45-11.92-11.18-.68-5.31-3.46-8.6-8.63-10.23,3.77.37,7.81,2.25,9.82,5.75.71,1.2,1.15,2.46,1.65,3.5.94,2.08,2.39,3.52,4.26,4.51,1.84.99,4.01,1.53,6.23,1.82C39.15,44.03,37.62,50.38,33.4,49.09H33.4Z"/> </g> <g> <path fill="#fff" d="M47.35,35.69c-4.78-8-8.98-10.06-12.15-10.22-3.05-.16-5.59,1.43-8.55,0-2.45-1.18-3.72-3.73-4.42-5.8"/> <path fill="currentColor" d="M44.77,37.23c-2.08-4.15-4.77-9.21-9.51-10.25-2.5-.47-5.63.71-8.23-.55-2.76-1.22-4.16-4.02-4.8-6.76.56,1.25,1.25,2.44,2.14,3.4,5.74,5.96,9.84-3.85,19.66,4.52,2.32,1.95,4.18,4.23,5.89,6.57C52.34,37.78,46.81,41.09,44.77,37.23H44.77Z"/> </g> <g> <path fill="#fff" d="M34.02,67.5c-2.15.46-5.3.83-8.84,0-6.45-1.52-8.55-5.72-13.79-6.07-2.13-.15-5.21.3-9.11,3.2"/> <path fill="currentColor" d="M34.64,70.43c-4.72.66-9.75-.09-13.87-2.52-2.54-1.42-4.52-3.55-6.98-4.81-3.72-1.89-8.01-.64-11.51,1.53,3.13-2.91,7.88-5.04,12.31-3.64,2.82.83,5.16,2.61,7.79,3.53,3.55,1.31,7.45,1.21,11.01.04C37.61,63.41,38.98,69.74,34.64,70.43H34.64Z"/> </g> <g> <path fill="#fff" d="M34.02,78.97c-4.45.25-8.12.15-10.7,0-8.76-.49-17.8-2.2-17.8-2.2h0Q2.76,77.94,0,79.12"/> <path fill="currentColor" d="M34.18,81.97c-9.78-.24-19.39-2.17-28.75-4.69,0,0,.29-.04.29-.04l-5.72,1.88,5.32-2.83c9.49.69,19.12,1.15,28.53-.31C38.15,75.54,38.52,81.93,34.18,81.97H34.18Z"/> </g> <g> <path fill="#fff" d="M33.27,57.98c-1.91-1.47-5.68-3.93-11.03-4.87-3.52-.61-6.52-.35-8.56,0"/> <path fill="currentColor" d="M31.45,60.36c-4.46-4.77-11.05-7.47-17.77-7.25,6.96-2.3,14.95-1.31,21.42,2.49C39.09,58.05,34.86,63.57,31.45,60.36H31.45Z"/> </g> <g> <path fill="#fff" d="M89.55,113.8c.95,3.5,2.55,5.32,3.87,6.35,2.21,1.72,4.05,1.5,6.9,3.31,2.31,1.47,3.79,3.32,4.69,4.69"/> <path fill="currentColor" d="M92.45,113.01c.25,2.29.9,4.4,2.54,5.96,1.18,1.15,3.02,1.73,4.48,2.73,2.41,1.57,4.34,3.92,5.54,6.45-2.4-2.8-5.49-4.48-9.09-5.04-4.36-.66-7.82-4.57-9.26-8.53C84.99,110.22,91.68,108.4,92.45,113.01H92.45Z"/> </g> <g> <path fill="#fff" d="M101.58,106.52c-.19,4.44,1.06,6.5,2.21,7.56.25.23.45.36,5.52,2.94,2.45,1.25,3.09,1.56,3.86,2.3,1.51,1.44,2.17,3.19,2.48,4.41"/> <path fill="currentColor" d="M104.58,106.65c-.4,2.24-.51,4.32.53,5.96.7.68,1.89,1.35,2.77,2,1.54,1.08,3.58,2.32,5.05,3.54,1.67,1.55,2.47,3.59,2.72,5.58-.72-1.87-2.01-3.51-3.59-4.36-1.42-.67-3.99-1.5-5.55-2.09-1.33-.54-2.49-.79-3.83-1.56-.91-.67-1.58-1.4-2.16-2.32-1.41-2.34-1.77-4.78-1.94-7.08C98.47,101.78,105.18,102.14,104.58,106.65H104.58Z"/> </g> <g> <path fill="#fff" d="M121.61,61.4c3.4-.58,6-1.49,7.73-2.21,3.62-1.5,4.28-2.49,7.17-3.03,2.14-.4,3.92-.25,6.9,0,2.41.2,4.39.54,5.8.83"/> <path fill="currentColor" d="M121.1,58.44c4.88-.12,8.85-1.77,13.45-3.33,5.18-.95,9.83.6,14.66,1.88-4.53-.24-9.49-.76-13.73.97-4.07,2.59-8.58,5.27-13.41,6.41C117.77,65.34,116.71,58.9,121.1,58.44H121.1Z"/> </g> <g> <path fill="#fff" d="M121.61,46.08c9.07-2.08,12.45-4.47,13.8-6.35.28-.39,1.04-1.54,2.48-2.2,1.92-.88,3.73-.29,5.52,0,1.93.31,4.7.42,8.28-.54"/> <path fill="currentColor" d="M120.94,43.16c3.82-.56,7.71-1.17,11.11-2.87,1.2-.58,1.93-1.3,2.8-2.29,2.5-2.66,5.87-2.2,8.83-1.19,2.55.65,5.31.65,8.01.18-2.57.95-5.37,1.49-8.23,1.3-2.52-.26-4.91-.56-6.34,1.68-.33.52-.78,1.3-1.24,1.79-3.59,3.86-8.82,5.57-13.6,7.25C118.1,50.19,116.65,43.93,120.94,43.16H120.94Z"/> </g> <g> <path fill="#fff" d="M61.83,27.68c-.53-3.09-1.77-4.66-2.76-5.52-2.13-1.85-3.97-1.12-6.62-3.31-.7-.57-2.45-2.02-3.03-4.41-.88-3.59,1.52-6.67,1.93-7.18"/> <path fill="currentColor" d="M58.88,28.19c-.18-3-.88-4.81-3.77-5.85-2.37-.94-4.44-2.81-5.67-5.1-1.9-3.29-.61-7.61,1.91-9.98-1.18,1.9-1.8,4.18-1.34,6.16.43,1.99,1.86,3.43,3.6,4.44,1.38.86,2.8.83,4.43,1.3,3.6,1.01,5.91,4.62,6.75,8.01C65.93,31.57,59.27,32.73,58.88,28.19H58.88Z"/> </g> <g> <path fill="#fff" d="M50.94,105.24c-1.88,3.12-5.47,7.99-11.59,11.59-2.16,1.27-4.23,2.15-6.08,2.76"/> <path fill="currentColor" d="M53.5,106.8c-5.01,6.49-12.28,11.28-20.23,12.79,3.53-1.69,6.63-4.02,9.17-6.74,2.54-2.73,4.52-5.86,5.93-9.16C50.39,99.59,56.19,103.09,53.5,106.8H53.5Z"/> </g> <g> <path fill="#fff" d="M65.85,113.8c-8.98,4.7-10.92,8.41-10.85,11.04.07,2.41,1.84,3.96,1.11,5.79-1.01,2.52-5.69,3.01-9.52,3.04"/> <path fill="currentColor" d="M67.24,116.46c-3.95,1.78-11.97,4.88-10.54,10.06.4,1.36,1.12,3.34.12,4.78-2.3,3.13-6.88,2.49-10.23,2.37,2.54-.3,5.47-.64,7.59-2.05,2.61-1.94-.49-3.71-.66-6.54-.42-3.46,1.82-6.39,4.03-8.6,2.15-2.11,4.51-3.78,6.91-5.34C68.21,108.94,71.2,114.63,67.24,116.46H67.24Z"/> </g> <g> <path fill="#fff" d="M77.73,120.27c.21,5.3-1.13,8.23-2.49,9.94-.66.84-1.96,2.19-2.48,4.41-.36,1.55-.2,2.92,0,3.87"/> <path fill="currentColor" d="M80.72,120.15c-.37,3.63-1.31,7.48-3.81,10.31-1.09,1.21-2.4,2.04-3.17,3.49-.74,1.29-1.08,2.9-.98,4.54-.58-1.53-.81-3.3-.43-5.06.29-1.68,1.37-3.16,2.09-4.64,1.11-2.57.9-5.53.31-8.4C74.05,115.75,81.03,115.46,80.72,120.15H80.72Z"/> </g> <g> <path fill="#fff" d="M77.44,20.28c.06-2.58.83-4.14,1.5-5.09,1.2-1.68,2.51-1.99,3.06-3.81.24-.81.16-1.64,0-3.31-.27-2.7-.8-3.22-.63-4.59.11-.86.51-2.09,1.86-3.48"/> <path fill="currentColor" d="M74.44,20.21c.29-2.23,1.11-4.69,2.82-6.52.82-.92,1.87-1.57,2.39-1.94.51-.35.82-.71.99-1.29.49-2.09-.08-4.67.16-6.86.29-1.47,1.3-2.73,2.43-3.6-1.14,1.48-1.71,3.4-1.03,4.88.32.84.66,1.82.88,2.77.21.96.48,1.79.56,3.01.06,1.29-.48,2.71-1.28,3.68-1.83,2.02-2.28,3.38-1.92,6.01C80.84,25.04,73.85,24.89,74.44,20.21H74.44Z"/> </g> <g> <path fill="#fff" d="M86.04,24.8c1.25-.02,3.51-.27,5.38-1.86,1.72-1.46,2.39-3.43,2.69-4.29.91-2.64.21-3.78,1.45-5.23.51-.6,1.24-.99,2.69-1.78,1.33-.72,2.49-1.19,3.31-1.5"/> <path fill="currentColor" d="M85.99,21.81c3.24.57,5.6-1.11,6.88-4.24.36-.77.51-1.55.8-2.68.28-1.14,1.21-2.28,2.26-2.77,1.86-.88,3.67-1.52,5.63-1.98-1.68.88-3.36,2.02-4.79,3.22-.6.54-.88,1.13-.88,1.93.46,6.35-3.2,11.99-10.04,12.54C81.29,28.09,81.44,21.33,85.99,21.81H85.99Z"/> </g> <g> <path fill="#fff" d="M33.27,94.43c-3.57.27-6.47.16-8.48,0-4.38-.33-7.1-1.08-11.59-.62-1.68.18-3.04.46-3.93.67"/> <path fill="currentColor" d="M33.5,97.43c-4.18-.17-8.43-.84-12.43-1.87-3.91-1.06-7.76-1.56-11.8-1.08,7.56-3.06,16.01-1.06,23.78-3.04C37.52,90.76,38.03,97.43,33.5,97.43H33.5Z"/> </g> <g> <path fill="#fff" d="M39.42,98.68c-1.13,1.03-2.99,2.47-5.59,3.31-3.51,1.13-5.51.26-7.52,1.65-1.19.83-2.57,2.59-2.83,6.83"/> <path fill="currentColor" d="M41.44,100.89c-2.6,1.89-5.69,3.14-8.9,3.36-1.78.2-3.63-.32-5.21.09-2.44.84-3.32,3.67-3.85,6.13-.44-4.27.99-8.6,5.86-9.24,3.42-.62,6-2.16,8.05-4.77C40.48,92.95,45.21,98.1,41.44,100.89H41.44Z"/> </g> <g> <path fill="#fff" d="M111.61,101.68c.52.38,1.36.91,2.48,1.24,3.91,1.15,6.77-1.45,9.32,0,.56.32,1.3.95,1.86,2.32"/> <path fill="currentColor" d="M113.38,99.26c3.15,4.61,10.45-.83,11.89,5.98-1.64-2.59-3.6-2.08-6.06-.89-1.22.51-2.73,1.02-4.43,1.01-1.84.03-3.72-.55-5.35-1.48C105.16,101.19,110.06,95.46,113.38,99.26H113.38Z"/> </g> <g> <path fill="#fff" d="M71.81,23.34c-3.17-.96-4.88-2.6-5.68-3.52-1.45-1.67-2.02-3.39-3.1-6.62-.74-2.21-1.19-4.09-1.45-5.39"/> <path fill="currentColor" d="M70.94,26.21c-3.55-1.52-6.83-4.63-7.81-8.38-.87-3.38-1.34-6.6-1.55-10.02,1.13,3.02,2.63,6.11,4.28,8.79,1.57,2.4,4.08,3.57,6.81,3.87,1.68.18,2.89,1.68,2.71,3.36C75.19,25.93,72.78,27.19,70.94,26.21H70.94Z"/> </g> <g> <path fill="#fff" d="M115.23,41.54c2.51-3.91,4.9-5.04,6.63-5.34,1.68-.29,2.7.21,5.17,0,2.62-.22,4.69-1.05,6-1.7"/> <path fill="currentColor" d="M112.71,39.92c2.45-2.98,6.36-6.03,10.54-5.31,3.35.86,6.47,1.01,9.78-.11-1.39.97-2.97,1.76-4.67,2.29-1.56.56-3.65.69-5.19.82-2.85.48-4.29,3.05-5.41,5.55C115.65,47.35,109.78,43.58,112.71,39.92H112.71Z"/> </g> <g> <path fill="#fff" d="M120.51,94.38c2.84,1.09,5.23,1.38,6.83,1.45,2.54.12,6.17.28,9.93-1.45,1.29-.59,2.31-1.28,3.73-1.03,1.52.27,2.61,1.47,3.31,2.5"/> <path fill="currentColor" d="M121.57,91.58c4.23,2.23,9.42,3.15,14.11,2.24,1.96-.44,4.53-1.94,6.52-.46.98.64,1.62,1.56,2.11,2.49-1.23-1.51-3.3-2.68-5.08-1.55-5.65,3.93-13.31,4.56-19.88,2.86C115.08,95.81,117.53,89.63,121.57,91.58H121.57Z"/> </g> <g> <path fill="#fff" d="M102.75,34.5c-.59-4.49.8-6.98,1.53-8.01,1.32-1.88,3.29-3.05,5.07-4.1,3.25-1.92,5.03-1.98,5.9-3.72.7-1.4.36-2.98,0-4.04"/> <path fill="currentColor" d="M99.77,34.89c-.3-7.53,3.4-11.75,10.31-14.19,3.56-1.24,6.09-1.47,5.17-6.07,1.13,2.12.94,5.01-1.35,6.32-1.93,1.19-3.62,2.23-5.31,3.66-3.32,2.52-3.92,5.76-2.87,9.5C106.68,38.56,100,39.45,99.77,34.89H99.77Z"/> </g> <g> <path fill="#fff" d="M121.32,72.68c4.24,1.55,7.42,1.38,9.62.87,4.53-1.05,7.51-4.16,10.45-2.85,1.06.47,1.72,1.33,2.1,1.98"/> <path fill="currentColor" d="M122.35,69.87c3.13,1.68,6.52,2.52,10.08,1.65,2.67-.45,6.18-2.73,9.07-1.18.97.55,1.6,1.43,1.99,2.34-1.14-1.59-3.1-2.24-4.85-1.35-1.65.76-3.24,2.03-5.16,3-3.91,2.16-8.97,2.27-13.26,1.16C115.89,74.22,118.26,67.94,122.35,69.87H122.35Z"/> </g> <g> <path fill="#fff" d="M121.22,85.73c2.37-.42,5.29-.9,8.9-1.45,2.13-.33,4.22-.62,6.83,0,.88.21,1.59.47,2.07.66"/> <path fill="currentColor" d="M120.7,82.77s9.21.02,9.21.02c2.3,0,4.86.17,7.04,1.1.71.35,1.4.71,2.07,1.05-1.49-.24-2.95-.46-4.43-.25-2.9.33-9.97,3.12-12.85,3.99C117.18,90.03,115.95,83.05,120.7,82.77H120.7Z"/> </g></svg>';
    var header = el('siteHeader');
    if(header){
      header.innerHTML =
        '<div class="nav">'+
          '<a href="index.html" class="brand">'+logo+'<span>'+esc(D.labName)+'</span></a>'+
          '<button class="nav-toggle" id="navToggle" type="button" aria-label="Menu" aria-expanded="false" aria-controls="navLinks">'+
            '<span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span>'+
          '</button>'+
          '<nav class="nav-links" id="navLinks">'+ PAGES.map(function(p){
            return '<a href="'+p.href+'"'+(p.id===page?' class="active"':'')+'>'+p.label+'</a>';
          }).join('') +'</nav>'+
        '</div>';
      var navToggle = el('navToggle');
      if(navToggle){
        navToggle.addEventListener('click', function(){
          var open = header.classList.toggle('nav-open');
          navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
      }
    }
    var foot = el('siteFooter');
    if(foot){
      var year = new Date().getFullYear();
      var inst = D.institution ? ' · '+esc(D.institution) : '';
      foot.innerHTML = '<div class="foot"><span>© '+year+' '+esc(D.labName)+inst+'</span>'+
        '<span><a href="'+mailto+'">'+EMAIL+'</a></span></div>';
    }

    /* ---------- welcome ---------- */
    if(page==='welcome'){
      var hero = D.hero || {};
      var media = hero.image
        ? '<img src="'+esc(hero.image)+'" alt="">'
        : '<div class="hero-ph">'+esc(U.heroPlaceholder||'Add a lab photo (set hero.image in data.js)')+'</div>';
      var paras = (hero.paragraphs||[]).map(function(p){return '<p class="lead">'+p+'</p>';}).join('');
      var wlinks = (U.welcomeLinks||[]).map(function(l){
        return '<a href="'+esc(l.href)+'">'+esc(l.label)+'</a>';
      }).join('');
      el('welcomeMount').innerHTML =
        '<div class="welcome-hero">'+media+
          (hero.caption?'<figcaption>'+esc(hero.caption)+'</figcaption>':'')+
        '</div>'+
        '<h1>'+esc(hero.headline)+'</h1>'+ paras +
        (wlinks?'<div class="welcome-links">'+wlinks+'</div>':'');
    }

    /* ---------- research ---------- */
    if(page==='research'){
      var r = D.research || {};
      el('researchTitle').textContent = r.title || 'Research';
      var ri = el('researchIntro');
      if(r.intro){ ri.textContent = r.intro; } else { ri.style.display='none'; }
      el('researchMount').innerHTML = (r.themes||[]).map(function(t){
        var fig = t.image
          ? '<figure><img src="'+esc(t.image)+'" alt="'+esc(t.title)+'">'+(t.caption?'<figcaption>'+esc(t.caption)+'</figcaption>':'')+'</figure>'
          : '<figure><div class="fig-ph">'+esc(U.figurePlaceholder||'Add a figure (set the image in data.js)')+'</div>'+
            (t.caption?'<figcaption>'+esc(t.caption)+'</figcaption>':'')+'</figure>';
        var body = (t.paragraphs||[]).map(function(p){return '<p>'+p+'</p>';}).join('');
        return '<section class="theme">'+
          '<h2 class="theme-title">'+esc(t.title)+'</h2>'+
          '<div class="theme-text">'+body+'</div>'+
          fig+
        '</section>';
      }).join('');
    }

    /* ---------- people ---------- */
    if(page==='people'){
      var pp = D.people || {};
      el('peopleTitle').textContent = pp.title || 'People';
      el('peopleMount').innerHTML = (pp.members||[]).map(function(p){
        var portrait = p.photo
          ? '<div class="portrait"><img src="'+esc(p.photo)+'" alt="'+esc(p.name)+'"></div>'
          : '<div class="portrait"><div class="ph">'+esc(U.photoPlaceholder||'PHOTO')+'</div></div>';
        var links=[];
        var pe = addr(p.email);
        if(pe) links.push('<a href="mailto:'+pe+'">'+pe+'</a>');
        (p.links||[]).forEach(function(l){links.push('<a href="'+esc(l.url)+'"'+EXT+'>'+esc(l.label)+'</a>');});
        return '<div class="person">'+portrait+'<div>'+
          '<h2>'+esc(p.name)+'</h2>'+
          '<div class="role">'+esc(p.role)+'</div>'+
          (p.note?'<div class="note">'+p.note+'</div>':'')+
          (links.length?'<div class="links">'+links.join(' · ')+'</div>':'')+
        '</div></div>';
      }).join('');
      var jn = pp.joining || {};
      el('joiningMount').innerHTML =
        '<h2>'+esc(jn.title||'Joining the lab')+'</h2>'+
        (jn.paragraphs||[]).map(function(p){return '<p>'+p+'</p>';}).join('');
    }

    /* ---------- publications ---------- */
    if(page==='publications'){
      var pb = D.publications || {};
      el('pubsTitle').textContent = pb.title || 'Publications';
      var pi = el('pubsIntro');
      if(pb.intro){ pi.textContent = pb.intro; } else { pi.style.display='none'; }
      function pubRow(it){
        var link = it.pmid ? 'https://pubmed.ncbi.nlm.nih.gov/'+esc(it.pmid)+'/' : '';
        var titleHtml = link ? '<a href="'+link+'"'+EXT+'>'+esc(it.title)+'</a>' : esc(it.title);
        var jrnl = '';
        if(it.journal || it.pmid){
          jrnl = '<div class="jrnl">'+(it.journal?'<em>'+esc(it.journal)+'</em>':'')+
                 (it.pmid?' PMID: '+esc(it.pmid):'')+'</div>';
        }
        var feat = '';
        if(it.featured && it.featured.length){
          feat = '<div class="feat"><span class="feat-label">'+esc(U.featuredLabel||'Featured in')+':</span> '+
                 it.featured.map(function(x){
                   return '<a href="'+esc(x.url)+'"'+EXT+'>'+esc(x.label)+'</a>';
                 }).join(' · ')+'</div>';
        }
        return '<div class="pub">'+
          '<div class="yr">'+esc(it.year)+'</div>'+
          '<div class="ptitle">'+titleHtml+'</div>'+
          (it.authors?'<div class="authors">'+it.authors+'</div>':'')+
          jrnl+
          feat+
        '</div>';
      }
      el('pubsMount').innerHTML = (pb.items||[]).map(pubRow).join('');
      var acts='';
      if(pb.scholarUrl) acts += '<a href="'+esc(pb.scholarUrl)+'"'+EXT+'>'+esc(U.scholarListLink||'Full list on Google Scholar →')+'</a>';
      el('pubsActions').innerHTML = acts;
    }

    /* ---------- join ---------- */
    if(page==='join'){
      var j = D.join || {};
      el('joinTitle').textContent = j.title || 'Join the lab';
      var ji = el('joinIntro');
      if(j.intro){ ji.textContent = j.intro; } else { ji.style.display='none'; }
      el('rolesMount').innerHTML = (j.roles||[]).map(function(ro){
        return '<div class="role-item"><h2>'+esc(ro.title)+'</h2><p>'+esc(ro.body)+'</p>'+
          (ro.status?'<div class="status">'+esc(ro.status)+'</div>':'')+'</div>';
      }).join('');
      var applySep = (U.applySeparator!=null) ? U.applySeparator : ': ';
      el('applyMount').innerHTML =
        '<h2>'+esc(U.applyHeading||'How to apply')+'</h2>'+
        '<p>'+esc(j.applyIntro)+' <a href="'+mailto+'">'+EMAIL+'</a>.</p>'+
        '<ul>'+(j.applyChecklist||[]).map(function(c){
          return '<li><strong>'+esc(c.who)+'</strong>'+esc(applySep)+esc(c.what)+'</li>';
        }).join('')+'</ul>';
    }

    /* ---------- contact ---------- */
    if(page==='contact'){
      var ct = D.contact || {};
      el('contactTitle').textContent = ct.title || 'Contact';
      var social = (ct.social||[]).map(function(s){
        return '<a href="'+esc(s.url)+'"'+EXT+'>'+esc(s.label)+'</a>';
      }).join(' · ');
      var map = ct.mapEmbed
        ? '<div class="contact-map"><iframe src="'+esc(ct.mapEmbed)+'" title="'+esc(U.mapTitle||'Lab location map')+'" '+
          'loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>'
        : '';
      el('contactMount').innerHTML =
        '<div class="contact-info">'+
          '<p><a href="'+mailto+'">'+EMAIL+'</a></p>'+
          '<p class="addr">'+(ct.address||[]).map(esc).join('<br>')+'</p>'+
          (social?'<p class="social">'+social+'</p>':'')+
        '</div>'+
        map;
    }

  }catch(err){
    var bar=document.createElement('div');
    bar.className='data-error';
    bar.textContent='There is a small typo in data.js — usually a missing comma, bracket, or backtick. Undo your last edit. ('+err.message+')';
    document.body.appendChild(bar);
    console.error(err);
  }
})();
