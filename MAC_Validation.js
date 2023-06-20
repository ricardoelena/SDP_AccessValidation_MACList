var result = false;
var audit = false; // prints audit messages
var debug = true; //prints debugLog messages
//var dryRun = false; // run without any available claim.
var logPrefix = "MAC Address Validation event";
var maddress = ['38F9D375D120','38F9D375D121']; //List of MAC Address for shared machines

// Utils ----------------------------------------
function log(msg) {
    if (audit) {
        auditLog(logPrefix + ": " + msg);
    }
}


// log to console log
function debugLog(msg) {
    if (debug) {
        console.log("debugLog: " + msg);
    }
}

if (claims.user.tags && claims.user.tags.containsText("validate")) {  //Tag or group that should work on machines with specific MAC
  result = true; 
  debugLog("User match");
} else { 
  debugLog("User doesn't match");
  return true; 
}

for (var i = 0; i < maddress.length; i++) {
  if (claims.device.macAddresses.includes(maddress[i])) {
    result = true;
    debugLog("MACAddress match found " + maddress[i]);
    auditLog("MACAddress match found " + maddress[i]);
    break;
  }
}

return result;
