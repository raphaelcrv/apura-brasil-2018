# System

Clean memory cache 

    sudo sysctl -w vm.drop_caches=3


# Setup EC2

**1 install git**

sudo apt install git -y
sudo apt install 

**2 install nvm & node.js**

Note: On Linux, after running the install script, if you get nvm: command not found or see no feedback from your terminal, reponen your terminal and nvm 'll work!

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

    export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

this installs the latest version of node

    nvm i node

If you want to use the system-installed version of node, you can use the special default alias "system":

    nvm use system

If you want to see what versions are installed:

    nvm ls

**install pm2**

    sudo npm install pm2 -g

    -> stop process
    pm2 stop web-interface
    
    -> restart process
    restart web-interface

    -> delete process
    pm2 delete web-interface

# Deploy Instricutions

Build application optimized for production

    cd /servers/apura-brasil-2018/
    sudo ng build --prod

Delete all content inside the folder

    sudo rm  /servers/apura-brasil-2018/

move application to server folder

    sudo mv /projects/apura-brasil-2018/dist/apura-brasil/* /servers/apura-brasil-2018/

start webserver with http-server

    pm2 start /usr/bin/http-server -- -p 8080 -d false



# Ci configuration
[Abstruse](https://github.com/bleenco/abstruse)

[Andular Deployment](https://angular.io/guide/deployment)

ci teste
