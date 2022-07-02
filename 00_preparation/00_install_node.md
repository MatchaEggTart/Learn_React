# 安装 nodejs 和 yarn

## 安装 nodejs

* 安装 nodejs

    ``` shell
    sudo dnf install nodejs -y

    node -v
    ```

* 配置镜像

    ``` shell
    # 安装 nrm
    sudo npm install -g nrm

    # 查看已有镜像
    nrm ls

    # 使用镜像
    nrm use [源名称]

    # 添加源
    nrm add [源名称] [url]

    # 删除源
    nrm del [源名称]

    # 测试源
    nrm test [源名称]
    ```

## 安装 yarn

* 安装

    ``` shell
    sudo npm install -g yarn -y
    yarn -v
    ```
