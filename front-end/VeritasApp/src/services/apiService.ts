import axios from 'axios';
import { ExtractedData } from './aiService';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000';

export interface VerificationRequest {
  receiptUrl: string;
  extractedData: ExtractedData;
}

export interface VerificationResponse {
  success: boolean;
  message: string;
  data?: any; // Or a more specific type if needed
}

export class APIService {
  static async verifyReceipt(request: VerificationRequest): Promise<VerificationResponse> {
    try {
      const response = await axios.post(`${API_BASE_URL}/verify-receipt`, request);
      return response.data;
    } catch (error) {
      console.error('API verification failed:', error);
      return {
        success: false,
        message: 'Failed to verify receipt with backend API',
      };
    }
  }
}
