export function getDeviceType(userAgent) {
  const mobileRegex = /Mobile|Android|iP(hone|od)|BlackBerry|IEMobile|Silk|Opera Mini|Fennec|webOS|Windows Phone|PlayStation Vita/i;
  const tabletRegex = /Tablet|iPad|Nexus 7|Nexus 9|Kindle|Silk|Fennec/i;
  const desktopRegex = /Win(dows NT|dows NT 10.0|dows NT 6.1|dows NT 6.2|dows NT 6.3|dows NT 5.1|dows NT 5.2|dows NT 6.0|dows NT 5.0)|Macintosh|Intel Mac OS X|Linux|Ubuntu|CrOS/i;
  const tvRegex = /SmartTV|AppleTV|GoogleTV|HbbTV|NetCast|WebTV|Tizen|Roku|Xbox|PlayStation|CrKey|DIAL/i;
  const wearableRegex = /Watch|Wearable|Google Glass|SmartWatch|Gear/i;

  if (wearableRegex.test(userAgent)) {
    return 'wearable';
  } else if (tvRegex.test(userAgent)) {
    return 'tv';
  } else if (tabletRegex.test(userAgent)) {
    return 'tablet';
  } else if (mobileRegex.test(userAgent)) {
    return 'mobile';
  } else if (desktopRegex.test(userAgent)) {
    return 'desktop';
  } else {
    return 'unknown';
  }
}