install:
	aws s3 sync --exclude .git . s3://origin.platform.2immerse.eu/dmapps/technical-samples/
