## 构建步骤

#### 安装Cordova
> sudo npm install -g cordova

#### 安装android平台
> cordova platform add android --save

#### 构建与测试
App默认使用index.html作为应用入口，在config.xml中已经配置，如果需要打包, 使用
> cordova build andriod

但在开发过程中，通常使用模拟器来测试App的效果，使用
> cordova run android

使用前必须保证模拟器已经打开
