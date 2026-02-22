# 最近展会-已废弃

:::warning

此接口属于遗留接口，不推荐在新业务中使用，可能随时发生中断且不会收到维护通知。

此接口已不会再添加任何新字段。

请使用[【新】最近展会](/docs/api/event/recent) 或 [展会列表](/docs/api/event/list) 接口替代。

:::

:::info

无需携带鉴权信息。

:::

:::tip

接口返回的图片地址已经经过优化压缩，且默认返回 jpg 格式，尽管如此部分图片的体积依然十分恐怖，请根据自身需求缓存后裁剪并优化体积（有的展会宣传图单张体积可超过 10MB+）。

:::

调用此接口可以获取最近 30 天内的展会信息。

支持以下参数：

- `keep_old`：当此值为 `true` 时，如果最近 30 天内没有数据，会返回过期的最后一条数据。

```
https://api.furrycons.cn/event/recent
```

预计响应：

```json
{
  "total": 1,
  "data": [
    {
      "name": "冬兽聚2024",
      "scale": "medium",
      "status": "scheduled",
      "slug": "2024-dec-shanghai-con",
      "startDate": "2024-12-20T02:00:00.677Z",
      "endDate": "2024-12-22T10:00:00.816Z",
      "address": "夏阳湖皇冠假日酒店",
      "city": "上海",
      "coverUrl": "https://images.furrycons.cn/organizations/furrychina/2024-dec-shanghai-con/cover-lMiuOMbUlUsqmiiOTpWpG.png",
      "detail": "将它们化作璀璨星辰，让我在下雨之际看见我的玫瑰。\n关注并转发BILIBILI动态，抽一名小伙伴送出【冬兽聚2024】入场票1张~\n【11月9日19点正式开售！】\n购票&酒店预订：官网FurryChina.com\n\n【冬兽聚2024！】2024年12月20-22日\n第五年！上海·夏阳湖皇冠假日酒店！共计三天两夜！\n\n★★【新上线日夜通票！套票内含高能派对通行证！】★★\n房间套票现在内含高能派对通行证！无需额外购买！\n更多票务详情请访问官网Furrychina.com 或查看长图！\n\n★【新上线户外野营！】★\n想尝试不一样的兽聚体验？来试试户外野营吧！*\n\n【申请中心现已开放！】\n摊位申请、舞台申请、户外野营申请现已开放！\n\n【摊位展商速览！】\n天邪鬼工作室、狛神本铺、MOFUMOFU、犇犇牛火锅店、FLUFFYLAND！\n更多摊位正在路上！\n\n【那些熟悉的活动们！】\n毛毛大合照、名片交友会\n商品贩售、舞台表演\n高能派对、CFCC集市\n茶话会、祈愿亭\n【还有更多活动正在筹备中！敬请期待！】\n\n更多详情请查看长图！\n\n*该项逃票票活动需要参加者拥有野营装备及经验\n----------------------\n2024.12.20-22 上海·冬兽聚\n官网：FurryChina.com \n购票页面：FurryChina.com \n冬兽聚官方交流群③：652214537\nX： @furrychina\nFacebook：@furrychina\n展会联络邮箱：contact@furrychina.com\n商务咨询邮箱：business@furrychina.com",
      "organization": {
        "name": "极兽聚",
        "slug": "furrychina",
        "coverUrl": "https://images.furrycons.cn/organizations/furrychina/logo.svg",
        "globalUrl": "https://www.furryeventchina.com/furrychina",
        "cnUrl": "https://www.furrycons.cn/furrychina"
      },
      "globalUrl": "https://www.furryeventchina.com/furrychina/2024-dec-shanghai-con",
      "cnUrl": "https://www.furrycons.cn/furrychina/2024-dec-shanghai-con"
    }
  ]
}
```
