import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const AppbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 5rem;
  max-height: 5rem;
  z-index: 100;

  font-size: 1.4rem;
  h3 {
    font-size: 2rem;
    line-height: 2.8rem;

    font-weight: 600;

    color: var(--gray-4);
  }
`;

interface InnerWrapStyle {
  width: number;
}

const AppbarInnerWrap = styled.div<InnerWrapStyle>`
  position: fixed;
  padding: 1rem 2rem;
  min-height: 5rem;
  width: ${({ width }) => width && `${width}px`};
  border-bottom: 1px solid var(--gray-2);
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div:last-child {
    color: var(--primary);
  }
  `;

const AppbarTitle = styled.div`
  display: flex;
  align-items: ceter;
`;

interface AppbarProps {
  title?: string;
  onClick?: () => void;
  onClickTitle?: string;
  backButtonDisable?: boolean;
}

const Appbar = ({ backButtonDisable, title, onClick, onClickTitle }: AppbarProps) => {
  // HACK: 웹에서 모바일 처럼 보이기 위한 처리.
  const router = useRouter();
  const ref = useRef<HTMLHeadingElement>(null);
  const [parent_width, set_parent_width] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    set_parent_width(ref.current.offsetWidth);
  }, []);

  const _onClick = () => {
    if (!onClick) return;
    onClick();
  };

  const isFilterRouter = () => {
    if (router.pathname === '/') return false;
    else return true;
  };

  return (
    <AppbarContainer ref={ref}>
      <AppbarInnerWrap width={parent_width}>
        <AppbarTitle>
          {!backButtonDisable && isFilterRouter() ? (
            <div onClick={() => router.back()}>
              <ArrowBackIosIcon style={{ fontSize: '2rem' }} />
            </div>
          ) : (
            <div />
          )}
          {title && <h3>{title}</h3>}
        </AppbarTitle>
        <div onClick={_onClick}>{onClickTitle}</div>
      </AppbarInnerWrap>
    </AppbarContainer>
  );
};

export default Appbar;
