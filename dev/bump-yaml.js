// Bump.
const fs = require('fs');
const YAML = require('yaml');
const infojson = JSON.parse(fs.readFileSync('./package.json'));
const semver = infojson.version;
const yamlfile = 'saa_victoria_subtheme.info.yml';
const info = YAML.parse(fs.readFileSync(yamlfile, 'utf8'));
info.version = semver;
fs.writeFileSync(yamlfile, YAML.stringify(info));