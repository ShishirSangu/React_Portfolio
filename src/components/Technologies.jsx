import { RiReactjsLine } from "react-icons/ri"
import { FaPython, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import { SiDjango, SiFastapi, SiOpenai, SiTypescript, SiCelery } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion"

const inconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
})

const TECHNOLOGIES = [
    { Icon: FaPython, color: "text-blue-500", duration: 2.5, name: "Python" },
    { Icon: SiDjango, color: "text-green-700", duration: 3, name: "Django" },
    { Icon: SiFastapi, color: "text-teal-400", duration: 5, name: "FastAPI" },
    { Icon: BiLogoPostgresql, color: "text-sky-500", duration: 2, name: "PostgreSQL" },
    { Icon: RiReactjsLine, color: "text-cyan-400", duration: 6, name: "React" },
    { Icon: SiTypescript, color: "text-blue-400", duration: 4, name: "TypeScript" },
    { Icon: SiOpenai, color: "text-neutral-200", duration: 3.5, name: "OpenAI" },
    { Icon: SiCelery, color: "text-lime-500", duration: 4.5, name: "Celery" },
    { Icon: FaDocker, color: "text-blue-300", duration: 5.5, name: "Docker" },
    { Icon: FaAws, color: "text-orange-400", duration: 3.2, name: "AWS" },
    { Icon: FaGitAlt, color: "text-orange-600", duration: 4.2, name: "Git" },
]

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial= {{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial= {{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
            {TECHNOLOGIES.map(({ Icon, color, duration, name }) => (
                <motion.div
                key={name}
                variants={inconVariants(duration)}
                initial="initial"
                animate="animate"
                title={name}
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <Icon className={`text-7xl ${color}`} />
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default Technologies
