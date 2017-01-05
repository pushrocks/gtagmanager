/**
 * the standard dataLayer
 */
let dataLayer = []

/**
 * inits a standard dataLayer and adds it to the window
 */
export let standardDataLayerInit = () => {
    window['dataLayer'] = dataLayer
}



// add first instance of gtagManager to window
let alreadyAddedOne = false
let addGTagManagerToWindow = (gtagManagerArg: GTagManager) => {
    if (!alreadyAddedOne) {
        alreadyAddedOne = true
        window['gtagmanager'] = gtagManagerArg
    }

}

/**
 * GtagClass creates a Gtag instance that can be used to start GoogleTagManager
 */
export class GTagManager {
    dataLayer: any
    gtagId: string
    constructor(gtagIdArg: string, dataLayerArg = dataLayer) {
        this.gtagId = gtagIdArg
        this.dataLayer = dataLayerArg
        addGTagManagerToWindow(this)
    }

    start() {
        (function(windowArg, documentArg, scriptArg: string, dataLayerArg: string, GTMId: string){
            windowArg[dataLayerArg] = windowArg[dataLayerArg] || []
            windowArg[dataLayerArg].push({'gtm.start': new Date().getTime(), event: 'gtm.js'})
            let f = documentArg.getElementsByTagName(scriptArg)[0]
            let j = documentArg.createElement(scriptArg)
            let dl = dataLayerArg !== 'dataLayer' ? '&l=' + dataLayerArg : ''
            j.async = true
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTMId + dl
            f.parentNode.insertBefore(j, f)
        })(window,document,'script','dataLayer','GTM-XXXX')
    }

    /**
     * allows pushing new data into dataLayer
     */
    pushToDataLayer(dataObject: Object) {
        this.dataLayer.push(dataObject)
    }
}