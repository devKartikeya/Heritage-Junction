import React from 'react'

type QuickFactCardProps = {
    icon: React.ReactNode
    title: string
    value: string | number
}

export default function QuickFactCard({ icon, title, value }: QuickFactCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition hover:bg-pink-100 duration-100">
            <div className="w-12 h-12 flex items-center justify-center rounded-full mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-gray-700">{value}</p>
        </div>
    )
}