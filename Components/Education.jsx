import HeaderSection from "./HeaderSection"

function Education() {
  return (
    <div className=" mt-8 sm:mt-24 text-[13px] sm:text-sm text-[#5D5D5D]">
        <div className="w-full mb-4 px-4 sm:pl-48">
        <HeaderSection title="Education" color="#C687FE"/>
        </div>
        <p className="w-full sm:w-1/2 sm:pl-48 px-4">I hold an HND in Mechanical Engineering from Yaba College of Technology, Lagos, Nigeria. While my educational background may seem unconventional for a career in technology, it has equipped me with a unique perspective and problem-solving skills that complement my role as a Full-Stack Developer and Production Designer.</p>
        <div className="pt-6 px-4 sm:pl-48">
        <a href="KOMOLAFE__CV {SOFTWARE DEVELOPER}.docx" download className="text-sm font-semibold px-6 py-3 rounded-md shadow-lg text-white bg-[#C687FE] hover:shadow-none transition ease-in-out duration-500 animate-pulse">Download CV</a>
        
        </div>
        </div>
  )
}

export default Education