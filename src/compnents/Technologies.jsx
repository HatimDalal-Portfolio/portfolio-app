import { RiReactjsLine } from "react-icons/ri"
import { DiRedis } from "react-icons/di"
import { DiMsqlServer } from "react-icons/di"
import { SiSpringboot } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa6"

export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-6xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-6xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiRedis className="text-6xl text-red-700"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMsqlServer className="text-6xl text-gray-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4"> 
                <SiSpringboot className="text-6xl text-green-700"/>
            </div>
        </div>
    </div>
)
}
