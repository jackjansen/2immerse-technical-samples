GENERATED=media/trailer-description.json
TCGEN=../timeline-service/bin/srt2scrolltxt.py
VALIDATE_L=../timeline-service/bin/validate-layout.sh
VALIDATE_T=../timeline-service/bin/validate-timeline.sh

ALLSAMPLES=$(wildcard [0-9][0-9][0-9]-*)


all: $(GENERATED)

media/trailer-description.json: media/trailer-description.srt $(TCGEN)
	python $(TCGEN) media/trailer-description.srt media/trailer-description.json
	
install: $(GENERATED)
	aws s3 sync . s3://origin.platform.2immerse.eu/dmapps/technical-samples/ --delete --exclude ".git/*"

.PHONY: test livetest test-% livetest-%

test: $(patsubst %,test-%,$(ALLSAMPLES))
livetest: $(patsubst %,livetest-%,$(ALLSAMPLES))

test-%:
	$(VALIDATE_L) $*/layout.json
	$(VALIDATE_T) --layout $*/layout.json $*/timeline.xml
	
livetest-%:
	$(VALIDATE_T) --layout https://origin.platform.2immerse.eu/dmapps/technical-samples/$*/layout.json https://origin.platform.2immerse.eu/dmapps/technical-samples/$*/timeline.xml
