(this["webpackJsonpsun-run"]=this["webpackJsonpsun-run"]||[]).push([[0],{22:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),s=a.n(i),o=a(9),u=a(2),l=a(5),c=a(6),m=a(7),d=a(8),h=a(20),f=a.n(h),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"headerContainer container"},r.a.createElement("div",{className:"headerContent"},r.a.createElement("h1",null,"Twilight Me")),r.a.createElement("div",{className:"hederInfo dropdown",tabIndex:"0"},r.a.createElement("div",{className:"infoButton"},r.a.createElement("i",{className:"fas fa-info-circle",tabIndex:"0"})),r.a.createElement("div",{className:"dropdownContent",tabIndex:"0"},r.a.createElement("p",null,"You can define twilight simply as the time of day between daylight and darkness, whether that's after sunset, or before sunrise. It's a time when the light from the sky appears diffused and often pinkish."),r.a.createElement("p",null,' You want to experience this on your run! Let us twilight you: click on "go run!" below.')),r.a.createElement("div",{className:"runButton"},r.a.createElement("a",{href:"#form",className:"goRun btn",onClick:this.clicked},"go run!")))))}}]),a}(n.Component),v=a(21);var E=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"When would you like to run?"),r.a.createElement("form",{action:"",onSubmit:e.handleSubmit},r.a.createElement("div",{className:"formParent"},r.a.createElement("div",{className:"dateParent"},r.a.createElement("label",{htmlFor:"beforeSunrise"},"Date"),r.a.createElement("input",{type:"date",name:"date",id:"date",onChange:e.handleDate,value:e.date,required:!0,min:"1980-01-02",max:"2040-01-02"})),r.a.createElement("p",{className:"radio"},"Time of day"),r.a.createElement("select",{onChange:e.handleSunrise,required:!0},r.a.createElement("option",{value:""},"Time"),r.a.createElement("option",{value:"true"},"Before Sunrise"),r.a.createElement("option",{value:"false"},"Before Sunset")),r.a.createElement("p",{className:"select"},"Run duration"),r.a.createElement("select",{onChange:e.handleDuration,value:e.duration,required:!0},r.a.createElement("option",{value:""},"Minutes"),r.a.createElement("option",{value:"15"},"15 Minutes"),r.a.createElement("option",{value:"30"},"30 Minutes"),r.a.createElement("option",{value:"45"},"45 Minutes"),r.a.createElement("option",{value:"60"},"60 Minutes")),r.a.createElement("button",Object(v.a)({type:"submit",className:"submit"},"className","submit btn"),"Twilight Me"))))},b=function(e){return r.a.createElement("section",{className:e.nightOrDay?"resultsSectionMorning":"resultsSectionNight"},r.a.createElement("div",{className:"container resultsInfo"},r.a.createElement("p",{className:"resultsBlurb"},e.nightOrDay?"Here is your morning run! Enjoy the sunrise.":"Here is your night run! Enjoy the sunset."),r.a.createElement("h3",{className:e.nightOrDay?"resultsMorning":"resultsNight"},e.userTime),r.a.createElement("button",{className:"reset",onClick:e.resetPage},r.a.createElement("i",{className:"fas fa-sync-alt","aria-hidden":"true",title:"refresh page"}))))},g=(a(44),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleSunrise=function(t){var a="true"===t.target.value;e.setState({beforeSunrise:a})},e.handleDate=function(t){e.setState({date:t.target.value})},e.handleDuration=function(t){e.setState({duration:t.target.value})},e.toggleForm=function(){e.setState({showForm:!e.state.showForm})},e.handleSubmit=function(t){t.preventDefault(),e.toggleForm(),f()({url:"https://api.sunrise-sunset.org/json",method:"GET",responseType:"json",params:{lat:43.6532,lng:-79.3832,date:e.state.date}}).then((function(t){e.setState({apiTimes:t.data.results},(function(){return e.createRun()}))}))},e.dateConverter=function(e){return e.split("-",3).map((function(e){return parseInt(e)}))},e.sunriseTimeConverter=function(){var t=e.state.apiTimes.sunrise.split(":",3),a=t[2].split(" ",1);t.pop();return t.concat(a).map((function(e){return parseInt(e)}))},e.sunsetTimeConverter=function(){var t=e.state.apiTimes.sunset.split(":",3),a=t[2].split(" ",1);t.pop();return t.concat(a).map((function(e){return parseInt(e)}))},e.convertTimeFormat=function(e){var t=Object(u.a)(e);if(12===t[0]){var a=t[0]-12;t.shift(),t.unshift(a)}else t[0];return t},e.timeToEst=function(e){return e[3]>=5?e[3]-4:e[3]+20},e.resetPage=function(){window.location.reload()},e.createRun=function(){var t=e.dateConverter(e.state.date),a=e.sunriseTimeConverter(),n=e.sunsetTimeConverter(),r=e.convertTimeFormat(n),i=t.concat(r),s=t.concat(a),l=e.timeToEst(i),c=e.timeToEst(s),m=Object(u.a)(i);m[3]=l;var d=Object(u.a)(s);d[3]=c;var h=Object(o.a)(Date,Object(u.a)(m)),f=Object(o.a)(Date,Object(u.a)(d)),p=parseInt(e.state.duration),v=f;v.setMinutes(v.getMinutes()-p);var E=h;E.setMinutes(E.getMinutes()-p);var b=v.toTimeString(),g=E.toTimeString(),S=b.slice(0,8),w=g.slice(0,8),T=e.state.beforeSunrise?S:w;e.setState({userTime:T})},e.state={apiTimes:[],beforeSunrise:null,date:"",duration:0,userTime:[],showForm:!0},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("section",{className:"formSection",id:"form"},r.a.createElement("div",null,this.state.showForm?r.a.createElement(E,{handleSubmit:this.handleSubmit,handleSunrise:this.handleSunrise,handleDate:this.handleDate,date:this.state.date,handleDuration:this.handleDuration,duration:this.state.duration,beforeSunrise:this.state.beforeSunrise}):r.a.createElement(b,{userTime:this.state.userTime,resetPage:this.resetPage,nightOrDay:this.state.beforeSunrise}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.7030ba9b.chunk.js.map