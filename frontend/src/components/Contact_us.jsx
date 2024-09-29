// Contact_us.jsx
import React from "react";

function Contact_us() {
  return (
    <div className="min-h-screen bg-gradient-to-r p-40">
      <h2 className="text-2xl text-soft-teal font-bold mb-6 font-['Rejouice_Headline']">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "Kush", email: "kushrank24680@gmail.com" },
          { name: "Jiyan", email: "jiyanbhalara000@gmail.com" },
          { name: "Sandra", email: "sandramierzejewski@gmail.com" },
          { name: "Mustansir", email: "mustankap@gmail.com" }, // Intentionally left blank
        ].map((contact, index) => (
          <div key={index} className="bg-soft-teal p-4 rounded text-dark-slate">
            <h3 className="font-semibold font-['Rejouice_Headline']">{contact.name}</h3>
            <p>{contact.email || "No contact available"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact_us;
