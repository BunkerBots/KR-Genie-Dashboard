source ~/.bashrc
cd KR-Genie-Dashboard/
git fetch && git reset --hard origin/production
yarn
pm2 reload app