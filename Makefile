build: test
	npx webpack 

test:
	node_modules/.bin/jest --silent
