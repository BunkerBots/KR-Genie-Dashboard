mkdir -p ~/.ssh/

echo "$PRIVATE_KEY" > ~/.ssh/key.pem
chmod 600 ~/.ssh/key.pem

ssh-keyscan -H $VM_ADDRESS > ~/.ssh/known_hosts

ssh -i ~/.ssh/key.pem -o UserKnownHostsFile=~/.ssh/known_hosts -tt ku@$VM_ADDRESS "bash -s" < $GITHUB_WORKSPACE/scripts/update.sh

