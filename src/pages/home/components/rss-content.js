import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Content = styled(Row)`
  margin-bottom: 20px;
`;

const Title = styled(Content)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DateText = styled.span`
  color: grey;
  font-size: 12pt;
`;

const RSSContent = ({ items }) => (
  <Content>
    {items.map(({ title, link, pubDate, description }) => (
      <Content key={link}>
        <Title>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </Title>
        <Row>{description}</Row>
        <Row>
          <DateText>{pubDate}</DateText>
        </Row>
      </Content>
    ))}
  </Content>
);

export default RSSContent;
