import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

interface DigitalRCBookProps {
  data: {
    productName: string;
    amount: string;
    date: string;
    vendor: string;
    category: string;
  };
  transactionHash: string;
  onBack: () => void;
}

export const DigitalRCBook: React.FC<DigitalRCBookProps> = ({ data, transactionHash, onBack }) => {
  const handleViewProof = async () => {
    // Use Mintscan as a robust alternative for viewing XION transactions
    const mintscanUrl = `https://www.mintscan.io/xion-testnet/txs/${transactionHash}`;
    await WebBrowser.openBrowserAsync(mintscanUrl);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Modern Header with Back Button */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backButtonIcon}>←</Text>
            <Text style={styles.backButtonText}>Back to Receipt</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Digital RC Book</Text>
        </View>

        {/* Success Banner */}
        <View style={styles.successBanner}>
          <View style={styles.successIconContainer}>
            <Text style={styles.successIcon}>✅</Text>
          </View>
          <Text style={styles.successTitle}>Asset Verified & Secured</Text>
          <Text style={styles.successDescription}>
            Your digital asset has been successfully recorded on the XION blockchain
          </Text>
        </View>

        {/* Asset Details Card */}
        <View style={styles.assetCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>🛡️</Text>
            <Text style={styles.cardTitle}>Asset Details</Text>
          </View>
          
          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Product</Text>
              <Text style={styles.detailValue}>{data.productName}</Text>
            </View>
            
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Amount</Text>
              <Text style={[styles.detailValue, styles.amountHighlight]}>{data.amount}</Text>
            </View>
            
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Date</Text>
              <Text style={styles.detailValue}>{data.date}</Text>
            </View>
            
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Vendor</Text>
              <Text style={styles.detailValue}>{data.vendor}</Text>
            </View>
            
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Category</Text>
              <Text style={[styles.detailValue, styles.categoryHighlight]}>{data.category}</Text>
            </View>
          </View>

          {/* Transaction Hash */}
          <View style={styles.hashSection}>
            <Text style={styles.hashLabel}>Transaction Hash</Text>
            <View style={styles.hashContainer}>
              <Text style={styles.hashText}>
                {transactionHash.slice(0, 12)}...{transactionHash.slice(-8)}
              </Text>
            </View>
          </View>
        </View>

        {/* Action Button */}
        <TouchableOpacity style={styles.proofButton} onPress={handleViewProof}>
          <Text style={styles.proofButtonIcon}>🔍</Text>
          <Text style={styles.proofButtonText}>View Proof on XION Explorer</Text>
        </TouchableOpacity>
        
        {/* Footer Info */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            📋 Demo Mode: Using sample transaction hash for presentation
          </Text>
          <Text style={styles.footerSubtext}>
            In production: Real XION transactions would be created via backend integration
          </Text>
        </View>
      </View>
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    paddingTop: 8,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginRight: 16,
  },
  backButtonIcon: {
    fontSize: 18,
    color: '#6b7280',
    marginRight: 6,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
  },
  successBanner: {
    backgroundColor: '#22c55e',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#22c55e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  successIconContainer: {
    width: 64,
    height: 64,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  successIcon: {
    fontSize: 32,
  },
  successTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  successDescription: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    opacity: 0.95,
    lineHeight: 22,
  },
  assetCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  detailsGrid: {
    gap: 16,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  detailValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'right',
    flex: 1,
    marginLeft: 16,
  },
  amountHighlight: {
    color: '#22c55e',
    fontSize: 16,
  },
  categoryHighlight: {
    color: '#3b82f6',
  },
  hashSection: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  hashLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 8,
    textAlign: 'center',
  },
  hashContainer: {
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  hashText: {
    fontSize: 12,
    color: '#6b7280',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  proofButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  proofButtonIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  proofButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  footerText: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: 11,
    color: '#9ca3af',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});