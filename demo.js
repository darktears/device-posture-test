
let contentBox = document.getElementById('content');
if (navigator.devicePosture != undefined) {
  console.log('Posture at page load : ' + navigator.devicePosture.type);
  console.log('Media Query match: ' + window.matchMedia("(device-posture: continuous)").matches);
  contentBox.innerHTML = "The current posture of the device is : " + navigator.devicePosture.type;
  navigator.devicePosture.onchange = () => {
    console.log('Posture changed, new posture : ' + navigator.devicePosture.type);
    contentBox.innerHTML = "The current posture of the device is : " + navigator.devicePosture.type;
  };
} else {
  contentBox.innerHTML = "Device Posture API is not supported in this browser.";
}