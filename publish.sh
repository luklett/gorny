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