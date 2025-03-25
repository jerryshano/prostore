import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        <p>&copy; {currentYear} All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer
