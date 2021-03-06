import type { AppProps } from 'next/app'
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  :root {
    --br-6: 0.6rem;
    --br-12: 1.2rem;

    --primary: #ff7e35;

    --gray-1: #e7e7e7;
    --gray-2: #ccc;
    --gray-3: #706d6c;
    --gray-4: #33190a;

    --weight-500: 500;
    --weight-600: 600;
    --weight-700: 700;
  }
  ${reset}
  * {
    box-sizing: border-box;
    font-family: Pretendard !important;
  }
  html {
    font-size: 10px;
  }
`;

const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppInnerLayout = styled.div`
  position: relative;
  max-height: 91.5rem;
  max-width: 41.2rem;
  overflow: scroll;
  overflow-x: hidden;

  padding-bottom: 6rem;

  width: 100%;
  height: 100%;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <AppLayout>
        <AppInnerLayout>
          <Component {...pageProps} />
        </AppInnerLayout>
      </AppLayout>
    </>
  )
}

export default MyApp
