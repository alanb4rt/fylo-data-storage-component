import Card from "./components/Card";
import IconMenu from "./components/IconMenu";
import Logo from "./components/Logo";
import StorageUsage from "./components/StorageUsage";

export default function App() {
  return (
    <>
      <div className="flex items-center min-h-screen">
        <div className="w-full max-w-screen-lg mx-auto p-8">
          <div className="flex flex-col md:flex-row gap-8 md:items-end">
            <Card className="w-full md:w-fit md:min-w-96 rounded-tr-[100px] p-10">
              <Logo />
              <IconMenu />
            </Card>
            <StorageUsage />
          </div>
        </div>
      </div>
    </>
  );
}
