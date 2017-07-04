#!/bin/bash
#
# Partially discovered from google "ffmpeg hls" and from
# https://superuser.com/questions/875579/how-to-generate-multiple-bitrate-hls-content-from-live-rtsp-stream
#
if [ -d ${1}.hls ]; then 
	rm -rf ${1}.hls
fi
mkdir ${1}.hls
ffmpeg  -i ${1}.mp4 \
	-f hls -profile:v baseline -level 3.0 -hls_time 4 -start_number 1 -hls_list_size 999999 -s 1920x1080 -maxrate 6711536 ${1}.hls/${1}_6711536_.m3u8 \
	-f hls -profile:v baseline -level 3.0 -hls_time 4 -start_number 1 -hls_list_size 999999 -s 426x240 -maxrate 832226 ${1}.hls/${1}_832226_.m3u8 \
	-f hls -profile:v baseline -level 3.0 -hls_time 4 -start_number 1 -hls_list_size 999999 -s 640x360 -maxrate 1075624 ${1}.hls/${1}_1075624_.m3u8 \
	-f hls -profile:v baseline -level 3.0 -hls_time 4 -start_number 1 -hls_list_size 999999 -s 854x480 -maxrate 1863384 ${1}.hls/${1}_1863384_.m3u8 \
	-f hls -profile:v baseline -level 3.0 -hls_time 4 -start_number 1 -hls_list_size 999999 -s 1280x720 -maxrate 3690962 ${1}.hls/${1}_3690962_.m3u8 
cat > ${1}.hls/${1}.m3u8 << xyzzy
#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=832226
${1}_832226_.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=1075624
${1}_1075624_.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=1863384
${1}_1863384_.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3690962
${1}_3690962_.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6711536
${1}_6711536_.m3u8
xyzzy
