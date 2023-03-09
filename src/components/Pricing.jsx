import React from "react";

import {CheckIcon} from '@heroicons/react/solid'

const Pricing = () => {
    return (
        <div name="pricing" className="w-full text-white my-24">
            <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

            <div className="max-w-[1240px] mx-auto py-12">
                <div className="text-center py-8 text-slate-300">
                    <h2 className="text-3xl uppercase">Pricing</h2>
                    <h3 className="text-5xl font-bold text-white py-8">The right price for your research.</h3>
                    <p className="text-3xl">Aenean nisl eros, venenatis id est nec, aliquam lobortis elit.</p>
                </div>

                <div className="grid md:grid-cols-2">
                    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                        <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Standard</span>
                        <div>
                            <p className="text-6xl font-bold flex py-4">$49<span className="text-xl text-slate-500 flex flex-col justify-end">/month</span></p>
                        </div>
                        <p className="text-2xl py-8 text-slate-500">sed hendrerit elit.</p>
                        <div className="text-2xl">
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Morbi finibus felis quis felis euismod</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Donec laoreet dolor nec dui posuere</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Proin sed nulla at lorem semper</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Nam sit amet dui quis augue malesuada</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Ut rhoncus nisl sit amet tortor ornare</p>
                            <button className="w-full py-4 my-4">Get Started</button>
                        </div>
                    </div>
                    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                        <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Premium</span>
                        <div>
                            <p className="text-6xl font-bold flex py-4">$99<span className="text-xl text-slate-500 flex flex-col justify-end">/month</span></p>
                        </div>
                        <p className="text-2xl py-8 text-slate-500">Integer ex ipsum.</p>
                        <div className="text-2xl">
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Aenean ac orci in ligula pharetra mattis</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Nulla mattis eros eget lacus aliquam</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Sed eu lorem vel enim ultrices facilisis</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Sed rhoncus libero at sollicitudin</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600" />Aliquam sit amet dolor at turpis</p>
                            <button className="w-full py-4 my-4">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing