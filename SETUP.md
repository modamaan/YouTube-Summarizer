# YouTube Transcription Setup

## Prerequisites

### 1. Install FFmpeg

This application requires FFmpeg to be installed on your system for audio conversion.

#### Windows:
1. **Download FFmpeg with MP3 support:**
   - Go to https://www.gyan.dev/ffmpeg/builds/
   - Download the "release" build (full version with all codecs)
   - OR use the direct link: https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip

2. **Extract and Install:**
   - Extract the files to `C:\ffmpeg`
   - The folder structure should be: `C:\ffmpeg\bin\ffmpeg.exe`

3. **Add to System PATH:**
   - Open System Properties → Advanced → Environment Variables
   - Edit the PATH variable and add `C:\ffmpeg\bin`
   - Click OK and restart your terminal/IDE

4. **Verify Installation:**
   ```cmd
   ffmpeg -version
   ffmpeg -codecs | findstr mp3
   ```
   You should see `libmp3lame` in the output.

#### macOS:
```bash
brew install ffmpeg
```

#### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install ffmpeg
```

### 2. Environment Variables

Create a `.env.local` file in the root directory with:

```
GEMINI_API_KEY=your_gemini_api_key_here
```

Note: RapidAPI key is no longer required as we're using ytdl-core for YouTube conversion.

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Application

```bash
npm run dev
```

## How it Works

1. **YouTube URL Input**: User provides a YouTube video URL
2. **Audio Extraction**: `ytdl-core` extracts the highest quality audio stream
3. **MP3 Conversion**: `fluent-ffmpeg` converts the audio to MP3 format
4. **Transcription**: Google Gemini AI transcribes the audio to text
5. **Cleanup**: Temporary files are automatically deleted

## Benefits of Local Processing

- ✅ No external API dependencies (except Gemini for transcription)
- ✅ No RapidAPI subscription required
- ✅ Better control over audio quality
- ✅ More reliable for long videos
- ✅ Cost-effective solution
