#!/usr/bin/env sh

# 这是将 本博客的项目源码上传到 dev 分支的脚本，并不是博客本身的发表

# 本项目的根目录中已有 .git 目录配置了，因此不需要单独配置git
# 注意如果你是第一次clone该项目，注意在本地新建并切换分支dev
git add .

git commit -m "维护本项目到 dev branch"

git push origin dev --tags