FROM node:19

RUN apt-get update && \
    apt-get install -y vim

RUN npm install -g typescript
# RUN npm install jest ts-jest @types/jest --save-dev

RUN git clone https://github.com/pangloss/vim-javascript.git ~/.vim/pack/plugins/start/vim-javascript
RUN git clone https://github.com/leafgarland/typescript-vim.git ~/.vim/pack/plugins/start/typescript-vim
RUN git clone https://github.com/maxmellon/vim-jsx-pretty.git ~/.vim/pack/plugins/start/vim-jsx-pretty


RUN git clone https://github.com/mitchelldyer01/dotfiles ~/dotfiles && cp ~/dotfiles/.vimrc ~/.vimrc

CMD ["/bin/bash"]

