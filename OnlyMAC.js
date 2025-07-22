var result = false;
var audit = false; // prints audit messages
var debug = false; //prints debugLog messages
//var dryRun = false; // run without any available claim.
var logPrefix = "MAC Address Validation event";
var maddress = ['38F9D3ASE0D120','38F9ORP5D1211']; //List of MAC Address for shared machines

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

for (var i = 0; i < maddress.length; i++) {
  if (claims.device.macAddresses.includes(maddress[i])) {
    result = true;
    debugLog("MACAddress match found " + maddress[i]);
    auditLog("MACAddress match found " + maddress[i]);
    break;
  }
}

return result;
