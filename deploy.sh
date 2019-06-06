echo TRAVIS_BRANCH=$TRAVIS_BRANCH
echo TRAVIS_BUILD_NUMBER=$TRAVIS_BUILD_NUMBER
eval "$(ssh-agent -s)" #start the ssh agent
chmod 600 gitkeys # this key should have push access
ssh-add gitkeys
git add --all
git commit -m "Travis deploy $TRAVIS_BUILD_NUMBER"
git remote set-url origin git@github.com:LocalCoinIS/LocalCoin-ui.git
git push origin $TRAVIS_BRANCH