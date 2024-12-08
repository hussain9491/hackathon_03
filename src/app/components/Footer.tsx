export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-between">
          {/* Address */}
          <div>
            <p className="text-sm text-gray-400 leading-6  mt-28">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div className="ml-12">
            <h3 className="text-lg font-medium text-gray-400 mb-8">Links</h3>
            <ul className="space-y-10 font-medium">
              <li>
                <a href="#" className="text-black hover:underline">Home</a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">Shop</a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline ">About</a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">Contact</a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-medium text-gray-400 mb-10">Help</h3>
            <ul className="space-y-10 font-medium">
              <li>
                <a href="#" className="text-black hover:underline">Payment Options</a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">Returns</a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">Privacy Policies</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-2">Newsletter</h3>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 p-2 border-b border-black text-sm placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="text-black font-medium text-sm  underline"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-4 text-center">
          <p className="text-sm text-gray-500">
            2022 Meubel House. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  );
}
