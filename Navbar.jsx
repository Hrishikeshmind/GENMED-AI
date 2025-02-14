export const Navbar = () => (
  <nav className="bg-white shadow-md">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary">Genmeds</h1>
      <div className="space-x-6">
        <a href="#stores" className="hover:text-primary">Find Stores</a>
        <a href="#compare" className="hover:text-primary">Compare Prices</a>
        <a href="#medicines" className="hover:text-primary">Search Medicines</a>
        <a href="#upload" className="hover:text-primary">Upload Prescription</a>
      </div>
    </div>
  </nav>
)
