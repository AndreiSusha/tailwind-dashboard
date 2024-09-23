import React from 'react'
import { useState } from 'react'
import CommonSection from './CommonSection';
import Switch from './Switch';
import { HiOutlineBellAlert } from "react-icons/hi2";


const Notifications = () => {
    const [notifications, setNotifications] = useState({
		push: true,
		email: false,
		sms: false,
	});
  return (
    <CommonSection icon={HiOutlineBellAlert} title={"Notifications"}>
      <Switch
				label={"Push Notifications"}
				isOn={notifications.push}
				onSwitch={() => setNotifications({ ...notifications, push: !notifications.push })}
			/>
			<Switch
				label={"Email Notifications"}
				isOn={notifications.email}
				onSwitch={() => setNotifications({ ...notifications, email: !notifications.email })}
			/>
			<Switch
				label={"SMS Notifications"}
				isOn={notifications.sms}
				onSwitch={() => setNotifications({ ...notifications, sms: !notifications.sms })}
			/>
    </CommonSection>
  )
}

export default Notifications
