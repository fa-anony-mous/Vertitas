import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, Platform, SafeAreaView, ScrollView } from 'react-native';
import { DigitalRCBook } from '../components';

const MOCK_RECEIPT_URL = 'https://gist.githubusercontent.com/fa-anony-mous/52169528e47261cbb9498226e67671c9/raw/veritas-demo-receipt.md';

export const VerificationScreen: React.FC = () => {
  const [isNotarizing, setIsNotarizing] = useState(false);
  const [notarizationComplete, setNotarizationComplete] = useState(false);
  const [transactionHash, setTransactionHash] = useState<string>('');
  const [extractedData, setExtractedData] = useState<any>(null);
  
  // Mock wallet connection state
  const isConnected = true; // For demo purposes

  const handleNotarize = async () => {
    setIsNotarizing(true);
    
    try {
      // TODO: This will be replaced with actual backend call
      // For now, simulate the notarization process
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock data - replace with actual AI extraction and blockchain transaction
      const mockData = {
        productName: 'Canva Pro Subscription',
        amount: '₹3,999.00',
        date: 'August 24, 2025',
        vendor: 'Canva Pty Ltd.',
        category: 'Software Subscription'
      };
      
      // Using the new real XION testnet transaction hash for demo
      const mockTxHash = 'E05104C844336A2CF9CE73096132B671CFACF640646F88E8CA8FA9B5B43692E8';
      
      setExtractedData(mockData);
      setTransactionHash(mockTxHash);
      setNotarizationComplete(true);
    } catch (error) {
      console.error('Notarization failed:', error);
    } finally {
      setIsNotarizing(false);
    }
  };

  if (notarizationComplete) {
    return (
      <DigitalRCBook 
        data={extractedData}
        transactionHash={transactionHash}
        onBack={() => {
          setNotarizationComplete(false);
          setExtractedData(null);
          setTransactionHash('');
        }}
      />
    );
  }

  // Platform-specific receipt display
  const renderReceipt = () => {
    if (Platform.OS === 'web') {
      // Web version: Show receipt content directly
      return (
        <View style={styles.receiptCard}>
          <View style={styles.receiptHeader}>
            <Text style={styles.receiptIcon}>📄</Text>
            <Text style={styles.receiptTitle}>Official Purchase Receipt</Text>
          </View>
          
          <View style={styles.receiptContent}>
            <View style={styles.receiptDetailsSection}>
              <Text style={styles.sectionTitle}>Purchase Details</Text>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Vendor:</Text>
                <Text style={styles.detailValue}>Canva Pty Ltd.</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Order Number:</Text>
                <Text style={styles.detailValue}>CNV-2025-XION-9876</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Order Date:</Text>
                <Text style={styles.detailValue}>August 24, 2025</Text>
              </View>
            </View>

            <View style={styles.receiptProductSection}>
              <Text style={styles.sectionTitle}>Product Information</Text>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Product:</Text>
                <Text style={styles.detailValue}>Canva Pro Subscription</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Term:</Text>
                <Text style={styles.detailValue}>1 Year</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Price:</Text>
                <Text style={[styles.detailValue, styles.priceHighlight]}>₹3,999.00</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Status:</Text>
                <Text style={[styles.detailValue, styles.statusHighlight]}>✅ PAID</Text>
              </View>
            </View>

            <View style={styles.receiptNote}>
              <Text style={styles.noteText}>
                This is a mock receipt for the Veritas XION Hackathon demo.
              </Text>
            </View>
          </View>
        </View>
      );
    } else {
      // Mobile version: Use WebView
      return (
        <View style={styles.receiptCard}>
          <View style={styles.receiptHeader}>
            <Text style={styles.receiptIcon}>📄</Text>
            <Text style={styles.receiptTitle}>Official Purchase Receipt</Text>
          </View>
          <View style={styles.webViewContainer}>
            <WebView
              source={{ uri: MOCK_RECEIPT_URL }}
              style={{ flex: 1 }}
              onError={(syntheticEvent) => {
                const { nativeEvent } = syntheticEvent;
                console.warn('WebView error: ', nativeEvent);
              }}
              onHttpError={(syntheticEvent) => {
                const { nativeEvent } = syntheticEvent;
                console.warn('WebView HTTP error: ', nativeEvent);
              }}
            />
          </View>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Hero Header */}
        <View style={styles.heroHeader}>
          <View style={styles.heroContent}>
            <Text style={styles.heroIcon}>🛡️</Text>
            <Text style={styles.heroTitle}>Veritas</Text>
            <Text style={styles.heroSubtitle}>Digital Asset Verification</Text>
            <Text style={styles.heroDescription}>
              Verify and secure your digital assets on the XION blockchain with AI-powered analysis and immutable proof
            </Text>
          </View>
        </View>

        {/* Receipt Section */}
        <View style={styles.receiptSection}>
          <Text style={styles.sectionHeader}>Receipt to Verify</Text>
          {renderReceipt()}
        </View>

        {/* Action Section */}
        <View style={styles.actionSection}>
          <TouchableOpacity
            style={[styles.notarizeButton, isNotarizing && styles.buttonDisabled]}
            onPress={handleNotarize}
            disabled={isNotarizing}
          >
            {isNotarizing && <ActivityIndicator color="white" style={styles.spinner} />}
            <Text style={styles.buttonText}>
              {isNotarizing ? 'Creating Proof...' : '✨ Notarize This Receipt'}
            </Text>
          </TouchableOpacity>
          
          {!isConnected && (
            <View style={styles.helpCard}>
              <Text style={styles.helpIcon}>🔗</Text>
              <Text style={styles.helpText}>
                Connect your wallet to notarize this receipt
              </Text>
            </View>
          )}
          
          {isNotarizing && (
            <View style={styles.statusCard}>
              <Text style={styles.statusIcon}>⚡</Text>
              <Text style={styles.statusTitle}>Creating zkTLS Proof</Text>
              <Text style={styles.statusDescription}>
                Generating cryptographic proof and recording on XION blockchain...
              </Text>
            </View>
          )}
        </View>

        {/* Info Section */}
        <View style={styles.infoSection}>
          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>🔒</Text>
            <Text style={styles.infoTitle}>Secure & Immutable</Text>
            <Text style={styles.infoDescription}>
              Your receipt data is cryptographically verified and permanently stored on the XION blockchain
            </Text>
          </View>
          
          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>🤖</Text>
            <Text style={styles.infoTitle}>AI-Powered Analysis</Text>
            <Text style={styles.infoDescription}>
              Advanced AI extracts and validates key information from your digital receipts
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    flex: 1,
  },
  heroHeader: {
    backgroundColor: '#3b82f6',
    padding: 24,
    paddingTop: 32,
    alignItems: 'center',
  },
  heroContent: {
    alignItems: 'center',
    maxWidth: 300,
  },
  heroIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: 'white',
    opacity: 0.9,
    marginBottom: 16,
  },
  heroDescription: {
    fontSize: 14,
    color: 'white',
    opacity: 0.8,
    textAlign: 'center',
    lineHeight: 20,
  },
  receiptSection: {
    padding: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center',
  },
  receiptCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  receiptHeader: {
    backgroundColor: '#f3f4f6',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  receiptIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  receiptTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  receiptContent: {
    padding: 20,
  },
  receiptDetailsSection: {
    marginBottom: 20,
  },
  receiptProductSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  detailLabel: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '600',
    textAlign: 'right',
    flex: 1,
    marginLeft: 16,
  },
  priceHighlight: {
    color: '#22c55e',
    fontSize: 16,
  },
  statusHighlight: {
    color: '#22c55e',
  },
  receiptNote: {
    backgroundColor: '#fef3c7',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  noteText: {
    fontSize: 12,
    color: '#92400e',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  webViewContainer: {
    height: 300,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  actionSection: {
    padding: 20,
    alignItems: 'center',
  },
  notarizeButton: {
    backgroundColor: '#22c55e',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    shadowColor: '#22c55e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonDisabled: {
    backgroundColor: '#9ca3af',
  },
  spinner: {
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  helpCard: {
    backgroundColor: '#fef3c7',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  helpIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  helpText: {
    fontSize: 14,
    color: '#92400e',
    flex: 1,
  },
  statusCard: {
    backgroundColor: '#dbeafe',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
    alignItems: 'center',
    width: '100%',
  },
  statusIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 4,
  },
  statusDescription: {
    fontSize: 14,
    color: '#1e40af',
    textAlign: 'center',
  },
  infoSection: {
    padding: 20,
    gap: 16,
  },
  infoCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  infoIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  infoDescription: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
  },
});