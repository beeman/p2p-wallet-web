import React, { FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { styled } from '@linaria/react';
import classNames from 'classnames';

import { DEFAULT_SLIPPAGE } from 'api/pool/Pool';
import { Button, Icon, Input } from 'components/ui';
import { updateTokenPairState } from 'store/slices/tokenPair/TokenPairSlice';
import { tokenPairSelector } from 'store/slices/tokenPair/utils/tokenPair';

const Wrapper = styled.div`
  position: relative;
`;

const ActionIcon = styled(Icon)`
  width: 32px;
  height: 32px;

  color: #a3a5ba;
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;

  background: #f6f6f8;
  border-radius: 12px;

  cursor: pointer;

  &:hover {
    background: #eff3ff;

    ${ActionIcon} {
      color: #5887ff;
    }
  }
`;

const SettingsWrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;

  min-width: 340px;
  margin-top: 8px;
  padding: 20px 16px;

  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.1);
`;

const Description = styled.div`
  color: #a3a5ba;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
`;

const OptionsWrapper = styled.div`
  display: flex;
  margin-top: 20px;

  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

const CustomButton = styled(Button)`
  width: 36px;
  padding: 0;
`;

const PenIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`;

const OptionButton = styled(Button)`
  min-width: 52px;
  padding: 8px;

  border: 1px solid transparent;

  &.active {
    color: #000;

    border-color: rgba(0, 0, 0, 0.5);
  }
`;

const CustomWrapper = styled.div`
  margin-top: 20px;
`;

const CustomLabel = styled.label`
  display: flex;
  margin-bottom: 8px;

  color: #000;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 20px;

  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

export const SettingsAction: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const [isCustomShow, setIsCustomShow] = useState(false);
  const { slippage } = useSelector(tokenPairSelector);
  const [nextSlippage, setNextSlippage] = useState(String(slippage || DEFAULT_SLIPPAGE));

  const handleToggleShow = () => {
    setIsShow((state) => !state);
  };

  const handleToggleCustomShow = () => {
    setIsCustomShow((state) => !state);
  };

  const handeDoneClick = () => {
    dispatch(
      updateTokenPairState({
        slippage: Number(nextSlippage),
      }),
    );
    setIsShow(false);
  };

  const handleCloseClick = () => {
    setIsShow(false);
  };

  const handleSlippageChange = (newSlippage: string) => {
    let cleanSlippage = newSlippage.replace(/,/g, '.'); // , to .

    // // ability to enter dot
    if (cleanSlippage === '.') {
      cleanSlippage = '0.';
    } else {
      cleanSlippage = cleanSlippage
        .replace(/(\D*)(\d*(\.\d{0,4})?)(.*)/, '$2')
        .replace(/^0(\d+)/, '$1');
    }

    setNextSlippage(cleanSlippage);
  };

  const isDisabled = Number.parseFloat(nextSlippage) > 100;

  return (
    <Wrapper>
      <ActionWrapper onClick={handleToggleShow}>
        <ActionIcon name="settings" />
      </ActionWrapper>
      {isShow ? (
        <SettingsWrapper>
          <Description>
            Slippage refers to the difference between the expected price of a trade and the price at
            which the trade is executed. Slippage can occur at any time but is most prevalent during
            periods of higher volatility when market orders are used.
          </Description>
          <OptionsWrapper>
            {['0.1', '0.5', '1', '5'].map((value) => (
              <OptionButton
                key={value}
                lightGray
                small
                className={classNames({ active: nextSlippage === value })}
                onClick={() => handleSlippageChange(value)}>
                {value}%
              </OptionButton>
            ))}
            <CustomButton hollow small onClick={handleToggleCustomShow}>
              <PenIcon name="pen" />
            </CustomButton>
          </OptionsWrapper>
          {isCustomShow ? (
            <CustomWrapper>
              <CustomLabel htmlFor="slippage">Custom</CustomLabel>
              <Input
                id="slippage"
                value={nextSlippage}
                suffix="%"
                onChange={handleSlippageChange}
                showClear
              />
            </CustomWrapper>
          ) : undefined}
          <ButtonsWrapper>
            <Button primary medium disabled={isDisabled} onClick={handeDoneClick}>
              Done
            </Button>
            <Button lightGray medium onClick={handleCloseClick}>
              Cancel
            </Button>
          </ButtonsWrapper>
        </SettingsWrapper>
      ) : undefined}
    </Wrapper>
  );
};
