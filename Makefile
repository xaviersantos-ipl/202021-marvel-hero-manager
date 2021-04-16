# VARIABLES

# RULES
install:
	cd src && \
	npm install
local:
	cd src && \
	docker run --name hero-manager-database --rm -p 27017:27017 -d mongo && \
	npm run start
docker:

.PHONY: install local docker