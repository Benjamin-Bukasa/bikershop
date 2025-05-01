import React from 'react'
import PageWrapper from '../components/PageWrapper';
import Banner from '../components/Banner';
import ChooseUs from '../components/ChooseUs';
import OurMotos from '../components/OurMotos';


function Accueil() {
  return (
    <>
      <PageWrapper>
        <Banner/>
        <ChooseUs/>
        <OurMotos/>
      </PageWrapper>
    </>
  )
}

export default Accueil
