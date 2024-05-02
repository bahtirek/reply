///<reference types="chrome"/>

if (typeof browser === "undefined" && typeof chrome !== "undefined") {
  var browser = chrome;
}

const getSelectionFromStorage = async function(){
  console.log('browser.js');
  return new Promise((resolve, reject) => {
    if(browser && browser.runtime){
      try {
        chrome.storage.sync.get('message', (data) => {
          console.log(data);
          if(data) {
            resolve(data);
          } else {
            reject();
          }
        })
      } catch (error) {
        reject();
      }
    }
  })
}

export default {
  getSelectionFromStorage
}
