# npm install uglify-js -g
default:
	uglifyjs --timings -mco index.min.js index.js
