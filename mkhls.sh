#!/bin/bash
#
# Partially discovered from google "ffmpeg hls" and from
# https://superuser.com/questions/875579/how-to-generate-multiple-bitrate-hls-content-from-live-rtsp-stream
#
# Rates and sizes from Mark's email (6-Jul-2017).
#
if [ -d ${1}.hls ]; then 
	rm -rf ${1}.hls
fi
mkdir ${1}.hls
ffmpeg  -i ${1}.mp4 \
	-f hls -profile:v baseline -level 3.0 -hls_time 4 -start_number 1 -hls_list_size 999999 -s 426x240 -maxrate 700K ${1}.hls/${1}_700K_.m3u8 \
	-f hls -profile:v baseline -level 3.0 -hls_time 4 -start_number 1 -hls_list_size 999999 -s 640x360 -maxrate 1M ${1}.hls/${1}_1M_.m3u8 \
	-f hls -profile:v baseline -level 3.0 -hls_time 4 -start_number 1 -hls_list_size 999999 -s 854x480 -maxrate 2M ${1}.hls/${1}_2M_.m3u8 \
	-f hls -profile:v baseline -level 3.0 -hls_time 4 -start_number 1 -hls_list_size 999999 -s 1280x720 -maxrate 4M ${1}.hls/${1}_4M_.m3u8 \
	-f hls -profile:v baseline -level 3.0 -hls_time 4 -start_number 1 -hls_list_size 999999 -s 1920x1080 -maxrate 8M ${1}.hls/${1}_8M_.m3u8
cat > ${1}.hls/${1}.m3u8 << xyzzy
#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=700000
${1}_700K_.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=1000000
${1}_1M_.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2000000
${1}_2M_.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=4000000
${1}_4M_.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8000000
${1}_8M_.m3u8
xyzzy
