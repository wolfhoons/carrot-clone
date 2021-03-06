import type { NextPage } from 'next';
import useSWR from 'swr';
import styled from 'styled-components';
import { ProductWithCount } from 'src/pages';
// components
import ProductCard from '@components/Card/Product/ProductCard';
import Appbar from '@components/Layout/Appbar/Appbar';
import Loading from '@components/Loading/Loading';
// api
import { getUserHistory } from 'src/api/user';

const LovedContainer = styled.div`
  margin-top: 5rem;
`;

const Loved: NextPage = () => {
  const history_data = useSWR<Array<ProductWithCount>>(`/api/users/me/favs`, () => getUserHistory('favs'));

  if (history_data.error) return <div>...에러</div>;
  if (!history_data.data) return  <Loading />

  return (
    <>
      <Appbar title="관심 내역" />
      <LovedContainer>
        {history_data.data.map((v: any) => {
          return (
            <ProductCard
              key={v.product.id}
              title={v.product.name}
              price={v.product.price}
              comments={v.product.chats.length}
              hearts={v.product._count.favs}
              image={v.product.image}
              updatedAt={v.product.updatedAt}
              status={v.status}
            />
          );
        })}
      </LovedContainer>
    </>
  );
};

export default Loved;
