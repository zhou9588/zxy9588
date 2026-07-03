# 三上电子课本童声配音版

这是 `/Volumes/my SSD/三上电子课本.pdf` 的本地浏览器配音版。

## 打开方式

可以直接双击打开：

```text
index.html
```

也可以在本目录运行本地服务：

```bash
python3 -m http.server 8766
```

然后访问：

```text
http://localhost:8766/index.html
```

## 内容说明

- `assets/pages/`：课本 107 页图片，方便电子查看。
- `data/book.js`：单元、页码、已校对朗读文本和重点句。
- `index.html`：电子课本浏览和童声朗读界面。

绿色小点代表当前页已有校对朗读文本。第一版优先覆盖 Welcome unit、Unit 1-6、Words and expressions 的核心页；没有绿色小点的页面先用于图片查看，后续可以继续补充配音脚本。

## 童声说明

本版已支持高清 AI mp3 优先播放：

- 整页音频：`assets/audio/pages/page-007.mp3`
- 单句音频：`assets/audio/lines/page-007-line-01.mp3`
- 单词音频：`assets/audio/words/listen.mp3`

如果对应 mp3 不存在，网页会继续尝试同名 `.wav` 和 `.m4a`。如果本地音频都不存在，才会自动退回浏览器 `SpeechSynthesisUtterance` 清晰朗读。重点词可点击单独朗读，备用模式会重复读两遍，方便孩子听读和模仿。

## 免费生成 Mac 本机音频

不想使用 OpenAI API 额度时，可双击运行：

```text
生成Mac本机免费音频.command
```

它会调用 macOS 自带 `say` 语音，默认使用 `Samantha`，生成 `.wav` 文件并放入 `assets/audio/`。这些音频会被网页自动优先播放。

## 生成高清 AI mp3

需要先在本机设置 `OPENAI_API_KEY`。不要把 API Key 粘贴到聊天里。

推荐方式：双击运行：

```text
设置OpenAI_API_KEY.command
```

它会让你在本机终端窗口里输入 Key，并保存到 macOS 钥匙串。后续生成音频脚本会自动读取。

设置好后，可双击运行：

```text
生成高清AI音频.command
```

或在本目录执行：

```bash
node scripts/build-audio-jobs.mjs tmp/speech/audio-jobs.jsonl
python "$HOME/.codex/skills/speech/scripts/text_to_speech.py" speak-batch --input tmp/speech/audio-jobs.jsonl --out-dir assets/audio --rpm 50
```

当前会按已校对的核心页面生成整页、单句和重点词 mp3。实际 AI 音频由 OpenAI TTS 生成；网页端会优先播放这些 mp3。

## 发布提醒

本地版已包含完整课本页面图片。若要公开发布到 GitHub Pages 或其他公网地址，建议先确认教材图片的授权；未确认授权前，适合本地或私用网络预览。
