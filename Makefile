
test:
	@./node_modules/.bin/mocha \
	  --reporter spec \
	  --require should

data.json:
	@./compile > $@

.PHONY: test
