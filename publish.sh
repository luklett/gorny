

#npm set //registry.npmjs.org/:_authToken $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



npm version patch

for dir in lib/packages/*; do
  if [ -d "$dir" ]; then
    cd $dir
    npm version patch
    cd ../../..
  fi
done

npm publish --access public
npm publish --access public --workspaces