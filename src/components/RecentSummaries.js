import React from 'react';
import { Card, Table, Badge } from 'react-bootstrap';

const getBadgeVariant = (rating) => {
  switch (rating.toLowerCase()) {
    case 'positive':
      return 'success';
    case 'neutral':
      return 'secondary';
    case 'negative':
      return 'danger';
    default:
      return 'light';
  }
};

const summaries = [
  {
    id: 1,
    company: 'Tesla Inc.',
    reportType: 'Earnings Call',
    rating: 'Positive',
    timestamp: 'Aug 6, 2025, 4:32 PM',
  },
  {
    id: 2,
    company: 'Amazon.com',
    reportType: '10-K',
    rating: 'Neutral',
    timestamp: 'Aug 5, 2025, 1:15 PM',
  },
  {
    id: 3,
    company: 'Meta Platforms',
    reportType: '10-Q',
    rating: 'Negative',
    timestamp: 'Aug 4, 2025, 10:00 AM',
  },
];

export const RecentSummaries = () => {
  const handleRowClick = (id) => {
    alert(`Open full summary for ID: ${id}`);
    // You can navigate or show modal instead
  };

  return (
    <Card className="shadow-sm rounded mb-4">
      <Card.Body>
        <Card.Title className="mb-3">Recent Investment Summaries</Card.Title>
        <Table hover responsive className="mb-0">
          <thead>
            <tr>
              <th>Company</th>
              <th>Report Type</th>
              <th>Summary Rating</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {summaries.map((summary) => (
              <tr key={summary.id} onClick={() => handleRowClick(summary.id)} className="clickable-row">
                <td>{summary.company}</td>
                <td>{summary.reportType}</td>
                <td>
                  <Badge bg={getBadgeVariant(summary.rating)}>
                    {summary.rating}
                  </Badge>
                </td>
                <td>{summary.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
