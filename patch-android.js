// Adds the AdMob App ID to the generated Android manifest.
// Uses Google's public TEST app id unless you pass ADMOB_APP_ID (your real one from the AdMob console).
const fs = require("fs");
const p = "android/app/src/main/AndroidManifest.xml";
const APP_ID = process.env.ADMOB_APP_ID || "ca-app-pub-3940256099942544~3347511713";
if (!fs.existsSync(p)) { console.error("Run `npx cap add android` first."); process.exit(1); }
let x = fs.readFileSync(p, "utf8");
x = x.replace(/\s*<meta-data[^>]*com\.google\.android\.gms\.ads\.APPLICATION_ID[^>]*\/>/, "");
x = x.replace("</application>",
  '    <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="' + APP_ID + '"/>\n    </application>');
fs.writeFileSync(p, x);
console.log("AdMob app id set to", APP_ID);
