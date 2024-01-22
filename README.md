# microservice-videos-nestjs

Project in node to create a base project to a streaming platform

# 1 - Config the first things on the project

- **chmod +x .docker/start.sh** to add permission to the command that is gonna stay in docker-compose

- Add dev_container to the project with the plugins (ZSH Pluglins, Common Utilities, Shell History)
- Add some configuration base on the class (Projeto prático com NestJs Integrando com Dev-container)

# 2 - Start to config in fact the project

- Add public key of github - ssh-keygen -t rsa -b 4096 -C "gustavomedeiros15@outlook.com.br"
- eval "$(ssh-agent -s)"
- ssh-add ~/.ssh/id_rsa
- git remote -v
- git remote set-url origin git@github.com:GustavoMedeiros-A/microservice-videos-nestjs.git

**Create the ssh, cat and add to the github**
- cat ~/.ssh/id_rsa.pub __Copy all the content__
- ssh -T git@github.com (To verify if everything is right)


- npm init -y