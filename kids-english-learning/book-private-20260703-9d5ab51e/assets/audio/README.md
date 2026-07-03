# 高清 AI 音频目录

网页会优先读取这里的 mp3 文件：

```text
pages/page-007.mp3
lines/page-007-line-01.mp3
words/listen.mp3
```

如果没有 mp3，网页会继续尝试同名 `.wav` 和 `.m4a` 文件，例如：

```text
pages/page-007.wav
lines/page-007-line-01.wav
words/listen.wav
```

目录规则：

- `pages/`：整页朗读音频。
- `lines/`：单句跟读音频。
- `words/`：重点词跟读音频。

如果某个 mp3 文件不存在，网页会自动退回浏览器清晰朗读。
