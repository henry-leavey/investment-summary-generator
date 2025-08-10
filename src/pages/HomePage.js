import { Row, Col } from 'react-bootstrap';
import { SearchFilterPanel } from '../components/SearchFilterPanel';
import { RecentSummaries } from '../components/RecentSummaries';
import { TopMovers } from '../components/TopMovers';
import { SummaryMetrics } from '../components/SummaryMetrics';
import { QuickSummaryPreview } from '../components/QuickSummaryPreview';

export const HomePage = () => {
  return (
    <>
      <Row>
        <Col md={12}>
          <SummaryMetrics />
        </Col>
      </Row>

      <Row className="mt-1">
        <Col md={6} className="mb-1">
          <QuickSummaryPreview />
        </Col>
        <Col md={6} className="mb-1">
          <SearchFilterPanel />
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-1">
          <RecentSummaries />
        </Col>
        <Col md={6} className="mb-1">
          <TopMovers />
        </Col>
      </Row>
    </>
  );
};
