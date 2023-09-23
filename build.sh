#!/bin/bash

if [ ! -d "BuildCache" ]; then
    mkdir BuildCache
fi

cp *.json BuildCache/
cp *.js BuildCache/
cp *.svg BuildCache/

zip -vr GrammarGPT.popclipext.zip BuildCache

rm -rf BuildCache/*