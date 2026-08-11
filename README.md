# PPT 每日雷达

每天帮企业人盯紧 PPT 工具、软件与设计动态，附一条能落地的建议。

## 访问地址

通过 GitHub Pages 发布：
`https://<你的 GitHub 用户名>.github.io/ppt-radar`

## 项目结构

- `index.html` — 站点页面，负责展示与筛选
- `news.js` — 每日资讯数据，由自动化任务每日更新
- `README.md` — 本说明

## 自动化更新

每天 08:30，自动化任务会搜索当天 PPT 相关资讯，把新的一天数据 prepend 到 `news.js`，并自动 `git commit && git push` 到本仓库。GitHub Pages 会在数分钟内刷新线上页面。

## 内容来源

资讯来自公开网络搜索，每条均标注来源链接，仅供内部参考，具体功能以各厂商官网为准。
