// Created by iWeb 2.0.4 local-build-20100821

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,148),url:'Blank_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Blank_files/stroke_1.png'},{rect:new IWRect(1,-1,198,2),url:'Blank_files/stroke_2.png'},{rect:new IWRect(199,-1,2,2),url:'Blank_files/stroke_3.png'},{rect:new IWRect(199,1,2,148),url:'Blank_files/stroke_4.png'},{rect:new IWRect(199,149,2,2),url:'Blank_files/stroke_5.png'},{rect:new IWRect(1,149,198,2),url:'Blank_files/stroke_6.png'},{rect:new IWRect(-1,149,2,2),url:'Blank_files/stroke_7.png'}],new IWSize(200,150))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Blank_files/BlankMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
