import ClassDetailsCard from '../components/ClassDetailsCard'
import Navbar from '../components/Navbar'

function ClassDetails() {
  return (
    <div>
      <Navbar />
      <div className="p-10 flex justify-center w-full">
        <ClassDetailsCard />
      </div>
    </div>
  )
}

export default ClassDetails