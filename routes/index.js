const _0x12a936=_0x1460;function _0x253d(){const _0xb7e248=['each','href','push','12xnMrbl','cheerio','.w-post-elm\x20p\x20a','data','323199VMxyzW','Express','link','Router','72936EXOScu','118094QGhIWE','log','src','/get','.layout_786344\x20.usg_post_title_1\x20a','title','6198474bHgnJN','post','189iSemET','express','render','get','1659235knSoFy','index','load','1258180LXVZkp','.layout_786344\x20.usg_post_title_1','&post_type=post','6855541hBxrPF'];_0x253d=function(){return _0xb7e248;};return _0x253d();}(function(_0x275bb6,_0x634a41){const _0x48c04b=_0x1460,_0x55132f=_0x275bb6();while(!![]){try{const _0x42d683=parseInt(_0x48c04b(0x10a))/0x1+-parseInt(_0x48c04b(0x10f))/0x2*(parseInt(_0x48c04b(0x125))/0x3)+parseInt(_0x48c04b(0x11e))/0x4+parseInt(_0x48c04b(0x11b))/0x5+parseInt(_0x48c04b(0x115))/0x6+-parseInt(_0x48c04b(0x121))/0x7+parseInt(_0x48c04b(0x10e))/0x8*(-parseInt(_0x48c04b(0x117))/0x9);if(_0x42d683===_0x634a41)break;else _0x55132f['push'](_0x55132f['shift']());}catch(_0x480a1c){_0x55132f['push'](_0x55132f['shift']());}}}(_0x253d,0x916ce));var express=require(_0x12a936(0x118));const axios=require('axios'),cheerio=require(_0x12a936(0x126));function _0x1460(_0x1947fa,_0x5197ab){const _0x253dbf=_0x253d();return _0x1460=function(_0x146028,_0x56c10d){_0x146028=_0x146028-0x109;let _0x2d69dc=_0x253dbf[_0x146028];return _0x2d69dc;},_0x1460(_0x1947fa,_0x5197ab);}var router=express[_0x12a936(0x10d)]();router[_0x12a936(0x11a)]('/',async function(_0xe54bae,_0xbd7338,_0x17f618){const _0x4a8050=_0x12a936;try{var _0x2d2d40=[];_0xbd7338[_0x4a8050(0x119)](_0x4a8050(0x11c),{'title':_0x4a8050(0x10b),'courses':_0x2d2d40});}catch(_0x1bdb9b){console[_0x4a8050(0x110)](_0x1bdb9b);}}),router[_0x12a936(0x116)]('/',async(_0x4538a5,_0x3f9727,_0x25ee2f)=>{const _0x5adbc3=_0x12a936;try{const _0x9c39e4=_0x4538a5['body'][_0x5adbc3(0x114)];let _0x6ab4f0=await(await axios[_0x5adbc3(0x11a)]('https://downloadly.ir/?s=udemy+'+_0x9c39e4+_0x5adbc3(0x120)))[_0x5adbc3(0x109)],_0x265993=cheerio[_0x5adbc3(0x11d)](_0x6ab4f0),_0xd5eba7=[],_0x34bcf0=[];_0x265993(_0x5adbc3(0x11f))[_0x5adbc3(0x122)]((_0x2f5151,_0x13e5a9)=>_0xd5eba7[_0x5adbc3(0x124)](_0x265993(_0x13e5a9)['text']()['trim']())),_0x265993(_0x5adbc3(0x113))['each']((_0x185945,_0x148057)=>_0x34bcf0[_0x5adbc3(0x124)](_0x265993(_0x148057)['attr'](_0x5adbc3(0x123)))),_0x3f9727[_0x5adbc3(0x119)](_0x5adbc3(0x11c),{'title':'Express','courses':_0xd5eba7,'courses_link':_0x34bcf0}),console[_0x5adbc3(0x110)](_0xd5eba7);}catch(_0x4a59d3){console[_0x5adbc3(0x110)](_0x4a59d3);}}),router[_0x12a936(0x116)](_0x12a936(0x112),async(_0x4be922,_0x2f5119,_0x3d9158)=>{const _0x1af685=_0x12a936;try{let _0x1bc881=await(await axios[_0x1af685(0x11a)](_0x4be922['body'][_0x1af685(0x10c)]))[_0x1af685(0x109)],_0x437e03=cheerio[_0x1af685(0x11d)](_0x1bc881),_0xe5c9fa=[],_0x725634=[];_0x437e03(_0x1af685(0x127))[_0x1af685(0x122)]((_0x1c6ef5,_0x131033)=>_0xe5c9fa[_0x1af685(0x124)](_0x437e03(_0x131033)['attr'](_0x1af685(0x123)))),_0x437e03('.bloginnernew\x20img')[_0x1af685(0x122)]((_0x1ca8b9,_0xcab4ed)=>_0x725634[_0x1af685(0x124)](_0x437e03(_0xcab4ed)['attr'](_0x1af685(0x111)))),_0x2f5119[_0x1af685(0x119)](_0x1af685(0x11a),{'title':'Express','download_links':_0xe5c9fa,'course_image':_0x725634});}catch(_0x39c5cc){console[_0x1af685(0x110)](_0x39c5cc);}}),module['exports']=router;