// Emits the setup-only masterclass after the existing SPA and Roadmap builds.
// Original typography/media are isolated; no React/global CSS or signup API changes.
import { copyFileSync, cpSync, existsSync, mkdirSync, readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';

const source = path.resolve('masterclass-static');
const out = path.resolve('dist/public');
const target = path.join(out, 'assets/masterclass/setup-v1');
const html = readFileSync(path.join(source, 'register.html'), 'utf8');
if (/matthew-pitch\.pages\.dev|\/manus-storage\/|\/src\//.test(html)) {
  throw new Error('Masterclass contains a creator-domain or preview-only dependency');
}
if (!html.includes('noindex, nofollow, noarchive') || !html.includes('registrations are not open')) {
  throw new Error('Masterclass setup safeguards are missing');
}
const references = [...html.matchAll(/(?:src|href)="(\/assets\/masterclass\/setup-v1\/[^"#]+)"/g)].map(m => m[1]);
for (const ref of references) {
  const file = path.join(source, 'assets', ref.replace('/assets/masterclass/setup-v1/', ''));
  if (!existsSync(file)) throw new Error('Missing masterclass asset: ' + file);
}
const manifest = JSON.parse(readFileSync(path.join(source, 'original-media-manifest.json'), 'utf8'));
for (const asset of manifest) {
  const file = path.join(source, 'assets', asset.relative_path);
  const bytes = readFileSync(file);
  const hash = createHash('sha256').update(bytes).digest('hex');
  if (bytes.length !== asset.bytes || hash !== asset.sha256) {
    throw new Error('Original masterclass media was modified: ' + asset.relative_path);
  }
}
mkdirSync(target, { recursive: true });
cpSync(path.join(source, 'assets'), target, { recursive: true });
copyFileSync(path.join(source, 'register.html'), path.join(out, 'masterclass.html'));
console.log(`Wrote isolated masterclass.html with ${manifest.length} verified original media files; registration remains disabled`);
