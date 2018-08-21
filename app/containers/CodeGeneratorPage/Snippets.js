import React from 'react';
import { Row, Col } from 'antd';

const Snippets = ({ ticketNumber, branchType, prComment, resolve }) => {
  const pullRequestComment = resolve ? `PS-${ticketNumber} #resolve ${prComment}` : `PS-${ticketNumber} ${prComment}`
  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <strong>Create new Branch</strong>
          <br />
          <code>git checkout -b {branchType}/ps-{ticketNumber}</code>
        </Col>
        <Col span={12}>
          <strong>Set Upstream</strong>
          <br />
          <code>git push --set-upstream origin {branchType}/ps-{ticketNumber}</code>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <strong>PR Comment</strong>
          <br />
          <code>{pullRequestComment}</code>
        </Col>
      </Row>
    </div>
  );
}

export default Snippets;
