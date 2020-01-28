/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/11/03/2019/1.jpg","4db9139bfe36e70edb38f1af5381a755"],["/2019/11/03/2019/2.jpg","588fff6aca166d8a29b0f2d3b28b562b"],["/2019/11/03/2019/3.jpg","a9f3c3e7a4b668f57bc50cea6d806a61"],["/2019/11/03/2019/index.html","785caac9a908d8788acd81ada2d5984d"],["/2019/11/03/ssm-kuang-jia-liu-cheng/1.jpg","e540214f457567c22adf9250b7b92d8e"],["/2019/11/03/ssm-kuang-jia-liu-cheng/2.jpg","2bab214c77da4dc14a11fe0b0aef467f"],["/2019/11/03/ssm-kuang-jia-liu-cheng/3.jpg","a100a7acba5bfb451d898ec708a9e0bb"],["/2019/11/03/ssm-kuang-jia-liu-cheng/4.jpg","afced8d7ae51f00b8620316664fcfa19"],["/2019/11/03/ssm-kuang-jia-liu-cheng/index.html","90b237cc86aa7b395f76eb7f8f69469c"],["/2019/11/04/vps-de-da-jian/index.html","1029d615e0aa6ab21fd26ef3f8cf33b2"],["/2019/11/10/java-pa-qu-tu-pian-shi-li/1.png","dc364784c72cad02e22ab962cffcc50a"],["/2019/11/10/java-pa-qu-tu-pian-shi-li/2.jpg","50cdef29c201a09d138600293f855106"],["/2019/11/10/java-pa-qu-tu-pian-shi-li/3.jpg","168e5f5cb37a3133ef19fceb2ee092c6"],["/2019/11/10/java-pa-qu-tu-pian-shi-li/4.jpg","7f5c2de20fca08a41e184a7b21d6e564"],["/2019/11/10/java-pa-qu-tu-pian-shi-li/5.jpg","8395a6d4cb1dd50f4ccbd4b453e1b7ea"],["/2019/11/10/java-pa-qu-tu-pian-shi-li/index.html","0eaab47b531fd1bde4263119313a6f04"],["/2019/11/12/java-zhong-shi-yong-hssfworkbook-sheng-cheng-excel/1.jpg","5870810798f7d6c8d19b7583c7f0894a"],["/2019/11/12/java-zhong-shi-yong-hssfworkbook-sheng-cheng-excel/2.jpg","8bbe64a5cde676fcd9b0e5f78d332417"],["/2019/11/12/java-zhong-shi-yong-hssfworkbook-sheng-cheng-excel/3.jpg","2ec14dd336dddb52478afc13826bcb87"],["/2019/11/12/java-zhong-shi-yong-hssfworkbook-sheng-cheng-excel/4.jpg","e4fc632500c19107b87d1b4e5c684af6"],["/2019/11/12/java-zhong-shi-yong-hssfworkbook-sheng-cheng-excel/index.html","a09bbe598dd78aad4a1a9a5af311eb62"],["/2019/11/26/mysql-yue-shu/index.html","e259edfade321ed98685adcde24874dc"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/1.jpg","179ce6a3ef866ad38ab9c5095afbe3c7"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/10.jpg","2c8b24305e9e48df80c0e1c777f1bf3f"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/11.jpg","e241d865f274e07e1f8da479cde005fd"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/12.jpg","6b57b086afa07ecc56fe9d8909cc855d"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/13.jpg","6936fa71afcd6d3600719b0d177c6675"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/14.jpg","af62d621db1b4dc294f86d9cef15f198"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/15.jpg","3173b34805f92b203916a4b5107bfdbe"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/16.jpg","d259a30d8a71dab6391d4044e6176f4a"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/17.jpg","bafe84e3676d7a92be2e94cb1a483469"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/18.jpg","5a9828fe5354f110cffe1986c8efdf7f"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/2.jpg","e85795e17297af9a6c901806834e865d"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/3.jpg","f79361628b7f0aaa1f88f635609b356f"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/4.jpg","0b2255fea650c53591d01cbcaee99659"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/5.jpg","6d7d285a4c3e8b841c703a6082770fb0"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/6.jpg","ba65771ff22aa5ab1f234ea608931128"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/7.jpg","a34b8bc712c568cb9b148058f8d7d767"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/8.jpg","417f58c36c7dd3ffc84ab06b092eebc9"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/9.jpg","68cd32eec520237a634f734f54cc1854"],["/2019/12/09/ji-mao-fei-shang-tian-guan-hou-gan/index.html","30270c1a1be57a3c5e345a0562400858"],["/2019/12/13/mybatis-zhong-resultmap-de-shi-yong/1.png","2970b11f3411217bd17666d39edeb9fd"],["/2019/12/13/mybatis-zhong-resultmap-de-shi-yong/2.png","ed0931a8133687e756d9e0b96a7bf2c6"],["/2019/12/13/mybatis-zhong-resultmap-de-shi-yong/index.html","336a41d7ee1b85525152f7c4cad716f1"],["/2019/12/13/mysql-hong-fa-qi/1.jpg","b902709032aa7d7cb023204139c9dfaa"],["/2019/12/13/mysql-hong-fa-qi/index.html","e8a080c85fd08747ae745b66cb6ddfe8"],["/2019/12/13/zhang-wo-jian-dan-de-git-ming-ling/index.html","b0d65b2ab29d4e7ee04c02efdbd3f7fb"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/7号房的礼物.jpg","cd0c9d1648c38d8015b51cbd1b8b3634"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/index.html","84c7ac92cff3db360d9ff7057ee20ca4"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/一对一.jpg","7ceaf5a9c4286db02e691926ee2ade4f"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/不可饶恕.jpg","4c3a7f42b61ef177fe45fae14c44f9fd"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/亲切的金子.jpg","411eed2ddc55208a033098dc4692f777"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/共谋者.jpg","19c44a8f23f8d58248c32a9fa0c49761"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/再审.jpg","29a23ee033463c724271712174fd1649"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/北逃.jpg","cc7430f480042c84acfad2543731d298"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/卑劣的街头.jpg","6ccd1d7e2de097509eae4b10a596c26d"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/向日葵.jpg","6c87834444d2456e7faa121118df6e23"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/回家的路.jpg","fb0dc19036f994da1fe02456741dea75"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/圣殇.jpg","058712b043adffe1d7ae9c5f698e1ebd"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/坏家伙们2019.jpg","ba0005af805ec1f40b03f4baadd8715a"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/奇怪的她.jpg","215cc87cb3cac4a0c3fc60040a9b99e1"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/奸臣.jpg","fdb639b79cbf6c84d3e0bb4028a4a56e"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/孤胆特工.jpg","0ded0f9b9200239fa81042e48dae021a"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/孩子们.jpg","5a372b2ea2b83c073728c4b3145af7fc"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/实尾岛.jpg","e92d3224f43332eee8ac6cc8ff3bff72"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/寄生虫.jpg","197092f15814053e33c9620a3ffedd7f"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/小姐.jpg","8578ac19c8cd0240723699c41e6ef7b6"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/局内人.jpg","70246657acd516cda52073efd6bce992"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/恐怖直播.jpg","cb521d6e6c507f2bc4ee0e2fd04f2677"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/恶人传.jpg","ec619cf38e6842b6b65d3ea7493e968d"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/收件人.jpg","3769901d7b2e6e4c09024cd52d855beb"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/新世界.jpg","bdebd6a14794111e5dda5e591861b10e"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/春夏秋冬又一春.jpg","42832b47a7ae2fb861150582aa0283c1"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/暴力圈.jpg","f3df742a4078026ae95a89252bc8efa8"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/杀人回忆.jpg","d6038ebcbe8cfcc3e18403ef6ba13e75"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/检察官外传.jpg","f2c1e40c41bd41b786be19909a2f28df"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/法外之徒.jpg","b51440bbdc1d91b1ac428cb84f9df1a2"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/流感.jpg","004daa61ea19a337bd02348336aeb2a6"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/海雾.jpg","b6bced6887b5190cb360f9dcec33b85a"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/熔炉.jpg","c677c30836f74cfb00f184f556ac8976"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/燃烧.jpg","49721387827f7dff6228332c77758ae2"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/犯罪都市.jpg","de9c1eac539b4679f9b1fc8191cc1ef7"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/狩猎.jpg","771b8ca03c95488003af07f36fcdaee3"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/狼少年.jpg","4830f2b48e5d31043206e43a74e43a5a"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/盗贼同盟.jpg","cd114a2a7c0ee32d8186ed3ae3c4ee01"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/看见恶魔.jpg","1498b65cfe092fdb3c944f5940802d62"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/素媛.jpg","077b1e749eea77536c50e62c34088ec6"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/老千.jpg","22844d2e3d96b09871a4c71b0566c9c4"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/老手.jpg","c00e7c61955b3d0fb08c23d8770b1f6e"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/老男孩.jpg","f34010055731e7e5c4c518e3b056b205"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/苔藓.jpg","8b4e46bae2e8f087966c609ed8735712"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/蒙太奇.jpg","857b63ab4ae5d03e8ca5bc9eb33fdcf7"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/蚯蚓.jpg","d2686bca42be5ae3414e9d3e809e858b"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/负罪少女.jpg","deff7c5c7c14c056e457fed4d5d4f3f3"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/走到尽头.jpg","6436fee85ac566f0d3c9ce51a9528413"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/辩护人.jpg","4782c7876be1ee7a6f274ceb953f0a20"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/追击者.jpg","9e475d3897a5ebc58addb0f3b44ceeb4"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/那家伙的声音.jpg","d762b9e784fd85adffe79232b638d441"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/野兽.jpg","ac400a43e44c484c2e01aa781b700c82"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/金氏漂流记.jpg","8147f1ccb7d73ec7db622ba1aea810b7"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/金福南杀人事件始末.jpg","bf78cd606cf8275ae2a7b2a45c33ae5f"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/陷阱.jpg","04ec06e618be83648515db569db44edc"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/隐秘而伟大.jpg","7169894edc2298f847149094693b1231"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/隧道.jpg","3c9c2d1269f1e9facffc77ee2a97881b"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/雪国列车.jpg","206f4212619c13695708d73c338f683d"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/魔女.jpg","cbc3c80d66646959a650ca2921377221"],["/2019/12/16/han-guo-gao-fen-dian-ying-tui-jian/黄海.jpg","543031d24468668fe393c39a518e7395"],["/2019/12/18/3d-xiang-ce-shi-li/1.jpg","66899de2a5f66eea6e1a6f6cab4e1523"],["/2019/12/18/3d-xiang-ce-shi-li/2.jpg","3310c5acf1929167fce07917cf530399"],["/2019/12/18/3d-xiang-ce-shi-li/3.jpg","b69ad506e1c50779817258504a81e5b8"],["/2019/12/18/3d-xiang-ce-shi-li/4.jpg","b735d01046ca492204f8033a7ea685c8"],["/2019/12/18/3d-xiang-ce-shi-li/5.jpg","88cbd200acf21482d960560bf0008afc"],["/2019/12/18/3d-xiang-ce-shi-li/6.jpg","62ccd02bd679892f4df520851976b8dc"],["/2019/12/18/3d-xiang-ce-shi-li/7.jpg","b2a314d06947e54a2495cfee82c39d8f"],["/2019/12/18/3d-xiang-ce-shi-li/8.jpg","dd73c973a3f3b87ca169f1efc8aa8eee"],["/2019/12/18/3d-xiang-ce-shi-li/9.jpg","5d2b2948024f087c338d30a9f420723d"],["/2019/12/18/3d-xiang-ce-shi-li/index.html","ae3018ee83fbf05b2a22009f88b602d9"],["/2019/12/18/geng-hao-di-shi-yong-google/index.html","4bf05a83e5d331faf2d63abddc634f57"],["/2019/12/30/github-shang-chuan-da-wen-jian/index.html","b7ff3a363ed47f91b2d9d7429485aac8"],["/2020/01/04/guo-nei-zhen-shi-xing-shi-an-jian/index.html","999aaa316a9d5c16cfd6547aa692b023"],["/2020/01/05/shell-zhi-shi-dian/index.html","99dd1aaf56ea3e75e0efdd3f726c5003"],["/2020/01/06/java-zhong-io-cao-zuo-zong-jie/index.html","3a5eaafd1f2fa76efba0ec133880500a"],["/2020/01/06/spring-boot-cheng-xu-de-bu-shu-ji-yun-xing/index.html","0b418044d21dc0ea08614f994df3e8b6"],["/2020/01/09/nginx-zai-centos7-xia-de-an-zhuang/index.html","e9fc74a4c7f617d89e381872ab1428e3"],["/3d/index.html","edecc8d7e9f5ff1feefdd7ab52c581ca"],["/about/index.html","b58fefda23475213fcd4aaa396535c07"],["/archives/2019/11/index.html","dd3ad1b34bc67b690b14d741c66738c4"],["/archives/2019/12/index.html","1c2aa3f928183fa0a5ae7b8332ae17bc"],["/archives/2019/index.html","1414ee6c391532c22e2d7c06a0e33bff"],["/archives/2019/page/2/index.html","09213e82d98c6fb9db92a439e2237727"],["/archives/2020/01/index.html","41d7871d8162f6afe07f475281297725"],["/archives/2020/index.html","c79a74a5e8f2f70cea4f28978c83abb4"],["/archives/index.html","8266a1a3b047aaf249e359c8c54e20d4"],["/archives/page/2/index.html","4ddc5091f3dfc803d7bbb17a670385e3"],["/categories/index.html","f9ce23f806b9194c0b720b6891826cdd"],["/categories/工具/index.html","8b571d264934fee52ac64b88564b63b8"],["/categories/影视/index.html","83e24eb7a937a6e02e85e44fc3e919c0"],["/categories/生活/index.html","e62fd6cbf4b43156c7e2f0bb74b077ae"],["/categories/相册/index.html","4d456e5419dc1918dd292619f238268d"],["/categories/编程/index.html","fa95ef28c47cc716bc244f4d0b896b09"],["/categories/视频/index.html","a8aa17347da8058fdd350e8fc6004805"],["/categories/随笔/index.html","5a8922b95f259c661e705a501ba03ad4"],["/contact/index.html","0eae67dda2329cc6fd06fde4bd7e5664"],["/css/gallery.css","d691e475c5bda53b7064883e403b2444"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","60fd45e90246e8abc5e8575741b6b11b"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","d4e3e60cbbcb2e298759a22c55bf6731"],["/css/prism-line-numbers.css","6d55b3b7e8c3e6e8adbf17eca03788ef"],["/css/prism-tomorrow.css","6f7952b20c3a712c5cd521cf6cba59ce"],["/favicon.png","0892ddc67dce2bd9f5c1283e608c97a0"],["/friends/index.html","a661aa20a59f8b7ac49c0c213e7db4df"],["/galleries/2017/index.html","cae3b8c20ef8b20ad8e41c358828b5c9"],["/galleries/2018/index.html","6e7f31c76099d7b4a978ba98f5d4a6b1"],["/galleries/2019/index.html","226a94ba98a731f813b406f4c7770f30"],["/galleries/index.html","9f71c1f8b16380d3af2294ed0fe4ca63"],["/google1e722b81cee0b746.html","6efb3a64a97e1108dcdced850723e989"],["/images/1.jpg","bd24c65ec4f52591f4538dce3803fd83"],["/index.html","9635fec7d70f4f79b8d3e6ff45b9ec56"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","a00e0d8db06b1b808786c435f4792a4b"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","0cb1b8af9950584b5cc8e8250e045508"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3c3ee463702a1f1a74a8d7ba36f16f3e"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/libs/others/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/libs/others/snow.js","ecb7e27accae76aa79fbdb1817fcd032"],["/libs/others/text.js","679220e951b697a81e71f3f694cccae6"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","11f1b83bfa2973cab7fe30d3f4bb278f"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","2052fd3214a4811e5655944cb6679f5e"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/medias/logo.png","daa6562a12904e7b91f50faf45a0fde4"],["/medias/music/avatars/daoshu.jpg","b735d01046ca492204f8033a7ea685c8"],["/medias/music/avatars/leg.jpg","f67ad39e3cf39b54633c20584b6d8567"],["/medias/music/avatars/tiantangdemogui.jpg","b2dd70519b7c8fcf90128f100a5e307b"],["/medias/music/avatars/yequ.jpg","fd4409d16d8862d85cc777111dd9b064"],["/medias/music/avatars/yiluxiangbei.jpg","e50a6bf9b4735673931f851143e42700"],["/medias/reward/alipay.jpg","dc4c84eb7c0789788d1a3e006392f357"],["/medias/reward/wechat.png","b3c7e5f4445ff6d548855a9fa1afcab3"],["/page/2/index.html","1b15dc679563a62a195c9cfa662a23d9"],["/sw-register.js","955ea2bc76893e2ff3798d93a9e4dfe4"],["/tags/GitHub/index.html","e9f099d0e15b7d0cf0e65c599cfccd44"],["/tags/Java/index.html","787bfdb919f56698143750b55efa46e0"],["/tags/Spring-boot/index.html","4ce0d4e29183ccf3d5af63d4f168406f"],["/tags/VPS/index.html","6717eb187d75933c1f52dc46b1b26120"],["/tags/git/index.html","75ce3e7f1714b0d8ca219fa8d803a31c"],["/tags/index.html","7ddebb6c8e834e43a52d7c2534d0daad"],["/tags/mysql/index.html","2056ef184c7b9fe03a16cba0168d14cc"],["/tags/nginx/index.html","2ef42154124f891adbdd4119f81edb5d"],["/tags/shell/index.html","d4314158a339c7bd3e31a065d1947e98"],["/tags/刑事案件/index.html","176473e48bc1d04a2636fc1b91d683da"],["/tags/工具/index.html","e2e7c32146fe079d83d1990c5693bc96"],["/tags/影视/index.html","dd4748da7bc20b12905900363374aa45"],["/tags/生活/index.html","76f35d469fe5fa8586d76112fa70beb6"],["/tags/相册/index.html","3ab1cb99e7d697e4818eaa59b36155f6"],["/tags/视频/index.html","0ea2e0c149c01b416034b5d5147e1bf5"],["/tags/随笔/index.html","66a39b8ae2d30d69d7d77852fee4ac2d"],["/tags/韩剧/index.html","70b1b16585eb5e460238f1a2790c2d22"]];
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
