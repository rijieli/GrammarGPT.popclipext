#!/bin/bash

if [ ! -d "GrammarGPT.popclipext" ]; then
    mkdir GrammarGPT.popclipext
fi

cp *.json GrammarGPT.popclipext/Config.json
cp *.js GrammarGPT.popclipext/GrammarGPT.py
cp *.svg GrammarGPT.popclipext/

zip -vr GrammarGPT.popclipext.zip GrammarGPT.popclipext

rm -rf GrammarGPT.popclipext/*