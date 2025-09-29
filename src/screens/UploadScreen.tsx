import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { MainTabScreenProps } from '../navigation/types';
import { semantic } from '../utils/colors';
import { typography } from '../utils/fonts';
import { NavigationHeader } from '../components';

type Props = MainTabScreenProps<'Upload'>;

const UploadScreen: React.FC<Props> = ({ navigation: _navigation }) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileSelect = () => {
    // In a real app, this would open a file picker
    Alert.alert(
      'File Selection',
      "File picker would open here. For demo purposes, we'll simulate a file selection.",
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Select File',
          onPress: () => {
            setSelectedFile('sample_dna_data.txt');
            setUploadProgress(0);
          },
        },
      ],
    );
  };

  const handleUpload = () => {
    if (!selectedFile) {
      Alert.alert('No File Selected', 'Please select a DNA file to upload.');
      return;
    }

    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        Alert.alert(
          'Upload Complete',
          'Your DNA data has been successfully uploaded and is being processed.',
          [{ text: 'OK', onPress: () => setUploadProgress(0) }],
        );
      }
    }, 200);
  };

  return (
    <View style={styles.container}>
      <NavigationHeader title="Upload DNA" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Upload Raw DNA Data</Text>
          <Text style={styles.subtitle}>
            Upload your raw DNA data from other services for analysis
          </Text>
        </View>

        <View style={styles.uploadSection}>
          <View style={styles.uploadCard}>
            <Text style={styles.cardTitle}>Supported File Formats</Text>
            <View style={styles.formatList}>
              <Text style={styles.formatItem}>• 23andMe (.txt)</Text>
              <Text style={styles.formatItem}>• AncestryDNA (.txt)</Text>
              <Text style={styles.formatItem}>• MyHeritage (.txt)</Text>
              <Text style={styles.formatItem}>• FamilyTreeDNA (.txt)</Text>
              <Text style={styles.formatItem}>• LivingDNA (.txt)</Text>
            </View>
          </View>

          <View style={styles.uploadArea}>
            <TouchableOpacity
              style={styles.selectButton}
              onPress={handleFileSelect}
            >
              <Text style={styles.selectButtonText}>
                {selectedFile ? 'Change File' : 'Select DNA File'}
              </Text>
            </TouchableOpacity>

            {selectedFile && (
              <View style={styles.fileInfo}>
                <Text style={styles.fileName}>{selectedFile}</Text>
                <Text style={styles.fileSize}>2.3 MB</Text>
              </View>
            )}

            {uploadProgress > 0 && (
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${uploadProgress}%` },
                    ]}
                  />
                </View>
                <Text style={styles.progressText}>{uploadProgress}%</Text>
              </View>
            )}

            <TouchableOpacity
              style={[
                styles.uploadButton,
                (!selectedFile || uploadProgress > 0) &&
                  styles.uploadButtonDisabled,
              ]}
              onPress={handleUpload}
              disabled={!selectedFile || uploadProgress > 0}
            >
              <Text style={styles.uploadButtonText}>
                {uploadProgress > 0 ? 'Uploading...' : 'Upload & Analyze'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Privacy & Security</Text>
            <Text style={styles.infoText}>
              Your DNA data is encrypted and stored securely. We never share
              your genetic information with third parties without your explicit
              consent.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semantic.background.primary,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    ...typography.h1,
    color: semantic.text.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    ...typography.body,
    color: semantic.text.secondary,
    textAlign: 'center',
  },
  uploadSection: {
    gap: 24,
  },
  uploadCard: {
    backgroundColor: semantic.background.secondary,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: semantic.border.light,
  },
  cardTitle: {
    ...typography.h3,
    color: semantic.text.primary,
    marginBottom: 12,
  },
  formatList: {
    gap: 4,
  },
  formatItem: {
    ...typography.body,
    color: semantic.text.secondary,
  },
  uploadArea: {
    backgroundColor: semantic.background.secondary,
    padding: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: semantic.border.medium,
    borderStyle: 'dashed',
    alignItems: 'center',
  },
  selectButton: {
    backgroundColor: semantic.interactive.secondary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: semantic.border.medium,
    marginBottom: 16,
  },
  selectButtonText: {
    ...typography.button,
    color: semantic.text.secondary,
  },
  fileInfo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  fileName: {
    ...typography.body,
    color: semantic.text.primary,
    fontWeight: '600',
  },
  fileSize: {
    ...typography.caption,
    color: semantic.text.tertiary,
  },
  progressContainer: {
    width: '100%',
    marginBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: semantic.background.tertiary,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: semantic.interactive.primary,
  },
  progressText: {
    ...typography.caption,
    color: semantic.text.secondary,
    textAlign: 'center',
  },
  uploadButton: {
    backgroundColor: semantic.interactive.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  uploadButtonDisabled: {
    backgroundColor: semantic.background.tertiary,
  },
  uploadButtonText: {
    ...typography.button,
    color: semantic.text.inverse,
  },
  infoCard: {
    backgroundColor: semantic.background.secondary,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: semantic.border.light,
  },
  infoTitle: {
    ...typography.h3,
    color: semantic.text.primary,
    marginBottom: 8,
  },
  infoText: {
    ...typography.body,
    color: semantic.text.secondary,
    lineHeight: 20,
  },
});

export default UploadScreen;
