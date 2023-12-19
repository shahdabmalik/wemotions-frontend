import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { TiArrowUnsorted } from "react-icons/ti";


export default function ListBox({ options, onOptionChange }) {
    const [selected, setSelected] = useState(options[0])

    const handleChange = (value) => {
        setSelected(value)
        onOptionChange(value.name)
    }

    return (
        <div className="w-40">
            <Listbox value={selected} onChange={handleChange}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white dark:bg-slate-900 transition-none md:transition-colors ease-linear py-1.5 px-3 text-left border dark:border-slate-800 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate font-semibold">Sorted : {selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><TiArrowUnsorted aria-hidden="true" /></span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition-all ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Listbox.Options className="absolute mt-1 w-full z-50 overflow-auto rounded-md bg-white dark:bg-slate-900 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {options.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) => `relative cursor-default select-none p-1 px-3 ${active ? 'bg-blue-500 text-white' : 'text-slate-800 dark:text-slate-200'}`}
                                    value={person}>{({ selected }) => (<span className={`block truncate ${selected ? 'font-bold' : 'font-semibold'}`}>{person.name}</span>)}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
