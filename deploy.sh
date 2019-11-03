#!/usr/bin/env sh


# 这是将本博客部署到github仓库的master分支，即执行本博客后即表示发表博客了

# 先清空 public 文件夹
hexo clean
hexo generate
# 因为我在 _config.yml 文件中配置了github部署链接(而且指定部署到master分支了)，所以只需要执行 hexo deploy 即可，不需要执行 git 相关命令
hexo deploy
