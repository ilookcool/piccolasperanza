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
                    rect: ['112px', '135px', '410px', '88px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'frase22',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/frase22.png', '0px', '0px']
                },
                {
                    id: 'frase12',
                    type: 'image',
                    rect: ['0px', '0px', '633px', '46px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/frase12.png', '0px', '0px']
                },
                {
                    id: 'frase32',
                    type: 'image',
                    rect: ['165px', '57px', '303px', '40px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/frase32.png', '0px', '0px']
                },
                {
                    rect: ['auto', '-9px', '646px', '35px', '-96px', 'auto'],
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
                    id: 'estrela2',
                    type: 'rect',
                    rect: ['3', '-2', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['157px', '64px', '28px', '26px', 'auto', 'auto'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'estrela',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/estrela.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'estrela2',
                symbolName: 'estrela',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_frase32}": [
                ["style", "left", '165px'],
                ["style", "top", '57px']
            ],
            "${_frase22}": [
                ["style", "top", '135px'],
                ["style", "left", '112px']
            ],
            "${_estrela}": [
                ["style", "top", '57px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '40px'],
                ["style", "opacity", '0'],
                ["style", "left", '157px'],
                ["style", "width", '43px']
            ],
            "${_frase12}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '128px'],
                ["style", "height", '100px'],
                ["style", "opacity", '1'],
                ["style", "left", 'auto'],
                ["style", "right", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '64px'],
                ["style", "width", '551px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", 'auto'],
                ["style", "right", 'auto'],
                ["style", "bottom", 'auto'],
                ["style", "height", '64px'],
                ["style", "opacity", '1'],
                ["style", "left", 'auto'],
                ["style", "width", '646px']
            ],
            "${_estrela2}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '57px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "right", '83px'],
                ["style", "height", '46px'],
                ["style", "opacity", '1'],
                ["style", "left", 'auto'],
                ["style", "width", '303px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8732,
            autoPlay: true,
            timeline: [
                { id: "eid149", tween: [ "style", "${_estrela2}", "opacity", '0', { fromValue: '1'}], position: 7250, duration: 1482 },
                { id: "eid652", tween: [ "style", "${_Rectangle3}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 1732 },
                { id: "eid804", tween: [ "style", "${_Rectangle}", "right", '-96px', { fromValue: 'auto'}], position: 0, duration: 4750 },
                { id: "eid426", tween: [ "transform", "${_estrela2}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid806", tween: [ "style", "${_Rectangle}", "top", '-9px', { fromValue: 'auto'}], position: 0, duration: 4750 },
                { id: "eid427", tween: [ "transform", "${_estrela2}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid430", tween: [ "style", "${_estrela2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid781", tween: [ "style", "${_estrela}", "top", '57px', { fromValue: '57px'}], position: 5000, duration: 0 },
                { id: "eid782", tween: [ "style", "${_estrela}", "top", '57px', { fromValue: '57px'}], position: 6750, duration: 0 },
                { id: "eid814", tween: [ "style", "${_Rectangle2}", "width", '0px', { fromValue: '303px'}], position: 4750, duration: 2250 },
                { id: "eid720", tween: [ "style", "${_estrela}", "left", '466px', { fromValue: '157px'}], position: 5000, duration: 1750 },
                { id: "eid744", tween: [ "style", "${_estrela}", "left", '468px', { fromValue: '466px'}], position: 6750, duration: 500 },
                { id: "eid794", tween: [ "style", "${_Rectangle}", "height", '64px', { fromValue: '64px'}], position: 0, duration: 0 },
                { id: "eid798", tween: [ "style", "${_Rectangle}", "height", '64px', { fromValue: '64px'}], position: 4750, duration: 0 },
                { id: "eid431", tween: [ "style", "${_estrela2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid717", tween: [ "style", "${_estrela}", "opacity", '1', { fromValue: '0'}], position: 4750, duration: 250 },
                { id: "eid758", tween: [ "style", "${_estrela}", "opacity", '0', { fromValue: '1'}], position: 7250, duration: 1482 },
                { id: "eid449", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 250 },
                { id: "eid735", tween: [ "transform", "${_estrela}", "rotateZ", '863deg', { fromValue: '0deg'}], position: 5000, duration: 1750 },
                { id: "eid807", tween: [ "style", "${_Rectangle}", "width", '0px', { fromValue: '646px'}], position: 0, duration: 4750 },
                { id: "eid452", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 250 }            ]
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
