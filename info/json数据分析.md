# 首页

### http://apiv2.yangkeduo.com/goods
```
image_url: 750 x 352
is_app:
event_type:
logo:商家图片
{  
   "goods_list":[  
      {  
         "goods_id":"40231",
         "goods_name":"【意大利进口】15.9元 monarc原装进口巧克力夹心饼干300g*2袋【活动秒杀17：00开始 限量1500份】",
         "image_url":"http://omsproduction.b0.upaiyun.com/goods/a7c6491cdb816eac97a3f56bce35da370a09fc5d0f.jpg",
         "market_price":"3190",
         "is_app":"0",
         "event_type":"2",
         "list_desc":"["创造出无法停止的美味"]",
         "group":{  
            "price":"1590",
            "customer_num":"2"
         },
         "logo":"http://omsproduction.b0.upaiyun.com/goods/5fdee5a68b/310/310/7f2827db1f1eb00017ce3f013e93ad37.jpg",
         "mall_id":"745"
      }
   ]
　　"home_recommended_subjects:[] //没看到展示地方
　　"mobile_app_groups":[]//没看到展示地方
}
```

### http://apiv2.yangkeduo.com/subjects
```
首页slide图片
subject代表产品的一个大的总类，下面还有细分的各个goods
subject:图片名称，手机端没有显示
second_name: 一直为空
position:显示位置
home_banner: 640 X 352
[
   {
      "subject_id":"294",
      "subject":"心动无比的特卖会",
      "second_name":"",
      "desc":"家装家电特卖会",
      "home_banner":"http://omsproduction.b0.upaiyun.com/goods/e1a3a07e15/640/352/efd2215d9dbd7ab8ea9a6edb23010fb0.jpg",
      "type":"home",
      "position":"0",
      "share_image":""
   }
]
```

# 具体subject页

### http://apiv2.yangkeduo.com/v2/subject/294/goods

```
subject图片是640 X 352，没有slide
多两个thumb_url 和 hd_thumb_url，没有些显示
image_url: 750 x 352
thumb_url:　200 X 200 显示在秒杀页和其他搜索，category页

{  
   "goods_list":[  
      {  
         "goods_id":"35667",
         "goods_name":"79\u5143 \u6a31\u82b1\u4e94\u53f6\u9ed1\/\u767d2\u8272\u9759\u97f3\u843d\u5730\u6247 \u7535\u98ce\u6247",
         "is_app":"0",
         "event_type":"0",
         "thumb_url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/a761914f974c5ca208f10eb93cf61389cb64c947b5.jpg",
         "hd_thumb_url":"",
         "market_price":"19900",
         "image_url":"http://omsproduction.b0.upaiyun.com/goods/a761914f9724cd4256b6da08ebf9d926e71a1f87ae.jpg",
         "list_desc":"[\"\\u4e24\\u6b3e\\u989c\\u8272 \\u968f\\u5fc3\\u9009\\u62e9\",\"\\u4e09\\u79cd\\u5206\\u7c7b \\u4e09\\u79cd\\u98ce\\u6247\",\"\\u5e7f\\u89d2\\u9001\\u98ce \\u6e05\\u51c9\\u65e0\\u6b7b\\u89d2\"]",
         "mall_id":"1731",
         "logo":"http:\/\/testpdd.b0.upaiyun.com\/goods\/d41d8cd98f97a0d8e68ce4dc9a58780832a8bba641.jpg",
         "group":{  
            "price":"7900",
            "customer_num":"2"
         }
      }
   ]
}
```

# 具体产品页

** gallery中存放slide图片和产品描述图片，slide图片大小为640 X 400, 产品描述图片只要求宽度640, 无法从gallery中得知从那个地方开始是产品描述图片 **

```
{  
   "goods_id":"42915",
   "cat_id":"2284",
   "mall_id":"1158",
   "goods_name":"99元【多样屋限量400组】杯耐热玻璃水具组 一壶四杯",
   "is_app":"0",
   "event_type":"5",
   "goods_desc":"采用优质高硼硅玻璃，对极冷极热温度的变化性能强，可适应瞬间温度-20℃ ~150℃，可用于明火加热、适用于酒精火炉、蜡烛。茶隔做工精细体现高品质生活。把手双重弧度设计，结实美观，舒适不烫手。手工吹制杯身，杯口圆润光滑，做工精致，质量保证。",
   "is_onsale":"1",
   "thumb_url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15c32d645252deee8de0c2d17a918cf7e2.jpg",
   "allowed_region":"2,3,4,6,7,8,10,11,12,13,14,15,16,17,18,22,23,24,25,26,27,30,31,32",
   "country":"",
   "warehouse":"",
   "goods_type":"1",
   "image_url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15734b97351640a5b7e5fc1ee4769d2511.jpg",
   "is_refundable":"1",
   "is_pre_sale":"0",
   "pre_sale_time":"0",
   "share_desc":"",
   "cat_id_1":"282",
   "cat_id_2":"287",
   "cat_id_3":"2284",
   "skip_goods":"0",
   "sku":[  
      {  
         "sku_id":"176645",
         "goods_id":"42915",
         "thumb_url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15b6bc1b3eed9dbbe007fff493e2e38d97.jpg",
         "quantity":"25",
         "limit_quantity":"0",
         "sold_quantity":"75",
         "init_quantity":"0",
         "is_onsale":"1",
         "spec":"41807",
         "specs":[  
            {  
               "spec_key":"\u54c1\u540d",
               "spec_value":"PinkLady\u73bb\u7483\u6c34\u5177\u7ec4"
            }
         ]
      },
      {  
         "sku_id":"176646",
         "goods_id":"42915",
         "thumb_url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e158f3cf871650cbf0d1a0a3ba7dd0ff227.jpg",
         "quantity":"92",
         "limit_quantity":"0",
         "sold_quantity":"8",
         "init_quantity":"0",
         "is_onsale":"1",
         "spec":"41809",
         "specs":[  
            {  
               "spec_key":"\u54c1\u540d",
               "spec_value":"\u609f\u7a7a\u597d\u8fd0\u73bb\u7483\u6c34\u5177\u7ec4"
            }
         ]
      },
      {  
         "sku_id":"179485",
         "goods_id":"42915",
         "thumb_url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e155a0c315f348a5466ab3296fb5d7a4388.jpg",
         "quantity":"91",
         "limit_quantity":"0",
         "sold_quantity":"9",
         "init_quantity":"0",
         "is_onsale":"1",
         "spec":"42925",
         "specs":[  
            {  
               "spec_key":"\u54c1\u540d",
               "spec_value":"\u65e5\u5f0f\u8336\u5177\u7ec4\uff08\u767d\u8272\uff09"
            }
         ]
      },
      {  
         "sku_id":"179486",
         "goods_id":"42915",
         "thumb_url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e1550ecc7dbe02771afd3e583604f02f5bd.jpg",
         "quantity":"94",
         "limit_quantity":"0",
         "sold_quantity":"6",
         "init_quantity":"0",
         "is_onsale":"1",
         "spec":"42926",
         "specs":[  
            {  
               "spec_key":"\u54c1\u540d",
               "spec_value":"\u65e5\u5f0f\u8336\u5177\u7ec4\uff08\u7eff\u8272\uff09"
            }
         ]
      }
   ],
   "gallery":[  
      {  
         "id":"425294",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15ddb88d5f7d0d894b94456ded60ada095.jpg",
         "width":"640",
         "height":"412",
         "priority":"33",
         "type":"2"
      },
      {  
         "id":"425293",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15101d43bff4ae66a9c96a80c0a66fabed.jpg",
         "width":"640",
         "height":"600",
         "priority":"32",
         "type":"2"
      },
      {  
         "id":"425292",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e154a9d3d00b39b9df1988809799da4d62e.jpg",
         "width":"640",
         "height":"600",
         "priority":"31",
         "type":"2"
      },
      {  
         "id":"425291",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e1580c2cf118d8311c7cf1beb67512e6d69.jpg",
         "width":"640",
         "height":"600",
         "priority":"30",
         "type":"2"
      },
      {  
         "id":"425290",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15253780b636b41491387e3864cd38ec63.jpg",
         "width":"640",
         "height":"600",
         "priority":"29",
         "type":"2"
      },
      {  
         "id":"425289",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e156c8b56f353f1924a72a77c3328c74077.jpg",
         "width":"640",
         "height":"600",
         "priority":"28",
         "type":"2"
      },
      {  
         "id":"425288",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e1577f103f160254f889d9dd38f4c6d126f.jpg",
         "width":"640",
         "height":"600",
         "priority":"27",
         "type":"2"
      },
      {  
         "id":"425287",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15286666fd8c815b3ef6f24467ea02660e.jpg",
         "width":"640",
         "height":"600",
         "priority":"26",
         "type":"2"
      },
      {  
         "id":"425286",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e1513e195b2c3b834fc87d32be668585b01.jpg",
         "width":"640",
         "height":"600",
         "priority":"25",
         "type":"2"
      },
      {  
         "id":"425285",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15edb79bc3fdc20dfbed16458839f43a8c.jpg",
         "width":"640",
         "height":"825",
         "priority":"24",
         "type":"2"
      },
      {  
         "id":"425284",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e1573db19a334370e2e572ea3e920e3a1fb.jpg",
         "width":"640",
         "height":"700",
         "priority":"23",
         "type":"2"
      },
      {  
         "id":"425283",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15779f955f434c956bc36d5b7892cbec24.jpg",
         "width":"640",
         "height":"700",
         "priority":"22",
         "type":"2"
      },
      {  
         "id":"425282",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e154295d90308f9677a65ee7b359519553c.jpg",
         "width":"640",
         "height":"700",
         "priority":"21",
         "type":"2"
      },
      {  
         "id":"425281",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e159101e025c244d15f907f546a8de1d3a2.jpg",
         "width":"640",
         "height":"700",
         "priority":"20",
         "type":"2"
      },
      {  
         "id":"425280",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e151bc8adf23d2b83eae61d042a263041a4.jpg",
         "width":"640",
         "height":"700",
         "priority":"19",
         "type":"2"
      },
      {  
         "id":"425279",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15cbc0158037f9052073d18137c4744609.jpg",
         "width":"640",
         "height":"700",
         "priority":"18",
         "type":"2"
      },
      {  
         "id":"425278",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e151b6eb78fb97ef3c23e3028a70a16d003.jpg",
         "width":"640",
         "height":"700",
         "priority":"17",
         "type":"2"
      },
      {  
         "id":"425277",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e1553bf2499c9a3d35a7357b3127536a136.jpg",
         "width":"640",
         "height":"700",
         "priority":"16",
         "type":"2"
      },
      {  
         "id":"425276",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e1561b0af3899572202dceb7d59bacce9cc.jpg",
         "width":"640",
         "height":"700",
         "priority":"15",
         "type":"2"
      },
      {  
         "id":"425275",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15cf54f8b2258504929410560f7bd00657.jpg",
         "width":"640",
         "height":"600",
         "priority":"14",
         "type":"2"
      },
      {  
         "id":"425274",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15a05141cb466bfbb6200ea5571ffdf904.jpg",
         "width":"640",
         "height":"600",
         "priority":"13",
         "type":"2"
      },
      {  
         "id":"425273",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15a48af2766ba1c05cf6691f4932d1fdde.jpg",
         "width":"640",
         "height":"600",
         "priority":"12",
         "type":"2"
      },
      {  
         "id":"425272",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e1594504eb64db95194d438a885ae98118d.jpg",
         "width":"640",
         "height":"600",
         "priority":"11",
         "type":"2"
      },
      {  
         "id":"425271",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15426ab58bcdfd77103da3055145dfa466.jpg",
         "width":"640",
         "height":"600",
         "priority":"10",
         "type":"2"
      },
      {  
         "id":"425270",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15eccbceaf30d2d4445a998e948df1b0da.jpg",
         "width":"640",
         "height":"600",
         "priority":"9",
         "type":"2"
      },
      {  
         "id":"425269",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e1596f7281c4411f20592fb42fb434d1fa4.jpg",
         "width":"640",
         "height":"600",
         "priority":"8",
         "type":"2"
      },
      {  
         "id":"425268",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15d09ca59576663afce1030d1bc6ca0d14.jpg",
         "width":"640",
         "height":"400",
         "priority":"7",
         "type":"1"
      },
      {  
         "id":"425267",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15df2bdd48ffa09223eb1b875d71215bff.jpg",
         "width":"640",
         "height":"400",
         "priority":"6",
         "type":"1"
      },
      {  
         "id":"425266",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e1532fe9b0e523fecbf9fd8ad077ce965d9.jpg",
         "width":"640",
         "height":"400",
         "priority":"5",
         "type":"1"
      },
      {  
         "id":"419942",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e152812134d12c798c779628e57241613c3.jpg",
         "width":"640",
         "height":"400",
         "priority":"4",
         "type":"1"
      },
      {  
         "id":"419941",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15f7e5fa71224f0dba22ea3b9565c60916.jpg",
         "width":"640",
         "height":"400",
         "priority":"3",
         "type":"1"
      },
      {  
         "id":"419940",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15b53cc823b2f1049ce32ace895294bd76.jpg",
         "width":"640",
         "height":"400",
         "priority":"2",
         "type":"1"
      },
      {  
         "id":"419939",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e152377272c4c4507cf8ff7ea4f85dc6ba5.jpg",
         "width":"640",
         "height":"400",
         "priority":"1",
         "type":"1"
      },
      {  
         "id":"419938",
         "goods_id":"42915",
         "url":"http:\/\/omsproduction.b0.upaiyun.com\/goods\/e1a3a07e15a2e5af48abba6e16de6f79d528d83c43.jpg",
         "width":"640",
         "height":"400",
         "priority":"0",
         "type":"1"
      }
   ],
   "group":[  
      {  
         "id":"92514",
         "group_id":"92514",
         "goods_id":"42915",
         "price":"10900",
         "customer_num":"1",
         "start_time":"1460959200",
         "end_time":"1461340800",
         "duration":"86400",
         "buy_limit":"4",
         "order_limit":"3",
         "is_open":"1"
      },
      {  
         "id":"92515",
         "group_id":"92515",
         "goods_id":"42915",
         "price":"9900",
         "customer_num":"2",
         "start_time":"1460959200",
         "end_time":"1461340800",
         "duration":"86400",
         "buy_limit":"4",
         "order_limit":"3",
         "is_open":"1"
      }
   ],
   "local_group":[  
      "{\"group_order_id\":\"160421271169979\",\"goods_id\":\"42915\",\"city_name\":\"\\u957f\\u6c99\",\"nickname\":\"\\u747e\",\"avatar\":\"http:\\\/\\\/wx.qlogo.cn\\\/mmopen\\\/iauQL1D7ntnMjYAibn2l6Lu8gRV6jTuWWA6J9NBpFuKORKFSzF9lI3oUPKMZttopWXvz8ZAHPniaYkBUUibYMTqSjeLJQXboEEuF\\\/0\",\"expire_time\":\"1461281516\"}",
      "{\"group_order_id\":\"160421332424901\",\"goods_id\":\"42915\",\"city_name\":\"\\u5317\\u4eac\",\"nickname\":\"\\u79c0\\u51e4\",\"avatar\":\"http:\\\/\\\/wx.qlogo.cn\\\/mmopen\\\/giajgKkJGkbLY8icRdknzYJdrXcgysMM40xbTz47tMIkAGoFlXNmiaCBZqSLPFNberZTTEITIsfwMraxDSodUDNnmIjn8lHP6KZ\\\/0\",\"expire_time\":\"1461287642\"}"
   ],
   "server_time":1461201273,
   "sales":"98",
   "gpv":1
}
```
