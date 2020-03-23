#!/bin/bash
mogrify -resize 260 src/assets/img/intro/ma-picture.png
mogrify -resize 380 src/assets/img/timeline/*-picture.jpg
mogrify -resize 160 src/assets/img/timeline/*-icon.png
mogrify -resize 80 src/assets/img/knowledges/*
mogrify -resize 100 src/assets/img/creations/*-icon.png
mogrify -resize 100 src/assets/img/creations/*-icon.jpg
mogrify -resize 600 src/assets/img/hobbies/*.jpg
mogrify -resize 250 src/assets/img/thanks/*.jpg