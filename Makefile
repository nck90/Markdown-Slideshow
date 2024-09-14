all: deps bundle

deps:
	npm install

bundle:
	npx webpack --config webpack.config.js

test:
	npx mocha test/test_app.js

.PHONY: deps test bundle