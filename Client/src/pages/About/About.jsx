import React from 'react';

const FeatureCard = ({ title, description , image }) => {
    return (
      <div className="rounded-lg hover:shadow-lg p-6 mx-8">
        <div className='flex items-center'>
            <img className='w-5 h-5 mr-2' src={image} alt="" />
        <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    );
  };

const About = () => {
  return (
    <div className='bg-slate-900 text-white py-20'>
    <div className="p-8 shadow-lg py-20 px-5 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-6">About ProjectPulse</h2>
      <p className="text-white text-lg mb-6 max-w-3xl">
        Welcome to our advanced project management tool designed to streamline and enhance your project management experience.
        We understand the complexities of managing multiple projects simultaneously and the challenges that come with team collaboration.
        Our tool is built with your needs in mind, empowering you to take control of your projects and achieve success.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-20">
        <FeatureCard
          title="Intuitive Dashboard"
          description="Get a bird's-eye view of all your ongoing projects and track their progress in real-time. Our user-friendly dashboard provides essential project metrics at a glance."
          image="https://img.icons8.com/?size=512&id=Qavl6FF79LJM&format=png"
        />
        <FeatureCard
          title="Task Management"
          description="Effortlessly create, assign, and prioritize tasks. Keep your team in sync with easy task assignment and real-time updates."
          image="https://img.icons8.com/?size=512&id=rnwtSv4H3pXk&format=png"
        />
        <FeatureCard
          title="Deadline Tracking"
          description="Never miss a deadline again! Set project deadlines and receive timely reminders to stay on track."
          image='https://img.icons8.com/?size=1x&id=CcnMefzl28xf&format=png'
        />
        <FeatureCard
          title="File Sharing & Collaboration"
          description="Seamlessly collaborate with team members by sharing documents, files, and ideas in a secure and centralized platform."
          image='https://img.icons8.com/?size=1x&id=MAK5Z30LYsnk&format=png'
        />
        <FeatureCard
          title="Gantt Chart"
          description="Visualize project timelines with our interactive Gantt chart. Identify dependencies, spot potential bottlenecks, and optimize your project schedules."
          image='https://img.icons8.com/?size=1x&id=l3mMnZxt120P&format=png'
        />
        <FeatureCard
          title="Resource Allocation"
          description="Efficiently allocate resources to tasks, ensuring optimal utilization of your team's skills and expertise."
          image='https://img.icons8.com/?size=1x&id=9EaG2CtHRhTZ&format=png'
        />
        <FeatureCard
          title="Project Reporting"
          description="Generate comprehensive reports to gain insights into project performance, productivity, and team efficiency."
          image='https://img.icons8.com/?size=1x&id=xUH2w4XNK0om&format=png'
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <FeatureCard
          title="Increase Productivity"
          description="Our tool streamlines project workflows, reduces manual tasks, and facilitates smoother collaboration, leading to enhanced productivity and better results."
          image='https://img.icons8.com/?size=1x&id=gB4yWNWjIVHH&format=png'
        />
        <FeatureCard
          title="Enhanced Collaboration"
          description="Foster seamless communication and collaboration among team members, breaking down silos and promoting a culture of transparency."
          image='https://img.icons8.com/?size=1x&id=11881&format=png'
        />
        <FeatureCard
          title="Data-Driven Decision Making"
          description="Leverage data-driven insights to make informed decisions, identify areas for improvement, and optimize project planning."
          image='https://img.icons8.com/?size=1x&id=EezKoqfhA0Ns&format=png'
        />
        <FeatureCard
          title="Scalable & Customizable"
          description="Whether you're managing a small team or large enterprise projects, our tool is designed to scale with your needs and can be customized to fit your specific requirements."
          image='https://img.icons8.com/?size=1x&id=8yG0VbOqB8Kn&format=png'
        />
        <FeatureCard
          title="Security & Reliability"
          description="Your data's security is our top priority. Our tool ensures data privacy and reliability, providing you with peace of mind."
          image='https://img.icons8.com/?size=512&id=GV9zJOPuCxN0&format=png'
        />
      </div>
      <div className="rounded-lg p-6 mb-6 text-white">
        <strong className="text-xl block mb-2">Get Started Today</strong>
        <p>
          Join thousands of project managers who have already elevated their project management game with our powerful tool.
          Sign up for a free trial and experience the difference firsthand. Let's embark on a journey of successful project management together!
        </p>
      </div>
    </div>

    </div>
  );
};

export default About;
