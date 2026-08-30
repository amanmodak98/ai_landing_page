import Roadmap from '../Components/Roadmap'
import Header from '../Components/Header'

export default function RoadmapPage() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main role="main">
        <Roadmap />
      </main>
    </div>
  )
}
