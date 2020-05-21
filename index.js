let fullWidth=1440
let fullHeight=900
let newTabUrl=''
document.querySelector("#splitScreen").addEventListener("click", ()=>{
    fullWidth=window.screen.width
    fullHeight=window.screen.height
    chrome.windows.getCurrent((win)=>{
        chrome.windows.update(win.id,{
            width:fullWidth/2,
            height:fullHeight,
            top:0,
            left:0
        }, ()=>{})
    });
	chrome.tabs.query({active: true,currentWindow: true, highlighted: true},
         (tabs) =>{
            newTabUrl=tabs[0].url
            //创建新窗口	
            chrome.windows.create({
                width:fullWidth/2,
                height:fullHeight,
                top:0,
                left:fullWidth/2,
                url:newTabUrl,
            },()=>{});
    });
});