mkdir -p ~/.ssh/
echo "$PRIVATE_KEY" > ~/.ssh/key.pem
chmod 600 ~/.ssh/key.pem
ssh -i ~/.ssh/key.pem $VM_ADDRESS 'bash -s' < $GITHUB_WORKSPACE/scripts/update.sh