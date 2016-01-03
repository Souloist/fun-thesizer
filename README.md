# Fun-thesizer

The Fun-thesizer project was completed in Fall 2015 as part of EE6183 (Digital Signal Processing Lab) at New York University with Professor Ivan Selesnick.

This README will cover a general overview of the scripts used that comprise the core of the project. These can be found in the js folder of this repository. For a more comprehensive explanation of my project, please see the `Report.pdf` file.

## Background

This project leverages the **Web Audio API** in order to process audio in real-time on the web. The **Tuna** and **QWERTY Keyboard** javascript libraries were used in order to implement real-time effects (such as chorus or tremolo) and create a keyboard input respectively. 

You can choose various waveforms such as sawtooth or sine (single or a  combination) and an audio effect. The keyboard will then output those waveforms (mapped to specific frequencies depending on which key/keys are pressed) with the audio effect applied and the visualizer will draw the waveform on the webpage. This code does not use any pre-recorded audio. All sounds and effects are created and applied in real-time. 

You can find more about the software that were used in the following links:
* [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
* [Tuna Library](https://github.com/Theodeus/tuna)
* [QWERTY Handcock Keyboard](https://github.com/stuartmemo/qwerty-hancock)
