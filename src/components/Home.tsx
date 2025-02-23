import Header from "@/components/Header";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <Button />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
