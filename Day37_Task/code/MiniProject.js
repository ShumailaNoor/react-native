import React, { useState } from "react";
import { 
  View, 
  TextInput, 
  Button, 
  Text, 
  StyleSheet,
  ScrollView,
  TouchableOpacity 
} from "react-native";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (name.trim() === "") {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (feedback.trim() === "") {
      newErrors.feedback = "Feedback is required";
    } else if (feedback.trim().length < 10) {
      newErrors.feedback = "Feedback must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setSubmitted(true);
      console.log('Feedback submitted:', { name, email, feedback });
    }
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setFeedback("");
    setSubmitted(false);
    setErrors({});
  };

  if (submitted) {
    return (
      <View style={styles.container}>
        <View style={styles.successBox}>
          <Text style={styles.successTitle}>Thank you, {name}!</Text>
          <Text style={styles.successSubtitle}>
            We've received your feedback
          </Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={handleClear}
          >
            <Text style={styles.buttonText}>
              Go Back
            </Text>
          </TouchableOpacity>
        </View>  
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Feedback Form</Text>
      <Text style={styles.subtitle}>We'd love to hear from you!</Text>

      <View style={styles.inputContainer}>
        <View style = {styles.labelContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.required}>  *</Text>
        </View>
        <TextInput
          style={[styles.input, errors.name && styles.inputError]}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => {
            setName(text);
            if (errors.name) setErrors({...errors, name: null});
          }}
        />
        {errors.name && (
          <Text style={styles.errorText}>{errors.name}</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <View style = {styles.labelContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.required}>  *</Text>
        </View>
        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (errors.email) setErrors({...errors, email: null});
          }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email}</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <View style = {styles.labelContainer}>
        <Text style={styles.label}>Feedback</Text>
        <Text style={styles.required}>  *</Text>
        </View>
        <TextInput
          style={[
            styles.input, 
            styles.textArea,
            errors.feedback && styles.inputError
          ]}
          placeholder="Write your feedback..."
          value={feedback}
          onChangeText={(text) => {
            setFeedback(text);
            if (errors.feedback) setErrors({...errors, feedback: null});
          }}
          multiline={true}
          numberOfLines={5}
          textAlignVertical="top"
        />
        <Text style={styles.charCount}>
          {feedback.length} / 500 characters
        </Text>
        {errors.feedback && (
          <Text style={styles.errorText}>{errors.feedback}</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Submit Feedback</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: { 
    fontSize: 32, 
    fontWeight: "bold", 
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  labelContainer:{
    flexDirection: 'row'
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  required: {
    color: '#f44336', 
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: 'white',
  },
  inputError: {
    borderColor: '#f44336',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  charCount: {
    textAlign: 'right',
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  errorText: {
    color: '#f44336',
    fontSize: 14,
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 40,
  },
  button: {
    width: '100%',
    backgroundColor: '#3575c9ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  successTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 10,
    textAlign: 'center',
  },
  successSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
});