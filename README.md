# 缺氧风格 2D 基地建造游戏

基于 Ionic + Vue 3 + Phaser 3 + Tailwind v4 + Capacitor 的 2D 横版基地建造游戏，玩法参考《缺氧》(Oxygen Not Included)。

## 技术栈

- **框架**: Vue 3 + Ionic 8
- **游戏引擎**: Phaser 3
- **样式**: Tailwind CSS v4
- **移动端**: Capacitor
- **包管理**: pnpm
- **构建**: Vite 5

## 项目结构

```
src/
├── components/          # Vue 组件
│   ├── BuildPanel.vue   # 建造面板（左下角）
│   └── TechPanel.vue    # 科技面板（右上角，T 键）
├── data/
│   ├── buildings.ts     # 建筑数据（15 分类，含体积 width×height、贴图 image）
│   └── techs.ts         # 科技树（按缺氧 wiki）
├── game/
│   ├── index.ts         # Phaser 创建入口
│   └── MainScene.ts     # 主场景（主角、地面、梯子、建筑放置）
├── views/
│   ├── GamePage.vue     # 游戏主页面
│   └── HomePage.vue
└── assets/
public/
└── assets/buildings/     # 建筑贴图（从 wiki 下载）
scripts/
└── download-building-images.mjs  # 下载建筑贴图脚本
```

## 已实现功能

### 游戏玩法
- **移动**: WASD
- **跳跃**: 空格
- **攀爬**: W（仅在梯子/攀爬物上生效）
- **建筑放置**: 建造面板选建筑 → 点击地图放置，ESC 取消
- **科技**: T 键打开/关闭科技树面板

### 建造面板 (BuildPanel)
- 左下角，15 个分类（基地、氧气、电力、食物、水管、通风、精炼、医疗、家具、站台、实用、信号、运输、火箭、辐射）
- 1–9 键切换分类
- 点击建筑进入放置模式，再次点击同一建筑取消
- 建筑有贴图时显示图片，否则显示文字图标

### 科技面板 (TechPanel)
- 右上角按钮，T 键切换
- 全屏显示
- 科技树按 [缺氧 wiki](https://oxygennotincluded.wiki.gg/zh/wiki/技术#科技树) 配置
- 研究点数、前置依赖、已研究状态

### 建筑数据 (buildings.ts)
- 每个建筑: `id`, `name`, `icon`, `image`, `width`, `height`
- 体积按 [缺氧 wiki](https://oxygennotincluded.wiki.gg/zh/wiki/建筑) 配置（如柳条门 1×2）
- 贴图路径: `public/assets/buildings/{id}.png`

## 开发

```bash
pnpm install
pnpm dev
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 开发服务器 |
| `pnpm build` | 构建 |
| `pnpm download-buildings` | 从 wiki 下载建筑贴图到 `public/assets/buildings/` |

## 代码规范

- 缩进: 4 空格
- 无行尾分号
- Vue: script 在 template 前
- 路径别名: `@` → `./src`
- `tsconfig`: `moduleResolution: "Node"`

## 待实现 / 可扩展

- [ ] 建筑与科技解锁关联（需研究某科技才能建造）
- [ ] 研究点数获取逻辑（如研究站产出）
- [ ] 建筑贴图在 Phaser 场景中的显示（当前为矩形占位）
- [ ] 建筑放置碰撞/合法性校验
- [ ] 存档 / 读档

## 建筑贴图下载

贴图来自 `https://oxygennotincluded.wiki.gg/zh/images/{中文名}.png`。运行：

```bash
pnpm run download-buildings
```

部分建筑 wiki 名称可能与 `buildings.ts` 不一致，下载失败时脚本会跳过并输出，可手动补充或修改脚本中的名称映射。
