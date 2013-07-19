/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'Text',
            display:'none',
            type:'text',
            rect:[96,128,0,0],
            text:"Creative",
            font:['"ImpactLabelReversedRegular","Helvetica Neue", Helvetica,  sans-serif',24,"rgba(0,0,0,1)","normal","none",""],
            transform:[[-21,-84]]
         },
         {
            id:'TextCopy',
            display:'none',
            type:'text',
            rect:[96,128,0,0],
            text:"Original",
            font:['"ImpactLabelReversedRegular","Helvetica Neue", Helvetica,  sans-serif',24,"rgba(0,0,0,1)","normal","none",""],
            transform:[[329,-55]]
         },
         {
            id:'TextCopy2',
            display:'none',
            type:'text',
            rect:[96,128,0,0],
            text:"Cinematic",
            font:['"ImpactLabelReversedRegular","Helvetica Neue", Helvetica,  sans-serif',24,"rgba(0,0,0,1)","normal","none",""],
            transform:[[240,44]]
         },
         {
            id:'TextCopy3',
            display:'none',
            type:'text',
            rect:[96,128,0,0],
            text:"Concise",
            font:['"ImpactLabelReversedRegular","Helvetica Neue", Helvetica,  sans-serif',24,"rgba(0,0,0,1)","normal","none",""],
            transform:[[22,2]]
         },
         {
            id:'TextCopy4',
            display:'none',
            type:'text',
            rect:[96,128,0,0],
            text:"SHORT",
            font:['"ImpactLabelReversedRegular","Helvetica Neue", Helvetica,  sans-serif',24,"rgba(0,0,0,1)","normal","none",""],
            transform:[[65,176]]
         },
         {
            id:'TextCopy6',
            display:'none',
            type:'text',
            rect:[96,128,0,0],
            text:"AND",
            font:['"ImpactLabelReversedRegular","Helvetica Neue", Helvetica,  sans-serif',24,"rgba(0,0,0,1)","normal","none",""],
            transform:[[154,176]]
         },
         {
            id:'TextCopy7',
            display:'none',
            type:'text',
            rect:[96,128,0,0],
            text:"SHARP",
            font:['"ImpactLabelReversedRegular","Helvetica Neue", Helvetica,  sans-serif',24,"rgba(0,0,0,1)","normal","none",""],
            transform:[[210,176]]
         },
         {
            id:'TextCopy5',
            display:'none',
            type:'text',
            rect:[96,128,0,0],
            text:"Storytelling",
            font:['"ImpactLabelReversedRegular","Helvetica Neue", Helvetica,  sans-serif',24,"rgba(0,0,0,1)","normal","none",""],
            transform:[[-69,92]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_TextCopy4}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '109.49px'],
            ["transform", "translateX", '65px']
         ],
         "${_TextCopy3}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-27.94px'],
            ["transform", "translateX", '22.99px']
         ],
         "${_TextCopy5}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '48.85px'],
            ["transform", "translateX", '-21px']
         ],
         "${_Text}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-84px'],
            ["transform", "translateX", '-21px']
         ],
         "${_TextCopy2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '14px'],
            ["transform", "translateX", '240.58px']
         ],
         "${_Stage}": [
            ["style", "height", '314px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px']
         ],
         "${_TextCopy6}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '109.49px'],
            ["transform", "translateX", '154.6px']
         ],
         "${_TextCopy7}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '109.49px'],
            ["transform", "translateX", '210.72px']
         ],
         "${_TextCopy}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-60.58px'],
            ["transform", "translateX", '211.99px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3505,
         autoPlay: true,
         timeline: [
            { id: "eid8", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid14", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid47", tween: [ "transform", "${_TextCopy}", "translateX", '211.99px', { fromValue: '211.99px'}], position: 3505, duration: 0 },
            { id: "eid26", tween: [ "style", "${_TextCopy6}", "opacity", '0.99315068493151', { fromValue: '0'}], position: 2780, duration: 725 },
            { id: "eid19", tween: [ "style", "${_TextCopy3}", "opacity", '1', { fromValue: '1'}], position: 2250, duration: 0 },
            { id: "eid6", tween: [ "style", "${_TextCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_TextCopy3}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
            { id: "eid2", tween: [ "style", "${_TextCopy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_TextCopy5}", "display", 'block', { fromValue: 'none'}], position: 1458, duration: 0 },
            { id: "eid27", tween: [ "style", "${_TextCopy5}", "display", 'block', { fromValue: 'block'}], position: 3505, duration: 0 },
            { id: "eid7", tween: [ "style", "${_TextCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid16", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'none'}], position: 1725, duration: 0 },
            { id: "eid61", tween: [ "transform", "${_TextCopy4}", "translateX", '65px', { fromValue: '65px'}], position: 3505, duration: 0 },
            { id: "eid15", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '1'}], position: 1250, duration: 0 },
            { id: "eid13", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '1'}], position: 730, duration: 0 },
            { id: "eid24", tween: [ "style", "${_TextCopy7}", "opacity", '1', { fromValue: '0'}], position: 2780, duration: 450 },
            { id: "eid59", tween: [ "transform", "${_TextCopy6}", "translateX", '154.6px', { fromValue: '154.6px'}], position: 3505, duration: 0 },
            { id: "eid51", tween: [ "transform", "${_TextCopy5}", "translateX", '-21px', { fromValue: '-21px'}], position: 3505, duration: 0 },
            { id: "eid57", tween: [ "transform", "${_TextCopy7}", "translateX", '210.72px', { fromValue: '210.72px'}], position: 3505, duration: 0 },
            { id: "eid5", tween: [ "style", "${_TextCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid20", tween: [ "style", "${_TextCopy4}", "display", 'block', { fromValue: 'none'}], position: 2780, duration: 0 },
            { id: "eid48", tween: [ "transform", "${_TextCopy}", "translateY", '-60.58px', { fromValue: '-60.58px'}], position: 3505, duration: 0 },
            { id: "eid21", tween: [ "style", "${_TextCopy4}", "opacity", '1', { fromValue: '1'}], position: 2780, duration: 0 },
            { id: "eid58", tween: [ "transform", "${_TextCopy7}", "translateY", '109.49px', { fromValue: '109.49px'}], position: 3505, duration: 0 },
            { id: "eid46", tween: [ "transform", "${_TextCopy3}", "translateY", '-27.94px', { fromValue: '-27.94px'}], position: 3505, duration: 0 },
            { id: "eid45", tween: [ "transform", "${_TextCopy2}", "translateY", '14px', { fromValue: '14px'}], position: 3505, duration: 0 },
            { id: "eid52", tween: [ "transform", "${_TextCopy5}", "translateY", '48.85px', { fromValue: '48.85px'}], position: 3505, duration: 0 },
            { id: "eid62", tween: [ "transform", "${_TextCopy4}", "translateY", '109.49px', { fromValue: '109.49px'}], position: 3505, duration: 0 },
            { id: "eid60", tween: [ "transform", "${_TextCopy6}", "translateY", '109.49px', { fromValue: '109.49px'}], position: 3505, duration: 0 },
            { id: "eid3", tween: [ "style", "${_TextCopy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_TextCopy7}", "display", 'block', { fromValue: 'none'}], position: 3230, duration: 0 },
            { id: "eid4", tween: [ "style", "${_TextCopy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "style", "${_TextCopy6}", "display", 'block', { fromValue: 'none'}], position: 3505, duration: 0 },
            { id: "eid1", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 730, duration: 0 },
            { id: "eid11", tween: [ "style", "${_TextCopy5}", "opacity", '0', { fromValue: '0'}], position: 1458, duration: 0 },
            { id: "eid28", tween: [ "style", "${_TextCopy5}", "opacity", '1', { fromValue: '0'}], position: 3230, duration: 275 },
            { id: "eid17", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '1'}], position: 1725, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-281627644");
