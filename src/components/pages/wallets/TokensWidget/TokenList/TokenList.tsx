import React, { FunctionComponent } from 'react';

import { styled } from '@linaria/react';

import { TokenAccount } from 'api/token/TokenAccount';
import { LoaderBlock } from 'components/common/LoaderBlock';

import { TokenRow } from '../TokenRow';

const Wrapper = styled.div`
  margin: 0 10px;
`;

type Props = {
  items: TokenAccount[];
};

export const TokenList: FunctionComponent<Props> = ({ items = [] }) => {
  if (items.length === 0) {
    return <LoaderBlock />;
  }

  return (
    <Wrapper>
      {items
        .sort((a, b) => b.balance.cmp(a.balance))
        .map((item) => (
          <TokenRow key={item.address.toBase58()} token={item} />
        ))}
    </Wrapper>
  );
};
