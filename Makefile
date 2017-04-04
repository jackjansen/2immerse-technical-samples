GENERATED=media/trailer-description.json
TCGEN=../timeline-service/bin/srt2scrolltxt.py

all: $(GENERATED)

media/trailer-description.json: media/trailer-description.srt $(TCGEN)
	python $(TCGEN) media/trailer-description.srt media/trailer-description.json
	
install: $(GENERATED)
	aws s3 sync --exclude .git . s3://origin.platform.2immerse.eu/dmapps/technical-samples/
