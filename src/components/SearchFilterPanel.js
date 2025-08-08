import React, { useState } from 'react';
import {
  Card,
  Form,
  Row,
  Col,
  Button,
  InputGroup
} from 'react-bootstrap';

export const SearchFilterPanel = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    query: '',
    documentType: '',
    sentiment: '',
    startDate: '',
    endDate: '',
    sector: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(filters);
    console.log('Searching with filters:', filters);
  };

  return (
    <Card className="shadow-sm rounded mb-4">
      <Card.Body>
        <Card.Title>Search & Filter</Card.Title>
        <Form onSubmit={handleSearch}>
          <Row className="mb-3">
            <Col md={6}>
              <InputGroup>
                <InputGroup.Text>🔍</InputGroup.Text>
                <Form.Control
                  type="text"
                  name="query"
                  placeholder="Search by company name or ticker"
                  value={filters.query}
                  onChange={handleChange}
                />
              </InputGroup>
            </Col>

            <Col md={3}>
              <Form.Select
                name="documentType"
                value={filters.documentType}
                onChange={handleChange}
              >
                <option value="">All Document Types</option>
                <option value="10-K">10-K</option>
                <option value="Earnings Call">Earnings Call</option>
              </Form.Select>
            </Col>

            <Col md={3}>
              <Form.Select
                name="sentiment"
                value={filters.sentiment}
                onChange={handleChange}
              >
                <option value="">All Sentiments</option>
                <option value="Positive">Positive</option>
                <option value="Neutral">Neutral</option>
                <option value="Negative">Negative</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={3}>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={filters.startDate}
                onChange={handleChange}
              />
            </Col>
            <Col md={3}>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={filters.endDate}
                onChange={handleChange}
              />
            </Col>
            <Col md={4}>
              <Form.Label>Industry Sector</Form.Label>
              <Form.Select
                name="sector"
                value={filters.sector}
                onChange={handleChange}
              >
                <option value="">All Sectors</option>
                <option value="Technology">Technology</option>
                <option value="Financials">Financials</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Energy">Energy</option>
                <option value="Consumer Goods">Consumer Goods</option>
              </Form.Select>
            </Col>
            <Col md={2} className="d-flex align-items-end">
              <Button type="submit" variant="primary" className="w-100">
                Apply
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};
