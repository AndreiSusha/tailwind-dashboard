import CommonSection from './CommonSection';
import { HiOutlineUser } from "react-icons/hi2";
import profileImage from '../../assets/images/sauron.png';

const Profile = () => {
  return (
    <CommonSection icon={HiOutlineUser} title={'Profile'}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          src={profileImage}
          alt="Profile image"
          className="rounded-full w-20 h-20 object-contain mr-4"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            Lord of Middle Earth
          </h3>
          <p className="text-gray-700">Sauron@middle-earth.com</p>
        </div>
      </div>
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Edit Profile
      </button>
    </CommonSection>
  );
};

export default Profile;
