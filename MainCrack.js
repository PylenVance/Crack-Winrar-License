const fs = require('fs');
const os = require('os');

const title = "WinRar Premium Activator - Made by Kye";
const path = "C:\\Program Files\\WinRAR\\rarreg.key";

try {
  // Set console title
  process.stdout.write('\x1b]0;' + title + '\x07');

  // Write license key to file
  const licenseKey = "RAR registration data\nWinRAR User\nUnlimited Company License\nUID = 6dae1dee6409dd6da253\n6412212250a253532d8546a28efe9484f795481b550464fe4a0b4b\n91ffcd3ee5585f7cac9560fce6cb5ffde62890079861be57638717\n7131ced835ed65cc743d9777f2ea71a8e32c7e593cf66794343565\nb41bcf56929486b8bcdac33d50ecf77399605bdebab87edaeb8dd3\n5dbad8f0e8abfccfc320ddc95380b83e38123f258f3a336d2e7dd7\n780d739f352cad99f20aa63799cdbcd0f785987f9029d679607cae\n2f4ccc1ff9855dd20554f50ef315d916f31ec40d4cd21747221993 ";
  fs.writeFileSync(path, licenseKey, 'utf8');

  console.log(`Writing License Key to ${path}\n\n`);
  console.log("====\nWinRar Premium is now Activated!\n===\nPress enter to close this window..");

  // Wait for user input
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on('data', process.exit.bind(process, 0));
} catch (error) {
  console.error(error.message);
}
