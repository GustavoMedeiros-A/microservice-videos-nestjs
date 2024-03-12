# microservice-videos-nestjs

Project in node to create a base project to a streaming platform

# 1 - Config the first things on the project

- **chmod +x .docker/start.sh** to add permission to the command that is gonna stay in docker-compose

- Add dev_container to the project with the plugins (ZSH Pluglins, Common Utilities, Shell History)
- Add some configuration base on the class (Projeto prático com NestJs Integrando com Dev-container)

# 2 - Config github inside dev-container

**git remote set-url origin https://github.com/GustavoMedeiros-A/microservice-videos-nestjs.git**

- Add public key of github - ssh-keygen -t rsa -b 4096 -C "gustavomedeiros15@outlook.com.br"
- eval "$(ssh-agent -s)"
- ssh-add ~/.ssh/id_rsa
- git remote -v
- git remote set-url origin git@github.com:GustavoMedeiros-A/microservice-videos-nestjs.git

**Create the ssh, cat and add to the github**

- cat ~/.ssh/id_rsa.pub **Copy all the content**
- ssh -T git@github.com (To verify if everything is right)

- npm init -y

# 3 - Start to config in fact the project

- **npm install typescript -D**
- **npx tsc --init** -> start typescript project
- **npm install ts-node --save-dev**

- **npm install jest @types/jest -**
- **npm install @swc/core @swc/cli @swc/jest -D** // Rust compiler to better run
- **npx jest --init**

# 4 - To run testes and make some testes

- **npm run test -- --watchAll**

# 5 - Start implement a ValueObject

- **npm install lodash --save** -> Array and Object
- **npm install @types/lodash** -> Array and Object

# 6 - You can use YARN as Node PackageManager, and is that that i'm doing now because i think that is better that NPM
