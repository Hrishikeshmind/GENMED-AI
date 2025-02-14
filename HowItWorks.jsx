export const HowItWorks = () => {
  const steps = [
    { title: 'Upload Prescription', desc: 'Simply upload your prescription or search for medicines' },
    { title: 'Compare Prices', desc: 'Compare prices across different stores and find the best deals' },
    { title: 'Find Nearby Stores', desc: 'Locate the nearest Jana Aushadhi Kendra with real-time' },
    { title: 'Save Time & Money', desc: 'Get your medicines at the most affordable prices, hassle-free' },
  ]

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-4">
              <div className="bg-primary text-white w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
                {index + 1}
              </div>
              <h4 className="font-bold mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
