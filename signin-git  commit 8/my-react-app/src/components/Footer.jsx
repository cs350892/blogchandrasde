import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom' // Make sure Link is imported correctly

export default function FooterCom() {
  return (
    <>
      <Footer>
        <div>
          <div>
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-purple-500 rounded-lg">
                ChandraSDE's
              </span>
            </Link>
          </div>
          <div>
            <Footer.Title title="About" />
            <Footer.LinkGroup>
              <Footer.Link
                href="https://www.100js.projects"
                target="_blank"
              >
                100JS Projects
              </Footer.Link>
            </Footer.LinkGroup>
          </div>

          {/* New Footer Links Section */}
          <div className="mt-4">
            <Footer.Title title="More Links" />
            <Footer.LinkGroup>
              <Footer.Link
                href="https://github.com"
                target="_blank"
              >
                GitHub
              </Footer.Link>
              <Footer.Link
                href="https://sahand.example.com" // Replace with the correct link to Sahand's blog
                target="_blank"
              >
                Sahand's Blog
              </Footer.Link>
              <Footer.Link
                href="https://chandrasde.com" // Replace with the actual URL for ChandraSDE's Blog
                target="_blank"
              >
                ChandraSDE's Blog
              </Footer.Link>
              <Footer.Link
                href="https://www.reactjs.org"
                target="_blank"
              >
                ReactJS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </Footer>
    </>
  )
}
