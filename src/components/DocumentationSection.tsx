
import { File, Code, Database, Server } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DocumentationSection = () => {
  // This is a mock component to document the tech stack
  // In a real application, this would connect to a Flask backend
  
  const techDocs = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Flask Backend",
      description: "Python Flask server handling API requests, data processing, and ML model serving.",
      link: "#"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Stack",
      description: "React with TypeScript and Tailwind CSS for a responsive, interactive UI.",
      link: "#"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Processing",
      description: "Python data processing pipeline with Pandas, NumPy, and scikit-learn.",
      link: "#"
    },
    {
      icon: <File className="h-8 w-8" />,
      title: "API Documentation",
      description: "Comprehensive API documentation for Flask endpoints and data models.",
      link: "#"
    }
  ];
  
  return (
    <section className="py-16 bg-background/50 hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techDocs.map((doc, index) => (
            <Card key={index} className="glass-morphism hover-card">
              <CardHeader>
                <div className="text-primary mb-4">{doc.icon}</div>
                <CardTitle>{doc.title}</CardTitle>
                <CardDescription>{doc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href={doc.link} className="text-primary hover:underline">
                  View Documentation →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 glass-morphism p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Flask Backend Implementation</h3>
          <pre className="bg-secondary/50 p-4 rounded-md overflow-x-auto">
            <code className="text-sm font-mono">
{`# Example Flask API for the AI Developer Portfolio
from flask import Flask, request, jsonify
import numpy as np
from ml_models import predict_sentiment

app = Flask(__name__)

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    text = data.get('text', '')
    
    # Process with ML model
    sentiment, confidence = predict_sentiment(text)
    
    return jsonify({
        'sentiment': sentiment,
        'confidence': float(confidence),
        'text': text
    })

@app.route('/api/visitors', methods=['GET'])
def get_visitors():
    # In a real app, this would query a database
    return jsonify({
        'count': 5432
    })

@app.route('/api/log-visit', methods=['POST'])
def log_visit():
    # In a real app, this would store in a database
    return jsonify({
        'success': True
    })

if __name__ == '__main__':
    app.run(debug=True)`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
