# 展会列表

:::tip

接口返回的图片地址已经经过优化压缩，且默认返回 jpg 格式，尽管如此部分图片的体积依然十分恐怖，请根据自身需求缓存后裁剪并优化体积（有的展会宣传图单张体积可超过 10MB+）。

:::

```
https://api.furrycons.cn/open/event/
```

可选的查询参数：

- `eventStartAt`：展会开始日期，格式为 ISO 8601 格式，如 `2026-03-06T02:00:00.000Z`。
- `eventEndAt`：展会结束日期，格式为 ISO 8601 格式，如 `2026-03-08T10:00:00.000Z`。
- `search`：展会名称搜索。
- `orgSearch`：组织名称搜索。
- `current`：当前页码，默认为 1。
- `pageSize`：每页条数，默认为20。

预计响应：

```json
{
  "total": 410,
  "current": 1,
  "pageSize": 1,
  "data": [
    {
      "id": "0b448a05-fefe-444c-a9dd-81b21ea785c3",
      "name": "街頭生活",
      "scale": "medium",
      "status": "scheduled",
      "slug": "2027-jan-xianggang-con",
      "startDate": "2027-01-01T02:00:00.000Z",
      "endDate": "2027-01-01T10:00:00.000Z",
      "address": "",
      "region": "香港特别行政区",
      "thumbnail": "https://images.furrycons.cn/organizations/furban-jungle/2027-jan-xianggang-con/cover-k8xUi3tu5PcpJSfQ7mI9T.jpeg",
      "detail": "💥 HONG KONG'S FIRST FURCON 💥\n\nHappy December everyone!\nThis has been in the works for a long time now, and it's still a while away, but now seems like a good time to finally announce a project me and dozens of other local furs have been working on.\n\nI am proud to announce \n\nFurban Jungle\n\nHong Kong's first furry convention in 2027.\n\nThe first year's theme will be Street Life.\n\nThis will be a 2 weekend day event held in the function rooms of a hotel. This hotel is not fully confirmed yet, we will confirm it at a later date.\n\nWe are very excited to work and delivery Hong Kong's first convention. We will work hard to deliver a new, fun, and unforgettable furry experience in Hong Kong. ❤️\n\n大家十二月好！\n我和一眾香港furry已經籌備了一段時間，雖然與正式舉辦還有一段距離，但現在似乎是正式公布的好時機\n\n我很榮幸在此公布：\n\nFurban Jungle\n\n於2027年，香港的第一個獸展\n\n我們的一年的主題是街頭生活\n\n這將會是一個於酒店多個多功能房間舉行，持續兩天的週末活動。酒店詳情現時尚未確定，我們將會於之後時間確實並公布\n\n我們很期待能夠帶給大家香港第一個獸展，我們會努力帶給大家一個全新、有趣、並難忘的香港毛毛體驗",
      "organization": {
        "name": "Furban Jungle",
        "slug": "furban-jungle",
        "logoUrl": "https://images.furrycons.cn/organizations/furban-jungle/logo-1IljEy9gQuIY8Z-R51sty.jpeg",
        "url": "https://www.furrycons.cn/furban-jungle"
      },
      "url": "https://www.furrycons.cn/furban-jungle/2027-jan-xianggang-con"
    }
  ]
}
```
