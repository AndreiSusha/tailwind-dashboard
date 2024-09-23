import Header from '../components/global/Header';
import underConstructionImage from '../assets/images/under-construction.png';

const SupportPage = () => {
  return (
    <div className="flex-1 overflow-auto relative ">
      <Header title="Support" />
      <div className="flex flex-col items-center mt-8">
        <img
          src={underConstructionImage}
          alt="Under Construction"
          className="w-[400px] h-auto object-contain mb-6"
        />

        <h2 className="text-2xl font-semibold text-gray-700">
          The page is under construction
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          We're working on it! Check back later.
        </p>
      </div>
    </div>
  );
};

export default SupportPage;
