import Header from "../components/global/Header"
import Profile from "../components/profile/Profile"
import Notifications from "../components/profile/Notifications"
import Security from "../components/profile/Security"
import Deleiting from "../components/profile/Deleiting"

const ProfilePage = () => {
  return (
    <div className="flex-1 overflow-auto relative ">
      <Header title="Profile" />
      <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
        <Profile />
				<Notifications />
				<Security />
				<Deleiting />
      </main>
      
    </div>
  )
}

export default ProfilePage
