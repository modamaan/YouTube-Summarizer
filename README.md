# 🎬 YouTube Summarizer

A modern, AI-powered web application that transforms YouTube videos into concise, readable summaries using Google's Gemini AI. Built with Next.js 15, TypeScript, and Tailwind CSS.

![YouTube Summarizer](https://img.shields.io/badge/Next.js-15.5.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-2.5_Flash-4285F4?style=for-the-badge&logo=google)

## ✨ Features

- **🤖 AI-Powered Summarization**: Uses Google Gemini 2.5 Flash for intelligent video content analysis
- **📱 Fully Responsive**: Beautiful UI that works seamlessly across all devices
- **🎨 Modern Design**: Dark theme with glassmorphism effects and smooth animations
- **📋 Copy to Clipboard**: One-click copying of generated summaries
- **⚡ Fast Processing**: Direct video processing without file downloads
- **🔒 Secure**: Environment-based API key management
- **🎯 User-Friendly**: Intuitive interface with clear error handling

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/modamaan/YouTube-Summarizer.git
   cd YouTube-Summarizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **AI**: Google Gemini 2.5 Flash
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📡 API Reference

### POST `/api/summarize`

Generates a concise summary of a YouTube video.

**Request Body:**
```json
{
  "youtubeUrl": "https://www.youtube.com/watch?v=VIDEO_ID"
}
```

**Response:**
```json
{
  "success": true,
  "summary": "A concise 3-sentence summary of the video content..."
}
```

**Error Response:**
```json
{
  "error": "Error message describing what went wrong"
}
```

## 🎯 Usage

1. **Enter YouTube URL**: Paste any YouTube video URL into the input field
2. **Click Summarize**: Hit the "Summarize Video" button to process
3. **Get Summary**: Receive a concise 3-sentence summary
4. **Copy & Share**: Use the copy button to share the summary

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key for AI processing | ✅ Yes |

### Supported Video Types

- Public YouTube videos
- Unlisted videos (with direct link)
- Videos with audio content

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository to [Vercel](https://vercel.com)
   - Add your `GEMINI_API_KEY` environment variable
   - Deploy automatically

### Other Platforms

The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for powerful AI capabilities
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons

## 📞 Support

If you have any questions or run into issues, please [open an issue](https://github.com/modamaan/YouTube-Summarizer/issues) on GitHub.

---

Made with ❤️ by [Amaan](https://github.com/modamaan)
