
data.js:
	@./compile > $@

test:
	@./node_modules/.bin/mocha \
	  --reporter spec \
	  --require should

.PHONY: test
