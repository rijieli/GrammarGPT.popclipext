#!/bin/bash

# If the parameter is "-clean", then delete all files in the BuildCache and end the script.
if [ "$1" == "-clean" ]; then
    rm -rf GrammarGPT.popclipext
    rm -rf GrammarGPT.popclipext.zip
    exit 0
fi


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
