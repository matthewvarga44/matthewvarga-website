/* Setup-only preview. The original countdown is illustrative, not a live event. */
(function(){
  var root=document.getElementById("countdown"); if(!root) return;
  var n=Schedule.next(); if(!n) return;
  document.getElementById("cdWhen").textContent=n.label+" · 8 PM Eastern";
  var mw=document.getElementById("modalWhen"); if(mw) mw.textContent=n.day+" at 8 PM Eastern";
  function paint(k,v){
    root.querySelectorAll('[data-k="'+k+'"]').forEach(function(el){
      var s=String(v).padStart(2,"0"); if(el.textContent!==s){ el.textContent=s; el.classList.remove("tick"); void el.offsetWidth; el.classList.add("tick"); } });
  }
  function tick(){ var ms=Math.max(0,n.t-new Date()); if(ms===0){ n=Schedule.next(); }
    paint("d",Math.floor(ms/864e5)); paint("h",Math.floor(ms/36e5)%24); paint("m",Math.floor(ms/6e4)%60); paint("s",Math.floor(ms/1e3)%60); }
  tick(); setInterval(tick,1000);
})();

/* Original modal controls; registration stays disabled, including without JavaScript. */
(function(){
  var modal=document.getElementById("optinModal"), form=document.getElementById("optinForm"),
      err=document.getElementById("optinErr"), last=null;
  function open(e){ if(e) e.preventDefault(); last=document.activeElement; modal.classList.add("open"); document.body.style.overflow="hidden"; setTimeout(function(){ document.getElementById("modalClose").focus(); },80); }
  function close(){ modal.classList.remove("open"); document.body.style.overflow=""; if(last&&last.focus) last.focus(); }
  document.querySelectorAll("[data-open-modal]").forEach(function(b){ b.addEventListener("click",open); });
  document.getElementById("modalClose").addEventListener("click",close);
  modal.addEventListener("click",function(e){ if(e.target===modal) close(); });
  document.addEventListener("keydown",function(e){ if(e.key==="Escape"&&modal.classList.contains("open")) close(); });
  form.addEventListener("submit",function(e){
    e.preventDefault();
    err.textContent="Registration is not open. This setup preview does not save your details or send an email.";
  });
})();
