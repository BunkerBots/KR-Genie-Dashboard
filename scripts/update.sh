source ~/.bashrc
source ~/.nvm/nvm.sh
# $PATH=~/.nvm/versions/node/v15.11.0/bin:$PATH
cd KR-Genie-Dashboard/
echo " your mom " >> ~/test
git fetch && git reset --hard origin/production
yarn
yarn build
pm2 reload app