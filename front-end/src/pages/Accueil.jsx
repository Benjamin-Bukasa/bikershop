import React from 'react'
import PageWrapper from '../components/PageWrapper';
import Banner from '../components/Banner';
import ChooseUs from '../components/ChooseUs';
// import LogoIcons from '../components/LogoIcons';

function Accueil() {
  return (
    <>
      <PageWrapper>
        <Banner/>
        <ChooseUs/>
      </PageWrapper>
    </>
  )
}

export default Accueil
