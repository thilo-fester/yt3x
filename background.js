chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code: 'document.querySelector("video").playbackRate = 3;'
    });
});
