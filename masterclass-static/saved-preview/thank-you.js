(function(){
  var n=Schedule.next(); if(!n) return;
  document.getElementById("tyWhen").textContent=n.label+" at 8 PM Eastern";
  var start=n.t, end=new Date(start.getTime()+90*6e4), title="The Ordinary Millionaire Masterclass · Live with Matthew", det="Free live masterclass with Matthew Varga. The Zoom link is in the WhatsApp group.";
  function z(d){return d.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"");}
  document.getElementById("calGoogle").href="https://calendar.google.com/calendar/render?action=TEMPLATE&text="+encodeURIComponent(title)+"&details="+encodeURIComponent(det)+"&dates="+z(start)+"/"+z(end);
  document.getElementById("calOutlook").href="https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject="+encodeURIComponent(title)+"&body="+encodeURIComponent(det)+"&startdt="+start.toISOString()+"&enddt="+end.toISOString();
  var ics=["BEGIN:VCALENDAR","VERSION:2.0","BEGIN:VEVENT","DTSTART:"+z(start),"DTEND:"+z(end),"SUMMARY:"+title,"DESCRIPTION:"+det,"END:VEVENT","END:VCALENDAR"].join("\r\n");
  document.getElementById("calApple").href="data:text/calendar;charset=utf-8,"+encodeURIComponent(ics);
})();
