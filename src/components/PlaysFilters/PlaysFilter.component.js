import { Disclosure } from '@headlessui/react';
import {BiChevronDown,BiChevronUp} from "react-icons/bi";

const PlaysFilter=(props)=> {
  return (
    <Disclosure>
        {({ open }) => (
        <>
            <Disclosure.Button className="py-2 flex gap-3 items-center">
                <div className={open ? "text-red-600  flex gap-3 items-center" : "text-gray-700  flex gap-3 items-center"}>
                {open ? <BiChevronUp/> : <BiChevronDown/>}
                <span>{props.title}</span>
                </div>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
                <div className="flex items-center gap-3 flex-wrap"> 
                    {props.tags.map((tag)=>(
                        <>
                            <div className="border-2 border-gray-200 p-1">
                                <span className="text-red-600">{tag}</span>
                            </div>
                        </>
                    ))

                    }
                </div>
            </Disclosure.Panel>
        </>
        )}
      
    </Disclosure>
  )
}

export default PlaysFilter;