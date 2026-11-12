/* Shared funnel behaviour: staggered scroll reveals + count-ups.
   Progressive: everything is visible with JS off; reduced-motion shows final states.
   Uses a scroll-position check (not IntersectionObserver) so reveals can never get stuck. */
(function () {
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var pending = [].slice.call(document.querySelectorAll(".rv"));
  function fmt(n, el) { var p = el.getAttribute("data-prefix") || "", s = el.getAttribute("data-suffix") || "", d = +(el.getAttribute("data-dec") || 0);
    return p + n.toFixed(d).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + s; }
  function countUp(el) {
    if (el.__done) return; el.__done = 1;
    var to = parseFloat(el.getAttribute("data-count")), t0 = performance.now(), dur = 900;
    (function f(t) { var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); el.textContent = fmt(to * e, el); if (k < 1) requestAnimationFrame(f); })(t0);
  }
  if (reduce) { pending.forEach(function (e) { e.classList.add("in"); }); return; }
  document.documentElement.classList.add("js");
  function reveal(el) {
    var sibs = [].slice.call(el.parentNode.children).filter(function (c) { return c.classList.contains("rv"); });
    el.style.transitionDelay = (Math.max(0, sibs.indexOf(el)) * 0.08) + "s";
    el.classList.add("in");
    el.querySelectorAll("[data-count]").forEach(countUp);
  }
  var ticking = false;
  function check() {
    ticking = false;
    var limit = window.innerHeight * 0.94;
    pending = pending.filter(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < limit) { reveal(el); return false; }
      return true;
    });
    if (!pending.length) { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); }
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(check); } }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  check();
  setTimeout(check, 400);
})();

/* Click-to-play Vimeo: poster first, the real player loads on click. */
(function () {
  document.querySelectorAll(".vframe[data-vimeo]").forEach(function (f) {
    f.addEventListener("click", function () {
      if (f.querySelector("iframe")) return;
      var i = document.createElement("iframe");
      i.src = "https://player.vimeo.com/video/" + f.getAttribute("data-vimeo") + "?autoplay=1&title=0&byline=0&portrait=0&dnt=1";
      i.allow = "autoplay; fullscreen; picture-in-picture"; i.allowFullscreen = true; i.title = (f.querySelector("img") || {}).alt || "Video";
      f.appendChild(i);
    });
  });
})();

/* Click-to-play YouTube (privacy-enhanced): poster first, the real player loads on click. */
(function () {
  document.querySelectorAll(".vframe[data-yt]").forEach(function (f) {
    f.addEventListener("click", function () {
      if (f.querySelector("iframe")) return;
      var i = document.createElement("iframe"), st = f.getAttribute("data-start");
      i.src = "https://www.youtube-nocookie.com/embed/" + f.getAttribute("data-yt") + "?autoplay=1&rel=0&modestbranding=1" + (st ? "&start=" + st : "");
      i.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media"; i.allowFullscreen = true; i.referrerPolicy = "strict-origin-when-cross-origin";
      i.title = (f.querySelector("img") || {}).alt || "Video";
      f.appendChild(i);
    });
  });
})();
