#!/bin/bash
#
# Partially discovered from google "ffmpeg hls" and from
# https://superuser.com/questions/875579/how-to-generate-multiple-bitrate-hls-content-from-live-rtsp-stream
#
mkdir $1.hls
ffmpeg -i $1.mp4 -f hls $1.hls/$1.m3u8
# echo "#extm3U" > $1.hls/$1.m3u8
# rate=???
# width=???
# height=???
# ffmpeg -i $1 -f hls -maxrate $rate -s ${width}x${height} $1.hls/$1-${rate}-${width}-${height}.m3u8
# echo "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=${rate}" >> $1.hls/$1.m3u8
# echo "$1-${rate}-${width}-${height}.m3u8" >> $1.hls/$1.m3u8
# echo 