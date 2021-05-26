
echo " 
Host vm
    Hostname $VM_ADDRESS
    User $VM_USER
    IdentityFile ~/.ssh/key.pem
" >> ~/.ssh/config

cat ~/.ssh/config

ssh vm "bash -l -s" < $GITHUB_WORKSPACE/scripts/update.sh # ssh action must set the vm to a valid config in sshconfig

