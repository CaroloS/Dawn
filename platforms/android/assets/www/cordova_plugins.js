cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-ionic.common",
    "file": "plugins/cordova-plugin-ionic/www/common.js",
    "pluginId": "cordova-plugin-ionic",
    "clobbers": [
      "IonicCordova"
    ],
    "runs": true
  },
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
    "pluginId": "ionic-plugin-keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-storage",
    "clobbers": [
      "SQLitePlugin"
    ]
  },
  {
    "id": "cordova-plugin-youtube-video-player.YoutubeVideoPlayer",
    "file": "plugins/cordova-plugin-youtube-video-player/plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/www/YoutubeVideoPlayer.js",
    "pluginId": "cordova-plugin-youtube-video-player",
    "clobbers": [
      "YoutubeVideoPlayer"
    ]
  },
  {
    "id": "cordova-plugin-document-viewer.SitewaertsDocumentViewer",
    "file": "plugins/cordova-plugin-document-viewer/www/sitewaertsdocumentviewer.js",
    "pluginId": "cordova-plugin-document-viewer",
    "clobbers": [
      "cordova.plugins.SitewaertsDocumentViewer",
      "SitewaertsDocumentViewer"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-add-swift-support": "1.7.0",
  "cordova-plugin-splashscreen": "4.0.3",
  "cordova-plugin-ionic": "2.0.3",
  "ionic-plugin-keyboard": "2.2.1",
  "cordova-plugin-whitelist": "1.3.1",
  "cordova-plugin-device": "1.1.4",
  "cordova-plugin-ionic-webview": "1.1.16",
  "cordova-plugin-inappbrowser": "1.7.2",
  "cordova-sqlite-storage": "2.1.2",
  "cordova-plugin-youtube-video-player": "1.0.6",
  "cordova-plugin-document-viewer": "0.9.7"
};
// BOTTOM OF METADATA
});