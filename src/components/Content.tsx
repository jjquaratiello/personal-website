import { FaGithub } from "react-icons/fa";

const Content: React.FC = () => {
    return (
        <div className="flex flex-col items-center h-auto animated-fade-in cursor-default x-5 max-w-2xl mx-auto">
            {/* Header Section */}
            <div className="mt-40 w-full items-center">
                <img
                    src="/me.jpg"
                    className="w-32 h-32 rounded-full"
                    alt="Profile"
                />
                <h1 className="text-2xl font-bold mt-4">Joseph Quaratiello</h1>
                <h3 className="text-md font-medium mt-2">
                    <span className="color-transition hover-cyber-blue">COMPUTER</span> &
                    <span className="color-transition hover-cyber-purple"> MECHANICAL</span> ENGINEERING STUDENT
                </h3>
                <h3 className="text-sm font-bold mt-2">jjquaratiello@gmail.com</h3>
                <div className="flex flex-row items-center rounded-xl space-x-3 mt-4 cursor-default">
                    <img src="/dartmouth.jpg" className="w-10 h-10 object-cover rounded-lg" alt="Dartmouth Logo" />
                    <h3 className="text-sm font-medium text-white">Dartmouth College</h3>
                </div>
            </div>

            {/* Passion Section */}
            <div className="w-full mt-20">
                <h2 className="text-xl font-bold mb-4 text-white">About Me</h2>
                <p className="text-md leading-relaxed text-white font-normal">
                    I am a passionate builder with a love for learning and discovery. I thrive on tackling
                    innovative engineering problems and turning complex concepts into practical solutions
                    that address real-world challenges.
                </p>
                <p className="text-md leading-relaxed text-white font-normal mt-2">
                    My ultimate goal is to contribute to humanity's exploration of space by leveraging my
                    knowledge and creativity to help push the boundaries of space exploration and innovation.
                    I believe that by expanding our reach to the stars, we unlock a future filled with infinite
                    possibilities.
                </p>
            </div>

            {/* Work Timeline */}
            <div className="w-full mt-20">
                <h2 className="text-xl font-bold mb-4 text-white">What I've Done So Far</h2>
                <div>
                    {/* Timeline Items */}
                    {[{
                        company: "Spar Markets, Inc.",
                        period: "Jan 2024 - Aug 2024",
                        title: "Software Engineer",
                        location: "Atkinson, NH",
                        tools: "TypeScript, React Native, MongoDB, Express.js, RESTful APIs, Full Stack System Design",
                        bgColor: "bg-green-600",
                        color: "text-green-600",
                    },
                    {
                        company: "Lynch Rocket Lab",
                        period: "Jun 2024 - Aug 2024",
                        title: "Research Intern",
                        location: "Hanover, NH",
                        tools: "Python, Raspberry Pi, Starlink Integration",
                        bgColor: "bg-blue-600",
                        color: "text-blue-600",
                    },
                    {
                        company: "Accu-Assembly, Inc.",
                        period: "Jun 2023 - Jan 2024",
                        title: "ML Intern",
                        location: "North Reading, MA",
                        tools: "Python, YoloV7 (Pytorch), Computer Vision",
                        bgColor: "bg-red-600",
                        color: "text-red-600",
                    },
                    {
                        company: "Code Wiz",
                        period: "Nov 2021 - May 2023",
                        title: "STEM Instructor",
                        location: "Reading, MA",
                        tools: "Python, C++, Java, Lego Robotic, Student Management",
                        bgColor: "bg-purple-600",
                        color: "text-purple-600",
                    },

                    ].map((exp, index) => (
                        <div key={index} className="flex items-start mb-10">
                            {/* Content */}
                            <div>
                                <div className="flex items-center space-x-2">
                                    <span
                                        className={`text-sm font-bold px-2 py-1 rounded-lg color-white ${exp.bgColor}`}
                                    >
                                        {exp.company}
                                    </span>
                                    <span className="text-sm text-gray-400">{exp.period}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mt-2">{exp.title}</h3>
                                <p className="text-sm text-gray-400 mt-1">📍 {exp.location}</p>
                                <p className={`text-sm mt-1 ${exp.color}`}>🔧 {exp.tools}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Projects */}
            <div className="w-full mt-10">
                <h2 className="text-xl font-bold mb-4 text-white">Some Cool Projects</h2>
                {/* Scrollable Container */}
                <div className="grid grid-cols-1 gap-6">
                    {/* Placeholder Project Data */}
                    {[
                        {
                            name: "Personal Website",
                            period: "Dec 2024 - Present",
                            type: "Personal Project",
                            description:
                                "A responsive portfolio website showcasing my projects, experience, and skills. Built using React, Tailwind CSS, and TypeScript with a focus on performance, clean design, and interactivity.",
                            tools: "React, Tailwind CSS, TypeScript",
                            video: "", // Optional: Include a link to a walkthrough video or skip
                            github: "https://github.com/your-username/personal-website", // GitHub link
                            color: "bg-green-600",
                        },
                        {
                            name: "Thrust Vector Controlled Model Rocket",
                            period: "June 2022 - Jan 2023",
                            type: "Personal Project",
                            description:
                                "Designed and 3D-printed a model rocket equipped with an active thrust vector control (TVC) system for real-time in-flight stabilization. Built the control system using the STM32 microcontroller suite and integrated a gyroscope for real-time orientation feedback. Programmed the system in C to dynamically adjust the rocket's thrust direction, improving flight stability. Performed circuit design, soldering, and full system integration, gaining hands-on experience in embedded systems & control theory.",
                            tools: "C, STM32, SolidWorks, 3D Printing, Embedded Systems",
                            video: "https://www.youtube.com/embed/FI0W-sb8auE",
                            github: "", // No GitHub link
                            color: "bg-red-600",
                        },
                    ].map((project, index) => (
                        <div
                            key={index}
                            className="relative bg-gray-800 p-6 rounded-lg -0"
                        >
                            {/* GitHub Button */}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 right-4 bg-gray-700 text-white p-2 text-sm rounded-full hover:bg-gray-600 transition"
                                >
                                    <FaGithub className="text-white w-6 h-6" />
                                </a>
                            )}

                            {/* Project Name and Type */}
                            <div className="flex items-center space-x-2">
                                <span className={`text-sm font-bold px-2 py-1 rounded-lg text-white ${project.color}`}>
                                    {project.name}
                                </span>
                                <span className="text-sm text-gray-400">{project.period}</span>
                            </div>
                            <span className="text-sm text-gray-500">{project.type}</span>

                            {/* Project Description */}
                            <p className="text-md text-gray-300 mt-4">{project.description}</p>

                            {/* Tools Used */}
                            <p className={`text-sm mt-4 text-gray-400`}>
                                <span className="font-bold text-white">Tools:</span> {project.tools}
                            </p>

                            {/* Embed YouTube Video */}
                            {project.video && (
                                <div className="mt-4">
                                    <div className="relative" style={{ paddingTop: "56.25%" }}>
                                        <iframe
                                            src={project.video}
                                            title={project.name}
                                            allowFullScreen
                                            className="absolute inset-0 w-full h-full rounded-lg border-2 border-gray-700"
                                        ></iframe>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Courses Section */}
            <div className="w-full mt-20">
                <h2 className="text-xl font-bold mb-4 text-white">Relevant Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "Software Design and Implementation in C",
                            date: "24F",
                        },
                        {
                            title: "Quantum Physics of Matter",
                            date: "24S",
                        },
                        {
                            title: "Probability",
                            date: "24S",
                        },
                        {
                            title: "Problem Solving via Object Oriented Programming",
                            date: "24W",
                        },
                        {
                            title: "Introductory Physics I Honors: Electricity and Magnetism",
                            date: "24W",
                        },
                        {
                            title: "Accelerated Multivariable Calculus",
                            date: "23F",
                        },
                        {
                            title: "Introductory Physics I Honors: Mechanics & Quantum",
                            date: "23F",
                        },
                    ].map((course, index) => (
                        <div
                            key={index}
                            className="relative bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        >
                            {/* Course Title */}
                            <div className="flex items-center space-x-2">
                                <span
                                    className={`text-sm font-bold rounded-md text-white`}
                                >
                                    {course.title}
                                </span>
                            </div>

                            {/* Course Date */}
                            <p className="text-xs text-gray-400 mt-2">
                                <span className="font-bold text-white">Date:</span> {course.date}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Content;
