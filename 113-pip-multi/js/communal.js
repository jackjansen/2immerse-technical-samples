/* Technical Sample 113: PiP Multi Video Layout 
 * Simplified version of Theatre at Home DMApp, with CCS on region divs to show basic overlay presentation of components
 * jawalke2@cisco.com
 */
 
try {
  require('bootstrap');
} catch(e){}
// window.isSecureContext could be used for Chrome
var isSecureOrigin = location.protocol === 'https:' || location.host === 'localhost' || window.cordova;
if (!isSecureOrigin) {
  console.log('getUserMedia() must be run from a secure origin: HTTPS or localhost.' +
      '\n\nChanging protocol to HTTPS');
  location.protocol = 'HTTPS';
}

function getLayoutRegionsWithSelector(selector, regionSizes) {
  return Array.from(document.querySelectorAll(selector)).map(element => ({
      element: element,
      id: element.dataset.region,
      resizable: true,
      width: Math.round(regionSizes[element.dataset.region].width),
      height: Math.round(regionSizes[element.dataset.region].height)
    }));
}

var baseWidth, baseHeight, regionSizes ;

window.setupDMApp = function() {

	/* having an object with hardcoded region sizes in is not ideal, as these will change.
  use the largest size they can grow to*/

baseWidth = window.innerWidth,
baseHeight = window.innerHeight;

regionSizes = {
    'stage' : {
      height : baseHeight,
      width : baseWidth
    },
    'overlay' : {
      height : baseHeight * 0.8,
      width : baseWidth * 0.8
    }
  };

	// start: can remove these bits when integrating into another page
	const DMAppClientLib = require('DMAppClientLib');
	const DMAppTvEmuLib = require('DMAppTvEmuLib');
	const $ = DMAppClientLib.deps.jquery;

  const controller = new DMAppClientLib.DMAppController({
    deviceIdPrefix: "tv",
    deviceIdNamespace: "tv",
    deviceType: "tv",
    communalDevice: true,
    defaultLogLevel: DMAppClientLib.Logger.levels.TRACE,
    networkLogLevel: DMAppClientLib.Logger.levels.TRACE,
    longFormConsoleLogging: true,
		displayWidth: baseWidth,
		displayHeight: baseHeight,
    concurrentVideo: 4
  });

	const tvemusync = new DMAppTvEmuLib.DMAppTvEmuSync(controller); // jshint ignore:line

	const tvemucontroller = new DMAppTvEmuLib.DMAppTvEmuController(controller);
  tvemucontroller.startApp2App();

	loadDMApp(controller);
};

let loadDMApp = function(controller) {
  const DMAppClientLib = require('DMAppClientLib');

  controller.setUrls(DMAppClientLib.DMAppController.serviceUrlPresets.aws_edge);

  controller.layout.newContextPercentCoords = true;

  Object.assign(controller.keyStore.cencKeyMap(), controller.keyStore.hexKeySetToBase64UrlSet({
    '1ca05c91e264a71d8c1834e340026f6b': 'bbf7ef3bef3bfc0a61e000c75647c103',
    '47aeceb2b84418145e69acadc208dc84': 'd2517a84fdbd94ad0b31792ae7310ead',
  }));

  controller.devDialogLogger.enableAll();
  controller.app2appMsgBusCtl.send({}, '@self', '**create_debug_component');

  var timeline = new DMAppClientLib.deps.URI("https://origin.platform.2immerse.eu/dmapps/technical-samples/113-pip-multi/timeline.xml", window.location.href).toString();

  var layout = new DMAppClientLib.deps.URI("https://origin.platform.2immerse.eu/dmapps/technical-samples/113-pip-multi/layout.json", window.location.href).toString();

  controller.layout.io.setupContextAndDmapp(timeline, layout).then(function() {
        console.log('context is',controller.layout.contextId);
  }).catch(function(err) {
    controller.logger.error("Context/DMApp setup failed: " + err);
  });

  controller.timeline.setupStickyDefaultClock();

  controller.layout.layoutRegionCtl.addLayoutRegions.apply(
    controller.layout.layoutRegionCtl, getLayoutRegionsWithSelector('[data-region]', regionSizes));
};
