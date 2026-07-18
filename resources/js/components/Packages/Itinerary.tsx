import React from 'react'

type Itinerary = {
    id: number
    package_id: number
    day_number: number
    title: string
    time: string   // activity title (e.g. "Breakfast", "Visit Ram Janmabhoomi")
    description: string // supporting statement
    sort_order: number
}

export default function Itinerary({ itineraries, starting_city, ending_city }: { itineraries: Itinerary[], starting_city: string, ending_city: string }) {
    // Group activities by day_number
    const grouped = itineraries.reduce((acc: Record<number, Itinerary[]>, item) => {
        if (!acc[item.day_number]) acc[item.day_number] = []
        acc[item.day_number].push(item)
        return acc
    }, {})

    const days = Object.keys(grouped).sort((a, b) => Number(a) - Number(b))

    return (
        <section>
            <h2 className="text-3xl font-bold text-indigo-700 mb-8">4. Itinerary</h2>
            <div className="space-y-12">
                {days.map((day) => {
                    const activities = grouped[Number(day)].sort((a, b) => a.sort_order - b.sort_order)
                    return (
                        <div key={day} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="bg-purple-600 text-white px-6 py-3">
                                <h3 className="text-xl font-semibold">Day {day}</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Time</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Details</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Particulars</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {activities.map((act) => (
                                            <tr key={act.id} className="hover:bg-gray-200">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 ">{act.time}</td>
                                                <td className="px-6 py-4 text-sm text-gray-700">{act.title}</td>
                                                <td className="px-6 py-4 text-sm text-gray-700">{act.description}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}