import CalendlyWidget from '@/components/setup-meeting/CalendlyWidget'

export default function SetupMeeting() {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                        Schedule a Call
                    </h1>
                    <CalendlyWidget />
                </div>
            </div>
        </div>
    )
}