import Link from "next/link"
import { Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-sky-400 mb-4">RoboSpire</h3>
            <p className="text-gray-300 mb-4 text-pretty">
              Empowering students through robotics education and FIRST LEGO League competitions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/robo.spire/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 cursor-pointer transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/schools" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">
                  Partner Schools
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.firstlegoleague.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-sky-400 transition-colors duration-200"
                >
                  FIRST LEGO League
                </a>
              </li>
              <li>
                <Link href="/join" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">
                  Mentoring
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">
                  Funding Support
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-gray-300 hover:text-sky-400 transition-colors duration-200">
                  Coach Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>officialrobospire@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>5715677755</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 RoboSpire. All rights reserved. |
            <Link href="/privacy" className="hover:text-sky-400 transition-colors duration-200 ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-sky-400 transition-colors duration-200 ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
