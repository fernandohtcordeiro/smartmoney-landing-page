import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RegisterForm from '../components/RegisterForm';
import Solutions from '../components/Solutions';
import Benefits from '../components/Benefits';
import Blog from '../components/Blog';
import ExclusiveAdvantages from "../components/ExclusiveAdvantages";
import styled from 'styled-components';
import CallToActionCards from '@/components/CallToActionCards';
import Faq from '@/components/Faq';
import Footer from '@/components/footer';


const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 40px;
  background: #0a0f1b;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>SmartMoney - O futuro do Banco Digital</title>
      </Head>
      <Header />
      <MainContainer>
        <Hero />
        <RegisterForm />
        
      </MainContainer>
      <Solutions />
      <Benefits />
      <Blog />
      <ExclusiveAdvantages />
      <CallToActionCards />
      <Faq />
      <Footer />
    </>
  );
}
