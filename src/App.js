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
      <Sidebar />
      <TopBar />
      <Row>
        {/* Main Content */}
        <Col xs={12} md={12} className="p-2 main-content">
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

        </Col>
      </Row>
    </Container>
  );
}

export default App;
