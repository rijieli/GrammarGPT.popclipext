#!/bin/bash

if [ ! -d "GrammarGPT.popclipext" ]; then
    mkdir GrammarGPT.popclipext
fi

cp *.json GrammarGPT.popclipext/
cp *.js GrammarGPT.popclipext/
cp *.svg GrammarGPT.popclipext/

# zip all files in BuildCache to GrammarGPT.popclipext.zip

cd GrammarGPT.popclipext
zip -r GrammarGPT.popclipext.zip *

# move zip file to root directory

mv GrammarGPT.popclipext.zip ../
