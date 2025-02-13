import { PostCard } from "./components/PostCard"
const App = () => {

  return (
    <main className="w-full h-screen p-2 bg-gradient-to-r from-[#0f172a]  to-[#334155]">
      <h2 className="text-center text-[#f1f1f1] text-2xl font-bold">My Tutor App</h2>
      <PostCard />
    </main>
  )
}

export default App
