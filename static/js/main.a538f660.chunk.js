(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),s=a.n(o),r=(a(14),a(3)),c=a(4),l=a(6),d=a(5),m=a(7);var h=function(e){var t={padding:"1rem"},a={borderRadius:"75px",width:"200px",height:"200px"},n={fontSize:"1.25rem"};return i.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center",width:"65rem",height:"50%",borderRadius:"10px",color:"white",marginTop:"5rem",fontFamily:"Merriweather",fontSize:"1rem"}},i.a.createElement("h1",null,e.question.text),i.a.createElement("div",{onClick:function(){e.addScore(1),e.changeQuestion()},style:t},i.a.createElement("p",{style:n},e.question.choices[0].name),i.a.createElement("img",{src:e.question.choices[0].img,style:a,alt:"Person 1"})),i.a.createElement("div",{onClick:function(){e.addScore(2),e.changeQuestion()},style:t},i.a.createElement("p",{style:n},e.question.choices[1].name),i.a.createElement("img",{src:e.question.choices[1].img,style:a,alt:"Person 2"})),i.a.createElement("div",{onClick:function(){e.addScore(3),e.changeQuestion()},style:t},i.a.createElement("p",{style:n},e.question.choices[2].name),i.a.createElement("img",{src:e.question.choices[2].img,style:a,alt:"Person"})),i.a.createElement("div",{onClick:function(){e.addScore(4),e.changeQuestion()},style:t},i.a.createElement("p",{style:n},e.question.choices[3].name),i.a.createElement("img",{src:e.question.choices[3].img,style:a,alt:"Ned"})))},u=(a(15),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={display:0,a:0,b:0,c:0,d:0},a.reset=function(){a.setState(function(){return{display:0,a:0,b:0,c:0,d:0}})},a.addScore=function(e){if(1===e){var t=a.state.a;a.setState(function(){return{a:t+1}})}else if(2===e){var n=a.state.b;a.setState(function(){return{b:n+1}})}else if(3===e){var i=a.state.c;a.setState(function(){return{c:i+1}})}else if(4===e){var o=a.state.d;a.setState(function(){return{d:o+1}})}},a.changeQuestion=function(){0===a.state.display?a.setState(function(){return{display:1}}):1===a.state.display?a.setState(function(){return{display:2}}):2===a.state.display?a.setState(function(){return{display:3}}):a.setState(function(){return{display:4}})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={height:"4rem",width:"4rem",borderRadius:"10%",color:"white",backgroundColor:"gray",marginLeft:"2rem"},t={color:"white",fontSize:"3rem",textAlign:"center"},a=null;return a=this.state.display<4?i.a.createElement(h,{question:this.props.questions[this.state.display],changeQuestion:this.changeQuestion,addScore:this.addScore}):4===this.state.a?i.a.createElement("h1",{style:t},"You have survived all the way until season 8! Good luck!",i.a.createElement("br",null),i.a.createElement("button",{onClick:this.reset,style:e},"Play Again")):3===this.state.a?i.a.createElement("h1",{style:t},"'Good job, you died in season 6!'",i.a.createElement("br",null),i.a.createElement("button",{onClick:this.reset,style:e},"Reset")):2===this.state.a?i.a.createElement("h1",{style:t},"Not bad, you died in season 4!",i.a.createElement("br",null),i.a.createElement("button",{onClick:this.reset,style:e},"Reset")):1===this.state.a?i.a.createElement("h1",{style:t},"You died in season 2.",i.a.createElement("br",null),i.a.createElement("button",{onClick:this.reset,style:e},"Reset")):i.a.createElement("h1",{style:t},"You died in season 1.",i.a.createElement("br",null),i.a.createElement("button",{onClick:this.reset,style:e},"Reset")),i.a.createElement("div",{className:"App",style:{display:"flex",justifyContent:"center",width:"100%",minHeight:"1000px",backgroundImage:"url('https://www.pixelstalk.net/wp-content/uploads/2015/11/Game-of-Thrones-Desktop-Background-1920x1080.jpg')"}},a)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(u,{questions:[{text:"If you were the King/Queen of Westeros, who would you choose as your Hand?",choices:[{name:"Tyrion Lannister",img:"https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg",id:1},{name:"Davos Seaworth",img:"https://vignette.wikia.nocookie.net/p__/images/b/b0/Davos_Seaworth_2.jpg/revision/latest?cb=20170125224137&path-prefix=protagonist",id:2},{name:"Tywin Lannister",img:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-game-of-thrones-charles-dance.jpg",id:3},{name:"Ned Stark",img:"https://awoiaf.westeros.org/thumb.php?f=Sean_Bean_as_Eddard_Stark.png&width=300",id:4}]},{text:"If you were the King/Queen of Westeros, who would you choose to command your army?",choices:[{name:"Robb Stark",img:"https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Robb_Stark-Richard_Madden.jpg/220px-Robb_Stark-Richard_Madden.jpg",id:1},{name:"Stannis Baratheon",img:"https://lh3.googleusercontent.com/-SebSthPnMv8/AAAAAAAAAAI/AAAAAAAAAhw/fi97BrPjwfY/photo.jpg?sz=328",id:2},{name:"Jon Snow",img:"https://pbs.twimg.com/profile_images/901947348699545601/hqRMHITj_400x400.jpg",id:3},{name:"Ramsay Bolton",img:"https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ramsay_Bolton-_-Iwan_Rheon.jpg/220px-Ramsay_Bolton-_-Iwan_Rheon.jpg",id:4}]},{text:"Of the following, who would you LEAST like to fight?",choices:[{name:"Gregor Clegane",img:"https://upload.wikimedia.org/wikipedia/en/d/d8/Gregor_Clegane-The_Mountain-Haf%C3%BE%C3%B3r_J%C3%BAl%C3%ADus_Bj%C3%B6rnsson.jpg",id:1},{name:"Sandor Clegane",img:"https://upload.wikimedia.org/wikipedia/en/b/b4/Sandor_Clegane-The_Hound-Rory_McCann.jpg",id:2},{name:"Bronn",img:"https://upload.wikimedia.org/wikipedia/en/1/1a/Bronn-Jerome_Flynn.jpg",id:3},{name:"Jaime Lannister",img:"https://upload.wikimedia.org/wikipedia/en/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg",id:4}]},{text:"Who would you support as the King/Queen of Westeros?",choices:[{name:"Daenerys Targaryen",img:"https://upload.wikimedia.org/wikipedia/en/0/0d/Daenerys_Targaryen_with_Dragon-Emilia_Clarke.jpg",id:1},{name:"Jon Snow",img:"https://pbs.twimg.com/profile_images/901947348699545601/hqRMHITj_400x400.jpg",id:2},{name:"Stannis Baratheon",img:"https://lh3.googleusercontent.com/-SebSthPnMv8/AAAAAAAAAAI/AAAAAAAAAhw/fi97BrPjwfY/photo.jpg?sz=328",id:3},{name:"Joffrey Lannister",img:"https://upload.wikimedia.org/wikipedia/en/b/bd/Joffrey_Baratheon-Jack_Gleeson.jpg",id:4}]}]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.a538f660.chunk.js.map