# npm install terser -g
default:
	terser index.js --config-file terser_conf.json -o index.min.js
