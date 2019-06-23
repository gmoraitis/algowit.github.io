npm run build
git checkout -B gh-pages
shopt -s extglob
rm -R -df !(build|node_modules)
mv build/* .
git add --all && git commit -m $1
git push origin gh-pages --force
git checkout master
git branch -D gh-pages