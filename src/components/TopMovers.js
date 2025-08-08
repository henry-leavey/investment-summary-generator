import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { ArrowUpRight, ArrowDownRight } from 'react-bootstrap-icons';

const topMovers = [
  {
    id: 1,
    direction: 'up',
    company: 'Tesla',
    summary: 'Strong revenue growth, bullish outlook',
  },
  {
    id: 2,
    direction: 'down',
    company: 'Meta',
    summary: 'Missed EPS, cautious forward guidance',
  },
  {
    id: 3,
    direction: 'up',
    company: 'Nvidia',
    summary: 'Record GPU sales driving bullish sentiment',
  },
];

export const TopMovers = () => {
  return (
    <Card className="shadow-sm rounded mb-4">
      <Card.Body>
        <Card.Title>Top Movers / Highlights</Card.Title>
        <ListGroup variant="flush">
          {topMovers.map(({ id, direction, company, summary }) => (
            <ListGroup.Item key={id} className="d-flex align-items-start gap-2">
              <span className="fs-4">
                {direction === 'up' ? (
                  <ArrowUpRight color="green" />
                ) : (
                  <ArrowDownRight color="red" />
                )}
              </span>
              <div>
                <strong>{company}</strong> — <span className="text-muted">{summary}</span>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
