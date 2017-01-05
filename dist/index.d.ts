/**
 * inits a standard dataLayer and adds it to the window
 */
export declare let standardDataLayerInit: () => void;
/**
 * GtagClass creates a Gtag instance that can be used to start GoogleTagManager
 */
export declare class GTagManager {
    dataLayer: any;
    gtagId: string;
    constructor(gtagIdArg: string, dataLayerArg?: any[]);
    start(): void;
    /**
     * allows pushing new data into dataLayer
     */
    pushToDataLayer(dataObject: Object): void;
}
