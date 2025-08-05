import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0B0F19] text-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <span className="text-sm bg-blue-900 text-blue-300 px-3 py-1 rounded-full">
          Contact
        </span>
        <h2 className="text-3xl font-bold mt-4 text-white">Get In Touch</h2>
        <p className="text-gray-400 mt-2 mb-10">
          Feel free to reach out for collaborations, opportunities, or just a chat.
        </p>

        {/* Use flex instead of grid and space-y */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex items-center bg-[#111827] p-4 rounded-lg border border-[#1F2937]">
            <FaPhoneAlt className="text-blue-400 mr-4" />
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="font-medium">+65 9116 5958</p>
            </div>
          </div>

          <div className="flex-1 flex items-center bg-[#111827] p-4 rounded-lg border border-[#1F2937]">
            <FaEnvelope className="text-blue-400 mr-4" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium">Loriensnst@gmail.com</p>
            </div>
          </div>

          <div className="flex-1 flex items-center bg-[#111827] p-4 rounded-lg border border-[#1F2937]">
            <FaMapMarkerAlt className="text-blue-400 mr-4" />
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-medium">Singapore 640747</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
