# 宏观监测仪表盘

Phase 1 五页 MVP：总览、中国宏观、美国宏观、周期配置占位、危机预警占位。

## 本地运行

```bash
pnpm install
pnpm dev
```

构建与生产预览：

```bash
pnpm build
pnpm start
```

本阶段遵循产品提示词约束：数据全部来自 `data/indicators.json`，为静态演示样例，不连接实时数据源；资产评分和危机信号计算尚未接入。
