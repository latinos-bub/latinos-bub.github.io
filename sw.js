/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/03/2019/index.html","838cd78ded31ff3fc3747e8d2b628665"],["/2019/11/03/ssm-kuang-jia-liu-cheng/index.html","73daa660d62cc968106088340a0354a2"],["/2019/11/04/vps-de-da-jian/index.html","d4cd156b62332a72dbcc8836cd3c09a0"],["/2019/11/10/java-pa-qu-tu-pian-shi-li/index.html","aea1cfd7287008ef79c13871e65d7fcd"],["/2019/11/12/java-zhong-shi-yong-hssfworkbook-sheng-cheng-excel/index.html","d8f6d39812187f6e0576ee796a49d6b1"],["/2019/11/26/mysql-yue-shu/index.html","569856379ac7bfda4496cdaf25a3e9bf"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/index.html","ac7187666fe74a780b7368f2a09f1a2d"],["/2019/12/13/mybatis-zhong-resultmap-de-shi-yong/index.html","5115d6ea4f3de991ed5604e148e459a0"],["/2019/12/13/mysql-hong-fa-qi/index.html","8eaf17dc38cb72044bcd42a928c5b1e2"],["/2019/12/13/zhang-wo-jian-dan-de-git-ming-ling/index.html","c186e020c7dffb08d67b2f0cdcc4a2dd"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/index.html","26703eadcfa46957dffb5ab78a62ab72"],["/2019/12/18/3d-xiang-ce-shi-li/index.html","d412a7f132db0cde2b4ac54960ce5420"],["/2019/12/18/geng-hao-di-shi-yong-google/index.html","7219e056684fe5fc441ffc6d9a60937a"],["/2019/12/30/github-shang-chuan-da-wen-jian/index.html","24dcd697faa3b44ef593056311f02b55"],["/2020/01/04/guo-nei-zhen-shi-xing-shi-an-jian/index.html","88e1b1787ae7465218ae1b3a57e00503"],["/2020/01/05/shell-zhi-shi-dian/index.html","15f86fbe34bc38a2e1b3938d485ea0db"],["/2020/01/06/java-zhong-io-cao-zuo-zong-jie/index.html","58fe1813ca79eae176854d2eb1294e35"],["/2020/01/06/spring-boot-cheng-xu-de-bu-shu-ji-yun-xing/index.html","c650d86c2c474f03d1c85344872f7e7a"],["/2020/01/09/nginx-zai-centos7-xia-de-an-zhuang/index.html","13a1ccd52a5dea544fd414db3e03cff5"],["/2020/01/28/css-ji-ben-yang-shi/index.html","fd08594bb062bd1a2d4d19641bef6901"],["/2020/03/22/ubuntu-an-zhuang-redis/index.html","4cb9694099c399c216fea428ce3dcdc2"],["/3d/index.html","04a983c98d3a28e57fd1979da043c3ba"],["/about/index.html","b42a986cad7e327bc1401667d67ae566"],["/archives/2019/11/index.html","cbf269417accde42a2cdc6ec72550724"],["/archives/2019/12/index.html","4c4251bf48a090bd49e1e66b7871f035"],["/archives/2019/index.html","99f35d996a31befd90310ad60d5e4c4a"],["/archives/2019/page/2/index.html","c2de3d74f341287b7643c16e9f634d87"],["/archives/2020/01/index.html","10e246e29576b5f1ad4531f0f8706daa"],["/archives/2020/03/index.html","ebcdbe85df9ae0407434da03d0d16329"],["/archives/2020/index.html","d4bfac661aa9f335960a12aeb67b469c"],["/archives/index.html","dcf6bfec20a046252ad1d98e063195b6"],["/archives/page/2/index.html","5d2660542a95258e143dd80755df5215"],["/categories/index.html","affadaed74840a68a437d08955510917"],["/categories/工具/index.html","d8cc8a32b86893218c5b297b7ba4f81d"],["/categories/影视/index.html","6fbb7509e6f6673899af03a787221373"],["/categories/生活/index.html","c7bf96957e7c353842f94d15d30564d8"],["/categories/相册/index.html","009afe7c394af2cbe476b61073c32c0f"],["/categories/编程/index.html","418aa2a41de167b1c6e2aec9c0c5bd28"],["/categories/编程/page/2/index.html","4971064d482e0d5f7cc0e865c5fbd343"],["/categories/视频/index.html","5c3b08f7f775e3fa3c0c0c5b582b6f1d"],["/categories/随笔/index.html","05ebd8cc16c34289e159513921170de2"],["/contact/index.html","9366ad52baa1e9cddb29f521605a3967"],["/css/gallery.css","d691e475c5bda53b7064883e403b2444"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","60fd45e90246e8abc5e8575741b6b11b"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","d4e3e60cbbcb2e298759a22c55bf6731"],["/css/prism-line-numbers.css","6d55b3b7e8c3e6e8adbf17eca03788ef"],["/css/prism-tomorrow.css","6f7952b20c3a712c5cd521cf6cba59ce"],["/favicon.png","0892ddc67dce2bd9f5c1283e608c97a0"],["/friends/index.html","5367359717edea0766a7d70d00faf221"],["/galleries/2017/index.html","0f606916700b0789aca074d8b628b07e"],["/galleries/2018/index.html","90cf160b655b7c96fccb8988eb8ee5be"],["/galleries/2019/index.html","f8f0f9b949439ea01142627ea05b3499"],["/galleries/2020/index.html","55e045aab68234d3273c12a71bd3d399"],["/galleries/index.html","94c0dbfb195e000a98d15f86c5338e06"],["/google1e722b81cee0b746.html","d3bd9df5e8da3c05aed86cceb67d6a6c"],["/images/1.jpg","bd24c65ec4f52591f4538dce3803fd83"],["/index.html","a90b87debf212e761b7daa308a32394d"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","a00e0d8db06b1b808786c435f4792a4b"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","0cb1b8af9950584b5cc8e8250e045508"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3c3ee463702a1f1a74a8d7ba36f16f3e"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/libs/others/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/libs/others/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/libs/others/text.js","679220e951b697a81e71f3f694cccae6"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","11f1b83bfa2973cab7fe30d3f4bb278f"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","2052fd3214a4811e5655944cb6679f5e"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/medias/logo.png","daa6562a12904e7b91f50faf45a0fde4"],["/medias/music/avatars/daoshu.jpg","b735d01046ca492204f8033a7ea685c8"],["/medias/music/avatars/leg.jpg","f67ad39e3cf39b54633c20584b6d8567"],["/medias/music/avatars/tiantangdemogui.jpg","b2dd70519b7c8fcf90128f100a5e307b"],["/medias/music/avatars/yequ.jpg","fd4409d16d8862d85cc777111dd9b064"],["/medias/music/avatars/yiluxiangbei.jpg","e50a6bf9b4735673931f851143e42700"],["/medias/reward/alipay.jpg","dc4c84eb7c0789788d1a3e006392f357"],["/medias/reward/wechat.png","b3c7e5f4445ff6d548855a9fa1afcab3"],["/page/2/index.html","a7401af1bb2d1e5c6b5a5ecbeb79a611"],["/sw-register.js","370acf82e221266e7cd837a15c89490d"],["/tags/GitHub/index.html","bcda6b0a6d51d8fcbb12d5d001c2dbf7"],["/tags/Java/index.html","023e664c6b6b7b8cb2653b7cbe95b1eb"],["/tags/Spring-boot/index.html","7c340fbdbd2aed1e0ad45d2e93024ae9"],["/tags/VPS/index.html","f18b6c2a98d5cf58ffeaf5be6a191976"],["/tags/css/index.html","ec1c5035712922a6ad501b87d18f12dd"],["/tags/git/index.html","244d877ab1d81ac06d2dcce6ae819c1e"],["/tags/html/index.html","a3766bea43cad5c5ac7a67c490ec530e"],["/tags/index.html","b03160086b1ec3ca026b1914ccfa35f1"],["/tags/mysql/index.html","0f75e97c443e8fdd423e5bc6c069e135"],["/tags/nginx/index.html","1dc73afa5c47bcbb7eec363203a80ab8"],["/tags/redis/index.html","6d18226f7726106d6141b218d777f473"],["/tags/shell/index.html","db17cfcae749f1238967963e5972193e"],["/tags/ubuntu/index.html","c8172735ba038686e1011b18026449f6"],["/tags/刑事案件/index.html","0c59d0aebd8a7ae2cef34328abc69fc0"],["/tags/工具/index.html","afa46bee5d44a69a90dcbe78c28bacc7"],["/tags/影视/index.html","b6ad3ff85430a321998c44a666b147c7"],["/tags/生活/index.html","6ac0d87aeed280d05bf2ed47bfb0790a"],["/tags/相册/index.html","5fd95b498f08c0160f068491ff27fce0"],["/tags/视频/index.html","80d9b624a7416181205f9d3aa6ee83cc"],["/tags/随笔/index.html","921ab02e4cb7e1674244dc9b3ddb7117"],["/tags/韩剧/index.html","a9ab95f636d90fe41bac802384c951a4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
