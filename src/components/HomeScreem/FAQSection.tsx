import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { semantic } from '../../utils/colors';
import { poppinsWeights, typography } from '../../utils/fonts';
import { Section } from '..';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FAQSection: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number>(0);

  const faqs = [
    {
      question: 'What is Genetic One by Nucleotide?',
      answer:
        'Genetic One is our premium DNA test that analyzes your genetic blueprint to provide personalized insights on health risks, drug response, vitamin needs, and cognitive traits.',
    },
    {
      question: 'Is this a medical diagnosis?',
      answer:
        'No, our reports provide genetic insights and predispositions, not medical diagnoses. Always consult healthcare professionals for medical decisions.',
    },
    {
      question: 'What kind of information will I receive?',
      answer:
        'You will receive comprehensive reports on disease risks, drug responses, vitamin needs, cognitive traits, and personalized health recommendations.',
    },
    {
      question: 'Who can take the test?',
      answer:
        'Adults 18 years and older can take the test. For minors, parental consent is required.',
    },
    {
      question: 'How do I order and provide my sample?',
      answer:
        'Order online, receive your kit, provide a saliva sample at home, and schedule free pickup. Results are delivered digitally.',
    },
    {
      question: 'How long does it take to get results?',
      answer:
        'Results are typically available within 3-4 weeks after we receive your sample at our laboratory.',
    },
    {
      question: 'How is my DNA data kept safe?',
      answer:
        'We use military-grade encryption, secure storage, and strict access controls. Your data is anonymized and you maintain full control.',
    },
    {
      question: 'Do I need to give another sample for future reports?',
      answer:
        'No, your DNA never changes. One sample provides lifetime access to current and future genetic insights as science advances.',
    },
    {
      question: 'Can I delete my genetic data later?',
      answer:
        'Yes, you have complete control over your data and can request deletion at any time through your account settings.',
    },
    {
      question: 'Can healthcare providers use these reports?',
      answer:
        'Yes, our reports are designed to be clinician-friendly and can support discussions with your healthcare provider.',
    },
  ];

  const toggleFAQ = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedFAQ(expandedFAQ === index ? -1 : index);
  };

  return (
    <Section
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about Genetic One by Nucleotide"
    >
      <View style={styles.list}>
        {faqs.map((faq, index) => {
          const isExpanded = expandedFAQ === index;
          return (
            <View
              key={`${index}-${faq.question}`}
              style={[
                styles.itemExpanded,
                isExpanded ? styles.itemExpanded : null,
              ]}
            >
              <TouchableOpacity
                onPress={() => toggleFAQ(index)}
                activeOpacity={0.8}
                style={styles.itemButton}
              >
                <Text style={styles.question}>{faq.question}</Text>
                <Text
                  style={[
                    styles.chevron,
                    isExpanded ? styles.chevronExpanded : null,
                  ]}
                >
                  {isExpanded ? '›' : '›'}
                </Text>
              </TouchableOpacity>
              {isExpanded ? (
                <View style={styles.answerWrap}>
                  <Text style={styles.answer}>{faq.answer}</Text>
                </View>
              ) : null}
            </View>
          );
        })}
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  section: {},
  header: {
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    ...typography.h3,
    color: semantic.text.primary,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.body,
    color: semantic.text.secondary,
    textAlign: 'center',
    marginTop: 4,
  },
  list: {
    width: '70%',
    alignSelf: 'center',
    gap: 12,
    marginTop: 8,
  },
  item: {
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 12,
    backgroundColor: semantic.background.primary,
    overflow: 'hidden',
  },
  itemExpanded: {
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  itemButton: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  question: {
    color: semantic.text.primary,
    fontFamily: poppinsWeights.semiBold,
    fontSize: 18,
    flex: 1,
    paddingRight: 12,
  },
  chevron: {
    fontSize: 22,
    tintColor: semantic.text.secondary,
    transform: [{ rotate: '0deg' }],
  },
  chevronExpanded: {
    transform: [{ rotate: '90deg' }],
  },
  answerWrap: {
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  answer: {
    fontFamily: poppinsWeights.regular,
    fontSize: 16,
    color: semantic.text.secondary,
    lineHeight: 18,
  },
});

export default FAQSection;
