import { GoogleGenerativeAI } from '@google/generative-ai';

// Add better error checking for API key
const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
console.log('🔑 Gemini API Key check:', apiKey ? `Present (${apiKey.substring(0, 8)}...)` : 'MISSING');

if (!apiKey) {
  console.error('❌ EXPO_PUBLIC_GEMINI_API_KEY is not set in environment variables');
}

const genAI = new GoogleGenerativeAI(apiKey!);

export interface ExtractedData {
  productName: string;
  amount: string;
  date: string;
  vendor: string;
  category: string;
  orderNumber?: string;
  subscriptionTerm?: string;
  paymentMethod?: string;
}

export class AIService {
  static async extractReceiptData(receiptContent: string): Promise<ExtractedData> {
    try {
      console.log('🤖 Starting AI extraction...');
      console.log('📄 Content length:', receiptContent.length);
      console.log('📄 Content preview:', receiptContent.substring(0, 200) + '...');

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // THIS IS THE REAL PROMPT SENT TO GEMINI AI
      const prompt = `
        Analyze this receipt and extract the following information in JSON format:
        
        {
          "productName": "exact product name",
          "amount": "total amount with currency",
          "date": "purchase date",
          "vendor": "company/vendor name",
          "category": "asset category (e.g., Software Subscription, Hardware, Service)",
          "orderNumber": "order ID if present",
          "subscriptionTerm": "subscription duration if applicable",
          "paymentMethod": "payment method if mentioned"
        }
        
        Receipt content:
        ${receiptContent}
        
        Return only valid JSON, no additional text.
      `;

      console.log('🔄 Calling Gemini API...');
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      console.log('✅ Gemini API response received');
      console.log('📝 Raw response:', text);
      
      // Clean the response and parse JSON
      const cleanedText = text.replace(/```json\n?|\n?```/g, '').trim();
      console.log('🧹 Cleaned response:', cleanedText);
      
      const extractedData = JSON.parse(cleanedText);
      console.log('✅ Parsed JSON successfully:', extractedData);
      
      return extractedData;
    } catch (error) {
      console.error('❌ AI extraction failed:', error);
      console.error('❌ Error details:', JSON.stringify(error, null, 2));
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Failed to extract receipt data using AI: ${errorMessage}`);
    }
  }

  static async validateContent(content: string): Promise<{ isValid: boolean; message: string }> {
    try {
      console.log('🔍 Starting AI content validation...');
      console.log('📄 Content length:', content.length);
      console.log('📄 Content preview:', content.substring(0, 200) + '...');

      // Check if API key is available
      if (!apiKey) {
        console.error('❌ No Gemini API key found');
        return {
          isValid: false,
          message: 'Gemini AI API key is not configured. Please add EXPO_PUBLIC_GEMINI_API_KEY to your environment variables.'
        };
      }

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
        Analyze this content and determine if it's a valid document for blockchain notarization.
        
        Valid document types include:
        - Receipts (purchase, payment, invoice)
        - Warranties
        - Insurance documents
        - Certificates
        - Licenses
        - Contracts
        - Legal documents
        
        Invalid content includes:
        - Random text
        - Non-document content
        - Incomplete information
        - Unrelated content
        
        Content to analyze:
        ${content}
        
        Return a JSON response in this format:
        {
          "isValid": true/false,
          "message": "Brief explanation of why content is valid or invalid"
        }
        
        Return only valid JSON, no additional text.
      `;

      console.log('🔄 Calling Gemini API for validation...');
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      console.log('✅ Gemini validation response received');
      console.log('📝 Raw validation response:', text);
      
      // Clean the response and parse JSON
      const cleanedText = text.replace(/```json\n?|\n?```/g, '').trim();
      console.log('🧹 Cleaned validation response:', cleanedText);
      
      const validationResult = JSON.parse(cleanedText);
      console.log('✅ Validation result:', validationResult);
      
      return validationResult;
    } catch (error) {
      console.error('❌ AI validation failed:', error);
      console.error('❌ Error details:', JSON.stringify(error, null, 2));
      
      // Return a more descriptive error
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return {
        isValid: false,
        message: `AI validation encountered an error: ${errorMessage}. Please check your Gemini API key and network connection.`
      };
    }
  }
}
