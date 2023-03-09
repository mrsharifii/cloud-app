const About = () => {
    return (
        <div name="about" className="w-full my-32">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center">
                    <h2 className="text-5xl font-bold">Trusted by developers across the world</h2>
                    <p className="text-3xl py-6 text-gray-500">Donec non dapibus enim. Duis non justo mattis, condimentum ex sed, consectetur arcu.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 px-2 text-center">
                    <div className="border py-6 rounded-xl shadow-2xl">
                        <p className="text-6xl font-bold text-indigo-600">100%</p>
                        <p className="text-gray-400 mt-2 text-xl font-semibold">Completion</p>
                    </div>
                    <div className="border py-6 rounded-xl shadow-2xl">
                        <p className="text-6xl font-bold text-indigo-600">24/7</p>
                        <p className="text-gray-400 mt-2 text-xl font-semibold">Delivery</p>
                    </div>
                    <div className="border py-6 rounded-xl shadow-2xl">
                        <p className="text-6xl font-bold text-indigo-600">100%</p>
                        <p className="text-gray-400 mt-2 text-xl font-semibold">Transactions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About