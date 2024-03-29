# Important note

This repository is mainly of historical interest. It contains sample documents from the time the 2Immerse project was still actively being developed. Therefore, some (or all) of these samples may or may not work with the open source 2-Immerse repositories from <https://github.com/2-IMMERSE>. You have been warned.

# Technical Samples

This repository contains sample 2immerse experiences.
The samples are technical, i.e. they are intended to test features of the implementation, not to show off the platform to third parties.

If you point your browser to [indexx.html]() you should be able to select the test you want to see (provided you are doing so with Chrome or another 2immerse-compatible browser). And it has a double-x in the name so you can still browser to this directory on the origin server and see the contents:-).

## Creating a new example

- Pick a new number, create a folder, put a _timeline.xml_ and _layout.json_ in there.
- Add to _indexx.html_
- Add to _indexx_edge.html_
- Add to _client.json_
- Check syntax on the local files (see below)
- Upload (see below)
- Check syntax and media items (see below)

## Modifying the examples
After changing anything here you need to upload the changed files using 

```
make install
```

For this to work you need to have the AWS client installed:

```
sudo pip install awscli
```
Then you need to enter the credentials to allow you to upload:

```
aws configure
```
Enter the credentials that James shared in an email from 20-Feb-2017 with subject _Uploads to new platform_.

## Testing the examples

To run a syntax check of all layout and timeline documents run

```
make test
```
and to check the syntax and also existence of media _for installed documents_ run

```
make livetest
```

You can also test individual documents by using targets like ```test-100-video-mp4```.