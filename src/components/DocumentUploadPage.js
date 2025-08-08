import React, { useState, useCallback } from "react";
import { Container, Row, Col, Form, Button, ProgressBar, Alert } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";

export const DocumentUploadPage = () => {
  const [documentType, setDocumentType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [summaryLink, setSummaryLink] = useState("");

  // Handle file drop
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setUploadFile(acceptedFiles[0]);
      setStatus(`Selected file: ${acceptedFiles[0].name}`);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Simulate upload + summary generation
  const handleGenerateSummary = () => {
    if (!uploadFile && !companyName) {
      alert("Please upload a file or provide a company name.");
      return;
    }

    setStatus("Uploading document...");
    setProgress(20);

    setTimeout(() => {
      setStatus("Processing document...");
      setProgress(60);
    }, 1000);

    setTimeout(() => {
      setStatus("Generating summary...");
      setProgress(90);
    }, 2000);

    setTimeout(() => {
      setStatus("Summary ready!");
      setProgress(100);
      setSummaryLink("/summary/123"); // Example link
    }, 3000);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="mb-4">Upload a Document</h2>

          {/* Upload Box */}
          <div
            {...getRootProps()}
            style={{
              border: "2px dashed #ccc",
              borderRadius: "8px",
              padding: "30px",
              textAlign: "center",
              backgroundColor: isDragActive ? "#f8f9fa" : "white",
              cursor: "pointer"
            }}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the file here...</p>
            ) : (
              <p>Drag & drop a document here, or click to select</p>
            )}
            {uploadFile && <p><strong>{uploadFile.name}</strong></p>}
          </div>

          {/* Document Type Selector */}
          <Form.Group className="mt-4">
            <Form.Label>Document Type</Form.Label>
            <Form.Select
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
            >
              <option value="">Select type...</option>
              <option value="10-K">10-K</option>
              <option value="Earnings Call">Earnings Call</option>
              <option value="Press Release">Press Release</option>
              <option value="Investor Presentation">Investor Presentation</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>

          {/* Company Name Override */}
          <Form.Group className="mt-3">
            <Form.Label>Company Name (optional override)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Form.Group>

          {/* Generate Summary Button */}
          <div className="mt-4 d-flex justify-content-between align-items-center">
            <Button variant="primary" onClick={handleGenerateSummary}>
              Generate Summary
            </Button>
          </div>

          {/* Progress Bar */}
          {progress > 0 && (
            <div className="mt-4">
              <ProgressBar now={progress} label={`${progress}%`} />
              <p className="mt-2">{status}</p>
            </div>
          )}

          {/* Summary Link */}
          {summaryLink && (
            <Alert variant="success" className="mt-4">
              Summary ready!{" "}
              <Link to={summaryLink} className="alert-link">
                View Summary
              </Link>
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};
