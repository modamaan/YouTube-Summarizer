import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { youtubeUrl } = await request.json();

    if (!youtubeUrl) {
      return NextResponse.json(
        { error: "YouTube URL is required" },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent([
      {
        fileData: {
          fileUri: youtubeUrl,
          mimeType: "video/*",
        },
      },
      { text: "Summarize this YouTube video in 3 concise sentences" },
    ]);

    const summary = result.response.text();

    return NextResponse.json({
      success: true,
      summary,
    });
  } catch (error: any) {
    console.error("Summarization error:", error);

    // Check for quota/rate limiting
    if (error.message?.includes("quota") || error.message?.includes("limit")) {
      return NextResponse.json(
        {
          error: "API quota exceeded. Please try again later.",
        },
        { status: 429 }
      );
    }

    return NextResponse.json(
      {
        error: "Failed to summarize video. Please try again.",
      },
      { status: 500 }
    );
  }
}
