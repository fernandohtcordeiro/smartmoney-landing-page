import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RegisterForm from '../components/RegisterForm';
import Solutions from '../components/Solutions';
import Benefits from '../components/Benefits';
import Blog from '../components/Blog';
import styled from 'styled-components';

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
    </>
  );
}
