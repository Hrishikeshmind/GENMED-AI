export const FAQ = () => {
  const questions = [
    'What is Jana Aushadhi Kendra?',
    'How do I find the nearest store?',
    'Are generic medicines safe?',
    'How much can I save on medicines?',
  ]

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.map((question, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
              <h4 className="font-semibold">{question}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
