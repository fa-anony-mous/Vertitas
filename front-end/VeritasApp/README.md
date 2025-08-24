# Veritas - Digital Asset Verification Platform

**Veritas** is a revolutionary mobile application that transforms digital receipts, warranties, and certificates into **immutable, blockchain-verified assets** using advanced AI analysis and XION blockchain technology.

## 🎯 **What Problem Does Veritas Solve?**

In today's digital world, users lack a **trusted, secure way** to:
- **Prove ownership** of digital assets (software licenses, subscriptions, warranties)
- **Verify authenticity** of digital documents
- **Create tradeable digital assets** from static documents
- **Establish immutable proof** of ownership and value

## 🚀 **Current Status: Checkpoint 2 - Proof of Concept**

### **✅ What's Working (Real Integration):**
- **Gemini AI Processing** - Real AI analysis of receipt content
- **XION Blockchain Verification** - Using real transaction hash on testnet
- **Dynamic URL Processing** - Accepts any HTTPS URL for analysis
- **AI Data Extraction** - Intelligent parsing of various receipt formats

### ** What's Simulated (Next Checkpoint):**
- **zkTLS Verification** - Security layer (will be real in Checkpoint 3)
- **Automatic Transaction Creation** - Currently using existing transaction
- **Backend API Integration** - Will connect to live XION network

### **🔗 Real XION Transaction:**
- **Transaction Hash**: `76C3FDE145C811245CB042207190E7516E48E0986251C6BB380E9D63AC3BC327`
- **Network**: XION Testnet
- **Explorer**: [Mintscan](https://www.mintscan.io/xion-testnet/txs/76C3FDE145C811245CB042207190E7516E48E0986251C6BB380E9D63AC3BC327)
- **Status**: ✅ Verified and Live

## 🏗️ **Architecture & Technology**

### **Frontend (React Native + Expo)**
- **UI Framework**: Tamagui for modern, responsive design
- **State Management**: Zustand for efficient state handling
- **Navigation**: React Navigation for seamless user experience

### **AI Integration (Google Gemini)**
- **Model**: Gemini 1.5 Flash for intelligent data extraction
- **Processing**: Real-time analysis of receipt content
- **Output**: Structured JSON data for blockchain storage

### **Blockchain (XION)**
- **Network**: XION Testnet for development and testing
- **Features**: zkTLS, Generalized Abstraction, Meta Accounts
- **Integration**: Transaction memo storage for asset data

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ and npm
- Expo CLI (`npm install -g @expo/cli`)
- Gemini AI API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

### **Installation**
   ```bash
# Clone the repository
git clone <your-repo-url>
cd VeritasApp

# Install dependencies
   npm install

# Set up environment variables
cp env.example .env
# Edit .env and add your Gemini API key

# Start the development server
npx expo start
```

### **Usage**
1. **Enter Receipt URL** - Paste any HTTPS URL containing a receipt
2. **zkTLS Verification** - Security layer validates the source
3. **AI Analysis** - Gemini extracts structured data from content
4. **Blockchain Verification** - View proof on XION explorer
5. **Digital RC Book** - Your verified digital asset

## 🔮 **Roadmap & Next Checkpoint**

### **Checkpoint 3: Full zkTLS Integration**
- Real cryptographic proofs of data origin
- XION's built-in security verification
- Enhanced trust and security

##  **Why XION?**

### **Strategic Advantages:**
- **zkTLS Integration** - Built-in data origin verification
- **Generalized Abstraction** - Handle any digital asset type
- **Meta Accounts** - Enhanced UX with social recovery
- **Gasless Transactions** - Zero-fee operations
- **Real-World Focus** - Designed for practical applications

### **Business Impact:**
- **Platform Potential** - Enable others to build on Veritas
- **Asset Interoperability** - Standardized digital asset format
- **Trust Infrastructure** - Foundation for digital commerce

##  **Contributing**

This project is built for the **XION Hackathon** to demonstrate the future of digital asset verification. We welcome contributions and feedback!

## 📄 **License**

MIT License - see LICENSE file for details.

---

**Built with ❤️ for the XION Hackathon - Demonstrating the future of digital asset verification**
