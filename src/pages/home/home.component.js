import React from 'react';
import styled from 'styled-components';
import AlertBox from '../../common/components/alert-box';
import InputText from '../../common/components/input-text';
import Button from '../../common/components/button';
import RSSContent from './components/rss-content';
import Pagination from '../../common/components/pagination';
import Loader from '../../common/components/loader';

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const RSSWrapper = styled(Row)`
  align-self: center;
  width: 50%;
`;

const FormWrapper = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  margin-bottom: 20px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 20px;
  justify-content: center;
`;

const HomeComponent = ({
  state,
  items,
  pages,
  handleCloseError,
  handleChangePage,
  handleClickFetch,
  handleChangeURL,
}) =>  {
  const { url, currentPage,  hasError, isLoading } = state;
  
  return (
  <Row>
    <FormWrapper>
      <InputText
        placeholder="Paste here the RSS link"
        value={url}
        onChange={handleChangeURL}
        style={{ width: 400 }}
      />
      <Button onClick={handleClickFetch}>Fetch</Button>
    </FormWrapper>
    {hasError && (
      <AlertBox handleClose={handleCloseError} type="error">
        Error getting rss content
      </AlertBox>
    )}
    {isLoading && (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    )}
    <RSSWrapper>
      <RSSContent items={items} />
      <Pagination
        pages={pages}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
      />
    </RSSWrapper>
  </Row>
);
    }

export default HomeComponent;
