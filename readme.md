# Technical Samples

This repository contains sample 2immerse experiences.
The samples are technical, i.e. they are intended to test features of the implementation, not to show off the platform to third parties.

If you point your browser to [indexx.html]() you should be able to select the test you want to see (provided you are doing so with Chrome or another 2immerse-compatible browser). And it has a double-x in the name so you can still browser to this directory on the origin server and see the contents:-).

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