# 最近展会

:::tip

接口返回的图片地址已经经过优化压缩，且默认返回 jpg 格式，尽管如此部分图片的体积依然十分恐怖，请根据自身需求缓存后裁剪并优化体积（有的展会宣传图单张体积可超过 10MB+）。

:::

调用此接口可以获取最近 30 天内的展会信息。

支持以下参数：

- `keepOld`：当此值为 `true` 时，如果最近 30 天内没有数据，会返回过期的数据作为填充。

```
https://api.furrycons.cn/open/event/recent
```

预计响应：

```json
{
  "total": 1,
  "current": 1,
  "pageSize": 10,
  "data": [
    {
      "id": "0c55f1b6-0411-4f21-9244-95ca5268f10e",
      "name": "乘风启航",
      "scale": "medium",
      "status": "scheduled",
      "slug": "2026-mar-wuhan-con",
      "startDate": "2026-03-06T02:00:00.000Z",
      "endDate": "2026-03-08T10:00:00.000Z",
      "address": "天河机场皇冠假日及假日酒店",
      "region": "武汉",
      "thumbnail": "https://images.furrycons.cn/organizations/wumeng/2026-mar-wuhan-con/cover-TkBWL2OJkeFPd5A0xWbt4.png",
      "detail": "\n✈️准备好了吗？让我们一起乘风启航！✈️\n从「武萌汇」的温暖回忆，到「毛了个毛」的全新启程—— \n以毛相聚，以热爱为翼，共赴一场崭新的旅程！\n\n⏰活动时间：2026.3.6-3.8⏰\n📍活动地点：武汉天河机场皇冠假日及假日酒店📍\n\n🔶展会信息丨❤️嘉宾信息丨✏️签绘画师丨💳展商信息丨🎫票务情报 公布中～\n\n🏠酒店房间套票全新升级！基础通行证、赞助通行证可自由搭配各房型，灵活组合由你选择～\n🎫开票时间：2026年1月11日20:00🎫\n\n📖Staff、舞台、摊位、官方摄影师、签绘画师、毛毛大讲堂以及工作室合照申请表单填写现已开放。毛毛已经准备好啦，在这里等你！\n\n官方交流群：784051168\n\n联系邮箱：contact@fur-fur.cn\n\n🎊毛毛在这里祝大家周末快乐，三月我们不见不散！🎊",
      "organization": {
        "name": "毛了个毛FurFurFusion",
        "slug": "wumeng",
        "logoUrl": "https://images.furrycons.cn/organizations/wumeng/logo-pg0G5WXzFfCOhFRG3ZQtU.png",
        "url": "https://www.furrycons.cn/wumeng"
      },
      "url": "https://www.furrycons.cn/wumeng/2026-mar-wuhan-con"
    }
  ]
}
```
