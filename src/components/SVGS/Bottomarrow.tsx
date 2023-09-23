import React, { CSSProperties } from 'react'

function Bottomarrow({ className }: { className: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 z-40 ${className}`}>
            <path strokeLinecap="round" className='text-gray-200' strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>

    )   
}

export default Bottomarrow