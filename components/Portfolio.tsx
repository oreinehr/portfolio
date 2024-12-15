'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useSpring, animated } from 'react-spring'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiMongodb, 
  SiMysql, 
  SiNextdotjs, 
  SiPython 
} from 'react-icons/si';
import { OrganicShape } from './OrganicShape'

const projects = [
  { 
    id: 1, 
    title: 'Style Up', 
    description: 'Site para Estilização de Vestuário Pessoal que permite tirar fotos de roupas, remover o fundo e criar looks personalizados em um guarda-roupa virtual.',
    link: 'https://stup-gamma.vercel.app/',
    image: 'https://sjc.microlink.io/6w6E3fBeBiDNWn5bcJQEX5esJ7NjpM9eAZcTImUH8u7e4A5Gl6ynARXz4vEvGLR010YSV3ssPFJzNKzSdIbCPg.jpeg'
  },
  { 
    id: 2, 
    title: 'Casa Boa', 
    description: 'Site Imobiliário com o objetivo de facilitar a compra e venda de imóveis.',
    link: 'https://catalog-site-next-gyzvwk1mm-vitorhascs-projects.vercel.app/',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fcatalog-site-next-gyzvwk1mm-vitorhascs-projects.vercel.app%2Fpages%2Fhome&screenshot=true&embed=screenshot.url'
  },

  { id: 3, title: 'Projeto 3', description: 'Descrição do Projeto 3' },
  { id: 4, title: 'Projeto 4', description: 'Descrição do Projeto 4' },
]

const technologies = [
  { id: 1, name: 'React', icon: SiReact, color: 'text-blue-500' },
  { id: 2, name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { id: 3, name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { id: 4, name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { id: 5, name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
  { id: 6, name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-800' },
  { id: 7, name: 'Python', icon: SiPython, color: 'text-blue-400' },

  
];

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const springProps = useSpring({
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: { mass: 1, tension: 120, friction: 14 },
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 overflow-hidden">
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ scale, opacity }}
      >
        <OrganicShape className="absolute top-0 left-0 w-full h-full text-yellow-300 opacity-20" />
      </motion.div>

      <header className="relative z-10 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold text-white mb-4"
        >
          Guilherme Reinehr
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-white"
        >
          Desenvolvedor Frontend
        </motion.p>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-12">
        <animated.section style={springProps} className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Sobre Mim</h2>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 text-white">
            <p className="mb-4">
              Sou estudante de Técnico em Informática no CIMOL (Taquara), com previsão de finalização do curso técnico em 2024 e estágio de 400 horas em 2025. Durante minha formação, tive a oportunidade de trabalhar em diversos projetos de desenvolvimento web, utilizando ferramentas e frameworks modernos para criar soluções eficientes e escaláveis.
            </p>
            <p className="mb-4">
              Estou sempre em busca de novas tecnologias e melhores práticas de programação para aprimorar minhas habilidades. Minha paixão pela programação e meu compromisso com a excelência me impulsionam a enfrentar novos desafios e a crescer constantemente como desenvolvedor.
            </p>
            <p>
              Meu Trabalho de Conclusão de Curso, chamado Style Up, é um exemplo do meu empenho e criatividade. Trata-se de um site para Estilização de Vestuário Pessoal, no qual é possível tirar fotos de roupas, remover o fundo das mesmas e adicioná-las a um guarda-roupa virtual. Além disso, os usuários podem criar looks com as roupas salvas e armazená-los na aba de looks, proporcionando uma experiência única de organização e planejamento de vestuário.
            </p>
          </div>
        </animated.section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-300"
              >
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6"><a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  </a>
                </div>
              </motion.div>
            
            ))}
            
          </div>
          
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Tecnologias Utilizadas</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.0, type: 'spring', stiffness: 260, damping: 20 }}
                className="flex flex-col items-center"
              >
                <tech.icon className={`text-6xl ${tech.color}`} />
                <span className="mt-2 text-white font-semibold">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 bg-purple-900 bg-opacity-50 text-white py-8">
        <div className="container mx-auto px-4 flex justify-center space-x-6">
          <motion.a
            href="https://github.com/oreinehr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl hover:text-yellow-300 transition-colors" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl hover:text-yellow-300 transition-colors" />
          </motion.a>
          <motion.a
            href="mailto:guilhermereinehr07@gmail.com"

          >
            <FaEnvelope className="text-3xl hover:text-yellow-300 transition-colors" />
          </motion.a>
        </div>
      </footer>
    </div>
  )
}

