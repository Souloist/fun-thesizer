
//--------------------------
// synth.js starts here

// Create keyboard
var keyboard = new QwertyHancock({
     id: 'keyboard',
     width: 600,
     height: 150,
     // startNote: 'C4'
     octaves: 2
});

// Create audio nodes
var context = new AudioContext(),
    masterVolume = context.createGain(),
    tuna = new Tuna(context),
    analyser = context.createAnalyser(),
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

      analyser.connect(context.destination);
      
      oscillators[frequency] = osc;
      osc.start(context.currentTime);
      
      Visualize(analyser);

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

      analyser.connect(context.destination);
      
      oscillators[frequency] = [osc, osc2];
      osc.start(context.currentTime);
      osc2.start(context.currentTime);
      
      Visualize(analyser);
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
