import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="bg-slate-800 text-white py-5 px-5">
      <div className="max-w-2xl my-10">
        <h1 className="text-2xl font-semibold text-left my-2">
          What is the ProjectPulse?
        </h1>
        <p className="text-sm">
          A ProjectPulse tool is a web application that facilitates project
          planning, collaboration, and tracking for teams or individuals working
          on various projects.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-slate-900 rounded-lg p-5 hover:shadow-sm hover:shadow-black">
            <h2 className="text-xl font-semibold mb-2">Discover</h2>
            <p>
              Browse through our extensive catalog of books and discover new
              authors, genres, and hidden gems.
            </p>
          </div>
          <div className="bg-slate-900 rounded-lg p-5 hover:shadow-sm hover:shadow-black">
            <h2 className="text-xl font-semibold mb-2">Borrow</h2>
            <p>
              Take advantage of our borrowing system to easily check out books
              and keep track of your reading list.
            </p>
          </div>
          <div className="bg-slate-900 rounded-lg p-5 hover:shadow-sm hover:shadow-black">
            <h2 className="text-xl font-semibold mb-2">Manage</h2>
            <p>
              Organize your borrowed books, set reminders for due dates, and
              easily renew or return items.
            </p>
          </div>
          <div className="bg-slate-900 rounded-lg p-5 hover:shadow-sm hover:shadow-black">
            <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
            <p>
              Receive personalized book recommendations based on your reading
              preferences and interests.
            </p>
          </div>
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <Link to="/about" className="border p-2 rounded hover:border-gray-400 text-xs">Learn more</Link>
      </div>
    </div>
  );
}

export default Intro;
