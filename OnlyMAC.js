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

result = maddress.some(address => {
  if (claims.device.macAddresses.containsText(address)) {
    debugLog("MACAddress match found " + address);
    auditLog("MACAddress match found " + address);
    return true;
  }
  return false;
})

return result;
