export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10" id="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Flow<span className="text-indigo-600">tron</span>
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Automating business processes with AI-driven systems, CRM
              integrations, and web solutions.
            </p>
          </div>

          {/* Links */}

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Get in Touch</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Email: <a href="mailto:hello@flowtron.io" className="hover:text-indigo-600">rc.saimukesh@gmail.com</a></li>
              <li>Location: Chennai, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Flowtron. All rights reserved.</p>
          <div className="mt-3 sm:mt-0 flex space-x-4">
            <a href="#footer" className="hover:text-indigo-600">Privacy Policy</a>
            <a href="#footer" className="hover:text-indigo-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
