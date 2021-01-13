#!/bin/sh

rm -rf ./build
gulp build 
gulp build-bundle-dev

rm -rf /Volumes/Data/Job/Shinez/Workspace/shinez-widget/src/prebid-build
mkdir -p /Volumes/Data/Job/Shinez/Workspace/shinez-widget/src/prebid-build
cp -r ./build/dist/* /Volumes/Data/Job/Shinez/Workspace/shinez-widget/src/prebid-build

rm -rf /Volumes/Data/Job/Shinez/Workspace/shinez-widget/src/prebid-build-dev
mkdir -p /Volumes/Data/Job/Shinez/Workspace/shinez-widget/src/prebid-build-dev
cp -r ./build/dev/* /Volumes/Data/Job/Shinez/Workspace/shinez-widget/src/prebid-build-dev
