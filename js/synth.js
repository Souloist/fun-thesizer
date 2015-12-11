/* Qwerty Hancock 0.4.5 (c) 2012-15 Stuart Memo */
!function(a,b){var c="0.4.5",d={},e=!1,f={},g={65:"Cl",87:"C#l",83:"Dl",69:"D#l",68:"El",70:"Fl",84:"F#l",71:"Gl",89:"G#l",90:"G#l",72:"Al",85:"A#l",74:"Bl",75:"Cu",79:"C#u",76:"Du",80:"D#u",59:"Eu",186:"Eu",222:"Fu",221:"F#u",220:"Gu"},h=function(a){return Math.floor((d.width-a)/a)},i=function(a){var b;user_settings=a||{},d={id:user_settings.id||"keyboard",octaves:user_settings.octaves||3,width:user_settings.width,height:user_settings.height,startNote:user_settings.startNote||"A3",whiteKeyColour:user_settings.whiteKeyColour||"#fff",blackKeyColour:user_settings.blackKeyColour||"#000",activeColour:user_settings.activeColour||"yellow",borderColour:user_settings.borderColour||"#000",keyboardLayout:user_settings.keyboardLayout||"en"},b=document.getElementById(d.id),"undefined"==typeof d.width&&(d.width=b.offsetWidth),"undefined"==typeof d.height&&(d.height=b.offsetHeight),d.startOctave=parseInt(d.startNote.charAt(1),10),A(),E.call(this,b)},j=function(a){var b,c,d=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];return c=a.charAt(3===a.length?2:1),b=d.indexOf(a.slice(0,-1)),b=3>b?b+12+12*(c-1)+1:b+12*(c-1)+1,440*Math.pow(2,(b-49)/12)},k=function(a){(null!==a||typeof a===b)&&(a.style.backgroundColor=d.activeColour)},l=function(a){null!==a&&("white"===a.getAttribute("data-note-type")?a.style.backgroundColor=d.whiteKeyColour:a.style.backgroundColor=d.blackKeyColour)},m=function(a){var b,c=0,e=a.length,f=[];for(b=0;e>b;b++)if(d.startNote.charAt(0)===a[b]){c=b;break}for(b=0;e>b;b++)b+c>e-1?f[b]=a[b+c-e]:f[b]=a[b+c];return f},n=function(a){a.el.style.backgroundColor=d.whiteKeyColour,a.el.style.border="1px solid "+d.borderColour,a.el.style.borderRight=0,a.el.style.height=d.height+"px",a.el.style.width=a.width+"px",a.el.style.borderRadius="0 0 5px 5px",a.noteNumber===w()-1&&(a.el.style.border="1px solid "+d.borderColour)},o=function(a){var b=h(w()),c=Math.floor(b/2);a.el.style.backgroundColor=d.blackKeyColour,a.el.style.border="1px solid "+d.borderColour,a.el.style.position="absolute",a.el.style.left=Math.floor((b+1)*(a.noteNumber+1)-c/2)+"px",a.el.style.width=c+"px",a.el.style.height=d.height/1.5+"px",a.el.style.borderRadius="0 0 3px 3px"},p=function(a){a.el.style.display="inline-block",a.el.style["-webkit-user-select"]="none","white"===a.colour?n(a):o(a)},q=function(a){var b=function(a){a.style.cursor="default",a.style.fontSize="0px",a.style.height=d.height+"px",a.style.padding=0,a.style.position="relative",a.style.listStyle="none",a.style.margin=0,a.style.width=d.width+"px",a.style["-webkit-user-select"]="none"};b(a.container),b(a.el)},r=function(a,b){"li"==a.tagName.toLowerCase()&&(e=!0,k(a),b(a.title,j(a.title)))},s=function(a,b){"li"==a.tagName.toLowerCase()&&(e=!1,l(a),b(a.title,j(a.title)))},t=function(a,b){e&&(k(a),b(a.title,j(a.title)))},u=function(a,b){e&&(l(a),b(a.title,j(a.title)))},v=function(a){return a.el=document.createElement("li"),a.el.id=a.id,a.el.title=a.id,a.el.setAttribute("data-note-type",a.colour),p(a),a},w=function(){return 7*d.octaves},x=function(){var a,b,c=this,e=[],f=0,g=d.startOctave,i=w();for(a=0;i>a;a++)a%this.whiteNotes.length===0&&(f=0),bizarre_note_counter=this.whiteNotes[f],"C"===bizarre_note_counter&&0!==a&&g++,b=v({colour:"white",octave:g,width:h(i),id:this.whiteNotes[f]+g,noteNumber:a}),e.push(b.el),a!==i-1&&this.notesWithSharps.forEach(function(d,j){d===c.whiteNotes[f]&&(b=v({colour:"black",octave:g,width:h(i)/2,id:c.whiteNotes[f]+"#"+g,noteNumber:a}),e.push(b.el))}),f++;return e},y=function(a){a.keys.forEach(function(b){a.el.appendChild(b)})},z=function(a){d.keyPressOffset="C"===a[0]?0:1},A=function(){var a={container:document.getElementById(d.id),el:document.createElement("ul"),whiteNotes:m(["C","D","E","F","G","A","B"]),notesWithSharps:m(["C","D","F","G","A"])};return a.keys=x.call(a),z(a.whiteNotes),q(a),y(a),a.container.appendChild(a.el),a},B=function(a){return g[a].replace("l",parseInt(d.startOctave,10)+d.keyPressOffset).replace("u",(parseInt(d.startOctave,10)+d.keyPressOffset+1).toString())},C=function(a,b){var c;a.keyCode in f||(f[a.keyCode]=!0,"undefined"!=typeof g[a.keyCode]&&(c=B(a.keyCode),b(c,j(c)),k(document.getElementById(c))))},D=function(a,b){var c;delete f[a.keyCode],"undefined"!=typeof g[a.keyCode]&&(c=B(a.keyCode),b(c,j(c)),l(document.getElementById(c)))},E=function(b){var c=this;a.addEventListener("keydown",function(a){C(a,c.keyDown)}),a.addEventListener("keyup",function(a){D(a,c.keyUp)}),b.addEventListener("mousedown",function(a){r(a.target,c.keyDown)}),b.addEventListener("mouseup",function(a){s(a.target,c.keyUp)}),b.addEventListener("mouseover",function(a){t(a.target,c.keyDown)}),b.addEventListener("mouseout",function(a){u(a.target,c.keyUp)}),"ontouchstart"in document.documentElement&&(b.addEventListener("touchstart",function(a){r(a.target,c.keyDown)}),b.addEventListener("touchend",function(a){s(a.target,c.keyUp)}),b.addEventListener("touchleave",function(a){u(a.target,c.keyUp)}),b.addEventListener("touchcancel",function(a){u(a.target,c.keyUp)}))},F=function(a){this.version=c,this.keyDown=function(){},this.keyUp=function(){},i.call(this,a)};a.QwertyHancock=F}(window);


//--------------------------


/* Tuna.js */
!function(a){function b(){return c}function c(b){if(!(this instanceof c))return new c(b);if(a.AudioContext||(a.AudioContext=a.webkitAudioContext),b||(console.log("tuna.js: Missing audio context! Creating a new context for you."),b=a.AudioContext&&new a.AudioContext),!b)throw new Error("Tuna cannot initialize because this environment does not support web audio.");d(b),j=b,k=this}function d(a){function b(){var a=Array.prototype.shift.apply(arguments);return a=m.isPrototypeOf?m.isPrototypeOf(a)?a.input:a:a.input||a,arguments=Array.prototype.slice.call(arguments),arguments.unshift(a),e.apply(this,arguments),a}if(a.__connectified__!==!0){var c=a.createGain(),d=Object.getPrototypeOf(Object.getPrototypeOf(c)),e=d.connect;d.connect=b,a.__connectified__=!0}}function e(a){return Math.max(0,Math.round(100*Math.pow(2,a/6))/100)}function f(a,b){var c,d,e=0,f=0,g=0,h=0;return c=a.toExponential().match(/^.\.?(.*)e(.+)$/),e=parseInt(c[2],10)-(c[1]+"").length,c=b.toExponential().match(/^.\.?(.*)e(.+)$/),f=parseInt(c[2],10)-(c[1]+"").length,f>e&&(e=f),d=a%b,-100>e||e>20?(g=Math.round(Math.log(d)/Math.log(10)),h=Math.pow(10,g),(d/h).toFixed(g-e)*h):parseFloat(d.toFixed(-e))}function g(a){return 0===a?1:Math.abs(a)/a}function h(a){return(Math.exp(a)-Math.exp(-a))/(Math.exp(a)+Math.exp(-a))}function i(a,b){return void 0===a?b:a}var j,k,l=function(a,b){a.value=b},m=Object.create(null,{activate:{writable:!0,value:function(a){a?(this.input.disconnect(),this.input.connect(this.activateNode),this.activateCallback&&this.activateCallback(a)):(this.input.disconnect(),this.input.connect(this.output))}},bypass:{get:function(){return this._bypass},set:function(a){this._lastBypassValue!==a&&(this._bypass=a,this.activate(!a),this._lastBypassValue=a)}},connect:{value:function(a){this.output.connect(a)}},disconnect:{value:function(a){this.output.disconnect(a)}},connectInOrder:{value:function(a){for(var b=a.length-1;b--;){if(!a[b].connect)return console.error("AudioNode.connectInOrder: TypeError: Not an AudioNode.",a[b]);a[b+1].input?a[b].connect(a[b+1].input):a[b].connect(a[b+1])}}},getDefaults:{value:function(){var a={};for(var b in this.defaults)a[b]=this.defaults[b].value;return a}},automate:{value:function(a,b,c,d){var e,f=d?~~(d/1e3):j.currentTime,g=c?~~(c/1e3):0,h=this.defaults[a],i=this[a];i?h.automatable?(c?(e="linearRampToValueAtTime",i.cancelScheduledValues(f),i.setValueAtTime(i.value,f)):e="setValueAtTime",i[e](b,g+f)):i=b:console.error("Invalid Property for "+this.name)}}}),n="float",o="boolean",p="string",q="int";"undefined"!=typeof module&&module.exports?module.exports=c:"function"==typeof define?a.define("Tuna",b):a.Tuna=c,c.prototype.Bitcrusher=function(a){a||(a=this.getDefaults()),this.bufferSize=a.bufferSize||this.defaults.bufferSize.value,this.input=j.createGain(),this.activateNode=j.createGain(),this.processor=j.createScriptProcessor(this.bufferSize,1,1),this.output=j.createGain(),this.activateNode.connect(this.processor),this.processor.connect(this.output);var b,c,d,e,f,g=0,h=0;this.processor.onaudioprocess=function(a){for(b=a.inputBuffer.getChannelData(0),c=a.outputBuffer.getChannelData(0),d=Math.pow(.5,this.bits),f=b.length,e=0;f>e;e++)g+=this.normfreq,g>=1&&(g-=1,h=d*Math.floor(b[e]/d+.5)),c[e]=h},this.bits=a.bits||this.defaults.bits.value,this.normfreq=i(a.normfreq,this.defaults.normfreq.value),this.bypass=a.bypass||!1},c.prototype.Bitcrusher.prototype=Object.create(m,{name:{value:"Bitcrusher"},defaults:{writable:!0,value:{bits:{value:4,min:1,max:16,automatable:!1,type:q},bufferSize:{value:4096,min:256,max:16384,automatable:!1,type:q},bypass:{value:!0,automatable:!1,type:o},normfreq:{value:.1,min:1e-4,max:1,automatable:!1,type:n}}},bits:{enumerable:!0,get:function(){return this.processor.bits},set:function(a){this.processor.bits=a}},normfreq:{enumerable:!0,get:function(){return this.processor.normfreq},set:function(a){this.processor.normfreq=a}}}),c.prototype.Cabinet=function(a){a||(a=this.getDefaults()),this.input=j.createGain(),this.activateNode=j.createGain(),this.convolver=this.newConvolver(a.impulsePath||"../impulses/impulse_guitar.wav"),this.makeupNode=j.createGain(),this.output=j.createGain(),this.activateNode.connect(this.convolver.input),this.convolver.output.connect(this.makeupNode),this.makeupNode.connect(this.output),this.makeupGain=i(a.makeupGain,this.defaults.makeupGain),this.bypass=a.bypass||!1},c.prototype.Cabinet.prototype=Object.create(m,{name:{value:"Cabinet"},defaults:{writable:!0,value:{makeupGain:{value:1,min:0,max:20,automatable:!0,type:n},bypass:{value:!1,automatable:!1,type:o}}},makeupGain:{enumerable:!0,get:function(){return this.makeupNode.gain},set:function(a){this.makeupNode.gain.value=a}},newConvolver:{value:function(a){return new k.Convolver({impulse:a,dryLevel:0,wetLevel:1})}}}),c.prototype.Chorus=function(a){a||(a=this.getDefaults()),this.input=j.createGain(),this.attenuator=this.activateNode=j.createGain(),this.splitter=j.createChannelSplitter(2),this.delayL=j.createDelay(),this.delayR=j.createDelay(),this.feedbackGainNodeLR=j.createGain(),this.feedbackGainNodeRL=j.createGain(),this.merger=j.createChannelMerger(2),this.output=j.createGain(),this.lfoL=new k.LFO({target:this.delayL.delayTime,callback:l}),this.lfoR=new k.LFO({target:this.delayR.delayTime,callback:l}),this.input.connect(this.attenuator),this.attenuator.connect(this.output),this.attenuator.connect(this.splitter),this.splitter.connect(this.delayL,0),this.splitter.connect(this.delayR,1),this.delayL.connect(this.feedbackGainNodeLR),this.delayR.connect(this.feedbackGainNodeRL),this.feedbackGainNodeLR.connect(this.delayR),this.feedbackGainNodeRL.connect(this.delayL),this.delayL.connect(this.merger,0,0),this.delayR.connect(this.merger,0,1),this.merger.connect(this.output),this.feedback=i(a.feedback,this.defaults.feedback.value),this.rate=i(a.rate,this.defaults.rate.value),this.delay=i(a.delay,this.defaults.delay.value),this.depth=i(a.depth,this.defaults.depth.value),this.lfoR.phase=Math.PI/2,this.attenuator.gain.value=.6934,this.lfoL.activate(!0),this.lfoR.activate(!0),this.bypass=a.bypass||!1},c.prototype.Chorus.prototype=Object.create(m,{name:{value:"Chorus"},defaults:{writable:!0,value:{feedback:{value:.4,min:0,max:.95,automatable:!1,type:n},delay:{value:.0045,min:0,max:1,automatable:!1,type:n},depth:{value:.7,min:0,max:1,automatable:!1,type:n},rate:{value:1.5,min:0,max:8,automatable:!1,type:n},bypass:{value:!0,automatable:!1,type:o}}},delay:{enumerable:!0,get:function(){return this._delay},set:function(a){this._delay=4e-4*Math.pow(10,a),this.lfoL.offset=this._delay,this.lfoR.offset=this._delay,this._depth=this._depth}},depth:{enumerable:!0,get:function(){return this._depth},set:function(a){this._depth=a,this.lfoL.oscillation=this._depth*this._delay,this.lfoR.oscillation=this._depth*this._delay}},feedback:{enumerable:!0,get:function(){return this._feedback},set:function(a){this._feedback=a,this.feedbackGainNodeLR.gain.value=this._feedback,this.feedbackGainNodeRL.gain.value=this._feedback}},rate:{enumerable:!0,get:function(){return this._rate},set:function(a){this._rate=a,this.lfoL.frequency=this._rate,this.lfoR.frequency=this._rate}}}),c.prototype.Compressor=function(a){a||(a=this.getDefaults()),this.input=j.createGain(),this.compNode=this.activateNode=j.createDynamicsCompressor(),this.makeupNode=j.createGain(),this.output=j.createGain(),this.compNode.connect(this.makeupNode),this.makeupNode.connect(this.output),this.automakeup=i(a.automakeup,this.defaults.automakeup.value),this.makeupGain=a.makeupGain||this.defaults.makeupGain.value,this.threshold=i(a.threshold,this.defaults.threshold.value),this.release=a.release||this.defaults.release.value,this.attack=i(a.attack,this.defaults.attack.value),this.ratio=a.ratio||this.defaults.ratio.value,this.knee=i(a.knee,this.defaults.knee.value),this.bypass=a.bypass||!1},c.prototype.Compressor.prototype=Object.create(m,{name:{value:"Compressor"},defaults:{writable:!0,value:{threshold:{value:-20,min:-60,max:0,automatable:!0,type:n},release:{value:250,min:10,max:2e3,automatable:!0,type:n},makeupGain:{value:1,min:1,max:100,automatable:!0,type:n},attack:{value:1,min:0,max:1e3,automatable:!0,type:n},ratio:{value:4,min:1,max:50,automatable:!0,type:n},knee:{value:5,min:0,max:40,automatable:!0,type:n},automakeup:{value:!1,automatable:!1,type:o},bypass:{value:!0,automatable:!1,type:o}}},computeMakeup:{value:function(){var a=4,b=this.compNode;return-(b.threshold.value-b.threshold.value/b.ratio.value)/a}},automakeup:{enumerable:!0,get:function(){return this._automakeup},set:function(a){this._automakeup=a,this._automakeup&&(this.makeupGain=this.computeMakeup())}},threshold:{enumerable:!0,get:function(){return this.compNode.threshold},set:function(a){this.compNode.threshold.value=a,this._automakeup&&(this.makeupGain=this.computeMakeup())}},ratio:{enumerable:!0,get:function(){return this.compNode.ratio},set:function(a){this.compNode.ratio.value=a,this._automakeup&&(this.makeupGain=this.computeMakeup())}},knee:{enumerable:!0,get:function(){return this.compNode.knee},set:function(a){this.compNode.knee.value=a,this._automakeup&&(this.makeupGain=this.computeMakeup())}},attack:{enumerable:!0,get:function(){return this.compNode.attack},set:function(a){this.compNode.attack.value=a/1e3}},release:{enumerable:!0,get:function(){return this.compNode.release},set:function(a){this.compNode.release=a/1e3}},makeupGain:{enumerable:!0,get:function(){return this.makeupNode.gain},set:function(a){this.makeupNode.gain.value=e(a)}}}),c.prototype.Convolver=function(a){a||(a=this.getDefaults()),this.input=j.createGain(),this.activateNode=j.createGain(),this.convolver=j.createConvolver(),this.dry=j.createGain(),this.filterLow=j.createBiquadFilter(),this.filterHigh=j.createBiquadFilter(),this.wet=j.createGain(),this.output=j.createGain(),this.activateNode.connect(this.filterLow),this.activateNode.connect(this.dry),this.filterLow.connect(this.filterHigh),this.filterHigh.connect(this.convolver),this.convolver.connect(this.wet),this.wet.connect(this.output),this.dry.connect(this.output),this.dryLevel=i(a.dryLevel,this.defaults.dryLevel.value),this.wetLevel=i(a.wetLevel,this.defaults.wetLevel.value),this.highCut=a.highCut||this.defaults.highCut.value,this.buffer=a.impulse||"../impulses/ir_rev_short.wav",this.lowCut=a.lowCut||this.defaults.lowCut.value,this.level=i(a.level,this.defaults.level.value),this.filterHigh.type="lowpass",this.filterLow.type="highpass",this.bypass=a.bypass||!1},c.prototype.Convolver.prototype=Object.create(m,{name:{value:"Convolver"},defaults:{writable:!0,value:{highCut:{value:22050,min:20,max:22050,automatable:!0,type:n},lowCut:{value:20,min:20,max:22050,automatable:!0,type:n},dryLevel:{value:1,min:0,max:1,automatable:!0,type:n},wetLevel:{value:1,min:0,max:1,automatable:!0,type:n},level:{value:1,min:0,max:1,automatable:!0,type:n}}},lowCut:{get:function(){return this.filterLow.frequency},set:function(a){this.filterLow.frequency.value=a}},highCut:{get:function(){return this.filterHigh.frequency},set:function(a){this.filterHigh.frequency.value=a}},level:{get:function(){return this.output.gain},set:function(a){this.output.gain.value=a}},dryLevel:{get:function(){return this.dry.gain},set:function(a){this.dry.gain.value=a}},wetLevel:{get:function(){return this.wet.gain},set:function(a){this.wet.gain.value=a}},buffer:{enumerable:!1,get:function(){return this.convolver.buffer},set:function(a){var b=this.convolver,c=new XMLHttpRequest;return a?(c.open("GET",a,!0),c.responseType="arraybuffer",c.onreadystatechange=function(){4===c.readyState&&(c.status<300&&c.status>199||302===c.status)&&j.decodeAudioData(c.response,function(a){b.buffer=a},function(a){a&&console.log("Tuna.Convolver.setBuffer: Error decoding data"+a)})},void c.send(null)):void console.log("Tuna.Convolver.setBuffer: Missing impulse path!")}}}),c.prototype.Delay=function(a){a||(a=this.getDefaults()),this.input=j.createGain(),this.activateNode=j.createGain(),this.dry=j.createGain(),this.wet=j.createGain(),this.filter=j.createBiquadFilter(),this.delay=j.createDelay(),this.feedbackNode=j.createGain(),this.output=j.createGain(),this.activateNode.connect(this.delay),this.activateNode.connect(this.dry),this.delay.connect(this.filter),this.filter.connect(this.feedbackNode),this.feedbackNode.connect(this.delay),this.feedbackNode.connect(this.wet),this.wet.connect(this.output),this.dry.connect(this.output),this.delayTime=a.delayTime||this.defaults.delayTime.value,this.feedback=i(a.feedback,this.defaults.feedback.value),this.wetLevel=i(a.wetLevel,this.defaults.wetLevel.value),this.dryLevel=i(a.dryLevel,this.defaults.dryLevel.value),this.cutoff=a.cutoff||this.defaults.cutoff.value,this.filter.type="lowpass",this.bypass=a.bypass||!1},c.prototype.Delay.prototype=Object.create(m,{name:{value:"Delay"},defaults:{writable:!0,value:{delayTime:{value:100,min:20,max:1e3,automatable:!1,type:n},feedback:{value:.45,min:0,max:.9,automatable:!0,type:n},cutoff:{value:2e4,min:20,max:2e4,automatable:!0,type:n},wetLevel:{value:.5,min:0,max:1,automatable:!0,type:n},dryLevel:{value:1,min:0,max:1,automatable:!0,type:n}}},delayTime:{enumerable:!0,get:function(){return this.delay.delayTime},set:function(a){this.delay.delayTime.value=a/1e3}},wetLevel:{enumerable:!0,get:function(){return this.wet.gain},set:function(a){this.wet.gain.value=a}},dryLevel:{enumerable:!0,get:function(){return this.dry.gain},set:function(a){this.dry.gain.value=a}},feedback:{enumerable:!0,get:function(){return this.feedbackNode.gain},set:function(a){this.feedbackNode.gain.value=a}},cutoff:{enumerable:!0,get:function(){return this.filter.frequency},set:function(a){this.filter.frequency.value=a}}}),c.prototype.Filter=function(a){a||(a=this.getDefaults()),this.input=j.createGain(),this.activateNode=j.createGain(),this.filter=j.createBiquadFilter(),this.output=j.createGain(),this.activateNode.connect(this.filter),this.filter.connect(this.output),this.frequency=a.frequency||this.defaults.frequency.value,this.Q=a.resonance||this.defaults.Q.value,this.filterType=i(a.filterType,this.defaults.filterType.value),this.gain=i(a.gain,this.defaults.gain.value),this.bypass=a.bypass||!1},c.prototype.Filter.prototype=Object.create(m,{name:{value:"Filter"},defaults:{writable:!0,value:{frequency:{value:800,min:20,max:22050,automatable:!0,type:n},Q:{value:1,min:.001,max:100,automatable:!0,type:n},gain:{value:0,min:-40,max:40,automatable:!0,type:n},bypass:{value:!0,automatable:!1,type:o},filterType:{value:"lowpass",automatable:!1,type:p}}},filterType:{enumerable:!0,get:function(){return this.filter.type},set:function(a){this.filter.type=a}},Q:{enumerable:!0,get:function(){return this.filter.Q},set:function(a){this.filter.Q.value=a}},gain:{enumerable:!0,get:function(){return this.filter.gain},set:function(a){this.filter.gain.value=a}},frequency:{enumerable:!0,get:function(){return this.filter.frequency},set:function(a){this.filter.frequency.value=a}}}),c.prototype.MoogFilter=function(a){a||(a=this.getDefaults()),this.bufferSize=a.bufferSize||this.defaults.bufferSize.value,this.input=j.createGain(),this.activateNode=j.createGain(),this.processor=j.createScriptProcessor(this.bufferSize,1,1),this.output=j.createGain(),this.activateNode.connect(this.processor),this.processor.connect(this.output);var b,c,d,e,f,g,h,k;b=c=d=e=f=g=h=k=0;var l,m,n,o,p,q;this.processor.onaudioprocess=function(a){for(l=a.inputBuffer.getChannelData(0),m=a.outputBuffer.getChannelData(0),n=1.16*this.cutoff,inputFactor=.35013*n*n*n*n,o=this.resonance*(1-.15*n*n),q=l.length,p=0;q>p;p++)l[p]-=k*o,l[p]*=inputFactor,f=l[p]+.3*b+(1-n)*f,b=l[p],g=f+.3*c+(1-n)*g,c=f,h=g+.3*d+(1-n)*h,d=g,k=h+.3*e+(1-n)*k,e=h,m[p]=k},this.cutoff=i(a.cutoff,this.defaults.cutoff.value),this.resonance=i(a.resonance,this.defaults.resonance.value),this.bypass=a.bypass||!1},c.prototype.MoogFilter.prototype=Object.create(m,{name:{value:"MoogFilter"},defaults:{writable:!0,value:{bufferSize:{value:4096,min:256,max:16384,automatable:!1,type:q},bypass:{value:!1,automatable:!1,type:o},cutoff:{value:.065,min:1e-4,max:1,automatable:!1,type:n},resonance:{value:3.5,min:0,max:4,automatable:!1,type:n}}},cutoff:{enumerable:!0,get:function(){return this.processor.cutoff},set:function(a){this.processor.cutoff=a}},resonance:{enumerable:!0,get:function(){return this.processor.resonance},set:function(a){this.processor.resonance=a}}}),c.prototype.Overdrive=function(a){a||(a=this.getDefaults()),this.input=j.createGain(),this.activateNode=j.createGain(),this.inputDrive=j.createGain(),this.waveshaper=j.createWaveShaper(),this.outputDrive=j.createGain(),this.output=j.createGain(),this.activateNode.connect(this.inputDrive),this.inputDrive.connect(this.waveshaper),this.waveshaper.connect(this.outputDrive),this.outputDrive.connect(this.output),this.ws_table=new Float32Array(this.k_nSamples),this.drive=i(a.drive,this.defaults.drive.value),this.outputGain=i(a.outputGain,this.defaults.outputGain.value),this.curveAmount=i(a.curveAmount,this.defaults.curveAmount.value),this.algorithmIndex=i(a.algorithmIndex,this.defaults.algorithmIndex.value),this.bypass=a.bypass||!1},c.prototype.Overdrive.prototype=Object.create(m,{name:{value:"Overdrive"},defaults:{writable:!0,value:{drive:{value:1,min:0,max:1,automatable:!0,type:n,scaled:!0},outputGain:{value:1,min:0,max:1,automatable:!0,type:n,scaled:!0},curveAmount:{value:.725,min:0,max:1,automatable:!1,type:n},algorithmIndex:{value:0,min:0,max:5,automatable:!1,type:q}}},k_nSamples:{value:8192},drive:{get:function(){return this.inputDrive.gain},set:function(a){this._drive=a}},curveAmount:{get:function(){return this._curveAmount},set:function(a){this._curveAmount=a,void 0===this._algorithmIndex&&(this._algorithmIndex=0),this.waveshaperAlgorithms[this._algorithmIndex](this._curveAmount,this.k_nSamples,this.ws_table),this.waveshaper.curve=this.ws_table}},outputGain:{get:function(){return this.outputDrive.gain},set:function(a){this._outputGain=e(a)}},algorithmIndex:{get:function(){return this._algorithmIndex},set:function(a){this._algorithmIndex=a,this.curveAmount=this._curveAmount}},waveshaperAlgorithms:{value:[function(a,b,c){a=Math.min(a,.9999);var d,e,f=2*a/(1-a);for(d=0;b>d;d++)e=2*d/b-1,c[d]=(1+f)*e/(1+f*Math.abs(e))},function(a,b,c){var d,e,f;for(d=0;b>d;d++)e=2*d/b-1,f=(.5*Math.pow(e+1.4,2)-1)*f>=0?5.8:1.2,c[d]=h(f)},function(a,b,c){var d,e,f,g=1-a;for(d=0;b>d;d++)e=2*d/b-1,f=0>e?-Math.pow(Math.abs(e),g+.04):Math.pow(e,g),c[d]=h(2*f)},function(a,b,c){var d,e,f,h,i=1-a>.99?.99:1-a;for(d=0;b>d;d++)e=2*d/b-1,h=Math.abs(e),i>h?f=h:h>i?f=i+(h-i)/(1+Math.pow((h-i)/(1-i),2)):h>1&&(f=h),c[d]=g(e)*f*(1/((i+1)/2))},function(a,b,c){var d,e;for(d=0;b>d;d++)e=2*d/b-1,-.08905>e?c[d]=-3/4*(1-Math.pow(1-(Math.abs(e)-.032857),12)+1/3*(Math.abs(e)-.032847))+.01:e>=-.08905&&.320018>e?c[d]=-6.153*e*e+3.9375*e:c[d]=.630035},function(a,b,c){var d,e,f=2+Math.round(14*a),g=Math.round(Math.pow(2,f-1));for(d=0;b>d;d++)e=2*d/b-1,c[d]=Math.round(e*g)/g}]}}),c.prototype.Phaser=function(a){a||(a=this.getDefaults()),this.input=j.createGain(),this.splitter=this.activateNode=j.createChannelSplitter(2),this.filtersL=[],this.filtersR=[],this.feedbackGainNodeL=j.createGain(),this.feedbackGainNodeR=j.createGain(),this.merger=j.createChannelMerger(2),this.filteredSignal=j.createGain(),this.output=j.createGain(),this.lfoL=new k.LFO({target:this.filtersL,callback:this.callback}),this.lfoR=new k.LFO({target:this.filtersR,callback:this.callback});for(var b=this.stage;b--;)this.filtersL[b]=j.createBiquadFilter(),this.filtersR[b]=j.createBiquadFilter(),this.filtersL[b].type="allpass",this.filtersR[b].type="allpass";this.input.connect(this.splitter),this.input.connect(this.output),this.splitter.connect(this.filtersL[0],0,0),this.splitter.connect(this.filtersR[0],1,0),this.connectInOrder(this.filtersL),this.connectInOrder(this.filtersR),this.filtersL[this.stage-1].connect(this.feedbackGainNodeL),this.filtersL[this.stage-1].connect(this.merger,0,0),this.filtersR[this.stage-1].connect(this.feedbackGainNodeR),this.filtersR[this.stage-1].connect(this.merger,0,1),this.feedbackGainNodeL.connect(this.filtersL[0]),this.feedbackGainNodeR.connect(this.filtersR[0]),this.merger.connect(this.output),this.rate=i(a.rate,this.defaults.rate.value),this.baseModulationFrequency=a.baseModulationFrequency||this.defaults.baseModulationFrequency.value,this.depth=i(a.depth,this.defaults.depth.value),this.feedback=i(a.feedback,this.defaults.feedback.value),this.stereoPhase=i(a.stereoPhase,this.defaults.stereoPhase.value),this.lfoL.activate(!0),this.lfoR.activate(!0),this.bypass=a.bypass||!1},c.prototype.Phaser.prototype=Object.create(m,{name:{value:"Phaser"},stage:{value:4},defaults:{writable:!0,value:{rate:{value:.1,min:0,max:8,automatable:!1,type:n},depth:{value:.6,min:0,max:1,automatable:!1,type:n},feedback:{value:.7,min:0,max:1,automatable:!1,type:n},stereoPhase:{value:40,min:0,max:180,automatable:!1,type:n},baseModulationFrequency:{value:700,min:500,max:1500,automatable:!1,type:n}}},callback:{value:function(a,b){for(var c=0;4>c;c++)a[c].frequency.value=b}},depth:{get:function(){return this._depth},set:function(a){this._depth=a,this.lfoL.oscillation=this._baseModulationFrequency*this._depth,this.lfoR.oscillation=this._baseModulationFrequency*this._depth}},rate:{get:function(){return this._rate},set:function(a){this._rate=a,this.lfoL.frequency=this._rate,this.lfoR.frequency=this._rate}},baseModulationFrequency:{enumerable:!0,get:function(){return this._baseModulationFrequency},set:function(a){this._baseModulationFrequency=a,this.lfoL.offset=this._baseModulationFrequency,this.lfoR.offset=this._baseModulationFrequency,this._depth=this._depth}},feedback:{get:function(){return this._feedback},set:function(a){this._feedback=a,this.feedbackGainNodeL.gain.value=this._feedback,this.feedbackGainNodeR.gain.value=this._feedback}},stereoPhase:{get:function(){return this._stereoPhase},set:function(a){this._stereoPhase=a;var b=this.lfoL._phase+this._stereoPhase*Math.PI/180;b=f(b,2*Math.PI),this.lfoR._phase=b}}}),c.prototype.PingPongDelay=function(a){a||(a=this.getDefaults()),this.input=j.createGain(),this.wetLevel=j.createGain(),this.stereoToMonoMix=j.createGain(),this.feedbackLevel=j.createGain(),this.output=j.createGain(),this.delayLeft=j.createDelay(),this.delayRight=j.createDelay(),this.activateNode=j.createGain(),this.splitter=j.createChannelSplitter(2),this.merger=j.createChannelMerger(2),this.activateNode.connect(this.splitter),this.splitter.connect(this.stereoToMonoMix,0,0),this.splitter.connect(this.stereoToMonoMix,1,0),this.stereoToMonoMix.gain.value=.5,this.stereoToMonoMix.connect(this.wetLevel),this.wetLevel.connect(this.delayLeft),this.feedbackLevel.connect(this.delayLeft),this.delayLeft.connect(this.delayRight),this.delayRight.connect(this.feedbackLevel),this.delayLeft.connect(this.merger,0,0),this.delayRight.connect(this.merger,0,1),this.merger.connect(this.output),this.activateNode.connect(this.output),this.delayTimeLeft=void 0!==a.delayTimeLeft?a.delayTimeLeft:this.defaults.delayTimeLeft.value,this.delayTimeRight=void 0!==a.delayTimeRight?a.delayTimeRight:this.defaults.delayTimeRight.value,this.feedbackLevel.gain.value=void 0!==a.feedback?a.feedback:this.defaults.feedback.value,this.wetLevel.gain.value=void 0!==a.wetLevel?a.wetLevel:this.defaults.wetLevel.value,this.bypass=a.bypass||!1},c.prototype.PingPongDelay.prototype=Object.create(m,{name:{value:"PingPongDelay"},delayTimeLeft:{enumerable:!0,get:function(){return this._delayTimeLeft},set:function(a){this._delayTimeLeft=a,this.delayLeft.delayTime.value=a/1e3}},delayTimeRight:{enumerable:!0,get:function(){return this._delayTimeRight},set:function(a){this._delayTimeRight=a,this.delayRight.delayTime.value=a/1e3}},defaults:{writable:!0,value:{delayTimeLeft:{value:200,min:1,max:1e4,automatable:!1,type:q},delayTimeRight:{value:400,min:1,max:1e4,automatable:!1,type:q},feedback:{value:.3,min:0,max:1,automatable:!1,type:n},wetLevel:{value:.5,min:0,max:1,automatable:!1,type:n}}}}),c.prototype.Tremolo=function(a){a||(a=this.getDefaults()),this.input=j.createGain(),this.splitter=this.activateNode=j.createChannelSplitter(2),this.amplitudeL=j.createGain(),this.amplitudeR=j.createGain(),this.merger=j.createChannelMerger(2),this.output=j.createGain(),this.lfoL=new k.LFO({target:this.amplitudeL.gain,callback:l}),this.lfoR=new k.LFO({target:this.amplitudeR.gain,callback:l}),this.input.connect(this.splitter),this.splitter.connect(this.amplitudeL,0),this.splitter.connect(this.amplitudeR,1),this.amplitudeL.connect(this.merger,0,0),this.amplitudeR.connect(this.merger,0,1),this.merger.connect(this.output),this.rate=a.rate||this.defaults.rate.value,this.intensity=i(a.intensity,this.defaults.intensity.value),this.stereoPhase=i(a.stereoPhase,this.defaults.stereoPhase.value),this.lfoL.offset=1-this.intensity/2,this.lfoR.offset=1-this.intensity/2,this.lfoL.phase=this.stereoPhase*Math.PI/180,this.lfoL.activate(!0),this.lfoR.activate(!0),this.bypass=a.bypass||!1},c.prototype.Tremolo.prototype=Object.create(m,{name:{value:"Tremolo"},defaults:{writable:!0,value:{intensity:{value:.3,min:0,max:1,automatable:!1,type:n},stereoPhase:{value:0,min:0,max:180,automatable:!1,type:n},rate:{value:5,min:.1,max:11,automatable:!1,type:n}}},intensity:{enumerable:!0,get:function(){return this._intensity},set:function(a){this._intensity=a,this.lfoL.offset=1-this._intensity/2,this.lfoR.offset=1-this._intensity/2,this.lfoL.oscillation=this._intensity,this.lfoR.oscillation=this._intensity}},rate:{enumerable:!0,get:function(){return this._rate},set:function(a){this._rate=a,this.lfoL.frequency=this._rate,this.lfoR.frequency=this._rate}},stereoPhase:{enumerable:!0,get:function(){return this._rate},set:function(a){this._stereoPhase=a;var b=this.lfoL._phase+this._stereoPhase*Math.PI/180;b=f(b,2*Math.PI),this.lfoR.phase=b}}}),c.prototype.WahWah=function(a){a||(a=this.getDefaults()),this.input=j.createGain(),this.activateNode=j.createGain(),this.envelopeFollower=new k.EnvelopeFollower({target:this,callback:function(a,b){a.sweep=b}}),this.filterBp=j.createBiquadFilter(),this.filterPeaking=j.createBiquadFilter(),this.output=j.createGain(),this.activateNode.connect(this.filterBp),this.filterBp.connect(this.filterPeaking),this.filterPeaking.connect(this.output),this.init(),this.automode=i(a.enableAutoMode,this.defaults.automode.value),this.resonance=a.resonance||this.defaults.resonance.value,this.sensitivity=i(a.sensitivity,this.defaults.sensitivity.value),this.baseFrequency=i(a.baseFrequency,this.defaults.baseFrequency.value),this.excursionOctaves=a.excursionOctaves||this.defaults.excursionOctaves.value,this.sweep=i(a.sweep,this.defaults.sweep.value),this.activateNode.gain.value=2,this.envelopeFollower.activate(!0),this.bypass=a.bypass||!1},c.prototype.WahWah.prototype=Object.create(m,{name:{value:"WahWah"},defaults:{writable:!0,value:{automode:{value:!0,automatable:!1,type:o},baseFrequency:{value:.5,min:0,max:1,automatable:!1,type:n},excursionOctaves:{value:2,min:1,max:6,automatable:!1,type:n},sweep:{value:.2,min:0,max:1,automatable:!1,type:n},resonance:{value:10,min:1,max:100,automatable:!1,type:n},sensitivity:{value:.5,min:-1,max:1,automatable:!1,type:n}}},activateCallback:{value:function(a){this.automode=a}},automode:{get:function(){return this._automode},set:function(a){this._automode=a,a?(this.activateNode.connect(this.envelopeFollower.input),this.envelopeFollower.activate(!0)):(this.envelopeFollower.activate(!1),this.activateNode.disconnect(),this.activateNode.connect(this.filterBp))}},filterFreqTimeout:{value:0},setFilterFreq:{value:function(){try{this.filterBp.frequency.value=this._baseFrequency+this._excursionFrequency*this._sweep,this.filterPeaking.frequency.value=this._baseFrequency+this._excursionFrequency*this._sweep}catch(a){clearTimeout(this.filterFreqTimeout),this.filterFreqTimeout=setTimeout(function(){this.setFilterFreq()}.bind(this),0)}}},sweep:{enumerable:!0,get:function(){return this._sweep.value},set:function(a){this._sweep=Math.pow(a>1?1:0>a?0:a,this._sensitivity),this.setFilterFreq()}},baseFrequency:{enumerable:!0,get:function(){return this._baseFrequency},set:function(a){this._baseFrequency=50*Math.pow(10,2*a),this._excursionFrequency=Math.min(j.sampleRate/2,this.baseFrequency*Math.pow(2,this._excursionOctaves)),this.setFilterFreq()}},excursionOctaves:{enumerable:!0,get:function(){return this._excursionOctaves},set:function(a){this._excursionOctaves=a,this._excursionFrequency=Math.min(j.sampleRate/2,this.baseFrequency*Math.pow(2,this._excursionOctaves)),this.setFilterFreq()}},sensitivity:{enumerable:!0,get:function(){return this._sensitivity},set:function(a){this._sensitivity=Math.pow(10,a)}},resonance:{enumerable:!0,get:function(){return this._resonance},set:function(a){this._resonance=a,this.filterPeaking.Q=this._resonance}},init:{value:function(){this.output.gain.value=1,this.filterPeaking.type="peaking",this.filterBp.type="bandpass",this.filterPeaking.frequency.value=100,this.filterPeaking.gain.value=20,this.filterPeaking.Q.value=5,this.filterBp.frequency.value=100,this.filterBp.Q.value=1}}}),c.prototype.EnvelopeFollower=function(a){a||(a=this.getDefaults()),this.input=j.createGain(),this.jsNode=this.output=j.createScriptProcessor(this.buffersize,1,1),this.input.connect(this.output),this.attackTime=i(a.attackTime,this.defaults.attackTime.value),this.releaseTime=i(a.releaseTime,this.defaults.releaseTime.value),this._envelope=0,this.target=a.target||{},this.callback=a.callback||function(){}},c.prototype.EnvelopeFollower.prototype=Object.create(m,{name:{value:"EnvelopeFollower"},defaults:{value:{attackTime:{value:.003,min:0,max:.5,automatable:!1,type:n},releaseTime:{value:.5,min:0,max:.5,automatable:!1,type:n}}},buffersize:{value:256},envelope:{value:0},sampleRate:{value:44100},attackTime:{enumerable:!0,get:function(){return this._attackTime},set:function(a){this._attackTime=a,this._attackC=Math.exp(-1/this._attackTime*this.sampleRate/this.buffersize)}},releaseTime:{enumerable:!0,get:function(){return this._releaseTime},set:function(a){this._releaseTime=a,this._releaseC=Math.exp(-1/this._releaseTime*this.sampleRate/this.buffersize)}},callback:{get:function(){return this._callback},set:function(a){"function"==typeof a?this._callback=a:console.error("tuna.js: "+this.name+": Callback must be a function!")}},target:{get:function(){return this._target},set:function(a){this._target=a}},activate:{value:function(a){this.activated=a,a?(this.jsNode.connect(j.destination),this.jsNode.onaudioprocess=this.returnCompute(this)):(this.jsNode.disconnect(),this.jsNode.onaudioprocess=null)}},returnCompute:{value:function(a){return function(b){a.compute(b)}}},compute:{value:function(a){var b,c,d,e,f=a.inputBuffer.getChannelData(0).length,g=a.inputBuffer.numberOfChannels;if(c=d=e=0,g>1)for(e=0;f>e;++e)for(;g>c;++c)b=a.inputBuffer.getChannelData(c)[e],d+=b*b/g;else for(e=0;f>e;++e)b=a.inputBuffer.getChannelData(0)[e],d+=b*b;d=Math.sqrt(d),this._envelope<d?(this._envelope*=this._attackC,this._envelope+=(1-this._attackC)*d):(this._envelope*=this._releaseC,this._envelope+=(1-this._releaseC)*d),this._callback(this._target,this._envelope)}}}),c.prototype.LFO=function(a){this.output=j.createScriptProcessor(256,1,1),this.activateNode=j.destination,this.frequency=i(a.frequency,this.defaults.frequency.value),this.offset=i(a.offset,this.defaults.offset.value),this.oscillation=i(a.oscillation,this.defaults.oscillation.value),this.phase=i(a.phase,this.defaults.phase.value),this.target=a.target||{},this.output.onaudioprocess=this.callback(a.callback||function(){}),this.bypass=a.bypass||!1},c.prototype.LFO.prototype=Object.create(m,{name:{value:"LFO"},bufferSize:{value:256},sampleRate:{value:44100},defaults:{value:{frequency:{value:1,min:0,max:20,automatable:!1,type:n},offset:{value:.85,min:0,max:22049,automatable:!1,type:n},oscillation:{value:.3,min:-22050,max:22050,automatable:!1,type:n},phase:{value:0,min:0,max:2*Math.PI,automatable:!1,type:n}}},frequency:{get:function(){return this._frequency},set:function(a){this._frequency=a,this._phaseInc=2*Math.PI*this._frequency*this.bufferSize/this.sampleRate;
}},offset:{get:function(){return this._offset},set:function(a){this._offset=a}},oscillation:{get:function(){return this._oscillation},set:function(a){this._oscillation=a}},phase:{get:function(){return this._phase},set:function(a){this._phase=a}},target:{get:function(){return this._target},set:function(a){this._target=a}},activate:{value:function(a){a?this.output.connect(j.destination):this.output.disconnect(j.destination)}},callback:{value:function(a){var b=this;return function(){b._phase+=b._phaseInc,b._phase>2*Math.PI&&(b._phase=0),a(b._target,b._offset+b._oscillation*Math.sin(b._phase))}}}}),c.toString=c.prototype.toString=function(){return"Please visit https://github.com/Theodeus/tuna/wiki for instructions on how to use Tuna.js"}}(this);


//--------------------------
// synth.js starts here

var keyboard = new QwertyHancock({
     id: 'keyboard',
     width: 500,
     height: 150,
     octaves: 2
});

var context = new AudioContext(),
    masterVolume = context.createGain(), 
    analyser = context.createAnalyser(),
    tuna = new Tuna(context),
    oscillators = {};


masterVolume.gain.value = 0.3;

var duration = 1;


// Objects (effects) created with the tuna library
var chorus = new tuna.Chorus({
    rate: 1.5,
    feedback: 0.2,
    delay: 0.0045,
    bypass: 0
});

var tremolo = new tuna.Tremolo({
    intensity: 0.7,    //0 to 1
    rate: 4,         //0.001 to 8
    stereoPhase: 0,    //0 to 180
    bypass: 0
});

var glitch = new tuna.PingPongDelay({
    wetLevel: 0.5, //0 to 1
    feedback: 0.3, //0 to 1
    delayTimeLeft: 150, //1 to 10000 (milliseconds)
    delayTimeRight: 200 //1 to 10000 (milliseconds)
});

var phaser = new tuna.Phaser({
    rate: 1.2,                     //0.01 to 8 is a decent range, but higher values are possible
    depth: 0.3,                    //0 to 1
    feedback: 0.2,                 //0 to 1+
    stereoPhase: 30,               //0 to 180
    baseModulationFrequency: 700,  //500 to 1500
    bypass: 0
});

// ------------


function pickOsc(event) {
  var waveforms = this.options[this.selectedIndex].text;

  keyboard.keyDown = function(note, frequency) {
    var osc = context.createOscillator();
    osc.frequency.value = frequency;
    
    var effectSelect = document.getElementById('effect');
    var effectGlobal = effectSelect.options[effectSelect.selectedIndex].text;
    
    if (waveforms.length < 9) {
      if (waveforms === "sine") {
        osc.type = 'sine';
      } else if (waveforms === "square") {
        osc.type = 'square';
      } else if (waveforms === "sawtooth") {
        osc.type = 'sawtooth';
      } else if (waveforms === "triangle") {
        osc.type = 'triangle';
      } else {}
      osc.detune.value = -10;
      osc.connect(masterVolume);

      if (effectGlobal === "No effect") {
        masterVolume.disconnect();
        masterVolume.connect(analyser);

      } else if (effectGlobal === "Chorus") {
        masterVolume.disconnect();

        masterVolume.connect(chorus);
        chorus.connect(analyser);

      } else if (effectGlobal === "Tremolo") {
        masterVolume.disconnect();
        masterVolume.connect(tremolo);
        tremolo.connect(analyser);

      } else if (effectGlobal === "Ping-pong") {
        masterVolume.disconnect();
        masterVolume.connect(glitch);
        glitch.connect(analyser);

      } else if (effectGlobal === "Phaser") {
        masterVolume.disconnect();
        masterVolume.connect(phaser);
        phaser.connect(analyser);

      } else {};

	Visualize(analyser);
      analyser.connect(context.destination);
      oscillators[frequency] = osc;
      osc.start(context.currentTime);

    } else {
      var osc2 = context.createOscillator();
      osc2.frequency.value = frequency;

      if (waveforms === "sine, square") {
        osc.type = 'sine';
        osc2.type = 'square';

      } else if (waveforms === "sine, sawtooth") {
        osc.type = 'sine';
        osc2.type = 'sawtooth';
      } else if (waveforms === "sine, triangle") {
        osc.type = 'sine';
        osc2.type = 'triangle';
      } else if (waveforms === "square, sawtooth") {
        osc.type = 'square';
        osc2.type = 'sawtooth';
      } else if (waveforms === "square, triangle") {
        osc.type = 'square';
        osc2.type = 'triangle';

      } else if (waveforms === "sawtooth, triangle") {
        osc.type = 'sawtooth';
        osc2.type = 'triangle';

      } else {
        alert("Please pick a waveform.")
      }

      osc.detune.value = -10;
      osc2.detune.value = 10;

      osc.connect(masterVolume);
      osc2.connect(masterVolume);

      if (effectGlobal === "No effect") {
        masterVolume.disconnect();
        masterVolume.connect(analyser);

      } else if (effectGlobal === "Chorus") {
        masterVolume.disconnect();

        masterVolume.connect(chorus);
        chorus.connect(analyser);

      } else if (effectGlobal === "Tremolo") {
        masterVolume.disconnect();
        masterVolume.connect(tremolo);
        tremolo.connect(analyser);

      } else if (effectGlobal === "Ping-pong") {
        masterVolume.disconnect();
        masterVolume.connect(glitch);
        glitch.connect(analyser);

      } else if (effectGlobal === "Phaser") {
        masterVolume.disconnect();
        masterVolume.connect(phaser);
        phaser.connect(analyser);

      } else {};
	Visualize(analyser);
      analyser.connect(context.destination);
      oscillators[frequency] = [osc, osc2];
      osc.start(context.currentTime);
      osc2.start(context.currentTime);
    }

  };

  // KeyUp functions; DO NOT CHANGE
  if (waveforms.length < 9) {
    keyboard.keyUp = function(note, frequency) {
      oscillators[frequency].stop(context.currentTime);
    };
  } else {
    keyboard.keyUp = function(note, frequency) {
      oscillators[frequency].forEach(function(oscillator) {
        oscillator.stop(context.currentTime);
      });
    };
  }

};



//--------------------------

function Visualize(analyser) {
    var canvas = document.getElementById('canvas'),
        allCapsReachBottom = false,
        animationId = null,
        status = 1,
        cwidth = canvas.width,
        cheight = canvas.height - 2,
        meterWidth = 5, //width of the meters in the spectrum
        gap = 0.5, //gap between meters
        capHeight = 2,
        capStyle = '#fff',
        meterNum = 40 * (2 + 2), //count of the meters
        capYPositionArray = []; ////store the vertical position of hte caps for the preivous frame
    ctx = canvas.getContext('2d'),
    gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(1, '#9331CB');
    gradient.addColorStop(0.5, '#0CD7FD');
    gradient.addColorStop(0, '#f00');

    var drawMeter = function() {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        if (status === 0) {
            //fix when some sounds end the value still not back to zero
            for (var i = array.length - 1; i >= 0; i--) {
                array[i] = 0;
            };
            allCapsReachBottom = true;
            for (var i = capYPositionArray.length - 1; i >= 0; i--) {
                allCapsReachBottom = allCapsReachBottom && (capYPositionArray[i] === 0);
            };
            if (allCapsReachBottom) {
                cancelAnimationFrame(animationId); //since the sound is top and animation finished, stop the requestAnimation to prevent potential memory leak,THIS IS VERY IMPORTANT!
                return;
            };
        };
        var step = Math.round(array.length / meterNum); //sample limited data from the total array
        ctx.clearRect(0, 0, cwidth, cheight);
        for (var i = 0; i < meterNum; i++) {
            var value = array[i * step];
            if (capYPositionArray.length < Math.round(meterNum)) {
                capYPositionArray.push(value);
            };
            // ctx.fillStyle = capStyle;
            //draw the cap, with transition effect
            if (value < capYPositionArray[i]) {
                ctx.fillRect(i * 15, cheight - (--capYPositionArray[i]), meterWidth, capHeight);
            } else {
                ctx.fillRect(i * 15, cheight - value, meterWidth, capHeight);
                capYPositionArray[i] = value;
            };
            ctx.fillStyle = gradient; //set the filllStyle to gradient for a better look
            ctx.fillRect(i * 15, cheight - value + capHeight, meterWidth, cheight); //the meter
        }
        animationId = requestAnimationFrame(drawMeter);
    }
    animationId = requestAnimationFrame(drawMeter);
};
