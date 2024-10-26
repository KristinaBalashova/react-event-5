import React from 'react';
import useUserData from '../store/store';
//import RequestsList from '../components/RequestsList/RequestsList';
import Search from '../components/Search/Search';
import RequestCard from '../components/RequestCard/RequestCard.jsx';

const CatalogPage = () => {
  const data = useUserData();

  console.log(data);

  return (
    <>
      <Search />
      <RequestCard />
      {/*<RequestsList />*/}
    </>
  );
};
export default CatalogPage;
