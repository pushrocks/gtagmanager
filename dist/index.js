"use strict";
/**
 * the standard dataLayer
 */
let dataLayer = [];
/**
 * inits a standard dataLayer and adds it to the window
 */
exports.standardDataLayerInit = () => {
    window['dataLayer'] = dataLayer;
};
// add first instance of gtagManager to window
let alreadyAddedOne = false;
let addGTagManagerToWindow = (gtagManagerArg) => {
    if (!alreadyAddedOne) {
        alreadyAddedOne = true;
        window['gtagmanager'] = gtagManagerArg;
    }
};
/**
 * GtagClass creates a Gtag instance that can be used to start GoogleTagManager
 */
class GTagManager {
    constructor(gtagIdArg, dataLayerArg = dataLayer) {
        this.gtagId = gtagIdArg;
        this.dataLayer = dataLayerArg;
        addGTagManagerToWindow(this);
    }
    start() {
        (function (windowArg, documentArg, scriptArg, dataLayerArg, GTMId) {
            windowArg[dataLayerArg] = windowArg[dataLayerArg] || [];
            windowArg[dataLayerArg].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            let f = documentArg.getElementsByTagName(scriptArg)[0];
            let j = documentArg.createElement(scriptArg);
            let dl = dataLayerArg !== 'dataLayer' ? '&l=' + dataLayerArg : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTMId + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-XXXX');
    }
    /**
     * allows pushing new data into dataLayer
     */
    pushToDataLayer(dataObject) {
        this.dataLayer.push(dataObject);
    }
}
exports.GTagManager = GTagManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUE7QUFFbEI7O0dBRUc7QUFDUSxRQUFBLHFCQUFxQixHQUFHO0lBQy9CLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxTQUFTLENBQUE7QUFDbkMsQ0FBQyxDQUFBO0FBSUQsOENBQThDO0FBQzlDLElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQTtBQUMzQixJQUFJLHNCQUFzQixHQUFHLENBQUMsY0FBMkI7SUFDckQsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ25CLGVBQWUsR0FBRyxJQUFJLENBQUE7UUFDdEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLGNBQWMsQ0FBQTtJQUMxQyxDQUFDO0FBRUwsQ0FBQyxDQUFBO0FBRUQ7O0dBRUc7QUFDSDtJQUdJLFlBQVksU0FBaUIsRUFBRSxZQUFZLEdBQUcsU0FBUztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQTtRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQTtRQUM3QixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsS0FBSztRQUNELENBQUMsVUFBUyxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQWlCLEVBQUUsWUFBb0IsRUFBRSxLQUFhO1lBQ3BGLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQ3ZELFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQTtZQUNsRixJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDdEQsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUM1QyxJQUFJLEVBQUUsR0FBRyxZQUFZLEtBQUssV0FBVyxHQUFHLEtBQUssR0FBRyxZQUFZLEdBQUcsRUFBRSxDQUFBO1lBQ2pFLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1lBQ2QsQ0FBQyxDQUFDLEdBQUcsR0FBRyw2Q0FBNkMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFBO1lBQ2xFLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNuQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsVUFBVSxDQUFDLENBQUE7SUFDdkQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZSxDQUFDLFVBQWtCO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ25DLENBQUM7Q0FDSjtBQTVCRCxrQ0E0QkMifQ==