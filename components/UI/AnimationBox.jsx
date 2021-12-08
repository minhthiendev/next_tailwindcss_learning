import React from 'react'

export default function AnimationBox() {
    return (
        <div>
            <div>
                <div
                    className="bg-green-500 w-32 h-32 cursor-pointer animate-bigAndSmall  hover:rotate-[360deg] hover:translate-x-full duration-2000 hover:ease-in hover:rounded-full "
                >
                    1
                </div>
                <div className="bg-green-200 w-32 h-32 cursor-pointer  animation-bigAndSmall mt-2  animate-scaleX">
                    2
                </div>
            </div>
        </div>
    )
}
