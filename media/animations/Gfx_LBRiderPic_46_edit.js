(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.rossi = function() {
	this.initialize(img.rossi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,105);


(lib.valentinorossi_1 = function() {
	this.initialize(img.valentinorossi_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,555,500);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("00", "28px 'Boxed Regular'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 35;
	this.text.parent = this;
	this.text.setTransform(0,-16.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-18.2,39,36.4);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("00", "28px 'Boxed Regular'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 35;
	this.text.parent = this;
	this.text.setTransform(0,-16.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-18.2,39,36.4);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rossi();
	this.instance.parent = this;
	this.instance.setTransform(-57.2,-44.5,0.848,0.848);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-44.5,114.5,89);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.valentinorossi_1();
	this.instance.parent = this;
	this.instance.setTransform(-101,-91,0.364,0.364);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-91,202.1,182);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.valentinorossi_1();
	this.instance.parent = this;
	this.instance.setTransform(-101,-91,0.364,0.364);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-91,202.1,182);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBeIAAiIIAVAAIAACIgAgKg9IAAggIAVAAIAAAgg");
	this.shape.setTransform(-4,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBGQgJAAgIgDQgHgCgFgFQgGgFgDgGQgCgGAAgGIAAgIIAWAAIAAAGQAAAHAGAEQAGAEAIAAIARAAQAHAAAGgEQAGgEgBgGIAAgHQAAgEgDgDIgJgFIgYgJQgTgHgHgEQgGgFgDgFQgDgGAAgHIAAgLQABgGACgGQADgGAEgEQAGgFAHgCQAGgDAJAAIAPAAQAIAAAIADQAHACAFAFQAFAFADAGQADAGAAAHIAAAGIgVAAIAAgFQAAgHgGgEQgGgEgHAAIgLAAQgHAAgGAEQgFAEAAAFIAAAIQAAAEADADIAJAGIAZAJIANAFIAMAGQAGAFADAFQADAFAAAHIAAALQAAAGgDAGQgDAGgFAEQgGAFgHADQgHACgJAAg");
	this.shape_1.setTransform(-13.7,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJBGQgJAAgIgDQgHgCgFgFQgGgFgCgGQgDgGgBgGIAAgIIAXAAIAAAGQAAAHAGAEQAGAEAIAAIARAAQAHAAAGgEQAGgEgBgGIAAgHQAAgEgCgDIgJgFIgZgJQgTgHgHgEQgGgFgDgFQgCgGAAgHIAAgLQgBgGADgGQADgGAEgEQAFgFAHgCQAIgDAIAAIAPAAQAJAAAHADQAHACAFAFQAFAFADAGQADAGAAAHIAAAGIgVAAIAAgFQAAgHgGgEQgGgEgHAAIgLAAQgIAAgFAEQgFAEAAAFIAAAIQAAAEAEADIAIAGIAZAJIANAFIAMAGQAFAFADAFQAEAFAAAHIAAALQAAAGgEAGQgCAGgGAEQgFAFgHADQgIACgIAAg");
	this.shape_2.setTransform(-26.9,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBGQgJAAgIgDQgIgDgFgGQgGgFgDgIQgEgHAAgIIAAg6QAAgIAEgIQADgHAGgGQAFgFAIgEQAIgDAJAAIASAAQAJAAAIADQAIAEAGAFQAFAGADAHQACAIABAIIAAA6QgBAIgCAHQgDAIgFAFQgGAGgIADQgIADgJAAgAgVgrQgGAHgBAKIAAA2QABAKAGAGQAHAGAJAAIAMAAQAJAAAHgGQAGgGAAgKIAAg2QAAgKgGgHQgHgGgJAAIgMAAQgJAAgHAGg");
	this.shape_3.setTransform(-40.3,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjBYIgfhCIgnAAIAABCIgYAAIAAivIBGAAQALAAAIAEQAJACAGAGQAGAFAEAGQADAHAAAHIAAAlQAAAGgCAFQgCAEgFAFQgDAFgGADQgFAEgHACIAfBDgAgjABIAuAAQAJAAAIgEQAGgGAAgIIAAgcQAAgJgHgGQgHgFgLAAIgsAAg");
	this.shape_4.setTransform(-54.7,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBGQgJAAgIgDQgIgDgFgGQgGgFgDgIQgEgHAAgIIAAg6QAAgIAEgIQADgHAGgGQAFgFAIgEQAIgDAJAAIASAAQAKAAAHADQAIAEAGAFQAFAGADAHQACAIABAIIAAA6QgBAIgCAHQgDAIgFAFQgGAGgIADQgHADgKAAgAgVgrQgGAHAAAKIAAA2QAAAKAGAGQAHAGAJAAIAMAAQAJAAAHgGQAGgGAAgKIAAg2QAAgKgGgHQgHgGgJAAIgMAAQgJAAgHAGg");
	this.shape_5.setTransform(34.7,-11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbBFIAAhhQAAgJgGgGQgGgFgKgBIgFAAQgHAAgHAEQgIAEgFAHIAABnIgWAAIAAiIIAQAAIADANQAIgGAIgFQAJgDAJAAIAIAAQAIgBAIAEQAGADAGAFQAEAFADAIQADAIAAAHIAABig");
	this.shape_6.setTransform(21.1,-11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKBeIAAiIIAVAAIAACIgAgKg9IAAggIAVAAIAAAgg");
	this.shape_7.setTransform(11.2,-14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMBWQgIgDgFgGQgHgFgDgIQgEgIAAgKIAAhLIgRAAIAAgUIASAAIAGgmIAPAAIAAAmIAaAAIAAAUIgaAAIAABLQAAAKAIAGQAGAGALAAIAAAUQgLAAgJgCg");
	this.shape_8.setTransform(4.1,-13.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAbBFIAAhhQAAgJgGgGQgGgFgKgBIgFAAQgHAAgHAEQgIAEgFAHIAABnIgWAAIAAiIIAQAAIADANQAIgGAIgFQAJgDAJAAIAIAAQAIgBAIAEQAGADAGAFQAEAFADAIQADAIAAAHIAABig");
	this.shape_9.setTransform(-6.3,-11.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIBGQgJAAgIgDQgIgDgGgGQgFgFgDgIQgDgHgBgIIAAg6QABgIADgIQADgHAFgGQAGgFAIgEQAIgDAJAAIASAAQAJAAAJADQAHAEAFAFQAGAGADAHQADAIAAAIIAAAlIhPAAIAAATQgBAKAHAGQAGAGAKAAIAMAAQAJAAAGgGQAIgGgBgKIAAgBIAXAAIAAADQAAAIgDAHQgDAIgGAFQgFAGgHADQgJADgJAAgAgVgrQgHAHABAKIAAASIA4AAIAAgSQABgKgIgHQgGgGgJAAIgMAAQgKAAgGAGg");
	this.shape_10.setTransform(-19.9,-11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKBeIAAi7IAVAAIAAC7g");
	this.shape_11.setTransform(-29.7,-14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPBGQgIAAgGgCQgHgDgEgFQgFgEgCgGQgDgGAAgHIAAgOQAAgHADgGQAEgGAFgEQAGgDAHgDQAIgDAIgBIAmgFIAAgNQAAgJgGgGQgHgGgJAAIgIAAQgJAAgGAFQgFAGAAAIIAAAEIgYAAIAAgFQAAgIAEgHQADgHAFgFQAFgFAIgDQAHgDAKAAIANAAQAKAAAHADQAHADAGAGQAFAFAEAHQACAIAAAIIAABiIgPAAIgDgOQgIAHgJAEQgIAEgJAAgAgGAIQgJACgGAFQgGAFgBAGIAAAJQABAGAEAFQAFAEAHAAIALAAQAIAAAHgEQAJgEAFgHIAAggg");
	this.shape_12.setTransform(-39.8,-11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLBXIg8itIAXAAIAwCPIAwiPIAYAAIg8Ctg");
	this.shape_13.setTransform(-54.6,-13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.8,-29.9,129.6,59.8);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBeIAAiIIAVAAIAACIgAgKg9IAAggIAVAAIAAAgg");
	this.shape.setTransform(-4,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBGQgJAAgIgDQgHgCgFgFQgGgFgDgGQgCgGAAgGIAAgIIAWAAIAAAGQAAAHAGAEQAGAEAIAAIARAAQAHAAAGgEQAGgEgBgGIAAgHQAAgEgDgDIgJgFIgYgJQgTgHgHgEQgGgFgDgFQgDgGAAgHIAAgLQABgGACgGQADgGAEgEQAGgFAHgCQAGgDAJAAIAPAAQAIAAAIADQAHACAFAFQAFAFADAGQADAGAAAHIAAAGIgVAAIAAgFQAAgHgGgEQgGgEgHAAIgLAAQgHAAgGAEQgFAEAAAFIAAAIQAAAEADADIAJAGIAZAJIANAFIAMAGQAGAFADAFQADAFAAAHIAAALQAAAGgDAGQgDAGgFAEQgGAFgHADQgHACgJAAg");
	this.shape_1.setTransform(-13.7,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJBGQgJAAgIgDQgHgCgFgFQgGgFgCgGQgDgGgBgGIAAgIIAXAAIAAAGQAAAHAGAEQAGAEAIAAIARAAQAHAAAGgEQAGgEgBgGIAAgHQAAgEgCgDIgJgFIgZgJQgTgHgHgEQgGgFgDgFQgCgGAAgHIAAgLQgBgGADgGQADgGAEgEQAFgFAHgCQAIgDAIAAIAPAAQAJAAAHADQAHACAFAFQAFAFADAGQADAGAAAHIAAAGIgVAAIAAgFQAAgHgGgEQgGgEgHAAIgLAAQgIAAgFAEQgFAEAAAFIAAAIQAAAEAEADIAIAGIAZAJIANAFIAMAGQAFAFADAFQAEAFAAAHIAAALQAAAGgEAGQgCAGgGAEQgFAFgHADQgIACgIAAg");
	this.shape_2.setTransform(-26.9,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBGQgJAAgIgDQgIgDgFgGQgGgFgDgIQgEgHAAgIIAAg6QAAgIAEgIQADgHAGgGQAFgFAIgEQAIgDAJAAIASAAQAJAAAIADQAIAEAGAFQAFAGADAHQACAIABAIIAAA6QgBAIgCAHQgDAIgFAFQgGAGgIADQgIADgJAAgAgVgrQgGAHgBAKIAAA2QABAKAGAGQAHAGAJAAIAMAAQAJAAAHgGQAGgGAAgKIAAg2QAAgKgGgHQgHgGgJAAIgMAAQgJAAgHAGg");
	this.shape_3.setTransform(-40.3,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjBYIgfhCIgnAAIAABCIgYAAIAAivIBGAAQALAAAIAEQAJACAGAGQAGAFAEAGQADAHAAAHIAAAlQAAAGgCAFQgCAEgFAFQgDAFgGADQgFAEgHACIAfBDgAgjABIAuAAQAJAAAIgEQAGgGAAgIIAAgcQAAgJgHgGQgHgFgLAAIgsAAg");
	this.shape_4.setTransform(-54.7,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBGQgJAAgIgDQgIgDgFgGQgGgFgDgIQgEgHAAgIIAAg6QAAgIAEgIQADgHAGgGQAFgFAIgEQAIgDAJAAIASAAQAKAAAHADQAIAEAGAFQAFAGADAHQACAIABAIIAAA6QgBAIgCAHQgDAIgFAFQgGAGgIADQgHADgKAAgAgVgrQgGAHAAAKIAAA2QAAAKAGAGQAHAGAJAAIAMAAQAJAAAHgGQAGgGAAgKIAAg2QAAgKgGgHQgHgGgJAAIgMAAQgJAAgHAGg");
	this.shape_5.setTransform(34.7,-11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbBFIAAhhQAAgJgGgGQgGgFgKgBIgFAAQgHAAgHAEQgIAEgFAHIAABnIgWAAIAAiIIAQAAIADANQAIgGAIgFQAJgDAJAAIAIAAQAIgBAIAEQAGADAGAFQAEAFADAIQADAIAAAHIAABig");
	this.shape_6.setTransform(21.1,-11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKBeIAAiIIAVAAIAACIgAgKg9IAAggIAVAAIAAAgg");
	this.shape_7.setTransform(11.2,-14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMBWQgIgDgFgGQgHgFgDgIQgEgIAAgKIAAhLIgRAAIAAgUIASAAIAGgmIAPAAIAAAmIAaAAIAAAUIgaAAIAABLQAAAKAIAGQAGAGALAAIAAAUQgLAAgJgCg");
	this.shape_8.setTransform(4.1,-13.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAbBFIAAhhQAAgJgGgGQgGgFgKgBIgFAAQgHAAgHAEQgIAEgFAHIAABnIgWAAIAAiIIAQAAIADANQAIgGAIgFQAJgDAJAAIAIAAQAIgBAIAEQAGADAGAFQAEAFADAIQADAIAAAHIAABig");
	this.shape_9.setTransform(-6.3,-11.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIBGQgJAAgIgDQgIgDgGgGQgFgFgDgIQgDgHgBgIIAAg6QABgIADgIQADgHAFgGQAGgFAIgEQAIgDAJAAIASAAQAJAAAJADQAHAEAFAFQAGAGADAHQADAIAAAIIAAAlIhPAAIAAATQgBAKAHAGQAGAGAKAAIAMAAQAJAAAGgGQAIgGgBgKIAAgBIAXAAIAAADQAAAIgDAHQgDAIgGAFQgFAGgHADQgJADgJAAgAgVgrQgHAHABAKIAAASIA4AAIAAgSQABgKgIgHQgGgGgJAAIgMAAQgKAAgGAGg");
	this.shape_10.setTransform(-19.9,-11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKBeIAAi7IAVAAIAAC7g");
	this.shape_11.setTransform(-29.7,-14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPBGQgIAAgGgCQgHgDgEgFQgFgEgCgGQgDgGAAgHIAAgOQAAgHADgGQAEgGAFgEQAGgDAHgDQAIgDAIgBIAmgFIAAgNQAAgJgGgGQgHgGgJAAIgIAAQgJAAgGAFQgFAGAAAIIAAAEIgYAAIAAgFQAAgIAEgHQADgHAFgFQAFgFAIgDQAHgDAKAAIANAAQAKAAAHADQAHADAGAGQAFAFAEAHQACAIAAAIIAABiIgPAAIgDgOQgIAHgJAEQgIAEgJAAgAgGAIQgJACgGAFQgGAFgBAGIAAAJQABAGAEAFQAFAEAHAAIALAAQAIAAAHgEQAJgEAFgHIAAggg");
	this.shape_12.setTransform(-39.8,-11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLBXIg8itIAXAAIAwCPIAwiPIAYAAIg8Ctg");
	this.shape_13.setTransform(-54.6,-13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.8,-29.9,129.6,59.8);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rossi();
	this.instance.parent = this;
	this.instance.setTransform(-57.2,-44.5,0.848,0.848);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-44.5,114.5,89);


// stage content:
(lib.Gfx_LBRiderPic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{animstart:0,pause:29,animend:30});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		//this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(21));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("ArPE2IAAprIWfAAIAAJrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:112,y:31}).wait(49));

	// Rider Text
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(117,90.9);
	this.instance._off = true;

	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(117,30);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({_off:true,y:30},7).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},7).wait(20).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(8));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_7 = new cjs.Graphics().p("AjHAKIAAgTIGPAAIAAATg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AjHA1IAAhpIGPAAIAABpg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AjHBgIAAi/IGPAAIAAC/g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AjHCLIAAkVIGPAAIAAEVg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AjHC1IAAlqIGPAAIAAFqg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AjHDgIAAm/IGPAAIAAG/g");
	var mask_1_graphics_13 = new cjs.Graphics().p("AjHELIAAoVIGPAAIAAIVg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AjHE2IAAprIGPAAIAAJrg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AjHE2IAAprIGPAAIAAJrg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_1_graphics_7,x:20,y:1}).wait(1).to({graphics:mask_1_graphics_8,x:20,y:5.3}).wait(1).to({graphics:mask_1_graphics_9,x:20,y:9.6}).wait(1).to({graphics:mask_1_graphics_10,x:20,y:13.9}).wait(1).to({graphics:mask_1_graphics_11,x:20,y:18.2}).wait(1).to({graphics:mask_1_graphics_12,x:20,y:22.4}).wait(1).to({graphics:mask_1_graphics_13,x:20,y:26.7}).wait(1).to({graphics:mask_1_graphics_14,x:20,y:31}).wait(29).to({graphics:mask_1_graphics_43,x:20,y:31}).wait(7));

	// Number Text
	this.PosNum = new cjs.Text("00", "28px 'Boxed Regular'", "#FFFFFF");
	this.PosNum.name = "PosNum";
	this.PosNum.textAlign = "center";
	this.PosNum.lineHeight = 30;
	this.PosNum.lineWidth = 35;
	this.PosNum.parent = this;
	this.PosNum.setTransform(20.5,3);

	this.instance_2 = new lib.Tween11("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(20.5,19.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween12("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(20.5,19.2);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.PosNum,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.PosNum}]},7).to({state:[{t:this.instance_2}]},28).to({state:[{t:this.instance_3}]},8).to({state:[]},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({_off:true,alpha:0},8).wait(7));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("AtvMgQgoAAAAgoIAA3vQAAgoAoAAIbfAAQAoAAAAAoIAAXvQAAAogoAAg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AtvMgQgoAAAAgoIAA3vQAAgoAoAAIbfAAQAoAAAAAoIAAXvQAAAogoAAg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AtRLrQgoAAAAgoIAA2FQAAgoAoAAIajAAQAoAAAAAoIAAWFQAAAogoAAg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AszK2QgoAAAAgoIAA0bQAAgoAoAAIZnAAQAoAAAAAoIAAUbQAAAogoAAg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AsVKCQgoAAAAgpIAAyyQAAgoAoAAIYrAAQAoAAAAAoIAASyQAAApgoAAg");
	var mask_2_graphics_35 = new cjs.Graphics().p("Ar3JNQgogBAAgoIAAxIQAAgoAoAAIXvAAQAoAAAAAoIAARIQAAAogoABg");
	var mask_2_graphics_36 = new cjs.Graphics().p("ArZIYQgoAAAAgoIAAvfQAAgoAoAAIWzAAQAoAAAAAoIAAPfQAAAogoAAg");
	var mask_2_graphics_37 = new cjs.Graphics().p("Aq7HjQgoAAAAgoIAAt1QAAgoAoAAIV3AAQAoAAAAAoIAAN1QAAAogoAAg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AqdGuQgoAAAAgoIAAsLQAAgoAoAAIU7AAQAoAAAAAoIAAMLQAAAogoAAg");
	var mask_2_graphics_39 = new cjs.Graphics().p("Ap/F5QgoAAAAgoIAAqhQAAgoAoAAIT/AAQAoAAAAAoIAAKhQAAAogoAAg");
	var mask_2_graphics_40 = new cjs.Graphics().p("AphFEQgoAAAAgoIAAo3QAAgoAoAAITDAAQAoAAAAAoIAAI3QAAAogoAAg");
	var mask_2_graphics_41 = new cjs.Graphics().p("ApDEPQgoAAAAgnIAAnPQAAgoAoAAISHAAQAoAAAAAoIAAHPQAAAngoAAg");
	var mask_2_graphics_42 = new cjs.Graphics().p("AolDbQgoAAAAgpIAAlkQAAgoAoAAIRLAAQAoAAAAAoIAAFkQAAApgoAAg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AoHCmQgoAAAAgoIAAj7QAAgoAoAAIQPAAQAoAAAAAoIAAD7QAAAogoAAg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AnpBxQgoAAAAgoIAAiRQAAgoAoAAIPTAAQAoAAAAAoIAACRQAAAogoAAg");
	var mask_2_graphics_45 = new cjs.Graphics().p("AnLA8QgoAAAAgoIAAgnQAAgoAoAAIOXAAQAoAAAAAoIAAAnQAAAogoAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:92,y:80}).wait(30).to({graphics:mask_2_graphics_31,x:92,y:80}).wait(1).to({graphics:mask_2_graphics_32,x:89,y:74.7}).wait(1).to({graphics:mask_2_graphics_33,x:86,y:69.4}).wait(1).to({graphics:mask_2_graphics_34,x:83,y:64.2}).wait(1).to({graphics:mask_2_graphics_35,x:80,y:58.9}).wait(1).to({graphics:mask_2_graphics_36,x:77,y:53.6}).wait(1).to({graphics:mask_2_graphics_37,x:74,y:48.3}).wait(1).to({graphics:mask_2_graphics_38,x:71,y:43}).wait(1).to({graphics:mask_2_graphics_39,x:68,y:37.7}).wait(1).to({graphics:mask_2_graphics_40,x:65,y:32.4}).wait(1).to({graphics:mask_2_graphics_41,x:62,y:27.2}).wait(1).to({graphics:mask_2_graphics_42,x:59,y:21.9}).wait(1).to({graphics:mask_2_graphics_43,x:56,y:16.6}).wait(1).to({graphics:mask_2_graphics_44,x:53,y:11.3}).wait(1).to({graphics:mask_2_graphics_45,x:50,y:6}).wait(5));

	// Rider
	this.instance_4 = new lib.Tween6("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-90,122);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween7("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(43,122);

	var maskedShapeInstanceList = [this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_5}]},22).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({_off:true,x:43},9).wait(27));

	// Number
	this.instance_6 = new lib.Tween1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(114.2,115.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween8("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(114.2,115.5);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},8).to({state:[{t:this.instance_7}]},15).to({state:[{t:this.instance_7}]},22).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({_off:true,alpha:1},15).wait(27));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003399").s().p("AgEAUIAAgnIAJAAIAAAng");
	this.shape.setTransform(40.5,64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003399").s().p("Ah7AUIAAgnID3AAIAAAng");
	this.shape_1.setTransform(52.4,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003399").s().p("AjyAUIAAgnIHlAAIAAAng");
	this.shape_2.setTransform(64.3,64);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003399").s().p("AlqAUIAAgnILVAAIAAAng");
	this.shape_3.setTransform(76.3,64);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003399").s().p("AnhAUIAAgnIPDAAIAAAng");
	this.shape_4.setTransform(88.2,64);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003399").s().p("ApYAUIAAgnISxAAIAAAng");
	this.shape_5.setTransform(100.1,64);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003399").s().p("ArPAUIAAgnIWfAAIAAAng");
	this.shape_6.setTransform(112,64);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},35).to({state:[]},1).wait(4));

	// black box - name bckgrd
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AnzAKIAAgTIPnAAIAAATg");
	this.shape_7.setTransform(90,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AoTA1IAAhpIQnAAIAABpg");
	this.shape_8.setTransform(93.2,5.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AoyBgIAAi/IRlAAIAAC/g");
	this.shape_9.setTransform(96.3,9.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ApRCLIAAkVISjAAIAAEVg");
	this.shape_10.setTransform(99.4,13.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ApxC1IAAlqITjAAIAAFqg");
	this.shape_11.setTransform(102.6,18.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AqQDgIAAm/IUhAAIAAG/g");
	this.shape_12.setTransform(105.7,22.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AqwELIAAoVIVgAAIAAIVg");
	this.shape_13.setTransform(108.9,26.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ArPE2IAAprIWfAAIAAJrg");
	this.shape_14.setTransform(112,31);

	var maskedShapeInstanceList = [this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},32).wait(10));

	// white box - bckgrd
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_15.setTransform(41,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AhYBiIAAjDICxAAIAADDg");
	this.shape_16.setTransform(48.9,9.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AinC5IAAlyIFPAAIAAFyg");
	this.shape_17.setTransform(56.8,18.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("Aj2ERIAAohIHtAAIAAIhg");
	this.shape_18.setTransform(64.7,27.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AlFFpIAArRIKLAAIAALRg");
	this.shape_19.setTransform(72.6,36.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("AmUHBIAAuBIMoAAIAAOBg");
	this.shape_20.setTransform(80.5,44.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AniIZIAAwxIPFAAIAAQxg");
	this.shape_21.setTransform(88.3,53.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AoxJxIAAzhIRjAAIAAThg");
	this.shape_22.setTransform(96.2,62.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AqALIIAA2PIUBAAIAAWPg");
	this.shape_23.setTransform(104.1,71.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("ArPMgIAA4/IWfAAIAAY/g");
	this.shape_24.setTransform(112,80);

	var maskedShapeInstanceList = [this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},30).wait(10));

	// grey box - number bckgrd
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AjHAKIAAgTIGPAAIAAATg");
	this.shape_25.setTransform(20,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AjHA1IAAhpIGPAAIAABpg");
	this.shape_26.setTransform(20,5.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AjHBgIAAi/IGPAAIAAC/g");
	this.shape_27.setTransform(20,9.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AjHCLIAAkVIGPAAIAAEVg");
	this.shape_28.setTransform(20,13.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AjHC1IAAlqIGPAAIAAFqg");
	this.shape_29.setTransform(20,18.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AjHDgIAAm/IGPAAIAAG/g");
	this.shape_30.setTransform(20,22.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AjHELIAAoVIGPAAIAAIVg");
	this.shape_31.setTransform(20,26.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AjHE2IAAprIGPAAIAAJrg");
	this.shape_32.setTransform(20,31);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(53,53,53,0.859)").s().p("AjHE2IAAprIGPAAIAAJrg");
	this.shape_33.setTransform(20,31);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(55,55,55,0.714)").s().p("AjHE2IAAprIGPAAIAAJrg");
	this.shape_34.setTransform(20,31);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(57,57,57,0.573)").s().p("AjHE2IAAprIGPAAIAAJrg");
	this.shape_35.setTransform(20,31);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(60,60,60,0.427)").s().p("AjHE2IAAprIGPAAIAAJrg");
	this.shape_36.setTransform(20,31);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(62,62,62,0.286)").s().p("AjHE2IAAprIGPAAIAAJrg");
	this.shape_37.setTransform(20,31);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(64,64,64,0.141)").s().p("AjHE2IAAprIGPAAIAAJrg");
	this.shape_38.setTransform(20,31);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(66,66,66,0)").s().p("AjHE2IAAprIGPAAIAAJrg");
	this.shape_39.setTransform(20,31);

	var maskedShapeInstanceList = [this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25}]},7).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},26).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[]},1).wait(2));

	// coloured box
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0033FF").s().p("AjHAKIAAgTIGPAAIAAATg");
	this.shape_40.setTransform(20,1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0033FF").s().p("AjHB7IAAj1IGPAAIAAD1g");
	this.shape_41.setTransform(20,12.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0033FF").s().p("AjHDsIAAnXIGPAAIAAHXg");
	this.shape_42.setTransform(20,23.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0033FF").s().p("AjHFcIAAq4IGPAAIAAK4g");
	this.shape_43.setTransform(20,34.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0033FF").s().p("AjHHOIAAubIGPAAIAAObg");
	this.shape_44.setTransform(20,46.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0033FF").s().p("AjHI+IAAx7IGPAAIAAR7g");
	this.shape_45.setTransform(20,57.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0033FF").s().p("AjHKvIAA1dIGPAAIAAVdg");
	this.shape_46.setTransform(20,68.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0033FF").s().p("AjHMgIAA4/IGPAAIAAY/g");
	this.shape_47.setTransform(20,80);

	var maskedShapeInstanceList = [this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},32).wait(10));

	// BlackBoxBckgrd
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AtvMgQgoAAAAgoIAA3vQAAgoAoAAIbfAAQAoAAAAAoIAAXvQAAAogoAAg");
	this.shape_48.setTransform(92,80);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AtPLnQgoAAAAgoIAA19QAAgoAoAAIafAAQAoAAAAAoIAAV9QAAAogoAAg");
	this.shape_49.setTransform(88.8,74.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AsvKuQgoAAAAgoIAA0LQAAgoAoAAIZfAAQAoAAgBAoIAAULQABAogoAAg");
	this.shape_50.setTransform(85.6,68.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AsOJ1QgoAAAAgoIAAyZQAAgoAoAAIYdAAQAoAAAAAoIAASZQAAAogoAAg");
	this.shape_51.setTransform(82.3,62.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AruI8QgoAAAAgoIAAwnQAAgoAoAAIXdAAQAoAAAAAoIAAQnQAAAogoAAg");
	this.shape_52.setTransform(79.1,57.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("ArOIDQgoAAAAgoIAAu1QAAgoAoAAIWcAAQApAAAAAoIAAO1QAAAogpAAg");
	this.shape_53.setTransform(75.9,51.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AqtHLQgogBAAgoIAAtEQAAgoAoAAIVbAAQAoAAAAAoIAANEQAAAogoABg");
	this.shape_54.setTransform(72.6,45.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AqNGRQgoABAAgoIAArTQAAgoAoAAIUbAAQAoAAAAAoIAALTQAAAogogBg");
	this.shape_55.setTransform(69.4,40.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AptFZQgoAAAAgpIAApgQAAgoAoAAITbAAQAoAAAAAoIAAJgQAAApgoAAg");
	this.shape_56.setTransform(66.2,34.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(6,6,6,0.875)").s().p("ApYE1QgoAAAAgoIAAoZQAAgoAoAAISxAAQAoAAAAAoIAAIZQAAAogoAAg");
	this.shape_57.setTransform(64.1,30.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(13,13,13,0.749)").s().p("ApEESQgogBAAgoIAAnSQAAgoAoAAISJAAQAoAAAAAoIAAHSQAAAogoABg");
	this.shape_58.setTransform(62.1,27.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(19,19,19,0.624)").s().p("AowDuQgoAAAAgoIAAmLQAAgoAoAAIRhAAQAoAAAAAoIAAGLQAAAogoAAg");
	this.shape_59.setTransform(60.1,23.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(26,26,26,0.502)").s().p("AocDKQgoAAAAgoIAAlDQAAgoAoAAIQ5AAQAoAAAAAoIAAFDQAAAogoAAg");
	this.shape_60.setTransform(58.1,20.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(32,32,32,0.376)").s().p("AoICnQgoAAAAgoIAAj9QAAgoAoAAIQQAAQApAAAAAoIAAD9QAAAogpAAg");
	this.shape_61.setTransform(56.1,16.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(38,38,38,0.251)").s().p("An0CDQgoAAAAgoIAAi1QAAgoAoAAIPpAAQAoAAgBAoIAAC1QABAogoAAg");
	this.shape_62.setTransform(54.1,13.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(45,45,45,0.125)").s().p("AnfBfQgoABAAgoIAAhvQAAgoAoAAIO/AAQAoAAAAAoIAABvQAAAogogBg");
	this.shape_63.setTransform(52,9.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(51,51,51,0)").s().p("AnLA8QgoAAAAgoIAAgnQAAgoAoAAIOXAAQAoAAAAAoIAAAnQAAAogoAAg");
	this.shape_64.setTransform(50,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_48}]},32).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 184,
	height: 160,
	fps: 30,
	color: "#00CCFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/rossi.png", id:"rossi"},
		{src:"images/valentinorossi_1.png", id:"valentinorossi_1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
