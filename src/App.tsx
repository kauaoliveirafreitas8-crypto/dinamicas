/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronDown, 
  Tent, 
  BookOpen, 
  Flame, 
  Compass, 
  FolderOpen, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Star,
  Clock,
  ArrowRight
} from 'lucide-react';

// --- Constants & Types ---
const PRIMARY_GREEN = '#2D5A27';
const LIGHT_BEIGE = '#FDFBF7';
const ACCENT_YELLOW = '#EAB308';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        id={`faq-${question.replace(/\s+/g, '-').toLowerCase()}`}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-semibold text-gray-800 group-hover:text-[#2D5A27] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAButton = ({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`bg-[#2D5A27] text-white font-extrabold py-5 px-10 rounded-2xl shadow-xl hover:bg-[#1f401a] transition-all duration-300 text-xl tracking-tight uppercase ${className}`}
    onClick={onClick}
    id="cta-button-main"
  >
    {children}
  </motion.button>
);

export default function App() {
  const [showUpsell, setShowUpsell] = useState(false);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowUpsell(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#2D5A27] selection:text-white">
      <AnimatePresence>
        {showUpsell && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[2rem] p-4 md:p-6 max-w-sm w-full text-center relative overflow-hidden shadow-[0_0_60px_-10px_rgba(45,90,39,0.6)] border-[10px] border-[#2D5A27] ring-4 ring-[#EAB308]/30"
            >
              {/* Decorative elements in popup */}
              <div className="absolute top-0 left-0 w-full h-4 bg-[#EAB308] shadow-sm" />
              
              <div className="mt-4 mb-4">
                <p className="text-xl text-gray-900 font-black leading-tight uppercase italic tracking-tighter">
                  LEVE TUDO POR MAIS <br/>
                  <span className="text-4xl text-[#2D5A27] drop-shadow-[0_2px_2px_rgba(45,90,39,0.2)] animate-pulse">R$ 3,99</span>
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#2D5A27]/10 to-white rounded-xl p-4 mb-4 text-left border-2 border-[#2D5A27]/20 shadow-inner">
                <ul className="space-y-2 text-xs text-gray-900 font-extrabold uppercase tracking-tight">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                    +250 dinâmicas escoteiras
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                    Jogos e atividades em grupos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                    Técnicas mateiras e pioneiras
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                    Histórias para fogo de conselho
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                    Atualizações mensais e acesso vitalício
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <a 
                  href="https://pay.lowify.com.br/checkout?product_id=epeeTd" 
                  className="w-full bg-[#EAB308] text-black font-black py-4 rounded-xl shadow-lg hover:bg-[#d9a607] transition-all text-lg flex items-center justify-center gap-2 active:scale-95 group uppercase"
                >
                  EU QUERO!
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="https://pay.lowify.com.br/checkout?product_id=FAsAcG"
                  className="w-full text-gray-500 font-bold hover:bg-gray-100 py-2 rounded-lg border border-gray-200 transition-all text-[10px] flex items-center justify-center cursor-pointer"
                >
                  Vou ficar com o de 10,00
                </a>
              </div>

              {/* Close button */}
              <button 
                onClick={() => setShowUpsell(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 text-[10px] font-bold"
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ⚡ Urgency Bar */}
      <div className="bg-red-600 py-2 text-center text-xs font-black tracking-widest text-white uppercase px-4">
        ⚡ Oferta válida somente hoje •
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-6 pb-12 px-6 md:px-12 bg-[#FDFBF7] overflow-hidden min-h-[90vh] flex flex-col justify-center">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#2D5A27]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-[#EAB308]/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tighter"
          >
            +250 Dinâmicas Escoteiras Para Você <span className="text-[#2D5A27]">Nunca Mais Ficar Sem Ideias</span>
          </motion.h1>
          
          {/* Illustrative Image / Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="relative max-w-4xl mx-auto mb-10 px-4"
          >
            <div className="relative z-10 drop-shadow-[0_20px_30px_rgba(45,90,39,0.15)]">
              <img 
                src="https://i.ibb.co/mrkfMyQ2/e8068454-1771-4e3c-a1df-946124e3af80.png" 
                alt="Material Digital Escoteiro" 
                className="rounded-2xl border-4 border-white shadow-xl object-contain w-full max-h-[500px] md:max-h-[700px]"
              />
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[#EAB308] text-[#422006] font-black p-4 rounded-xl shadow-lg border-2 border-white rotate-6 hidden md:block">
                <p className="text-[10px] uppercase tracking-widest leading-none">Acesso</p>
                <p className="text-lg">VITALÍCIO</p>
              </div>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-tight font-medium"
          >
            Organizadas por idade e nível da tropa para facilitar suas atividades <span className="font-bold text-[#2D5A27]">sem improviso</span>.
          </motion.p>

            <div className="flex flex-col items-center">
            <button 
                  onClick={scrollToPricing}
                  className="bg-[#2D5A27] text-white font-black py-5 px-12 rounded-2xl shadow-xl hover:bg-[#1f401a] transition-all duration-300 text-xl md:text-2xl tracking-tight uppercase flex items-center gap-3 active:scale-95 w-full md:w-auto justify-center"
                  id="cta-button-main"
                >
                    BAIXAR AGORA
                    <Zap className="w-6 h-6 fill-white" />
                </button>
                <p className="mt-4 text-xs text-gray-500 flex items-center gap-2 font-black italic">
              <CheckCircle2 className="w-4 h-4 text-[#2D5A27]" />
              ENTREGA IMEDIATA VIA E-MAIL
            </p>
          </div>
        </div>
      </section>
      
      {/* --- SEÇÃO — ESSE MATERIAL É PARA VOCÊ QUE --- */}
      <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black mb-2"
          >
            Este material foi feito para você que...
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#EAB308] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { text: "Fica sem ideias para reuniões escoteiras", icon: <Tent />, color: "bg-green-50 border-green-100" },
            { text: "Quer atividades prontas para aplicar rapidamente", icon: <Zap />, color: "bg-amber-50 border-amber-100" },
            { text: "Deseja engajar mais os jovens da tropa", icon: <Star />, color: "bg-orange-50 border-orange-100" },
            { text: "Precisa de dinâmicas organizadas por faixa etária", icon: <BookOpen />, color: "bg-emerald-50 border-emerald-100" },
            { text: "Quer evitar reuniões improvisadas e sem propósito", icon: <Clock />, color: "bg-stone-100 border-stone-200" },
            { text: "Busca tornar acampamentos memoráveis", icon: <Flame />, color: "bg-red-50 border-red-100" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`p-6 ${item.color} border shadow-sm rounded-2xl hover:shadow-md hover:bg-white hover:border-[#2D5A27] transition-all duration-300 flex items-center gap-4 group`}
            >
              <div className="p-3 bg-white rounded-xl text-[#2D5A27] shadow-sm group-hover:bg-[#2D5A27] group-hover:text-white transition-colors duration-300">
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
              </div>
              <p className="text-base font-black text-gray-800 leading-tight">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- ORGANIZAÇÃO POR CATEGORIAS --- */}
      <section className="py-12 px-6 md:px-12 bg-[#FDFBF7]/50">
        <div className="max-w-xl mx-auto flex flex-col items-center">
            <div className="flex items-center gap-4 mb-2">
                <FolderOpen className="w-10 h-10 text-[#2D5A27]" />
                <h2 className="text-3xl md:text-5xl font-black text-[#1a3816] tracking-tight">Organização por Categorias</h2>
            </div>
            <div className="w-24 h-2 bg-[#2D5A27] rounded-full mb-10" />

            <div className="w-full space-y-3">
                {[
                    { label: "Lobinhos (7-10 anos)", active: false },
                    { label: "Escoteiros (11-14 anos)", active: true },
                    { label: "Sêniores (15-17 anos)", active: false },
                    { label: "Pioneiros (18-21 anos)", active: false },
                    { label: "Quebra-gelo e Integração", active: false },
                    { label: "Atividades ao Ar Livre", active: false },
                    { label: "Técnicas Mateiras", active: false }
                ].map((cat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className={`w-full py-5 px-8 bg-white rounded-2xl shadow-sm border ${cat.active ? 'border-[#2D5A27] ring-1 ring-[#2D5A27]/20 shadow-md' : 'border-gray-100'} text-center font-black text-[#1a3816] text-xl transition-all`}
                    >
                        {cat.label}
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* --- SEÇÃO — BENEFÍCIOS --- */}
      <section className="py-12 bg-[#2D5A27] text-white px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4 italic">O Que Você Vai Receber</h2>
            <div className="w-16 h-1 bg-[#EAB308] mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-center max-w-3xl mx-auto">
            {[
              { title: "+250 Dinâmicas", desc: "Jogos testados", icon: <Tent /> },
              { title: "Organizadas", desc: "Por idade e ramo", icon: <BookOpen /> },
              { title: "Jogos Rápidos", desc: "Para reuniões", icon: <Flame /> },
              { title: "Manual Prático", desc: "Liderança aplicada", icon: <Compass /> },
              { title: "Arquivos PDF", desc: "Pronto para imprimir", icon: <FolderOpen /> },
              { title: "Acesso Digital", desc: "No seu celular", icon: <Smartphone /> },
              { title: "Vitalício", desc: "Seu para sempre", icon: <Zap /> },
              { title: "Updates", desc: "Sempre atualizado", icon: <Clock /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 p-4 rounded-2xl border border-white/10"
              >
                <div className="text-[#EAB308] mb-3 flex justify-center">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-sm md:text-base font-black mb-1 leading-tight">{item.title}</h3>
                <p className="text-white/60 text-[10px] md:text-xs font-medium uppercase tracking-tighter">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VEJA EXEMPLOS DO MATERIAL --- */}
      <section className="py-24 px-6 md:px-12 bg-white flex flex-col items-center">
        <div className="max-w-4xl text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-[#1a3816] tracking-tight mb-6"
          >
            Veja exemplos do <span className="text-[#2D5A27]">material</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Confira algumas das +250 Dinâmicas prontas que você vai receber para usar nos seus encontros
          </motion.p>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://i.ibb.co/qZh9L3D/Chat-GPT-Image-16-de-mai-de-2026-02-07-00-1.png" 
              alt="Exemplos do Material 1" 
              className="rounded-[2rem] shadow-2xl w-full object-contain border-4 border-white"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <img 
              src="https://i.ibb.co/YTfFsnkr/Chat-GPT-Image-16-de-mai-de-2026-02-22-36-1.png" 
              alt="Exemplos do Material 2" 
              className="rounded-[2rem] shadow-2xl w-full object-contain border-4 border-white"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://i.ibb.co/HLPVw4z8/Chat-GPT-Image-16-de-mai-de-2026-02-28-56-1.png" 
              alt="Exemplos do Material 3" 
              className="rounded-[2rem] shadow-2xl w-full object-contain border-4 border-white"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <img 
              src="https://i.ibb.co/WWN6nxkx/Chat-GPT-Image-16-de-mai-de-2026-02-34-38-1.png" 
              alt="Exemplos do Material 4" 
              className="rounded-[2rem] shadow-2xl w-full object-contain border-4 border-white"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <img 
              src="https://i.ibb.co/Jw4b7f44/Chat-GPT-Image-16-de-mai-de-2026-02-40-10-1.png" 
              alt="Exemplos do Material 5" 
              className="rounded-[2rem] shadow-2xl w-full object-contain border-4 border-white"
            />
          </motion.div>
        </div>
      </section>

      {/* --- DEPOIMENTOS (Moved Up) --- */}
      <section className="pt-6 pb-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 italic">Quem Já Comprou Recomenda</h2>
          <div className="space-y-4">
            {[
              { text: "As reuniões da minha tropa ficaram muito mais organizadas e dinâmicas. Os jovens amaram!", author: "Marcelo", role: "Chefe Escoteiro" },
              { text: "Economizei horas procurando atividades. O material é muito completo e fácil de usar.", author: "Fernanda", role: "Voluntária" },
              { text: "O engajamento aumentou demais. Ver os jovens participando com brilho no olho não tem preço.", author: "Ricardo", role: "Instrutor" }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-[#FDFBF7] rounded-3xl shadow-sm flex flex-col md:flex-row gap-6 items-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                  <div className="w-full h-full bg-[#2D5A27]/20 flex items-center justify-center font-black text-[#2D5A27] text-xl">
                    {t.author[0]}
                  </div>
                </div>
                <div>
                  <div className="flex text-[#EAB308] mb-2">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-lg text-gray-700 mb-4 italic leading-tight font-medium">"{t.text}"</p>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-gray-900">{t.author}</span>
                    <span className="text-[#2D5A27] font-bold text-xs bg-[#2D5A27]/10 px-2 py-0.5 rounded-full">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OFERTA --- */}
      <section id="pricing" className="py-16 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-md mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FDFBF7] rounded-[2.5rem] shadow-2xl overflow-hidden border-[8px] border-[#2D5A27] flex flex-col p-8 md:p-12 items-center text-center relative"
          >
            {/* Best Value Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2D5A27] text-white text-[10px] font-black px-6 py-2 rounded-full tracking-widest uppercase shadow-lg">
              Melhor Custo Benefício
            </div>

            <h2 className="text-gray-900 text-xl font-black tracking-tighter uppercase mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#EAB308] fill-[#EAB308]" />
              ACESSO COMPLETO
            </h2>

            {/* Illustrative Image / Mockup Moved Here */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full mb-8"
            >
              <div className="relative z-10 drop-shadow-[0_10px_20px_rgba(45,90,39,0.1)]">
                <img 
                  src="https://i.ibb.co/mrkfMyQ2/e8068454-1771-4e3c-a1df-946124e3af80.png" 
                  alt="Material Digital Escoteiro" 
                  className="rounded-xl border-2 border-white shadow-lg object-contain w-full max-h-[200px]"
                />
              </div>
            </motion.div>
            
            <p className="text-gray-400 line-through text-lg font-bold italic mb-1">DE: R$ 97,00</p>
            <div className="relative inline-block mb-10">
              <p className="text-gray-500 font-extrabold uppercase text-[10px] text-center mb-1">POR APENAS:</p>
              <div className="flex items-start justify-center gap-1 group">
                <span className="text-2xl font-black text-[#2D5A27] mt-3 group-hover:scale-110 transition-all">R$</span>
                <span className="text-7xl md:text-8xl font-black text-[#65a30d] leading-none tracking-tighter group-hover:scale-105 transition-all">10,00</span>
              </div>
              <div className="absolute -right-16 -top-6 rotate-12 hidden md:block">
                <div className="bg-[#EAB308] text-[#422006] text-[10px] font-black p-4 rounded-full shadow-lg border-2 border-white animate-bounce text-center leading-tight">
                  PAGO<br/>ÚNICO
                </div>
              </div>
            </div>

            <button
              onClick={handleCTAClick}
              className="w-full bg-[#2D5A27] text-white text-2xl font-black py-7 rounded-2xl shadow-[0_15px_30px_rgba(45,90,39,0.4)] transition-all flex items-center justify-center gap-3 hover:bg-[#1f401a] active:scale-95 group uppercase"
              id="cta-final-purchase"
            >
              SIM! QUERO BAIXAR AGORA
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="mt-10 flex flex-col gap-3 w-full text-left bg-white/50 p-4 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 text-[11px] font-black text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A27]" />
                  +250 DINÂMICAS ESCOTEIRAS!
                </div>
                <div className="flex items-center gap-2 text-[11px] font-black text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A27]" />
                  DOWNLOAD IMEDIATO (PDF)
                </div>
                <div className="flex items-center gap-2 text-[11px] font-black text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A27]" />
                  ACESSO VITALÍCIO + ATUALIZAÇÕES
                </div>
                <div className="flex items-center gap-2 text-[11px] font-black text-gray-700">
                  <ShieldCheck className="w-4 h-4 text-[#2D5A27]" />
                  COMPRA 100% SEGURA!
                </div>
                <div className="flex items-center gap-2 text-[11px] font-black text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#EAB308]" />
                  7 DIAS DE GARANTIA!
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- GARANTIA --- */}
      <section className="py-12 px-6 md:px-12 text-center max-w-4xl mx-auto mb-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-amber-50/90 p-8 md:p-14 rounded-[2.5rem] border-4 border-dashed border-[#EAB308] shadow-2xl relative"
        >
          {/* Top Stamp Badge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2D5A27] text-[#EAB308] text-xs font-black px-6 py-2.5 rounded-full uppercase tracking-wider shadow-md">
            Garantia Incondicional
          </div>

          <div className="flex justify-center mb-6 mt-2">
            <div className="w-24 h-24 bg-white rounded-full border-4 border-[#2D5A27] flex items-center justify-center shadow-xl">
              <ShieldCheck className="w-12 h-12 text-[#2D5A27]" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-950">Garantia Blindada de 7 Dias</h2>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto font-medium">
            Se você não amar o material por qualquer motivo, devolvemos <span className="text-[#2D5A27] font-black border-b-4 border-[#EAB308]">100% do seu investimento</span>. O risco é inteiramente nosso. Você entra, avalia e se não fizer sentido, recebe seu dinheiro de volta na hora!
          </p>
        </motion.div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-10 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Dúvidas Frequentes</h2>
            <div className="w-16 h-1.5 bg-[#EAB308] mx-auto rounded-full" />
          </div>
          
          <div className="space-y-1">
            {[
              { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, você receberá um link de download direto no seu e-mail cadastrado." },
              { q: "O material é digital?", a: "Sim! Você recebe arquivos digitais organizados, otimizados para leitura em dispositivos móveis e prontos para impressão." },
              { q: "Funciona para qualquer ramo?", a: "Sim, incluímos dinâmicas para Alcatéia, Tropa Escoteira, Tropa Sênior e Clã Pioneiro." },
              { q: "Posso imprimir as atividades?", a: "Sim, o material foi projetado para ser impresso em alta qualidade quando você precisar de cópias físicas para a tropa." },
              { q: "O acesso é vitalício?", a: "Com certeza. Uma vez adquirido, o material é seu para sempre, incluindo todas as atualizações futuras sem custo adicional." },
              { q: "Preciso pagar mensalidade?", a: "Não. O pagamento é único. Você paga uma vez e aproveita o material para o resto do seu tempo no voluntariado." }
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* --- RODAPÉ --- */}
      <footer className="py-16 px-6 md:px-12 bg-[#FDFBF7] border-t border-gray-100 italic">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Tent className="w-10 h-10 text-[#2D5A27]" />
          </div>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-2xl mx-auto">
            © 2026 Dinâmicas Escoteiras • Transformando Reuniões em Jornadas.<br/>
            Este material é uma produção independente e não possui vínculo oficial direto com a OMME.
          </p>
        </div>
      </footer>
    </div>
  );
}
