/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'imageintro',
                type: 'image',
                rect: ['0', '0','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"imagintro.jpg",'0px','0px']
            },
            {
                id: 'Frases',
                type: 'rect',
                rect: ['2.4%', '40%','auto','auto','auto', 'auto']
            },
            {
                id: 'logolast',
                type: 'rect',
                rect: ['0%', '20%','auto','auto','auto', 'auto'],
                userClass: "center"
            }],
            symbolInstances: [
            {
                id: 'logolast',
                symbolName: 'logolast',
                autoPlay: {

                }
            },
            {
                id: 'Frases',
                symbolName: 'Frases',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_logolast}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0%'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'auto'],
                ["style", "top", '20%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'auto'],
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_imageintro}": [
                ["style", "height", '100%'],
                ["style", "opacity", '0.000000'],
                ["subproperty", "filter.blur", '20px'],
                ["style", "width", '100%']
            ],
            "${_Frases}": [
                ["style", "top", '29.95%'],
                ["style", "opacity", '1'],
                ["style", "left", '30%'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 17018,
            autoPlay: true,
            labels: {
                "Label 1": 0
            },
            timeline: [
                { id: "eid459", tween: [ "style", "${_Frases}", "opacity", '0', { fromValue: '1'}], position: 8732, duration: 1268 },
                { id: "eid256", tween: [ "subproperty", "${_imageintro}", "filter.blur", '0px', { fromValue: '20px'}], position: 12500, duration: 1750 },
                { id: "eid544", tween: [ "style", "${_logolast}", "opacity", '1', { fromValue: '0.000000'}], position: 9750, duration: 1250 },
                { id: "eid859", tween: [ "style", "${_logolast}", "opacity", '0', { fromValue: '1'}], position: 12250, duration: 750 },
                { id: "eid829", tween: [ "style", "${_Frases}", "top", '29.95%', { fromValue: '29.95%'}], position: 2750, duration: 0 },
                { id: "eid188", tween: [ "style", "${_imageintro}", "opacity", '1', { fromValue: '0.000000'}], position: 12250, duration: 1750 },
                { id: "eid613", tween: [ "style", "${_imageintro}", "opacity", '1', { fromValue: '1'}], position: 15268, duration: 0 },
                { id: "eid614", tween: [ "style", "${_imageintro}", "opacity", '1', { fromValue: '1'}], position: 17018, duration: 0 },
                { id: "eid828", tween: [ "style", "${_Frases}", "left", '30%', { fromValue: '30%'}], position: 2750, duration: 0 }            ]
        }
    }
},
"logo": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'logo3',
                    type: 'image',
                    rect: ['0px', '0px', '100%', '95px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/logo.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_logo3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '95px'],
                ["style", "width", '242px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Frases": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'frase1en',
                    type: 'image',
                    rect: ['4px', '0px', '518px', '46px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/frase1en.png', '0px', '0px']
                },
                {
                    id: 'frase2en',
                    type: 'image',
                    rect: ['140px', '135px', '272px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/frase2en.png', '0px', '0px']
                },
                {
                    id: 'frase3en',
                    type: 'image',
                    rect: ['161px', '64px', '203px', '55px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/frase3en.png', '0px', '0px']
                },
                {
                    rect: ['auto', '0px', '646px', '35px', '16px', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['auto', '37px', '166px', '35px', '83px', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['auto', '128px', '452px', '100px', '16px', 'auto'],
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1)']
                },
                {
                    id: 'estrela',
                    type: 'image',
                    rect: ['0px', '0px', '50px', '46px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/estrela.png', '0px', '0px']
                },
                {
                    id: 'estrela2',
                    type: 'image',
                    rect: ['151px', '58px', '50px', '46px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/estrela.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '64px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "right", '187px'],
                ["style", "height", '55px'],
                ["style", "opacity", '1'],
                ["style", "left", 'auto'],
                ["style", "width", '203px']
            ],
            "${_frase1en}": [
                ["style", "left", '4px'],
                ["style", "top", '0px']
            ],
            "${_estrela2}": [
                ["style", "top", '58px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '46px'],
                ["style", "opacity", '0'],
                ["style", "left", '151px'],
                ["style", "width", '50px']
            ],
            "${_estrela}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '46px'],
                ["style", "left", '0px'],
                ["style", "width", '50px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '128px'],
                ["style", "height", '100px'],
                ["style", "opacity", '1'],
                ["style", "left", 'auto'],
                ["style", "right", '16px']
            ],
            "${_frase2en}": [
                ["style", "left", '140px'],
                ["style", "top", '135px']
            ],
            "${symbolSelector}": [
                ["style", "height", '64px'],
                ["style", "width", '551px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "right", '16px'],
                ["style", "bottom", 'auto'],
                ["style", "height", '64px'],
                ["style", "opacity", '1'],
                ["style", "left", 'auto'],
                ["style", "width", '535px']
            ],
            "${_frase3en}": [
                ["style", "left", '161px'],
                ["style", "top", '64px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7232,
            autoPlay: true,
            timeline: [
                { id: "eid898", tween: [ "style", "${_estrela2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid901", tween: [ "style", "${_estrela2}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 250 },
                { id: "eid652", tween: [ "style", "${_Rectangle3}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1732 },
                { id: "eid880", tween: [ "style", "${_Rectangle}", "width", '10px', { fromValue: '535px'}], position: 0, duration: 3250 },
                { id: "eid891", tween: [ "style", "${_estrela2}", "top", '58px', { fromValue: '58px'}], position: 3750, duration: 0 },
                { id: "eid893", tween: [ "style", "${_estrela2}", "top", '58px', { fromValue: '58px'}], position: 4750, duration: 0 },
                { id: "eid896", tween: [ "transform", "${_estrela2}", "rotateZ", '433deg', { fromValue: '0deg'}], position: 3750, duration: 1000 },
                { id: "eid895", tween: [ "style", "${_estrela2}", "left", '357px', { fromValue: '151px'}], position: 3750, duration: 1000 },
                { id: "eid882", tween: [ "style", "${_estrela}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid884", tween: [ "style", "${_estrela}", "top", '0px', { fromValue: '0px'}], position: 3250, duration: 0 },
                { id: "eid869", tween: [ "style", "${_Rectangle2}", "width", '10px', { fromValue: '203px'}], position: 3750, duration: 1000 },
                { id: "eid887", tween: [ "style", "${_estrela}", "left", '517px', { fromValue: '0px'}], position: 0, duration: 3250 },
                { id: "eid449", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 250 },
                { id: "eid888", tween: [ "transform", "${_estrela}", "rotateZ", '935deg', { fromValue: '0deg'}], position: 0, duration: 3250 },
                { id: "eid452", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 250 }            ]
        }
    }
},
"estrela": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'estrela',
                    type: 'image',
                    rect: ['0px', '0px', '28px', '26px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/estrela.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '26px'],
                ["style", "width", '28px']
            ],
            "${_estrela}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '37px'],
                ["style", "left", '0px'],
                ["style", "width", '40px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4751,
            autoPlay: true,
            timeline: [
                { id: "eid423", tween: [ "style", "${_estrela}", "height", '37px', { fromValue: '37px'}], position: 4750, duration: 0 },
                { id: "eid421", tween: [ "style", "${_estrela}", "top", '-2px', { fromValue: '0px'}], position: 0, duration: 4750 },
                { id: "eid422", tween: [ "style", "${_estrela}", "top", '0px', { fromValue: '-2px'}], position: 4750, duration: 0 },
                { id: "eid134", tween: [ "transform", "${_estrela}", "rotateZ", '2018deg', { fromValue: '0deg'}], position: 0, duration: 4750 },
                { id: "eid128", tween: [ "style", "${_estrela}", "left", '610px', { fromValue: '0px'}], position: 0, duration: 4513 },
                { id: "eid424", tween: [ "style", "${_estrela}", "left", '649px', { fromValue: '610px'}], position: 4513, duration: 238 },
                { id: "eid425", tween: [ "style", "${_estrela}", "width", '40px', { fromValue: '40px'}], position: 4750, duration: 0 }            ]
        }
    }
},
"logonovo": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '433px', '188px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'logonovo',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/logonovo.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_logonovo}": [
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '188px'],
                ["style", "left", '0px'],
                ["style", "width", '433px']
            ],
            "${symbolSelector}": [
                ["style", "height", '138px'],
                ["style", "width", '318px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"logolast": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'logonovo2',
                    type: 'image',
                    rect: ['0px', '0px', '500px', '217px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/logonovo2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_logonovo2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '217px'],
                ["style", "width", '500px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-37478103");
