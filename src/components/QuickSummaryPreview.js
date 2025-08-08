import React, { useState } from 'react';
import { Card, ListGroup, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const mockSummaries = {
  Tesla: [
    "Strong revenue growth in Q2",
    "Bullish guidance for next quarter",
    "AI integration in vehicle systems"
  ],
  Meta: [
    "Missed EPS target",
    "Cautious forward guidance",
    "Increased R&D in AR/VR"
  ],
  Amazon: [
    "Operating margins improved",
    "Cloud division remains strong",
    "Customer acquisition up 12%"
  ]
};

export const QuickSummaryPreview = () => {
  const [activeCompany, setActiveCompany] = useState(null);

  const handleCopy = () => {
    if (!activeCompany) return;
    const summaryText = mockSummaries[activeCompany].join('\n• ');
    navigator.clipboard.writeText(`• ${summaryText}`);
    alert(`Summary copied for ${activeCompany}`);
  };

  const handleExport = () => {
    if (!activeCompany) return;
    const text = `Summary for ${activeCompany}\n\n• ${mockSummaries[activeCompany].join('\n• ')}`;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${activeCompany}_summary.txt`;
    a.click();
  };

  return (
    <Card className="shadow-sm rounded mb-4">
      <Card.Body>
        <Card.Title>Quick Summary Preview</Card.Title>
        <ListGroup variant="flush">
          {Object.keys(mockSummaries).map(company => (
            <OverlayTrigger
              key={company}
              placement="right"
              overlay={
                <Tooltip className="custom-tooltip">
                  <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                    {mockSummaries[company].map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </Tooltip>
              }
            >
              <ListGroup.Item
                onMouseEnter={() => setActiveCompany(company)}
                onMouseLeave={() => setActiveCompany(null)}
                className="d-flex justify-content-between align-items-center"
              >
                {company}
              </ListGroup.Item>
            </OverlayTrigger>
          ))}
        </ListGroup>

        {activeCompany && (
          <div className="mt-3 d-flex gap-2">
            <Button variant="outline-primary" size="sm" onClick={handleCopy}>
              Copy Summary
            </Button>
            <Button variant="outline-secondary" size="sm" onClick={handleExport}>
              Export Summary
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
