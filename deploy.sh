# Check commit name for deploy
if [ -z "$1" ]
  then
    echo "No commit name is given."
fi

# Change to build directory and push gh-pages branch
npm run build && \
cd build && \
git init && \
git add --all && \
git commit -m "$1" && \
git checkout -B gh-pages && \
git push https://github.com/AlgoWit/algowit-website.git gh-pages --force 
