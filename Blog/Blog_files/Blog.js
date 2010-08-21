// Created by iWeb 2.0.4 local-build-20100821

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWStrokeParts([{rect:new IWRect(-1,1,2,73),url:'Blog_files/stroke_8.png'},{rect:new IWRect(-1,-1,2,2),url:'Blog_files/stroke_9.png'},{rect:new IWRect(1,-1,695,2),url:'Blog_files/stroke_10.png'},{rect:new IWRect(696,-1,2,2),url:'Blog_files/stroke_11.png'},{rect:new IWRect(696,1,2,73),url:'Blog_files/stroke_12.png'},{rect:new IWRect(696,74,2,2),url:'Blog_files/stroke_13.png'},{rect:new IWRect(1,74,695,2),url:'Blog_files/stroke_14.png'},{rect:new IWRect(-1,74,2,2),url:'Blog_files/stroke_15.png'}],new IWSize(697,75)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,118),url:'Blog_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Blog_files/stroke_1.png'},{rect:new IWRect(1,-1,698,2),url:'Blog_files/stroke_2.png'},{rect:new IWRect(699,-1,2,2),url:'Blog_files/stroke_3.png'},{rect:new IWRect(699,1,2,118),url:'Blog_files/stroke_4.png'},{rect:new IWRect(699,119,2,2),url:'Blog_files/stroke_5.png'},{rect:new IWRect(1,119,698,2),url:'Blog_files/stroke_6.png'},{rect:new IWRect(-1,119,2,2),url:'Blog_files/stroke_7.png'}],new IWSize(700,120))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://bylochacon.com/Globaleyes/Blog/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Blog_files/BlogMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
