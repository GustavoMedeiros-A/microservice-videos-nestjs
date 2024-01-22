FROM node:20.5.1-slim

USER node

# Setar diretório de trabalho dentro do Container
WORKDIR /home/node/app

RUN chown -R node:node /home/node/app

# 
CMD ["tail", "-f", "/dev/null"]