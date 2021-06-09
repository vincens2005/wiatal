# npm install uglify-js -g
default:
	uglifyjs --timings -m -c -o index.min.js index.js
