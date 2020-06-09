/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/03/2019/index.html","0f0b9ed365f68642b7c34ff65cebf62a"],["/2019/11/03/ssm-kuang-jia-liu-cheng/index.html","6f535fdd90732356a953d97da4313afa"],["/2019/11/04/vps-de-da-jian/index.html","c00e66b807885441e97c65bd60a1d721"],["/2019/11/10/java-pa-qu-tu-pian-shi-li/index.html","2ce2a983fd12a975e2396174cf715a52"],["/2019/11/12/java-zhong-shi-yong-hssfworkbook-sheng-cheng-excel/index.html","b13bc4215865d87525cd41d8412d6133"],["/2019/11/26/mysql-yue-shu/index.html","b6d71bad01f10d62d1fdcb778611585b"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/index.html","1de5c94112bf7972ab89172a2f14ab5c"],["/2019/12/13/mybatis-zhong-resultmap-de-shi-yong/index.html","0df0ba3c65d2ce6ea700b5fa0eb1cfd7"],["/2019/12/13/mysql-hong-fa-qi/index.html","3236a3a2ec36e7bf94d10f69d1a104f9"],["/2019/12/13/zhang-wo-jian-dan-de-git-ming-ling/index.html","d72954f3b454482f16d83bb2d6632998"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/index.html","fa72601e6de4baf99951706dafe287eb"],["/2019/12/18/3d-xiang-ce-shi-li/index.html","c2c61b47c2ceec41ae4422aa6d6570b8"],["/2019/12/18/geng-hao-di-shi-yong-google/index.html","3371632708e0adc2f573628fa2467f19"],["/2019/12/30/github-shang-chuan-da-wen-jian/index.html","24f91de6959abc3b34639fba9211488d"],["/2020/01/04/guo-nei-zhen-shi-xing-shi-an-jian/index.html","40e6be59d2341742fd33a46d4a311418"],["/2020/01/05/shell-zhi-shi-dian/index.html","8bf76e8b0096169a6036825490df38ba"],["/2020/01/06/java-zhong-io-cao-zuo-zong-jie/index.html","9d375a0aca4e733e8f27e49f0e5b4072"],["/2020/01/06/spring-boot-cheng-xu-de-bu-shu-ji-yun-xing/index.html","e5ded77ce2030823ac2345de535015e9"],["/2020/01/09/nginx-zai-centos7-xia-de-an-zhuang/index.html","f296105dda832d3ce23debff096b6e99"],["/2020/01/28/css-ji-ben-yang-shi/index.html","49df8a590694f7b9483dc5adbbe6a430"],["/2020/03/22/ubuntu-an-zhuang-redis/index.html","9bf11f3163729ba27f1589957acfa629"],["/3d/index.html","04a983c98d3a28e57fd1979da043c3ba"],["/about/index.html","b6421cb2a93762ab2a2f0152717a73bb"],["/archives/2019/11/index.html","6cecad3a5945482f2ba1d73d8955e0a8"],["/archives/2019/12/index.html","117f05051518fa086b533d017221b88a"],["/archives/2019/index.html","86733c62b6ac9901050d49a46f26cd77"],["/archives/2019/page/2/index.html","208e04adba394cfd7ab46d87322fa32a"],["/archives/2020/01/index.html","5df24f08046d27136adcc8b2b44790c8"],["/archives/2020/03/index.html","84b47c18bacf84b94cc83d9662cacbc0"],["/archives/2020/index.html","0b21ed9aafe67750c041146aaff81afe"],["/archives/index.html","4cb24a643dc6dd74eb4f307520ac7956"],["/archives/page/2/index.html","b9ab0240de193f6ee56bc7a002d4a99c"],["/categories/index.html","462c5df729fcadf176c079999e64aa05"],["/categories/工具/index.html","6c7abbc2e95967bdf599ec9c80c71fb1"],["/categories/影视/index.html","a6bb39c667bd69b9a250a3a3ee63b7e9"],["/categories/生活/index.html","bf6bf0059ad0f2fef0efad24374207e4"],["/categories/相册/index.html","4b2059c59262dfe94142f22170bcc0ce"],["/categories/编程/index.html","90aafaea24a75de4bca108f6281742f2"],["/categories/编程/page/2/index.html","4c7c30d59d949f3230b7673f26c79296"],["/categories/视频/index.html","634ae2e5217c3a55b89cbf1fd4e43daa"],["/categories/随笔/index.html","66b958651bdafb237d5f8b531c862f44"],["/contact/index.html","9366ad52baa1e9cddb29f521605a3967"],["/css/gallery.css","d691e475c5bda53b7064883e403b2444"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","60fd45e90246e8abc5e8575741b6b11b"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","d4e3e60cbbcb2e298759a22c55bf6731"],["/css/prism-line-numbers.css","6d55b3b7e8c3e6e8adbf17eca03788ef"],["/css/prism-tomorrow.css","6f7952b20c3a712c5cd521cf6cba59ce"],["/favicon.png","0892ddc67dce2bd9f5c1283e608c97a0"],["/friends/index.html","5367359717edea0766a7d70d00faf221"],["/galleries/2017/index.html","162b3673bbd53a1a4343d4d116ccf442"],["/galleries/2018/index.html","31e8bf883fb1c6d81ff77769b1132aca"],["/galleries/2019/index.html","da098de018ac0c90a6d1258fbce86b40"],["/galleries/2020/index.html","05958ee3ecb5b11d59ff059d67e8a5d7"],["/galleries/index.html","94c0dbfb195e000a98d15f86c5338e06"],["/google1e722b81cee0b746.html","58721b229a22c477f4e34e9cb7de50df"],["/images/1.jpg","bd24c65ec4f52591f4538dce3803fd83"],["/index.html","eff4c7df3bbbd0966afa70c223bcebac"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","a00e0d8db06b1b808786c435f4792a4b"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","0cb1b8af9950584b5cc8e8250e045508"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3c3ee463702a1f1a74a8d7ba36f16f3e"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/libs/others/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/libs/others/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/libs/others/text.js","679220e951b697a81e71f3f694cccae6"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","11f1b83bfa2973cab7fe30d3f4bb278f"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","2052fd3214a4811e5655944cb6679f5e"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/medias/logo.png","daa6562a12904e7b91f50faf45a0fde4"],["/medias/music/avatars/daoshu.jpg","b735d01046ca492204f8033a7ea685c8"],["/medias/music/avatars/leg.jpg","f67ad39e3cf39b54633c20584b6d8567"],["/medias/music/avatars/tiantangdemogui.jpg","b2dd70519b7c8fcf90128f100a5e307b"],["/medias/music/avatars/yequ.jpg","fd4409d16d8862d85cc777111dd9b064"],["/medias/music/avatars/yiluxiangbei.jpg","e50a6bf9b4735673931f851143e42700"],["/medias/reward/alipay.jpg","dc4c84eb7c0789788d1a3e006392f357"],["/medias/reward/wechat.png","b3c7e5f4445ff6d548855a9fa1afcab3"],["/page/2/index.html","231156ad0a1bfe72a017c8ac2557b9e1"],["/sw-register.js","7aa35cbd935eab08ecf3279728605f3f"],["/tags/GitHub/index.html","5b03b96f7b16ff1a76280c11b7de37bd"],["/tags/Java/index.html","0b9aa9e522b773a40e8f3b12dc34e807"],["/tags/Spring-boot/index.html","e3769c9cf5ee52df12f0277e24acc4e6"],["/tags/VPS/index.html","a851cb6ee4ffb1c313e48219aa8c67bd"],["/tags/css/index.html","84c82375946b8803e9dbdc078a3346c8"],["/tags/git/index.html","b426e200866529aed45aaac2e607cd53"],["/tags/html/index.html","868155bacb87ff449da5f4b97504dc49"],["/tags/index.html","00bca6e3d33a9e93c0cd3325ab4344d3"],["/tags/mysql/index.html","e39a95a066e4c94f8e136c35aa882a27"],["/tags/nginx/index.html","7f586e4dc3289362e8d27e2271175f00"],["/tags/redis/index.html","97c3747445aa9b225d9d19f894cfaa54"],["/tags/shell/index.html","b61df366eb284cba9040f4b0e8e1f27f"],["/tags/ubuntu/index.html","8e314d8485e7672145fee2b42126b149"],["/tags/刑事案件/index.html","e9a410e27eafcfae3765c83c03a0c972"],["/tags/工具/index.html","02b811204fe60a5eb89a80a83de40786"],["/tags/影视/index.html","2f9627c36a3e6da9682b685932620441"],["/tags/生活/index.html","2bb821692555cfbf8a91be6218334244"],["/tags/相册/index.html","0309d45a367ebfa73545fae1746bb0c1"],["/tags/视频/index.html","1fef05ee4ba0a9e7eaf6790f91ca30a2"],["/tags/随笔/index.html","51d1f80d6effd93f8f412e58393cbd31"],["/tags/韩剧/index.html","47f2740823e9b7fc6b325c03dd627a3b"]];
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
