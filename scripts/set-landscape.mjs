import fs from 'node:fs';

const file = 'android/app/src/main/AndroidManifest.xml';

if (!fs.existsSync(file)) {
  throw new Error('Manifest Android introuvable');
}

let xml = fs.readFileSync(file, 'utf8');

xml = xml.replace(
  /<activity\b([^>]*)>/,
  (match, attrs) =>
    '<activity' + attrs +
    ' android:screenOrientation="landscape">'
);

fs.writeFileSync(file, xml);
