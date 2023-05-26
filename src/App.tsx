function App() {

  return (
    <div className="flex flex-col w-screen h-screen">
      <header className=" flex justify-between px-44 basis-1/12 bg-black text-white text-md p-4">
        <div className="border-2 border-emerald-200 w-6 h-24  bg-emerald-300">
          <div className="w-6 h-12 bg-black">
          </div>
        </div>
        <div className="border-2 border-rose-200 w-6 h-24 bg-rose-300">
          <div className="w-6 h-12 bg-black">
          </div>
        </div>
        <div className="border-2 border-yellow-200 w-6 h-24  bg-yellow-300">
          <div className="w-6 h-12 bg-black">
          </div>
        </div>
        <div className="border-2 border-violet-200 w-6 h-24  bg-violet-300">
          <div className="w-6 h-12 bg-black">
          </div>
        </div>
      </header>
      <main className="flex justify-center items-center gap-12 basis-11/12 bg-black text-md text-white p-4">
        <button className="border-2 border-rose-600 px-2 text-rose-300 h-8">
          decline
        </button>
        <div className="flex flex-col items-center gap-2 flex-row w-64 h-96 border-2 border-white">
          <p className="text-yellow-200 w-full p-4 text-center">Character</p>
          <img className="w-36" src="https://via.placeholder.com/64" alt="character" />
          <p className="italic text-sm text-center text-yellow-50">
            <span className="text-yellow-200 text-2xl">"</span>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            <span className="text-yellow-200 text-2xl m-b-2">"</span>
          </p>
        </div>
        <button className="border-2 border-emerald-600 px-2 text-emerald-300 h-8 ">
          decline
        </button>
      </main>
    </div>
  )
}

export default App
