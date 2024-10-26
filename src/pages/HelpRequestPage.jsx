import React from 'react';
import { useParams } from 'react-router-dom';
import useUserData from '../store/store';

const HelpRequestPage = () => {
  const { itemId } = useParams();

  return (
    <>
      {itemId ? <div>HelpRequestPage with itemId: {itemId}</div> : <p>Page item is not present</p>}
    </>
  );
};

export default HelpRequestPage;
