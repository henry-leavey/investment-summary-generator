import React from 'react';
import { Card, Row, Col, Badge, ListGroup } from 'react-bootstrap';

export const SummaryMetrics = () => {
  const metrics = {
    totalSummarized: 128,
    companiesThisWeek: 34,
    companiesThisMonth: 102,
    averageSentiment: 'Positive',
    sectors: [
      { name: 'Technology', count: 45 },
      { name: 'Financials', count: 30 },
      { name: 'Healthcare', count: 18 },
      { name: 'Energy', count: 10 },
      { name: 'Consumer Goods', count: 25 },
    ],
  };

  const sentimentVariant = {
    Positive: 'success',
    Neutral: 'secondary',
    Negative: 'danger',
  };

  return (
    <Card className="shadow-sm rounded mb-4">
      <Card.Body>
        <Card.Title>Summary Metrics</Card.Title>

        <Row className="mb-3">
          <Col>
            <h6>Total Documents Summarized</h6>
            <p className="fs-5 fw-semibold">{metrics.totalSummarized}</p>
          </Col>
          <Col>
            <h6>Companies Covered (This Week)</h6>
            <p className="fs-5 fw-semibold">{metrics.companiesThisWeek}</p>
          </Col>
          <Col>
            <h6>Companies Covered (This Month)</h6>
            <p className="fs-5 fw-semibold">{metrics.companiesThisMonth}</p>
          </Col>
          <Col>
            <h6>Average Sentiment</h6>
            <Badge bg={sentimentVariant[metrics.averageSentiment]} className="fs-6">
              {metrics.averageSentiment}
            </Badge>
          </Col>
        </Row>

        <h6>Breakdown by Sector</h6>
        <ListGroup variant="flush">
          {metrics.sectors.map((sector, idx) => (
            <ListGroup.Item key={idx} className="d-flex justify-content-between">
              <span>{sector.name}</span>
              <span className="fw-semibold">{sector.count}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
