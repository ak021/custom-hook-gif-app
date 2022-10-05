import Random_v1 from "./components/Random_v1";
import Tag_v1 from "./components/Tag_v1";
import Random_v2 from "./components/Random_v2";
import Tag_v2 from "./components/Tag_v2";

function App() {
  return (
    <div className="flex flex-col w-full border-opacity-50 p-4 h-full md:h-screen">
      <div className="grid h-16 card bg-base-300 rounded-box place-items-center mt-4   drop-shadow-[0_5px_5px_rgba(256,256,256,0.15)]">
        <h1 className="text-xl font-bold ">Random gif generator</h1>
      </div>

      <div className="flex flex-col md:flex-row mt-8 mb-4 flex-1 md:space-x-6 space-y-12 md:space-y-0">
        <Random_v2 />
        <Tag_v2 />
      </div>
    </div>
  );
}

export default App;
