# 兽展日历文档

[![Build](https://github.com/FurCoder/furry-event-china-docs/actions/workflows/deploy.yaml/badge.svg)](https://github.com/FurCoder/furry-event-china-docs/actions/workflows/deploy.yaml)

## 环境要求

- Node.js 24
- Yarn 4（通过 Corepack）

```bash
corepack enable
yarn install
```

## 本地开发

```bash
yarn dev
```

开发文档统一发布在 `/docs`，概览包含接入前言，接口详情在开发和构建时直接读取[线上 OpenAPI](https://api.furrycons.cn/open/docs/openapi.json)。

## 检查与构建

```bash
yarn check
yarn validate
yarn build
```

生产静态文件会输出到 `dist/`。

旧路径重定向统一维护在 `blume.config.ts`。`yarn build` 在 Blume 构建完成后，
从 `dist/vercel.json` 的重定向规则生成 `dist/edgeone.json`，随产物上传到 EdgeOne Pages。

配置格式见 [EdgeOne 文档](https://pages.edgeone.ai/document/edgeone-json)。
