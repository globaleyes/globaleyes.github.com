// Created by iWeb 2.0.4 local-build-20100821

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,118),url:'Archive_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Archive_files/stroke_1.png'},{rect:new IWRect(1,-1,698,2),url:'Archive_files/stroke_2.png'},{rect:new IWRect(699,-1,2,2),url:'Archive_files/stroke_3.png'},{rect:new IWRect(699,1,2,118),url:'Archive_files/stroke_4.png'},{rect:new IWRect(699,119,2,2),url:'Archive_files/stroke_5.png'},{rect:new IWRect(1,119,698,2),url:'Archive_files/stroke_6.png'},{rect:new IWRect(-1,119,2,2),url:'Archive_files/stroke_7.png'}],new IWSize(700,120))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Archive_files/ArchiveMoz.css')
detectBrowser();Widget.onload();fixAllIEPNGs('../Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
