/* The live workshop runs every Thursday at 8 PM Eastern (America/New_York).
   Schedule.next() returns { t: Date, day: "Thursday", label: "Thursday, Nov 12" }. */
(function () {
  var DAY = 4, HOUR = 20;
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function nthSunday(y, m, n) { var d = new Date(Date.UTC(y, m, 1)); return 1 + ((7 - d.getUTCDay()) % 7) + (n - 1) * 7; }
  function etOffset(d) { /* EDT (UTC-4) from 2 AM local on the 2nd Sunday of March to 2 AM local on the 1st Sunday of November, else EST (UTC-5) */
    var y = d.getUTCFullYear();
    var start = new Date(Date.UTC(y, 2, nthSunday(y, 2, 2), 7)), end = new Date(Date.UTC(y, 10, nthSunday(y, 10, 1), 6));
    return (d >= start && d < end) ? -4 : -5; }
  function next() {
    var now = new Date();
    for (var i = 0; i < 9; i++) {
      var c = new Date(now.getTime() + i * 864e5), off = etOffset(c), et = new Date(c.getTime() + off * 36e5);
      if (et.getUTCDay() !== DAY) continue;
      var t = new Date(Date.UTC(et.getUTCFullYear(), et.getUTCMonth(), et.getUTCDate(), HOUR - off, 0, 0));
      if (t > now) return { t: t, day: names[DAY], label: names[DAY] + ", " + months[et.getUTCMonth()] + " " + et.getUTCDate() };
    }
  }
  window.Schedule = { next: next };
})();
