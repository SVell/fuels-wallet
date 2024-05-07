import { useAccount, useWallet } from '@fuels/react';
import { bn } from 'fuels';
import { useState } from 'react';

import { depositHalf } from '../contract_interactions';
import { getBaseAssetId } from '../utils';

export const DepositHalfEthCard = () => {
  const [amount, setAmount] = useState<string>('');
  const { account } = useAccount();
  const wallet = useWallet(account);

  return (
    <div>
      <p>Deposit Half Eth</p>
      <div aria-label="Deposit half eth card">
        <input
          onChange={(event) => {
            setAmount(event.target.value);
          }}
          value={amount}
        />
        <button
          type="button"
          onClick={async () => {
            if (wallet.wallet && amount) {
              await depositHalf({
                wallet: wallet.wallet,
                amount: bn.parseUnits(amount),
                assetId: getBaseAssetId(),
              });
            }
          }}
        >
          Deposit Half ETH
        </button>
      </div>
    </div>
  );
};