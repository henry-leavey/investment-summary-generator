import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Sidebar } from "./components/Sidebar";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { SearchFilterPanel } from './components/SearchFilterPanel';
import { RecentSummaries } from './components/RecentSummaries';
import { TopMovers } from './components/TopMovers';
import { SummaryMetrics } from './components/SummaryMetrics';
import { QuickSummaryPreview } from './components/QuickSummaryPreview';
import { Footer } from './components/Footer';

import { Container, Row, Col } from 'react-bootstrap';
import { TopBar } from './components/Topbar';

function App() {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col xs={12} md={1} className="p-0">
          <Sidebar />
        </Col>

        {/* Main Content */}
        <Col xs={12} md={10} className="p-4">
          <TopBar />
          <Row>
            <Col md={12}>
              <SummaryMetrics />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={6} className="mb-4">
              <QuickSummaryPreview />
            </Col>
            <Col md={6} className="mb-4">
              <SearchFilterPanel />
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-4">
              <RecentSummaries />
            </Col>
            <Col md={6} className="mb-4">
              <TopMovers />
            </Col>
          </Row>

        </Col>
      </Row>
    </Container>
  );
}

export default App;
