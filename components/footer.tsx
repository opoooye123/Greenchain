import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, Twitter, Github, Linkedin, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-neon-green" />
              <span className="text-lg font-bold text-white">
                Green<span className="text-neon-green">Chain</span>
              </span>
            </Link>

            <p className="text-gray-400 mb-4">
              Powering Nigeria's sustainable future through blockchain-enabled clean energy investments.
            </p>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-neon-green">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-neon-green">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-neon-green">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-neon-green transition-colors">
                  Browse Projects
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-neon-green transition-colors">
                  Investor Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-400 hover:text-neon-green transition-colors">
                  Partner Portal
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-neon-green transition-colors">
                  About GreenChain
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-neon-green transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-neon-green transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/whitepaper" className="text-gray-400 hover:text-neon-green transition-colors">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-neon-green transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on projects and opportunities.
            </p>

            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-muted border-muted focus-visible:ring-neon-green"
              />
              <Button size="icon" className="bg-neon-green text-black hover:bg-neon-green/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-muted mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GreenChain Nigeria. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-400 hover:text-neon-green text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-neon-green text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
