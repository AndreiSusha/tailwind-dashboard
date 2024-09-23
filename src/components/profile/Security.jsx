import { HiOutlineLockClosed } from 'react-icons/hi2';
import CommonSection from './CommonSection';
import Switch from './Switch';
import { useState } from 'react';

const Security = () => {
  const [twoFactor, setTwoFactor] = useState(false);
  return (
    <CommonSection icon={HiOutlineLockClosed} title={'Security'}>
      <Switch
        label={'Two-Factor Authentication'}
        isOn={twoFactor}
        onSwitch={() => setTwoFactor(!twoFactor)}
      />
    </CommonSection>
  );
};

export default Security;
