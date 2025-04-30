import React from 'react'
import { Truck,ShieldCheck,Wrench} from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import ChooseUsItems from '../components/ChooseUsItems';

const ChooseUs = () => {
  return (
    <>
        <PageWrapper>
        <div className="flex flex-col items-center justify-center  py-10 bg-gray-100 dark:bg-zinc-900">
            <h2 className="text-3xl md:text-5xl text-center font-bold mb-6">Pourquoi choisir <span className="bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 bg-clip-text text-transparent md:font-bold">
            Bikershop
          </span></h2>
          <div className="w-1/6 h-2 bg-red-500"></div>
          <div className="flex flex-col gap-5 px-4 py-10 md:flex-row">
            <ChooseUsItems icon={<ShieldCheck />} title="Garantie 2 ans" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. !"/>
                <ChooseUsItems icon={<Wrench />} title="Réparation rapide" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. !"/>
                <ChooseUsItems icon={<Truck />} title="Livraison rapide" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. !"/>
          </div>
        </div>
        </PageWrapper>
    </>
  )
}

export default ChooseUs