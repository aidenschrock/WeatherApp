(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=(a(14),a(1)),s=a.n(i),l=a(4),m=a(5),h=a(6),u=a(8),p=a(7);a(16),a(17),a(18);var d=function(e){return r.a.createElement("div",{className:"container text-light"},r.a.createElement("div",{className:"cards pt-4"},r.a.createElement("h1",null,e.city),r.a.createElement("h5",{className:"py-4"},r.a.createElement("i",{className:"wi ".concat(e.weatherIcon," display-1")})),e.temp_farhenheit?r.a.createElement("h1",{className:"py-2"},e.temp_farhenheit,"\xb0"):null,function(e,t){if(e&&t)return r.a.createElement("h3",null,r.a.createElement("span",{className:"px-4"},e,"\xb0"),r.a.createElement("span",{className:"px-4"},t,"\xb0"))}(e.temp_min,e.temp_max),r.a.createElement("h4",{className:"py-3"},e.description)))};a(19);var f=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,e.error?r.a.createElement("div",{className:"alert alert-danger mx-5",role:"alert"},"Please Enter City and Country"):null),r.a.createElement("form",{onSubmit:e.loadweather},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-2"},r.a.createElement("input",{type:"text",className:"form-control",name:"city",autoComplete:"off",placeholder:"City"})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("input",{type:"text",className:"form-control",name:"country",autoComplete:"off",placeholder:"Country"})),r.a.createElement("div",{className:"col-md-3 mt-md-0 py-2 text-md-left"},r.a.createElement("button",{className:"btn btn-primary"},"Get Weather")))))},w=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).getWeather=function(){var t=Object(l.a)(s.a.mark((function t(a){var n,r,c,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=a.target.elements.city.value,r=a.target.elements.country.value,!n||!r){t.next=15;break}return t.next=6,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(r,"&appid=").concat("3c4b4a4758aef4aef45036a83dcf6281"));case 6:return c=t.sent,t.next=9,c.json();case 9:o=t.sent,console.log(o),e.setState({city:"".concat(o.name,",").concat(o.sys.country),farhenheit:e.calFarhenheit(o.main.temp),temp_max:e.calFarhenheit(o.main.temp_max),temp_min:e.calFarhenheit(o.main.temp_min),description:o.weather[0].description,error:!1}),e.get_WeatherIcon(e.weatherIcon,o.weather[0].id),t.next=16;break;case 15:e.setState({error:!0});case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={city:void 0,country:void 0,icon:void 0,main:void 0,celsius:void 0,temp_max:void 0,temp_min:void 0,description:"",error:!1},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(h.a)(a,[{key:"get_WeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<=299:this.setState({icon:this.weatherIcon.Thunderstorm});break;case t>=300&&t<=499:this.setState({icon:this.weatherIcon.Drizzle});break;case t>=500&&t<=599:this.setState({icon:this.weatherIcon.Rain});break;case t>=600&&t<=699:this.setState({icon:this.weatherIcon.Snow});break;case t>=700&&t<=799:this.setState({icon:this.weatherIcon.Atmosphere});break;case 800===t:this.setState({icon:this.weatherIcon.Clear});break;case t>=801&&t<=804:this.setState({icon:this.weatherIcon.Clouds});break;default:this.setState({icon:this.weatherIcon.Clouds})}}},{key:"calFarhenheit",value:function(e){return Math.floor(9*(e-273.15)/5+32)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{loadweather:this.getWeather,error:this.state.error}),r.a.createElement(d,{city:this.state.city,country:this.state.country,temp_farhenheit:this.state.farhenheit,temp_max:this.state.temp_max,temp_min:this.state.temp_min,description:this.state.description,weatherIcon:this.state.icon}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.b44a7053.chunk.js.map