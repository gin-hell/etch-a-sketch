var audioCtx = new AudioContext

var samples = [];


for (var i = 0; i < 128; i++) {

	var sample = document.createElement("audio")
		sample.src = "piano." + i + ".aif"
		samples.push(sample)

};
